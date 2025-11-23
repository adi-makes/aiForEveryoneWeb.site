import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Message = { role: "user" | "assistant"; content: string };

export const DemoSection = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const streamChat = async ({ messages, onDelta, onDone }: {
    messages: Message[];
    onDelta: (deltaText: string) => void;
    onDone: () => void;
  }) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
    
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });

    if (!resp.ok || !resp.body) {
      if (resp.status === 429 || resp.status === 402) {
        const error = await resp.json();
        throw new Error(error.error);
      }
      throw new Error("Failed to start stream");
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") {
          streamDone = true;
          break;
        }

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }

    if (textBuffer.trim()) {
      for (let raw of textBuffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (raw.startsWith(":") || raw.trim() === "") continue;
        if (!raw.startsWith("data: ")) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch { /* ignore partial leftovers */ }
      }
    }

    onDone();
  };

  const handleSubmit = async () => {
    if (!question.trim()) return;

    const userMsg: Message = { role: "user", content: question };
    setMessages(prev => [...prev, userMsg]);
    setQuestion('');
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (nextChunk: string) => {
      assistantSoFar += nextChunk;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: (chunk) => upsertAssistant(chunk),
        onDone: () => setIsLoading(false),
      });
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      toast({
        title: "Error",
        description: e instanceof Error ? e.message : "Failed to get response",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-teal/5 via-kerala-blue/5 to-kerala-green/5" />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--kerala-teal)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--kerala-blue)) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('demo.title')}
          </h2>
          <p className={`text-xl text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('demo.subtitle')}
          </p>
        </motion.div>

        <Card className="p-8 gradient-card border-primary/20 backdrop-blur-sm">
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`p-4 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-primary/10 ml-8'
                      : 'bg-muted mr-8'
                  }`}
                >
                  <p className={`text-sm font-semibold mb-1 ${msg.role === 'user' ? 'text-primary' : 'text-foreground'}`}>
                    {msg.role === 'user' ? 'You' : 'AI Assistant'}
                  </p>
                  <p className={`text-foreground whitespace-pre-wrap ${language === 'ml' && msg.content.match(/[\u0D00-\u0D7F]/) ? 'malayalam-text' : ''}`}>
                    {msg.content}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="space-y-4">
              <Textarea
                placeholder={t('demo.placeholder')}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                className={`min-h-24 ${language === 'ml' ? 'malayalam-text' : ''}`}
                disabled={isLoading}
              />

              <Button
                onClick={handleSubmit}
                disabled={isLoading || !question.trim()}
                className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span className={language === 'ml' ? 'malayalam-text' : ''}>Processing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    <span className={language === 'ml' ? 'malayalam-text' : ''}>{t('demo.submit')}</span>
                  </>
                )}
              </Button>
            </div>

            {messages.length === 0 && (
              <div className="pt-4 border-t border-border">
                <p className={`text-sm text-muted-foreground mb-2 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                  {t('demo.examples')}
                </p>
                <ul className={`text-sm text-muted-foreground space-y-1 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                  <li>• {t('demo.ex1')}</li>
                  <li>• {t('demo.ex2')}</li>
                  <li>• {t('demo.ex3')}</li>
                </ul>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
