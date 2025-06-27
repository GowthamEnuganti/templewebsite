import Navigation from "@/components/Navigation";
import TempleCard from "@/components/TempleCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const Temples = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDeity, setFilterDeity] = useState("all");

  const temples = [
    {
      id: "1",
      name: "Sri Venkateswara Temple",
      description:
        "The main temple of our village, dedicated to Lord Venkateswara. This ancient temple has been the spiritual center of our community for over 200 years, featuring beautiful Dravidian architecture.",
      image: "/placeholder.svg",
      location: "Main Village Center, Near Market Square",
      timings: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
      deity: "Lord Venkateswara",
      contact: "+91 98765 43210",
      established: "1824",
    },
    {
      id: "2",
      name: "Hanuman Mandir",
      description:
        "A powerful temple dedicated to Lord Hanuman, known for its miraculous healing powers. Devotees from neighboring villages visit regularly for prayers and blessings.",
      image: "/placeholder.svg",
      location: "North District, Near Government School",
      timings: "6:00 AM - 11:00 AM, 5:00 PM - 8:00 PM",
      deity: "Lord Hanuman",
      contact: "+91 98765 43211",
      established: "1889",
    },
    {
      id: "3",
      name: "Shiva Temple",
      description:
        "An ancient Shiva temple with a sacred lingam that is believed to be self-manifested. The temple features intricate stone carvings and hosts grand celebrations during Maha Shivaratri.",
      image: "/placeholder.svg",
      location: "East Village, Hilltop Location",
      timings: "4:30 AM - 12:30 PM, 3:30 PM - 9:30 PM",
      deity: "Lord Shiva",
      contact: "+91 98765 43212",
      established: "1756",
    },
    {
      id: "4",
      name: "Devi Mata Temple",
      description:
        "Sacred temple dedicated to the Divine Mother, especially popular among women devotees. The temple is known for its beautiful gardens and peaceful atmosphere.",
      image: "/placeholder.svg",
      location: "West Village, Near River Bank",
      timings: "5:30 AM - 11:30 AM, 4:30 PM - 8:30 PM",
      deity: "Devi Mata",
      contact: "+91 98765 43213",
      established: "1901",
    },
    {
      id: "5",
      name: "Ganesha Temple",
      description:
        "Small but significant temple dedicated to Lord Ganesha, the remover of obstacles. This temple is the first stop for devotees beginning any new venture or celebration.",
      image: "/placeholder.svg",
      location: "South Village, Community Center",
      timings: "6:00 AM - 10:00 AM, 6:00 PM - 8:00 PM",
      deity: "Lord Ganesha",
      contact: "+91 98765 43214",
      established: "1923",
    },
    {
      id: "6",
      name: "Ram Mandir",
      description:
        "Beautiful temple dedicated to Lord Rama, featuring murals depicting scenes from the Ramayana. The temple hosts annual Ram Navami celebrations with great devotion.",
      image: "/placeholder.svg",
      location: "Central Village, Near Bus Stand",
      timings: "5:00 AM - 11:00 AM, 5:00 PM - 9:00 PM",
      deity: "Lord Rama",
      contact: "+91 98765 43215",
      established: "1867",
    },
    {
      id: "7",
      name: "Krishna Temple",
      description:
        "Charming temple dedicated to Lord Krishna, popular among youth and families. The temple is known for its vibrant Janmashtami celebrations and cultural programs.",
      image: "/placeholder.svg",
      location: "North-East Village, Garden Area",
      timings: "5:30 AM - 11:30 AM, 4:00 PM - 8:00 PM",
      deity: "Lord Krishna",
      contact: "+91 98765 43216",
      established: "1895",
    },
    {
      id: "8",
      name: "Lakshmi Temple",
      description:
        "Prosperous temple dedicated to Goddess Lakshmi, believed to bring wealth and prosperity to devotees. The temple is especially crowded during Diwali and Dhanteras.",
      image: "/placeholder.svg",
      location: "Business District, Main Road",
      timings: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM",
      deity: "Goddess Lakshmi",
      contact: "+91 98765 43217",
      established: "1912",
    },
    {
      id: "9",
      name: "Saraswati Temple",
      description:
        "Educational temple dedicated to Goddess Saraswati, patron of learning and arts. Students regularly visit for blessings, especially during exam seasons.",
      image: "/placeholder.svg",
      location: "Near College Campus, Academic Area",
      timings: "5:00 AM - 10:00 AM, 5:00 PM - 7:00 PM",
      deity: "Goddess Saraswati",
      contact: "+91 98765 43218",
      established: "1934",
    },
    {
      id: "10",
      name: "Murugan Temple",
      description:
        "Powerful temple dedicated to Lord Murugan, known for its healing powers and protection. The temple features traditional South Indian architecture with a beautiful gopuram.",
      image: "/placeholder.svg",
      location: "Hill Area, Scenic Location",
      timings: "4:00 AM - 11:00 AM, 4:00 PM - 8:00 PM",
      deity: "Lord Murugan",
      contact: "+91 98765 43219",
      established: "1878",
    },
    {
      id: "11",
      name: "Kali Temple",
      description:
        "Ancient temple dedicated to Goddess Kali, known for its powerful energy and protection rituals. The temple hosts special ceremonies during Navaratri.",
      image: "/placeholder.svg",
      location: "Forest Edge, Sacred Grove",
      timings: "5:00 AM - 11:00 AM, 5:00 PM - 8:00 PM",
      deity: "Goddess Kali",
      contact: "+91 98765 43220",
      established: "1743",
    },
    {
      id: "12",
      name: "Ayyappa Temple",
      description:
        "Serene temple dedicated to Lord Ayyappa, popular among devotees following the Sabarimala pilgrimage tradition. The temple maintains strict traditional practices.",
      image: "/placeholder.svg",
      location: "Quiet Valley, Meditation Area",
      timings: "4:30 AM - 10:30 AM, 5:30 PM - 7:30 PM",
      deity: "Lord Ayyappa",
      contact: "+91 98765 43221",
      established: "1956",
    },
  ];

  const deities = [
    "all",
    ...Array.from(new Set(temples.map((temple) => temple.deity))),
  ];

  const filteredTemples = temples.filter((temple) => {
    const matchesSearch = temple.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDeity = filterDeity === "all" || temple.deity === filterDeity;
    return matchesSearch && matchesDeity;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 temple-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sacred Temples of Our Village
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the spiritual heritage preserved in our 12 ancient
              temples, each with its unique history, traditions, and divine
              significance
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search temples..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={filterDeity} onValueChange={setFilterDeity}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by Deity" />
                </SelectTrigger>
                <SelectContent>
                  {deities.map((deity) => (
                    <SelectItem key={deity} value={deity}>
                      {deity === "all" ? "All Deities" : deity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {(searchTerm || filterDeity !== "all") && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setFilterDeity("all");
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Temples Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTemples.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTemples.map((temple) => (
                  <TempleCard key={temple.id} {...temple} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground">
                  Showing {filteredTemples.length} of {temples.length} temples
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No temples found matching your search criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setFilterDeity("all");
                }}
                className="mt-4"
              >
                View All Temples
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Plan Your Temple Visit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 temple-gradient rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-foreground">
                Check Temple Timings
              </h3>
              <p className="text-muted-foreground text-sm">
                Each temple has specific opening hours. Please check individual
                timings before visiting.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 temple-gradient rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-foreground">Dress Modestly</h3>
              <p className="text-muted-foreground text-sm">
                Please dress appropriately and follow traditional customs when
                visiting our sacred spaces.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 temple-gradient rounded-lg flex items-center justify-center mx-auto">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-foreground">
                Contact for Info
              </h3>
              <p className="text-muted-foreground text-sm">
                For special ceremonies or questions, contact the temple directly
                using the provided numbers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Temples;
