
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Gift, Star } from "lucide-react";

const prizes = [
  {
    place: "1st Place",
    amount: "$500",
    title: "Grand Prize Winner",
    //description: "Cash prize, mentorship program, and startup incubation opportunity",
    icon: Trophy,
    gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
    textColor: "text-yellow-600"
  },
  {
    place: "2nd Place",
    amount: "$300",
    title: "Runner Up",
    //description: "Cash prize and 6 months of free cloud hosting credits",
    icon: Award,
    gradient: "bg-gradient-to-br from-gray-300 to-gray-500",
    textColor: "text-gray-600"
  },
  {
    place: "3rd Place",
    amount: "$200",
    title: "Third Place",
    //description: "Cash prize and premium development tool subscriptions",
    icon: Gift,
    gradient: "bg-gradient-to-br from-orange-400 to-red-500",
    textColor: "text-orange-600"
  }
];

const specialPrizes = [
  "Every Hacker  - $1,000",
  "Base Bounty - $1,000", 
];

const PrizesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
            Prizes & Awards
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Amazing Prizes Await
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compete for over $10,000 in prizes and recognition from industry leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {prizes.map((prize, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <CardHeader className="pb-4">
                <div className={`w-20 h-20 ${prize.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <prize.icon className="h-10 w-10 text-white" />
                </div>
                <Badge className={`mb-2 ${prize.textColor} bg-transparent border-current`}>
                  {prize.place}
                </Badge>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  {prize.amount}
                </CardTitle>
                <h3 className="text-xl font-semibold text-gray-700">
                  {prize.title}
                </h3>
              </CardHeader>
              {/* <CardContent>
                <p className="text-gray-600">
                  {prize.description}
                </p>
              </CardContent> */}
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white animate-fade-in">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-yellow-300" />
              </div>
              <CardTitle className="text-2xl mb-2">Special Category Awards</CardTitle>
              <p className="text-purple-100">Additional prizes for outstanding achievements in specific areas</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specialPrizes.map((prize, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <p className="font-medium">{prize}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;