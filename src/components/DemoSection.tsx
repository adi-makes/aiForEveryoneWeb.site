import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles } from 'lucide-react';

export const DemoSection = () => {
  const { language, t } = useLanguage();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const responses: Record<string, string> = {
    'crops palakkad': 'Based on the current season in Palakkad, consider planting vegetables like beans, cucumber, and bitter gourd. The monsoon climate is ideal for rice cultivation. For commercial crops, consider tapioca and banana.',
    'robotics malayalam': 'റോബോട്ടിക്സ് എന്നാൽ യന്ത്രങ്ങളെ സ്വയം പ്രവർത്തിക്കാൻ പഠിപ്പിക്കുന്നതാണ്. ഒരു കളിപ്പാട്ട കാർ എങ്ങനെ ചാലിപ്പിക്കാം എന്ന് പഠിപ്പിക്കുന്നത് പോലെ, നമ്മൾ റോബോട്ടുകളെയും പഠിപ്പിക്കുന്നു. അവ നമുക്ക് വേണ്ടി കാര്യങ്ങൾ ചെയ്യാൻ സഹായിക്കുന്നു!',
    'small business': 'AI can help your small business through: 1) Automated customer service chatbots, 2) Social media content generation, 3) Inventory management predictions, 4) Personalized marketing campaigns, 5) Financial forecasting. Start with free tools like AI writing assistants.',
  };

  const handleSubmit = () => {
    const q = question.toLowerCase();
    let response = 'Thank you for your question! AI can help with many things. Try asking about crops, robotics, or business in the examples above.';
    
    if (q.includes('crop') || q.includes('plant') || q.includes('palakkad')) {
      response = responses['crops palakkad'];
    } else if (q.includes('robot') || q.includes('റോബോട്ട്')) {
      response = responses['robotics malayalam'];
    } else if (q.includes('business') || q.includes('ബിസിനസ്')) {
      response = responses['small business'];
    }
    
    setAnswer(response);
  };

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
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

        <Card className="p-8 gradient-card border-primary/20">
          <div className="space-y-6">
            <div>
              <Textarea
                placeholder={t('demo.placeholder')}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className={`min-h-32 ${language === 'ml' ? 'malayalam-text' : ''}`}
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-primary/90 shadow-glow"
              size="lg"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              <span className={language === 'ml' ? 'malayalam-text' : ''}>{t('demo.submit')}</span>
            </Button>

            {answer && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-muted rounded-lg"
              >
                <p className={`text-foreground ${language === 'ml' && answer.includes('റോബോട്ട്') ? 'malayalam-text' : ''}`}>
                  {answer}
                </p>
              </motion.div>
            )}

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
          </div>
        </Card>
      </div>
    </section>
  );
};
