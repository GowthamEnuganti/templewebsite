import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import {
  Building2,
  Users,
  Heart,
  Landmark,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  const stats = [
    { number: "12", label: "Sacred Temples", icon: Building2 },
    { number: "25", label: "Trust Members", icon: Users },
    { number: "50+", label: "Years of Service", icon: Calendar },
    { number: "1000+", label: "Community Members", icon: Heart },
  ];

  const featuredTemples = [
    {
      name: "Sri Venkateswara Temple",
      image: "/placeholder.svg",
      deity: "Lord Venkateswara",
      location: "Main Village Center",
    },
    {
      name: "Hanuman Mandir",
      image: "/placeholder.svg",
      deity: "Lord Hanuman",
      location: "North District",
    },
    {
      name: "Shiva Temple",
      image: "/placeholder.svg",
      deity: "Lord Shiva",
      location: "East Village",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 temple-hero-bg overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Village Temple Trust
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Preserving Sacred Heritage, Serving Our Community with Devotion
                and Unity
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/temples">
                    Explore Our Temples
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/trust-members">Meet Our Trust</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 border-border hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 temple-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Sacred Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over five decades, our temple trust has been the spiritual
                heart of our village community. We are dedicated to preserving
                ancient traditions while fostering unity, devotion, and service
                among all community members.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 temple-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-foreground">
                    Maintain and preserve sacred temple architecture and
                    traditions
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 temple-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-foreground">
                    Organize spiritual events and festivals that bring our
                    community together
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 temple-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-foreground">
                    Support charitable activities and community welfare programs
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Temple Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 temple-gradient rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Temples */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Sacred Temples in Our Village
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the spiritual heritage preserved in our ancient temples,
              each with its unique history and significance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredTemples.map((temple, index) => (
              <Card key={index} className="temple-card-hover overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{temple.name}</h3>
                    <p className="text-sm opacity-90">{temple.deity}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {temple.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/temples">
                View All Temples
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 lg:p-12 temple-gradient rounded-2xl text-white">
            <Landmark className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Support Our Sacred Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your contributions help us maintain our temples, organize
              festivals, and serve our community better
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/banking">View Banking Details</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/trust-members">Contact Trust Members</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 temple-gradient rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Temple Trust</h3>
                  <p className="text-sm text-muted-foreground">
                    Serving Our Community
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Preserving sacred traditions and fostering community unity for
                over 50 years.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                <Link
                  to="/temples"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Temples
                </Link>
                <Link
                  to="/trust-members"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Trust Members
                </Link>
                <Link
                  to="/banking"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Banking Details
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Village Temple Trust</p>
                <p>Main Temple Complex</p>
                <p>Village Center, District</p>
                <p>Phone: +91 12345 67890</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Village Temple Trust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
