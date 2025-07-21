import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import bangkokImage from '@/assets/bangkok.jpg';
import tokyoImage from '@/assets/tokyo.jpg';
import icelandImage from '@/assets/iceland.jpg';
import maldivesImage from '@/assets/maldives.jpg';

export const ToursSection = () => {
  const tours = [
    {
      id: 1,
      title: "All Inclusive Circle Island Day With Lunch",
      location: "Australia",
      image: bangkokImage,
      duration: "2 Days 1 Night",
      groupSize: "6 person",
      rating: 4.5,
      reviews: 25,
      price: 125,
      originalPrice: 140,
      discount: 15,
      badge: "SALE"
    },
    {
      id: 2,
      title: "Mudumalai & the Turtle Town",
      location: "Snorkeling Adventure Around",
      image: tokyoImage,
      duration: "3 Days 2 Night",
      groupSize: "8 person",
      rating: 4.8,
      reviews: 32,
      price: 89,
      originalPrice: 105,
      discount: 15,
      badge: "FEATURED"
    },
    {
      id: 3,
      title: "All Inclusive Circle Island Day With Lunch",
      location: "Australia",
      image: icelandImage,
      duration: "5 Days 4 Night",
      groupSize: "4 person",
      rating: 4.9,
      reviews: 18,
      price: 200,
      originalPrice: 230,
      discount: 13,
      badge: "HOT"
    },
    {
      id: 4,
      title: "Mudumalai & the Turtle Town",
      location: "Snorkeling Adventure Around",
      image: maldivesImage,
      duration: "4 Days 3 Night",
      groupSize: "6 person",
      rating: 4.7,
      reviews: 28,
      price: 175,
      originalPrice: 195,
      discount: 10,
      badge: "NEW"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-travel-cream rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium">✈️ Most Popular</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Most Popular <span className="text-secondary">Tours</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our handpicked selection of the most sought-after travel experiences, 
            curated by our travel experts for unforgettable adventures.
          </p>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <Badge 
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold ${
                    tour.badge === 'SALE' ? 'bg-destructive' :
                    tour.badge === 'FEATURED' ? 'bg-secondary' :
                    tour.badge === 'HOT' ? 'bg-primary' :
                    'bg-travel-blue'
                  } text-white`}
                >
                  {tour.badge}
                </Badge>
                
                {/* Discount */}
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold">
                  {tour.discount}% OFF
                </div>

                {/* Overlay with actions on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-foreground hover:bg-white/90">
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-foreground">{tour.rating}</span>
                    <span className="text-sm text-muted-foreground">({tour.reviews})</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 px-3 py-1 h-auto text-sm font-medium"
                  >
                    Book Now
                  </Button>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                  {tour.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">{tour.location}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {tour.duration}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    {tour.groupSize}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground line-through">
                      ${tour.originalPrice}
                    </span>
                    <span className="text-xl font-bold text-primary">
                      ${tour.price}
                    </span>
                  </div>
                  
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Book Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};