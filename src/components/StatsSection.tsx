import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Award, Calendar } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      value: "30K+",
      label: "Total Users",
      description: "Happy Travelers"
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      value: "6,500+",
      label: "Years Experience",
      description: "Happy Travelers"
    },
    {
      icon: <Award className="w-12 h-12 text-travel-blue" />,
      value: "6,561+",
      label: "Awards Winning",
      description: "Awards Winning"
    },
    {
      icon: <Calendar className="w-12 h-12 text-destructive" />,
      value: "25+",
      label: "Years Experience",
      description: "Our Experience"
    }
  ];

  return (
    <section className="py-20 bg-travel-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-primary font-medium">✈️ Journey</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              TRAVEL & <br />
              <span className="text-primary">Journey</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content 
              of a page when looking at layout the point.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white font-medium">Trusted travel guide</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white font-medium">Mission & Vision</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white font-medium">Instant Booking</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white font-medium">Packaging Tour</span>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl text-foreground italic mb-6">
                "Outstanding! Outstanding! Outstanding! And beautiful."
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-foreground">Country Henry</div>
                <div className="text-muted-foreground">Our Customer</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};