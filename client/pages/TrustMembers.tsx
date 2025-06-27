import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Users, Award, Clock } from "lucide-react";

const TrustMembers = () => {
  const trustMembers = [
    {
      id: "1",
      name: "Sri Rajesh Kumar",
      position: "Chairman",
      image: "/placeholder.svg",
      email: "rajesh@templetrust.org",
      phone: "+91 98765 43200",
      address: "Main Street, Village Center",
      tenure: "2020 - Present",
      experience: "15 years",
      responsibilities: [
        "Overall trust management",
        "Financial oversight",
        "Community relations",
      ],
    },
    {
      id: "2",
      name: "Sri Venkata Rao",
      position: "Secretary",
      image: "/placeholder.svg",
      email: "venkata@templetrust.org",
      phone: "+91 98765 43201",
      address: "North District",
      tenure: "2019 - Present",
      experience: "12 years",
      responsibilities: [
        "Documentation and records",
        "Meeting coordination",
        "Legal compliance",
      ],
    },
    {
      id: "3",
      name: "Sri Suresh Reddy",
      position: "Treasurer",
      image: "/placeholder.svg",
      email: "suresh@templetrust.org",
      phone: "+91 98765 43202",
      address: "Business District",
      tenure: "2018 - Present",
      experience: "18 years",
      responsibilities: [
        "Financial management",
        "Budget planning",
        "Audit coordination",
      ],
    },
    {
      id: "4",
      name: "Smt. Lakshmi Devi",
      position: "Joint Secretary",
      image: "/placeholder.svg",
      email: "lakshmi@templetrust.org",
      phone: "+91 98765 43203",
      address: "East Village",
      tenure: "2021 - Present",
      experience: "8 years",
      responsibilities: [
        "Women's committee coordination",
        "Festival organization",
        "Cultural programs",
      ],
    },
    {
      id: "5",
      name: "Sri Ramesh Naidu",
      position: "Member",
      image: "/placeholder.svg",
      email: "ramesh@templetrust.org",
      phone: "+91 98765 43204",
      address: "South Village",
      tenure: "2019 - Present",
      experience: "10 years",
      responsibilities: [
        "Infrastructure maintenance",
        "Security arrangements",
        "Vendor management",
      ],
    },
    {
      id: "6",
      name: "Sri Krishnan Pillai",
      position: "Member",
      image: "/placeholder.svg",
      email: "krishnan@templetrust.org",
      phone: "+91 98765 43205",
      address: "West Village",
      tenure: "2020 - Present",
      experience: "14 years",
      responsibilities: [
        "Ritual coordination",
        "Priest management",
        "Religious ceremonies",
      ],
    },
  ];

  const stats = [
    { label: "Total Members", value: "25", icon: Users },
    { label: "Years of Service", value: "50+", icon: Clock },
    { label: "Awards Received", value: "8", icon: Award },
    { label: "Active Committees", value: "12", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 temple-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trust Members
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated individuals who serve our community and
              preserve our sacred traditions with devotion and commitment
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 temple-gradient rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Key Trust Members
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings decades of experience in community
              service and spiritual guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {trustMembers.map((member) => (
              <Card key={member.id} className="temple-card-hover">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground">
                        {member.name}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="mt-1 temple-gradient text-white"
                      >
                        {member.position}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <Clock className="w-4 h-4 mr-1" />
                        {member.tenure}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground truncate">
                        {member.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{member.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{member.address}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1">
                      {member.responsibilities.map((responsibility, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      Experience: {member.experience} in community service
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Contact Trust Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed (Emergency only)</p>
                  <p className="mt-4 font-medium">
                    For urgent matters, contact any trust member directly
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Trust Office
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Village Temple Trust Office</p>
                  <p>Main Temple Complex</p>
                  <p>Village Center, District</p>
                  <p>Phone: +91 12345 67890</p>
                  <p>Email: info@templetrust.org</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustMembers;
