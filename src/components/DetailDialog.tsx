import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface DetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  details: string[];
  images?: string[];
}

export const DetailDialog = ({ 
  open, 
  onOpenChange, 
  title, 
  description, 
  details,
  images = []
}: DetailDialogProps) => {
  const { language } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] bg-gradient-to-br from-background via-background to-primary/5 border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-kerala-teal/5 via-transparent to-kerala-orange/5 pointer-events-none" />
        
        <DialogHeader className="relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-kerala-blue">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <DialogTitle className={`text-3xl font-bold bg-gradient-to-r from-primary via-kerala-blue to-kerala-teal bg-clip-text text-transparent ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {title}
            </DialogTitle>
          </div>
          <DialogDescription className={`text-base text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 relative">
            {images.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                {images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <img
                      src={img}
                      alt={`${title} ${idx + 1}`}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            )}

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="space-y-4"
            >
              {details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
                  className="flex gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-primary to-kerala-blue mt-2 group-hover:scale-150 transition-transform duration-300" />
                  <p className={`text-sm leading-relaxed ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
