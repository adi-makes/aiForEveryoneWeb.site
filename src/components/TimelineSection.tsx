import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export const TimelineSection = () => {
  const { language, t } = useLanguage();

  const phases = [
    { title: t('timeline.phase1Title'), desc: t('timeline.phase1Desc') },
    { title: t('timeline.phase2Title'), desc: t('timeline.phase2Desc') },
    { title: t('timeline.phase3Title'), desc: t('timeline.phase3Desc') },
    { title: t('timeline.phase4Title'), desc: t('timeline.phase4Desc') },
    { title: t('timeline.phase5Title'), desc: t('timeline.phase5Desc') },
  ];

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-blue/5 via-background to-kerala-teal/5" />
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, hsl(var(--kerala-blue)) 0%, transparent 50%), radial-gradient(circle at 50% 100%, hsl(var(--kerala-teal)) 0%, transparent 50%)',
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
            {t('timeline.title')}
          </h2>
          <p className={`text-xl text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('timeline.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-kerala-blue to-kerala-green" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -100 : 100,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  scale: 1
                }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
              >
                <div className="md:w-1/2">
                  <Card className="p-6 gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
                    <h3 className={`text-2xl font-bold mb-3 text-primary ${language === 'ml' ? 'malayalam-text' : ''}`}>
                      {phase.title}
                    </h3>
                    <p className={`text-foreground/80 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                      {phase.desc}
                    </p>
                  </Card>
                </div>
                
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-glow" />
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
