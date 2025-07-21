import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-medium">✈️</span>
            <span className="ml-2 text-sm font-medium">Discover Your</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Next Step <br />
            <span className="text-primary">Destination</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris rhoncus nunc 
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-primary" />
                  Location
                </label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Australia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                    <SelectItem value="iceland">Iceland</SelectItem>
                    <SelectItem value="maldives">Maldives</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Activity Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Users className="w-4 h-4 mr-1 text-primary" />
                  Activities Type
                </label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Adventure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="relaxation">Relaxation</SelectItem>
                    <SelectItem value="wildlife">Wildlife</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Activity Day */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-primary" />
                  Activities Day
                </label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="5 - 10 Days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1 - 3 Days</SelectItem>
                    <SelectItem value="4-7">4 - 7 Days</SelectItem>
                    <SelectItem value="5-10">5 - 10 Days</SelectItem>
                    <SelectItem value="10+">10+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Travelers */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Users className="w-4 h-4 mr-1 text-primary" />
                  Traveler
                </label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="2 Person" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 Person</SelectItem>
                    <SelectItem value="3-5">3-5 Person</SelectItem>
                    <SelectItem value="6+">6+ Person</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6">
              <Button className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-4 text-lg rounded-xl shadow-lg">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
            <div className="bg-primary text-primary-foreground rounded-full p-8 shadow-2xl transform rotate-12">
              <div className="text-center">
                <div className="text-2xl font-bold">LET'S</div>
                <div className="text-3xl font-bold">GO!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};