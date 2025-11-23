import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// AI centers and tech hubs in Kerala
const aiLocations = [
  { name: 'Infopark Kochi', coords: [76.3469, 10.0126], type: 'Tech Hub' },
  { name: 'Technopark Trivandrum', coords: [76.9366, 8.5469], type: 'Tech Hub' },
  { name: 'Cyberpark Kozhikode', coords: [75.7804, 11.2588], type: 'Tech Hub' },
  { name: 'Kerala Startup Mission', coords: [76.9514, 8.5241], type: 'Innovation Center' },
  { name: 'IIITM-K Technopark', coords: [76.9366, 8.5450], type: 'Research Center' },
  { name: 'Digital University Kerala', coords: [76.9366, 8.5500], type: 'Education' },
];

export const KeralaMap = () => {
  const { language, t } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [76.2711, 10.8505], // Center of Kerala
      zoom: 7,
      pitch: 45,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add markers for AI centers
      aiLocations.forEach((location) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
        el.style.width = '40px';
        el.style.height = '40px';
        el.style.backgroundSize = '100%';
        el.style.cursor = 'pointer';

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="p-2">
            <h3 class="font-bold text-sm">${location.name}</h3>
            <p class="text-xs text-gray-600">${location.type}</p>
          </div>`
        );

        new mapboxgl.Marker(el)
          .setLngLat(location.coords as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <Card className="p-6 gradient-card border-primary/20 backdrop-blur-sm">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="h-6 w-6 text-primary" />
          <div>
            <h3 className={`text-xl font-bold ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {language === 'en' ? 'AI Centers Across Kerala' : 'കേരളത്തിലുടനീളം AI കേന്ദ്രങ്ങൾ'}
            </h3>
            <p className={`text-sm text-muted-foreground ${language === 'ml' ? 'malayalam-text' : ''}`}>
              {language === 'en' 
                ? 'Explore tech hubs, innovation centers, and AI research facilities' 
                : 'ടെക് ഹബ്ബുകൾ, നവീകരണ കേന്ദ്രങ്ങൾ, AI ഗവേഷണ സൗകര്യങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക'}
            </p>
          </div>
        </div>

        {!mapboxToken ? (
          <div className="space-y-4">
            {!showTokenInput ? (
              <Button
                onClick={() => setShowTokenInput(true)}
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {language === 'en' ? 'Load Interactive Map' : 'ഇന്ററാക്ടീവ് മാപ്പ് ലോഡ് ചെയ്യുക'}
              </Button>
            ) : (
              <div className="space-y-2">
                <p className={`text-sm ${language === 'ml' ? 'malayalam-text' : ''}`}>
                  {language === 'en' 
                    ? 'Enter your Mapbox token to view the interactive map:' 
                    : 'ഇന്ററാക്ടീവ് മാപ്പ് കാണാൻ നിങ്ങളുടെ Mapbox ടോക്കൺ നൽകുക:'}
                </p>
                <Input
                  type="text"
                  placeholder="pk.eyJ1..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className={language === 'ml' ? 'malayalam-text' : ''}
                />
                <p className="text-xs text-muted-foreground">
                  {language === 'en' ? (
                    <>Get your free token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a></>
                  ) : (
                    <>നിങ്ങളുടെ സൗജന്യ ടോക്കൺ <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a> എന്നതിൽ നിന്ന് നേടുക</>
                  )}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div ref={mapContainer} className="w-full h-[500px] rounded-lg overflow-hidden" />
        )}

        {!mapboxToken && (
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
            {aiLocations.map((location, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className={`text-sm font-semibold ${language === 'ml' ? 'malayalam-text' : ''}`}>
                    {location.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{location.type}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
