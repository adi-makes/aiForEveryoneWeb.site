import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbulb, FileText, Languages, Code, Palette, Eye, Repeat } from 'lucide-react';
import { Card } from '@/components/ui/card';

const icons = [Lightbulb, FileText, Languages, Code, Palette, Eye, Repeat];

export const BuildSection = () => {
  const { language, t } = useLanguage();

  const processes = [
    { title: t('build.brainstorm'), desc: t('build.brainstormDesc') },
    { title: t('build.content'), desc: t('build.contentDesc') },
    { title: t('build.translation'), desc: t('build.translationDesc') },
    { title: t('build.code'), desc: t('build.codeDesc') },
    { title: t('build.design'), desc: t('build.designDesc') },
    { title: t('build.accessibility'), desc: t('build.accessibilityDesc') },
    { title: t('build.iteration'), desc: t('build.iterationDesc') },
  ];

  return (
    <section id="build" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-green/5 via-background to-kerala-teal/5" />
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, hsl(var(--kerala-green)) 0%, transparent 50%), radial-gradient(circle at 70% 30%, hsl(var(--kerala-teal)) 0%, transparent 50%)',
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
            {t('build.title')}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto mb-8 ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('build.subtitle')}
          </p>
          <p className={`text-lg text-foreground/80 max-w-4xl mx-auto ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('build.intro')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {processes.map((process, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="p-6 h-full gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-kerala-blue flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {process.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {process.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 text-center gradient-card border-primary/20">
            <p className={`text-lg italic text-foreground/90 ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {t('build.conclusion')}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
