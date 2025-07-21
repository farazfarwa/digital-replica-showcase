import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from 'lucide-react';
import bangkokImage from '@/assets/bangkok.jpg';
import tokyoImage from '@/assets/tokyo.jpg';
import icelandImage from '@/assets/iceland.jpg';
import maldivesImage from '@/assets/maldives.jpg';

export const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Surfing Man Will Blow Your Mind",
      excerpt: "Discover the hidden gems of exotic beaches and perfect waves that every surfer dreams of...",
      image: bangkokImage,
      date: "17 Dec",
      author: "John Doe",
      category: "Adventure",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Surfing Man Will Blow Your Mind", 
      excerpt: "Experience the thrill of conquering massive waves in some of the world's most beautiful locations...",
      image: tokyoImage,
      date: "15 Dec",
      author: "Jane Smith",
      category: "Travel Tips",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Surfing Man Will Blow Your Mind",
      excerpt: "Learn from professional surfers about the techniques and mindset needed for extreme surfing...",
      image: icelandImage,
      date: "12 Dec", 
      author: "Mike Johnson",
      category: "Adventure",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Surfing Man Will Blow Your Mind",
      excerpt: "Explore pristine beaches and untouched coastlines where surfing becomes a spiritual experience...",
      image: maldivesImage,
      date: "10 Dec",
      author: "Sarah Wilson", 
      category: "Destinations",
      readTime: "7 min read"
    }
  ];

  return (
    <section className="py-20 bg-travel-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-medium">✈️ Blog Tips</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Blogs <span className="text-secondary">And News</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest travel trends, tips, and inspiring stories 
            from fellow adventurers around the world.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm font-bold">
                  {post.date}
                </div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 right-4 bg-white text-foreground">
                  {post.category}
                </Badge>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  
                  <span>{post.readTime}</span>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};