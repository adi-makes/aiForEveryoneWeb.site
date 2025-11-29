import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';
export const Footer = () => {
  const {
    language,
    t
  } = useLanguage();
  return <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className={`text-muted-foreground flex items-center justify-center gap-2 ${language === 'ml' ? 'malayalam-text' : ''}`}>
            <Heart className="w-4 h-4 text-kerala-orange fill-kerala-orange" />
            {t('footer.tagline')}
          </p>
          <p className={`text-sm text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {t('footer.copyright')}
          </p>
          <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-2 text-center">
            <span className="text-primary">
          </span>
            {language === 'en' ? 'Crafted with passion by' : 'സ്നേഹത്തോടെ നിർമ്മിച്ചത്'}
            <span className="font-semibold text-foreground">Adith R. Lal</span>
          </p>
        </div>
      </div>
    </footer>;
};