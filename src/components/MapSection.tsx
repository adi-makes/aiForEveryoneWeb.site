import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { KeralaMap } from './KeralaMap';

export const MapSection = () => {
  const { language } = useLanguage();

  return (
    <section id="map" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-orange/5 via-background to-kerala-teal/5" />
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
          backgroundImage: 'radial-gradient(circle at 60% 30%, hsl(var(--kerala-orange)) 0%, transparent 50%), radial-gradient(circle at 20% 70%, hsl(var(--kerala-teal)) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {language === 'en' ? 'Kerala AI Innovation Network' : 'കേരള AI നവീകരണ ശൃംഖല'}
          </h2>
          <p className={`text-xl text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {language === 'en' 
              ? 'Discover the thriving ecosystem of AI education and innovation' 
              : 'AI വിദ്യാഭ്യാസത്തിന്റെയും നവീകരണത്തിന്റെയും അഭിവൃദ്ധി പ്രാപിക്കുന്ന ആവാസവ്യവസ്ഥ കണ്ടെത്തുക'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <KeralaMap />
        </motion.div>
      </div>
    </section>
  );
};
