import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import backwaters from '@/assets/gallery/kerala-backwaters.jpg';
import countryside from '@/assets/gallery/kerala-countryside.jpg';
import temple from '@/assets/gallery/kerala-temple.jpg';
import boatRace from '@/assets/gallery/kerala-boat-race.jpg';
import kathakali from '@/assets/gallery/kerala-kathakali.jpg';
import houseboat from '@/assets/gallery/kerala-houseboat.jpg';
import aiAgriculture1 from '@/assets/gallery/ai-agriculture-1.jpg';
import aiAgriculture2 from '@/assets/gallery/ai-agriculture-2.jpg';
import aiCulture1 from '@/assets/gallery/ai-culture-1.jpg';
import aiCulture2 from '@/assets/gallery/ai-culture-2.jpg';
import aiTech from '@/assets/gallery/ai-tech-1.jpg';
import aiFishing from '@/assets/gallery/ai-fishing.jpg';
import aiHealthcare from '@/assets/gallery/ai-healthcare.jpg';
import aiEducation from '@/assets/gallery/ai-education.jpg';
import aiTea from '@/assets/gallery/ai-tea-plantation.jpg';
import aiHandloom from '@/assets/gallery/ai-handloom.jpg';
import aiCrafts from '@/assets/gallery/ai-crafts.jpg';
import aiEnvironment from '@/assets/gallery/ai-environment.jpg';
import aiTourism from '@/assets/gallery/ai-tourism.jpg';
import aiSeniors from '@/assets/gallery/ai-seniors.jpg';
import aiRubber from '@/assets/gallery/ai-rubber.jpg';

export const GallerySection = () => {
  const { language } = useLanguage();

  const images = [
    { src: backwaters, title: language === 'en' ? 'Backwaters Beauty' : 'കായലുകളുടെ സൗന്ദര്യം' },
    { src: countryside, title: language === 'en' ? 'Rural Kerala' : 'ഗ്രാമീണ കേരളം' },
    { src: temple, title: language === 'en' ? 'Temple Heritage' : 'ക്ഷേത്ര പൈതൃകം' },
    { src: boatRace, title: language === 'en' ? 'Snake Boat Race' : 'വള്ളം കളി' },
    { src: kathakali, title: language === 'en' ? 'Kathakali Art' : 'കഥകളി കല' },
    { src: houseboat, title: language === 'en' ? 'Houseboat Serenity' : 'വള്ളത്തിന്റെ ശാന്തത' },
    { src: aiAgriculture1, title: language === 'en' ? 'AI in Coconut Farming' : 'തേങ്ങാ കൃഷിയിൽ AI' },
    { src: aiAgriculture2, title: language === 'en' ? 'Smart Spice Trade' : 'സ്മാർട്ട് സുഗന്ധവ്യഞ്ജന വ്യാപാരം' },
    { src: aiCulture1, title: language === 'en' ? 'Digital Dance Performance' : 'ഡിജിറ്റൽ നൃത്തം' },
    { src: aiCulture2, title: language === 'en' ? 'Manuscript Preservation' : 'കൈയെഴുത്തുപ്രതി സംരക്ഷണം' },
    { src: aiTech, title: language === 'en' ? 'Tech Innovation Hub' : 'സാങ്കേതിക നവീകരണ കേന്ദ്രം' },
    { src: aiFishing, title: language === 'en' ? 'Smart Fishing' : 'സ്മാർട്ട് മത്സ്യബന്ധനം' },
    { src: aiHealthcare, title: language === 'en' ? 'AI-Enhanced Ayurveda' : 'AI-മെച്ചപ്പെട്ട ആയുർവേദം' },
    { src: aiEducation, title: language === 'en' ? 'Digital Classrooms' : 'ഡിജിറ്റൽ ക്ലാസ്റൂമുകൾ' },
    { src: aiTea, title: language === 'en' ? 'Tea Plantation Tech' : 'തേയില കൃഷി സാങ്കേതികവിദ്യ' },
    { src: aiHandloom, title: language === 'en' ? 'AI-Powered Weaving' : 'AI-പ്രവർത്തിത നെയ്ത്ത്' },
    { src: aiCrafts, title: language === 'en' ? 'Sustainable Crafts' : 'സുസ്ഥിര കരക൧ശലങ്ങൾ' },
    { src: aiEnvironment, title: language === 'en' ? 'Smart Beach Management' : 'സ്മാർട്ട് ബീച്ച് മാനേജ്മെന്റ്' },
    { src: aiTourism, title: language === 'en' ? 'AI Tourism Assistance' : 'AI ടൂറിസം സഹായം' },
    { src: aiSeniors, title: language === 'en' ? 'Connecting Generations' : 'തലമുറകളെ ബന്ധിപ്പിക്കുന്നു' },
    { src: aiRubber, title: language === 'en' ? 'Rubber Plantation AI' : 'റബ്ബർ തോട്ടത്തിലെ AI' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-green/10 via-background to-kerala-teal/10" />
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--kerala-orange)) 0%, transparent 50%)',
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
            {language === 'en' ? 'Kerala by AI' : 'AI ഉള്ള കേരളം'}
          </h2>
          <p className={`text-xl text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {language === 'en' 
              ? 'A visual journey through Kerala enhanced by artificial intelligence' 
              : 'കൃത്രിമ ബുദ്ധിയാൽ മെച്ചപ്പെടുത്തിയ കേരളത്തിലൂടെയുള്ള ഒരു ദൃശ്യ യാത്ര'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className={`text-sm font-semibold text-white ${language === 'ml' ? 'malayalam-text' : ''}`}>
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
