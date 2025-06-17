
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye, Heart } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "DevFest Kampala 2024 - Official Trailer",
    description: "Get excited for Uganda's biggest developer conference and hackathon",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    duration: "2:30",
    views: "15K",
    likes: "1.2K"
  },
  {
    id: 2,
    title: "Hackathon Highlights 2023",
    description: "Relive the best moments from last year's hackathon competition",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    duration: "4:15",
    views: "8.5K",
    likes: "892"
  },
  {
    id: 3,
    title: "Meet the Mentors",
    description: "Industry experts who will guide you through your hackathon journey",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    duration: "3:45",
    views: "12K",
    likes: "1.5K"
  },
  {
    id: 4,
    title: "Innovation Showcase",
    description: "Amazing projects built by developers just like you",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    duration: "5:20",
    views: "20K",
    likes: "2.1K"
  }
];

const MarketingVideos = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-green-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Watch & Learn
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            DevFest Marketing Videos
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover the excitement, innovation, and community that makes DevFest Kampala special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <Card key={video.id} className="group overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black">
                    <Play className="h-5 w-5 mr-2" />
                    Play Video
                  </Button>
                </div>
                <Badge className="absolute top-3 right-3 bg-black/60 text-white">
                  {video.duration}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {video.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {video.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{video.likes} likes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 hover:scale-105 transition-all duration-200">
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketingVideos;
