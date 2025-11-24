import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';

interface DetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  details: string[];
  images?: string[];
  videoUrl?: string;
}

export const DetailDialog = ({ 
  open, 
  onOpenChange, 
  title, 
  description, 
  details,
  images = [],
  videoUrl 
}: DetailDialogProps) => {
  const { language } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className={`text-2xl ${language === 'ml' ? 'malayalam-text' : ''}`}>
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-4">
          <div className="space-y-6">
            <p className={`text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {description}
            </p>

            {images.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${title} ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            <div className="space-y-3">
              {details.map((detail, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <p className={`text-sm ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            {videoUrl && (
              <div className="mt-6">
                <h3 className={`text-lg font-semibold mb-3 ${language === 'ml' ? 'malayalam-text' : ''}`}>
                  {language === 'en' ? 'Learn More' : 'കൂടുതല്‍ അറിയുക'}
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
