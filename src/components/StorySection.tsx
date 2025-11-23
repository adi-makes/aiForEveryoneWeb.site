import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Users, Heart, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';

const icons = [BookOpen, Users, Heart, Lightbulb];

export const StorySection = () => {
  const { language, t } = useLanguage();

  const cards = [
    { title: t('story.card1Title'), desc: t('story.card1Desc') },
    { title: t('story.card2Title'), desc: t('story.card2Desc') },
    { title: t('story.card3Title'), desc: t('story.card3Desc') },
    { title: t('story.card4Title'), desc: t('story.card4Desc') },
  ];

  return (
    <section id="story" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-green/5 via-background to-kerala-blue/5" />
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, hsl(var(--kerala-green)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--kerala-blue)) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('story.title')}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('story.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="p-6 h-full gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {card.title}
                  </h3>
                  <p className={`text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {card.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
