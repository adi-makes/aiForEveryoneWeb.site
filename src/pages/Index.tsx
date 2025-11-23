import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StorySection } from '@/components/StorySection';
import { EmpowerSection } from '@/components/EmpowerSection';
import { TimelineSection } from '@/components/TimelineSection';
import { DemoSection } from '@/components/DemoSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ResponsibleSection } from '@/components/ResponsibleSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { BuildSection } from '@/components/BuildSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { ImageShowcase } from '@/components/ImageShowcase';
import { MapSection } from '@/components/MapSection';

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <StorySection />
          <ImageShowcase />
          <EmpowerSection />
          <TimelineSection />
          <MapSection />
          <DemoSection />
          <TestimonialsSection />
          <ResponsibleSection />
          <ActivitiesSection />
          <BuildSection />
          <Footer />
          <BackToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
