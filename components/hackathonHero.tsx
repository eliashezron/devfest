
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Link } from "lucide-react";

const HackathonHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-green-600">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
          DevFest Kampala 2025
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Code. Create. 
          <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
            Compete.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in animation-delay-500">
          Join Uganda's biggest developer hackathon. 1 week to build the future with cutting-edge technology and amazing prizes.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in animation-delay-1000">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Calendar className="h-5 w-5" />
            <span>June 23-27, 2025</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin className="h-5 w-5" />
            <span>Kampala, Uganda</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="h-5 w-5" />
            <span>500+ Developers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Trophy className="h-5 w-5" />
            <span>$3K Prize</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">

          <Link href="https://blockchain-devfest-kampala-hackathon.devfolio.co/overview" passHref target="_blank" rel="noopener noreferrer"
                 className="bg-white text-purple-700 hover:bg-gray-100 hover:scale-105 transition-all duration-200 font-bold px-8 py-3">
                  SPONSOR
          </Link>
          {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 hover:scale-105 transition-all duration-200 font-bold px-8 py-3">
            Learn More
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default HackathonHero;