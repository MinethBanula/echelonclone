import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone } from "lucide-react";

export function OrganizingCommittee() {
  const committee = [
    {
      name: "Govindu Sasanka",
      role: "Event Coordinator",
      email: "govindu@echelon25.com",
      phone: "+94 77 123 4567",
      linkedin: "#",
      image: "/placeholder.svg",
    },
    {
      name: "Lochinie Rubasinghe",
      role: "Partnership Lead",
      email: "lochinie@echelon25.com",
      phone: "+94 77 234 5678",
      linkedin: "#",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Samantha Perera",
      role: "Faculty Advisor",
      email: "samantha@mrt.ac.lk",
      phone: "+94 11 265 0301",
      linkedin: "#",
      image: "/placeholder.svg",
    },
    {
      name: "Nimal Fernando",
      role: "Industry Relations",
      email: "nimal@echelon25.com",
      phone: "+94 77 345 6789",
      linkedin: "#",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-montserrat mb-4">
            Organizing Committee
          </h2>
          <p className="text-lg text-gray-600 font-montserrat max-w-2xl mx-auto">
            Meet the dedicated team behind ECHELON 25, working tirelessly to
            create an exceptional experience for students and industry partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committee.map((member, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow border-0 shadow-md group"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-800 font-montserrat mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-semibold font-montserrat mb-4">
                  {member.role}
                </p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors font-montserrat"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors font-montserrat"
                  >
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </a>
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors font-montserrat"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
