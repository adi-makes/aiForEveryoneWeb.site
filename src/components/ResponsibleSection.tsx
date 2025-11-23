import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Scale, Eye, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const icons = [Shield, Scale, Eye, Heart];

export const ResponsibleSection = () => {
  const { language, t } = useLanguage();

  const principles = [
    { title: t('responsible.privacy'), desc: t('responsible.privacyDesc') },
    { title: t('responsible.fairness'), desc: t('responsible.fairnessDesc') },
    { title: t('responsible.transparency'), desc: t('responsible.transparencyDesc') },
    { title: t('responsible.safety'), desc: t('responsible.safetyDesc') },
  ];

  return (
    <section id="responsible" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-teal/5 via-background to-kerala-orange/5" />
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, hsl(var(--kerala-teal)) 0%, transparent 50%), radial-gradient(circle at 20% 50%, hsl(var(--kerala-orange)) 0%, transparent 50%)',
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
            {t('responsible.title')}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('responsible.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  rotateZ: -5
                }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateZ: 0
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="p-6 h-full gradient-card border-primary/20 hover:shadow-glow transition-all duration-300 text-center">
                  <div className="mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-kerala-blue flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {principle.title}
                  </h3>
                  <p className={`text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {principle.desc}
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
