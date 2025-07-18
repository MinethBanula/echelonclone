import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Phone } from "lucide-react";

export function OrganizingCommittee() {
  const committee = [
    {
      name: "Janidu Sheahn",
      role: "Finance Committee Lead",
      email: "janidushehan09@gmail.com",
      phone: "+94 77 368 9298",
      linkedin:
        "https://www.linkedin.com/in/janidu-shehan-0a9076200/?originalSubdomain=lk",
      image: "/committee/janidu.jpg",
    },
    {
      name: "Lochinie Rubasinghe",
      role: "Company Coordination Committee Lead",
      email: "lochinie510@gmail.com",
      phone: "+94 77 310 3298",
      linkedin: "https://lk.linkedin.com/in/lochinie-rubasinghe",
      image: "/committee/lochinie.jpg",
    },
    {
      name: "Asiri Sandakelum",
      role: "Organizing Committee Lead",
      email: "sadakelumasiri@gmail.com",
      phone: "+94 71 933 9051",
      linkedin:
        "https://www.linkedin.com/in/asiri-sandakelum-b5170a234/?originalSubdomain=lk",
      image: "/committee/asiri.jpg",
    },
    {
      name: "Govindu Sasanka",
      role: "Organizing Committee Lead",
      email: "govindusasanka2017@gmail.com",
      phone: "+94 70 313 4665",
      linkedin:
        "https://www.linkedin.com/in/govindu-sasanka-354161235/?trk=public_profile_browsemap&originalSubdomain=lk",
      image: "/committee/govindu.jpg",
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
              className="bg-gradient-to-br from-white via-gray-50 to-orange-50 border border-orange-100 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-200 hover:-translate-y-2 flex flex-col items-center text-center group"
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
