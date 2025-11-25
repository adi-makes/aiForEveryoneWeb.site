import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Tractor, Palette, Users2, ArrowRight } from 'lucide-react';
import { DetailDialog } from '@/components/DetailDialog';
import { Card } from '@/components/ui/card';

const icons = [GraduationCap, Tractor, Palette, Users2];

export const EmpowerSection = () => {
  const { language, t } = useLanguage();
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  const people = [
    { 
      title: t('empower.student'), 
      desc: t('empower.studentDesc'),
      details: language === 'en' ? [
        'AI-powered personalized learning paths',
        'Virtual tutors available 24/7',
        'Smart career guidance based on skills',
        'Interactive coding platforms',
        'Language learning with AI feedback'
      ] : ['AI-പവർഡ് വ്യക്തിഗത പഠന പാതകൾ', 'വെർച്വൽ ട്യൂട്ടർമാർ 24/7', 'കഴിവുകൾ അടിസ്ഥാനമാക്കിയുള്ള കരിയർ ഗൈഡൻസ്']
    },
    { 
      title: t('empower.farmer'), 
      desc: t('empower.farmerDesc'),
      details: language === 'en' ? [
        'Crop disease detection using AI',
        'Weather-based farming recommendations',
        'Market price predictions',
        'Soil health monitoring'
      ] : ['AI ഉപയോഗിച്ച് വിള രോഗ കണ്ടെത്തൽ', 'കാലാവസ്ഥാ അടിസ്ഥാനത്തിലുള്ള കൃഷി ശുപാർശകൾ']
    },
    { 
      title: t('empower.artisan'), 
      desc: t('empower.artisanDesc'),
      details: language === 'en' ? [
        'AI design tools for traditional crafts',
        'Online marketplace connectivity',
        'Quality control automation'
      ] : ['പരമ്പരാഗത കരകൗശലത്തിനായി AI ഡിസൈൻ ഉപകരണങ്ങൾ']
    },
    { 
      title: t('empower.senior'), 
      desc: t('empower.seniorDesc'),
      details: language === 'en' ? [
        'Voice-activated assistants',
        'Health monitoring systems',
        'Easy video calling with family'
      ] : ['വോയ്സ്-ആക്ടിവേറ്റഡ് അസിസ്റ്റന്റുകൾ', 'ആരോഗ്യ നിരീക്ഷണ സംവിധാനങ്ങൾ']
    },
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
                 <Card 
                   className="p-8 h-full bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 cursor-pointer relative overflow-hidden group"
                   onClick={() => setSelectedPerson(index)}
                 >
                  <div className="absolute inset-0 bg-gradient-to-br from-kerala-teal/5 via-transparent to-kerala-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-kerala-blue to-kerala-green flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-kerala-blue bg-clip-text text-transparent ${language === 'ml' ? 'malayalam-text' : ''}`}>
                        {person.title}
                      </h3>
                      <p className={`text-muted-foreground leading-relaxed mb-4 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                        {person.desc}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
                        <span>{language === 'en' ? 'Discover how' : 'എങ്ങനെയെന്ന് അറിയുക'}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedPerson !== null && (
        <DetailDialog
          open={selectedPerson !== null}
          onOpenChange={() => setSelectedPerson(null)}
          title={people[selectedPerson].title}
          description={people[selectedPerson].desc}
          details={people[selectedPerson].details}
        />
      )}
    </section>
  );
};
