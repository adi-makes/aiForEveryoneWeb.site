import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { DetailDialog } from '@/components/DetailDialog';
import { Sparkles, ArrowRight } from 'lucide-react';
import farmerImage from '@/assets/kerala-farmer-ai.jpg';
import cultureImage from '@/assets/kerala-culture-ai.jpg';
import techHubImage from '@/assets/kerala-tech-hub.jpg';
import aiAgriculture1 from '@/assets/gallery/ai-agriculture-1.jpg';
import aiAgriculture2 from '@/assets/gallery/ai-agriculture-2.jpg';
import aiCulture1 from '@/assets/gallery/ai-culture-1.jpg';
import aiCulture2 from '@/assets/gallery/ai-culture-2.jpg';
import aiTech from '@/assets/gallery/ai-tech-1.jpg';
import aiHealthcare from '@/assets/gallery/ai-healthcare.jpg';
import aiEducation from '@/assets/gallery/ai-education.jpg';

export const ImageShowcase = () => {
  const { language } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const images = [
    {
      src: farmerImage,
      title: language === 'en' ? 'AI in Agriculture' : 'കൃഷിയിൽ AI',
      desc: language === 'en' 
        ? 'Smart farming with AI-powered insights' 
        : 'AI-പ്രവർത്തിത ഉൾക്കാഴ്ചകളോടെ സ്മാർട്ട് കൃഷി',
      details: language === 'en' ? [
        'AI-powered crop monitoring systems for early disease detection',
        'Smart irrigation systems that optimize water usage based on soil moisture and weather patterns',
        'Precision agriculture using drones and satellite imagery',
        'Real-time market price prediction to help farmers make better selling decisions',
        'AI-driven pest control recommendations to reduce chemical usage',
        'Yield prediction models to plan harvests and logistics better'
      ] : [
        'രോഗനിർണയത്തിനായി AI-പവർഡ് വിള നിരീക്ഷണ സംവിധാനങ്ങൾ',
        'മണ്ണിന്റെ ഈർപ്പവും കാലാവസ്ഥയും അടിസ്ഥാനമാക്കി ജല ഉപയോഗം ഒപ്റ്റിമൈസ് ചെയ്യുന്ന സ്മാർട്ട് ജലസേചന സംവിധാനങ്ങൾ',
        'ഡ്രോണുകളും സാറ്റലൈറ്റ് ഇമേജറിയും ഉപയോഗിച്ച് കൃത്യമായ കൃഷി',
        'കർഷകരെ മെച്ചമായ വില്പന തീരുമാനങ്ങൾ എടുക്കാൻ സഹായിക്കുന്ന തത്സമയ വിപണി വില പ്രവചനം',
        'രാസവസ്തുക്കളുടെ ഉപയോഗം കുറയ്ക്കാൻ AI-നയിക്കുന്ന കീടനിയന്ത്രണ ശുപാർശകൾ',
        'വിളവെടുപ്പും ലോജിസ്റ്റിക്സും നന്നായി ആസൂത്രണം ചെയ്യാനുള്ള വിളവ് പ്രവചന മോഡലുകൾ'
      ],
      images: [aiAgriculture1, aiAgriculture2]
    },
    {
      src: cultureImage,
      title: language === 'en' ? 'Tradition Meets Technology' : 'പാരമ്പര്യവും സാങ്കേതികവിദ്യയും',
      desc: language === 'en' 
        ? 'Preserving culture through AI innovation' 
        : 'AI നവീകരണത്തിലൂടെ സംസ്കാരം സംരക്ഷിക്കുന്നു',
      details: language === 'en' ? [
        'Digital archiving of ancient manuscripts and palm leaf texts using AI-powered OCR',
        'Virtual reality experiences of traditional art forms like Kathakali and Mohiniyattam',
        'AI-assisted restoration of historical monuments and heritage sites',
        'Language preservation through AI-powered translation and documentation',
        'Digital museums showcasing Kerala\'s rich cultural heritage',
        'AI-enhanced performances blending traditional arts with modern technology'
      ] : [
        'AI-പവർഡ് OCR ഉപയോഗിച്ച് പുരാതന കൈയെഴുത്തുപ്രതികളുടെയും ഓലക്കുറിപ്പുകളുടെയും ഡിജിറ്റൽ ആർക്കൈവിംഗ്',
        'കഥകളി, മോഹിനിയാട്ടം തുടങ്ങിയ പരമ്പരാഗത കലാരൂപങ്ങളുടെ വെർച്വൽ റിയാലിറ്റി അനുഭവങ്ങൾ',
        'ചരിത്ര സ്മാരകങ്ങളുടെയും പൈതൃക സ്ഥലങ്ങളുടെയും AI-സഹായിത പുനരുദ്ധാരണം',
        'AI-പവർഡ് വിവർത്തനത്തിലൂടെയും ഡോക്യുമെന്റേഷനിലൂടെയും ഭാഷാ സംരക്ഷണം',
        'കേരളത്തിന്റെ സമ്പന്നമായ സാംസ്കാരിക പൈതൃകം പ്രദർശിപ്പിക്കുന്ന ഡിജിറ്റൽ മ്യൂസിയങ്ങൾ',
        'പരമ്പരാഗത കലകളെ ആധുനിക സാങ്കേതികവിദ്യയുമായി സംയോജിപ്പിക്കുന്ന AI-മെച്ചപ്പെടുത്തിയ പ്രകടനങ്ങൾ'
      ],
      images: [aiCulture1, aiCulture2]
    },
    {
      src: techHubImage,
      title: language === 'en' ? 'Innovation Hubs' : 'നവീകരണ കേന്ദ്രങ്ങൾ',
      desc: language === 'en' 
        ? 'Building the future of AI in Kerala' 
        : 'കേരളത്തിൽ AI-യുടെ ഭാവി നിർമ്മിക്കുന്നു',
      details: language === 'en' ? [
        'Tech parks and innovation centers fostering AI startups and research',
        'Collaboration between academia and industry for AI development',
        'State-of-the-art AI research facilities and labs',
        'Incubation programs supporting young entrepreneurs in AI',
        'International partnerships bringing global AI expertise to Kerala',
        'Focus on AI solutions for local and global challenges'
      ] : [
        'AI സ്റ്റാർട്ടപ്പുകളും ഗവേഷണവും പ്രോത്സാഹിപ്പിക്കുന്ന ടെക് പാർക്കുകളും നവീകരണ കേന്ദ്രങ്ങളും',
        'AI വികസനത്തിനായി അക്കാദമിയും വ്യവസായവും തമ്മിലുള്ള സഹകരണം',
        'അത്യാധുനിക AI ഗവേഷണ സൗകര്യങ്ങളും ലാബുകളും',
        'AI-യിലെ യുവ സംരംഭകരെ പിന്തുണയ്ക്കുന്ന ഇൻകുബേഷൻ പ്രോഗ്രാമുകൾ',
        'ആഗോള AI വൈദഗ്ദ്ധ്യം കേരളത്തിലേക്ക് കൊണ്ടുവരുന്ന അന്താരാഷ്ട്ര പങ്കാളിത്തങ്ങൾ',
        'പ്രാദേശികവും ആഗോളവുമായ വെല്ലുവിളികൾക്കുള്ള AI പരിഹാരങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക'
      ],
      images: [aiTech]
    },
    {
      src: aiHealthcare,
      title: language === 'en' ? 'AI in Healthcare' : 'ആരോഗ്യ സംരക്ഷണത്തിൽ AI',
      desc: language === 'en' 
        ? 'Enhancing medical services with AI technology' 
        : 'AI സാങ്കേതികവിദ്യ ഉപയോഗിച്ച് മെഡിക്കൽ സേവനങ്ങൾ മെച്ചപ്പെടുത്തുന്നു',
      details: language === 'en' ? [
        'AI-powered diagnostic tools for early disease detection',
        'Integration of AI with traditional Ayurveda practices',
        'Telemedicine platforms connecting patients with specialists',
        'Predictive analytics for epidemic prevention',
        'AI-assisted surgery and treatment planning',
        'Personal health assistants for elderly care'
      ] : [
        'രോഗനിർണയത്തിനായി AI-പവർഡ് ഡയഗ്നോസ്റ്റിക് ടൂളുകൾ',
        'പരമ്പരാഗത ആയുർവേദ പ്രാക്ടീസുകളുമായി AI യുടെ സംയോജനം',
        'രോഗികളെ സ്പെഷ്യലിസ്റ്റുകളുമായി ബന്ധിപ്പിക്കുന്ന ടെലിമെഡിസിൻ പ്ലാറ്റ്ഫോമുകൾ',
        'പകർച്ചവ്യാധി പ്രതിരോധത്തിനായി പ്രവചന വിശകലനം',
        'AI-സഹായിത ശസ്ത്രക്രിയയും ചികിത്സാ ആസൂത്രണവും',
        'വയോജന സംരക്ഷണത്തിനായി വ്യക്തിഗത ആരോഗ്യ സഹായികൾ'
      ],
      images: [aiHealthcare]
    },
    {
      src: aiEducation,
      title: language === 'en' ? 'AI in Education' : 'വിദ്യാഭ്യാസത്തിൽ AI',
      desc: language === 'en' 
        ? 'Transforming learning with intelligent systems' 
        : 'ഇന്റലിജന്റ് സിസ്റ്റങ്ങൾ ഉപയോഗിച്ച് പഠനം പരിവർത്തനം ചെയ്യുന്നു',
      details: language === 'en' ? [
        'Personalized learning paths adapted to each student\'s pace',
        'AI tutors providing 24/7 learning support',
        'Automated grading and feedback systems',
        'Virtual labs for hands-on science experiments',
        'Language learning apps with AI-powered pronunciation correction',
        'Accessibility tools for students with special needs'
      ] : [
        'ഓരോ വിദ്യാർത്ഥിയുടെയും വേഗതയ്ക്ക് അനുസരിച്ച് വ്യക്തിഗത പഠന പാതകൾ',
        '24/7 പഠന പിന്തുണ നൽകുന്ന AI ട്യൂട്ടർമാർ',
        'ഓട്ടോമേറ്റഡ് ഗ്രേഡിംഗ്, ഫീഡ്ബാക്ക് സിസ്റ്റങ്ങൾ',
        'ശാസ്ത്ര പരീക്ഷണങ്ങൾക്കായി വെർച്വൽ ലാബുകൾ',
        'AI-പവർഡ് ഉച്ചാരണ തിരുത്തലോടെയുള്ള ഭാഷാ പഠന ആപ്പുകൾ',
        'പ്രത്യേക ആവശ്യങ്ങളുള്ള വിദ്യാർത്ഥികൾക്കുള്ള പ്രവേശനക്ഷമത ഉപകരണങ്ങൾ'
      ],
      images: [aiEducation]
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              onClick={() => setSelectedItem(index)}
              className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/20 hover:border-primary/40 mx-auto w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-kerala-teal/5 via-transparent to-kerala-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`text-2xl font-bold text-white mb-2 drop-shadow-lg ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {image.title}
                  </h3>
                  <p className={`text-sm text-white/90 mb-3 line-clamp-2 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {image.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>{language === 'en' ? 'Explore more' : 'കൂടുതൽ പര്യവേക്ഷണം'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(var(--primary), 0)',
                    '0 0 30px 8px hsl(var(--primary) / 0.4)',
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

      {selectedItem !== null && (
        <DetailDialog
          open={selectedItem !== null}
          onOpenChange={() => setSelectedItem(null)}
          title={images[selectedItem].title}
          description={images[selectedItem].desc}
          details={images[selectedItem].details}
          images={images[selectedItem].images}
        />
      )}
    </section>
  );
};
