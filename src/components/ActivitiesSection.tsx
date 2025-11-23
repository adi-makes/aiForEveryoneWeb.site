import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Image, BookText, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';

import { Mic, History, Home } from 'lucide-react';

const icons = [Image, BookText, FileText, Mic, History, Home];

export const ActivitiesSection = () => {
  const { language, t } = useLanguage();

  const projects = [
    {
      title: t('activities.project1'),
      desc: t('activities.project1Desc'),
      steps: [t('activities.project1Step1'), t('activities.project1Step2'), t('activities.project1Step3')],
    },
    {
      title: t('activities.project2'),
      desc: t('activities.project2Desc'),
      steps: [t('activities.project2Step1'), t('activities.project2Step2'), t('activities.project2Step3')],
    },
    {
      title: t('activities.project3'),
      desc: t('activities.project3Desc'),
      steps: [t('activities.project3Step1'), t('activities.project3Step2'), t('activities.project3Step3')],
    },
    {
      title: t('activities.project4'),
      desc: t('activities.project4Desc'),
      steps: [t('activities.project4Step1'), t('activities.project4Step2'), t('activities.project4Step3')],
    },
    {
      title: t('activities.project5'),
      desc: t('activities.project5Desc'),
      steps: [t('activities.project5Step1'), t('activities.project5Step2'), t('activities.project5Step3')],
    },
    {
      title: t('activities.project6'),
      desc: t('activities.project6Desc'),
      steps: [t('activities.project6Step1'), t('activities.project6Step2'), t('activities.project6Step3')],
    },
  ];

  return (
    <section id="activities" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-blue/5 via-background to-kerala-orange/5" />
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
          backgroundImage: 'radial-gradient(circle at 40% 40%, hsl(var(--kerala-blue)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--kerala-teal)) 0%, transparent 50%)',
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
            {t('activities.title')}
          </h2>
          <p className={`text-xl text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('activities.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 h-full gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {project.title}
                  </h3>
                  <p className={`text-muted-foreground mb-4 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {project.desc}
                  </p>
                  <ol className={`space-y-2 text-sm ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {project.steps.map((step, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary font-semibold">{i + 1}.</span>
                        <span className="text-foreground/80">{step}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
