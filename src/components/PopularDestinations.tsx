import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from 'lucide-react';
import bangkokImage from '@/assets/bangkok.jpg';
import tokyoImage from '@/assets/tokyo.jpg';
import icelandImage from '@/assets/iceland.jpg';
import maldivesImage from '@/assets/maldives.jpg';

export const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Bangkok",
      country: "Thailand",
      image: bangkokImage,
      rating: 4.8,
      reviews: 2547,
      badge: "Trending",
      badgeColor: "bg-primary"
    },
    {
      id: 2,
      name: "Tokyo",
      country: "Japan",
      image: tokyoImage,
      rating: 4.9,
      reviews: 1823,
      badge: "Hot",
      badgeColor: "bg-destructive"
    },
    {
      id: 3,
      name: "Iceland",
      country: "Europe",
      image: icelandImage,
      rating: 4.7,
      reviews: 956,
      badge: "Featured",
      badgeColor: "bg-travel-blue"
    },
    {
      id: 4,
      name: "Maldives",
      country: "Indian Ocean",
      image: maldivesImage,
      rating: 4.9,
      reviews: 1456,
      badge: "Luxury",
      badgeColor: "bg-secondary"
    }
  ];

  const categories = ["Trending", "Hot", "New", "Recommend", "Popular"];

  return (
    <section className="py-20 bg-travel-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium">✈️ Your Destination</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular <span className="text-secondary">Destinations</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Top destinations picked by our travel community of happy customers. 
            Choose from beautiful Countries and discover new exciting place.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Trending" ? "default" : "outline"}
                className={`rounded-full px-6 py-2 ${
                  category === "Trending" 
                    ? "bg-foreground text-white hover:bg-foreground/90" 
                    : "border-foreground/20 text-foreground hover:bg-foreground hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <Badge className={`absolute top-4 left-4 ${destination.badgeColor} text-white px-3 py-1 text-sm font-medium`}>
                  {destination.badge}
                </Badge>
                
                {/* Heart Icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                  <Heart className="w-5 h-5 text-foreground hover:text-primary" />
                </button>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{destination.name}</h3>
                    <p className="text-muted-foreground">{destination.country}</p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-foreground">{destination.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {destination.reviews.toLocaleString()} Reviews
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};