import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import farmerImage from '@/assets/kerala-farmer-ai.jpg';
import cultureImage from '@/assets/kerala-culture-ai.jpg';
import techHubImage from '@/assets/kerala-tech-hub.jpg';

export const ImageShowcase = () => {
  const { language } = useLanguage();

  const images = [
    {
      src: farmerImage,
      title: language === 'en' ? 'AI in Agriculture' : 'കൃഷിയിൽ AI',
      desc: language === 'en' 
        ? 'Smart farming with AI-powered insights' 
        : 'AI-പ്രവർത്തിത ഉൾക്കാഴ്ചകളോടെ സ്മാർട്ട് കൃഷി',
    },
    {
      src: cultureImage,
      title: language === 'en' ? 'Tradition Meets Technology' : 'പാരമ്പര്യവും സാങ്കേതികവിദ്യയും',
      desc: language === 'en' 
        ? 'Preserving culture through AI innovation' 
        : 'AI നവീകരണത്തിലൂടെ സംസ്കാരം സംരക്ഷിക്കുന്നു',
    },
    {
      src: techHubImage,
      title: language === 'en' ? 'Innovation Hubs' : 'നവീകരണ കേന്ദ്രങ്ങൾ',
      desc: language === 'en' 
        ? 'Building the future of AI in Kerala' 
        : 'കേരളത്തിൽ AI-യുടെ ഭാവി നിർമ്മിക്കുന്നു',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-teal/10 via-background to-kerala-green/10" />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--kerala-blue)) 0%, transparent 50%)',
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
            {language === 'en' ? 'AI Transforming Kerala' : 'കേരളത്തെ പരിവർത്തനം ചെയ്യുന്ന AI'}
          </h2>
          <p className={`text-xl text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {language === 'en' 
              ? 'See how artificial intelligence is reshaping every aspect of life' 
              : 'കൃത്രിമ ബുദ്ധി ജീവിതത്തിന്റെ എല്ലാ മേഖലകളെയും എങ്ങനെ പുനർനിർമ്മിക്കുന്നുവെന്ന് കാണുക'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <h3 className={`text-xl font-bold text-white mb-2 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {image.title}
                  </h3>
                  <p className={`text-sm text-white/90 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {image.desc}
                  </p>
                </motion.div>
              </div>

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(var(--primary), 0)',
                    '0 0 20px 5px rgba(var(--primary), 0.3)',
                    '0 0 0 0 rgba(var(--primary), 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
