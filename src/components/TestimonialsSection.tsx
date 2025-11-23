import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const { language, t } = useLanguage();

  const testimonials = [
    { text: t('testimonials.student'), name: t('testimonials.studentName') },
    { text: t('testimonials.farmer'), name: t('testimonials.farmerName') },
    { text: t('testimonials.teacher'), name: t('testimonials.teacherName') },
    { text: t('testimonials.senior'), name: t('testimonials.seniorName') },
    { text: t('testimonials.entrepreneur'), name: t('testimonials.entrepreneurName') },
    { text: t('testimonials.doctor'), name: t('testimonials.doctorName') },
    { text: t('testimonials.fisherman'), name: t('testimonials.fishermanName') },
    { text: t('testimonials.artist'), name: t('testimonials.artistName') },
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kerala-green/5 via-background to-kerala-teal/5" />
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, hsl(var(--kerala-green)) 0%, transparent 50%), radial-gradient(circle at 70% 60%, hsl(var(--kerala-orange)) 0%, transparent 50%)',
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
            {t('testimonials.title')}
          </h2>
          <p className={`text-xl text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 h-full gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
                <Quote className="text-primary w-10 h-10 mb-4" />
                <p className={`text-lg mb-6 italic ${language === 'ml' ? 'malayalam-text' : ''}`}>
                  "{testimonial.text}"
                </p>
                <p className={`font-semibold text-primary ${language === 'ml' ? 'malayalam-text' : ''}`}>
                  — {testimonial.name}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
