import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Tractor, Palette, Users2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const icons = [GraduationCap, Tractor, Palette, Users2];

export const EmpowerSection = () => {
  const { language, t } = useLanguage();

  const people = [
    { title: t('empower.student'), desc: t('empower.studentDesc') },
    { title: t('empower.farmer'), desc: t('empower.farmerDesc') },
    { title: t('empower.artisan'), desc: t('empower.artisanDesc') },
    { title: t('empower.senior'), desc: t('empower.seniorDesc') },
  ];

  return (
    <section id="empower" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-orange/5 via-background to-kerala-green/5" />
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, hsl(var(--kerala-orange)) 0%, transparent 50%), radial-gradient(circle at 90% 80%, hsl(var(--kerala-green)) 0%, transparent 50%)',
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
            {t('empower.title')}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('empower.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {people.map((person, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, rotateY: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="p-8 gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-kerala-green flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold mb-3 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                        {person.title}
                      </h3>
                      <p className={`text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
                        {person.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
