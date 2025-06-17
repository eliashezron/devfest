import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Code, Presentation, Trophy } from "lucide-react";

const timelineEvents = [
  {
    time: "Day 1 - 6:00 PM",
    title: "Opening Ceremony & Team Formation",
    description: "Welcome reception, problem statements revealed, and team formation",
    icon: Clock,
    color: "bg-blue-500"
  },
  {
    time: "Day 1 - 8:00 PM",
    title: "Hacking Begins",
    description: "48 hours of intensive coding, building, and creating begins",
    icon: Code,
    color: "bg-green-500"
  },
  {
    time: "Day 2 - All Day",
    title: "Mentorship & Workshops",
    description: "Expert mentors available, technical workshops, and networking sessions",
    icon: Clock,
    color: "bg-purple-500"
  },
  {
    time: "Day 3 - 2:00 PM",
    title: "Final Presentations",
    description: "Teams present their solutions to expert judges",
    icon: Presentation,
    color: "bg-red-500"
  },
  {
    time: "Day 3 - 6:00 PM",
    title: "Awards Ceremony",
    description: "Winners announced and prizes distributed",
    icon: Trophy,
    color: "bg-yellow-500"
  }
];

const HackathonTimeline = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Event Schedule
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Hackathon Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three days of intense coding, learning, and innovation. Here's what to expect.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-200"></div>
              )}
              
              <Card className="mb-8 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${event.color} p-3 rounded-full text-white flex-shrink-0`}>
                      <event.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                        <Badge variant="outline" className="text-sm font-medium">
                          {event.time}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonTimeline;