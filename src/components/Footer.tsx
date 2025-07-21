import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    "Beach Vacation",
    "City Tours",
    "Adventure Tours",
    "Cruise Tours",
    "Safari Tours",
    "Honeymoon"
  ];

  const usefulLinks = [
    "About Us",
    "Contact Us",
    "Terms & Policy",
    "Privacy Policy",
    "Community",
    "Disclaimer"
  ];

  const instagramPosts = [
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80"
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Gotur */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">About Gotur</h3>
            <p className="text-white/80 leading-relaxed">
              We will provide the best travel website and also we provide you lifetime 
              support and free installation of your website.
            </p>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">25 Street, 145 City of New York</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">+8812345690</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">info@company.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Destinations</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-primary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Sign up for our weekly newsletter to get the latest news, updates and amazing offers.
            </p>
            
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>

            {/* Follow Instagram */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Instagram</h4>
              <div className="grid grid-cols-3 gap-2">
                {instagramPosts.map((post, index) => (
                  <div key={index} className="aspect-square bg-white/10 rounded-lg overflow-hidden">
                    <img 
                      src={post} 
                      alt={`Instagram post ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-center md:text-left">
              © Copyright 2025 by Creative-Gotur-Templates
            </p>
            
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg?height=30&width=50" alt="Payment method" className="h-6" />
              <img src="/placeholder.svg?height=30&width=50" alt="Payment method" className="h-6" />
              <img src="/placeholder.svg?height=30&width=50" alt="Payment method" className="h-6" />
              <img src="/placeholder.svg?height=30&width=50" alt="Payment method" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};