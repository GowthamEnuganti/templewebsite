import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone } from "lucide-react";

interface TempleCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  timings: string;
  deity: string;
  contact?: string;
  established?: string;
}

const TempleCard = ({
  name,
  description,
  image,
  location,
  timings,
  deity,
  contact,
  established,
}: TempleCardProps) => {
  return (
    <Card className="temple-card-hover overflow-hidden group cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {deity}
          </Badge>
        </div>
        {established && (
          <div className="absolute top-4 right-4">
            <Badge
              variant="outline"
              className="bg-white/90 text-foreground border-white/50"
            >
              Est. {established}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-foreground">{location}</span>
          </div>

          <div className="flex items-start space-x-2">
            <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-foreground">{timings}</span>
          </div>

          {contact && (
            <div className="flex items-start space-x-2">
              <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{contact}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TempleCard;
