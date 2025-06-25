import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
  Users,
  Lightbulb,
  Play,
  Network,
  Cog,
  Cpu,
  Wrench,
  Zap,
  Plane,
  Heart,
  Bot,
  Ship,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { OrganizingCommittee } from "@/components/organizing-committee";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const opportunities = [
    { icon: Bot, title: "Robotics & Automation" },
    { icon: Cog, title: "Manufacturing" },
    { icon: Zap, title: "Thermal & Fluid" },
    { icon: Wrench, title: "Product Design" },
    { icon: Plane, title: "Aerospace" },
    { icon: Heart, title: "Biomedical" },
    { icon: Cpu, title: "Mechatronics" },
    { icon: Ship, title: "Marine Engineering" },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Meet Top Recruiters",
      description:
        "Connect with leading companies actively seeking mechanical engineering talent.",
    },
    {
      icon: Lightbulb,
      title: "Industry Insights & Trends",
      description:
        "Gain valuable knowledge about the latest developments in mechanical engineering.",
    },
    {
      icon: Play,
      title: "Live Demos & Q&A",
      description:
        "Experience hands-on demonstrations and interactive sessions with industry experts.",
    },
    {
      icon: Network,
      title: "Build Your Network",
      description:
        "Establish meaningful professional connections that can shape your career.",
    },
  ];

  const agenda = [
    {
      time: "8:00 AM",
      event: "Doors Open",
      description: "Registration & Welcome",
    },
    {
      time: "9:00 AM",
      event: "Keynote Address",
      description: "Industry Vision 2025",
    },
    {
      time: "10:00 AM",
      event: "Fair Opens",
      description: "Company Booths Active",
    },
    {
      time: "12:00 PM",
      event: "Panel Discussion",
      description: "Future of Engineering",
    },
    {
      time: "2:00 PM",
      event: "Networking Lunch",
      description: "Connect & Collaborate",
    },
    {
      time: "4:00 PM",
      event: "Closing Ceremony",
      description: "Awards & Recognition",
    },
  ];

  const faqs = [
    {
      question: "How do I register for ECHELON 25?",
      answer:
        "Registration is free for all UoM students. Click the 'Register Now' button and fill out the online form with your student details.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, ECHELON 25 is completely free for all University of Moratuwa students. Just bring your student ID for verification.",
    },
    {
      question: "What should I bring to the fair?",
      answer:
        "Bring multiple copies of your resume, your student ID, and dress professionally. A notepad for taking notes during sessions is also recommended.",
    },
    {
      question: "Who is eligible to attend?",
      answer:
        "All University of Moratuwa students are welcome, with special focus on Mechanical Engineering undergraduates and recent graduates.",
    },
    {
      question: "Will there be refreshments provided?",
      answer:
        "Yes, complimentary refreshments will be available throughout the day, including a networking lunch session.",
    },
  ];

  const partners = [
    "TechCorp",
    "InnovateMech",
    "FutureTech",
    "EngineerPro",
    "MechSolutions",
    "AutoTech",
  ];

  const stats = [
    { number: "50+", label: "Industry Partners", icon: Target },
    { number: "500+", label: "Expected Students", icon: Users },
    { number: "20+", label: "Tech Sessions", icon: TrendingUp },
    { number: "1", label: "Unforgettable Day", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Cleaner Design */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Minimal Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFA600' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
        </div>

        <div className="w-full mx-auto gap-12 flex flex-col justify-center items-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center w-fit mx-auto px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold font-montserrat">
              <Sparkles className="h-4 w-4 mr-2" />
              First Ever Mechanical Engineering Career Fair
            </div>

            <h1 className="text-center text-6xl md:text-8xl font-bold text-gray-800 font-montserrat leading-tight">
              ECHELON
              <span className="ml-4 text-primary">25</span>
            </h1>

            <div className="space-y-6">
              <h2 className="text-2xl text-center md:text-3xl text-gray-700 font-montserrat">
                Where Innovation Meets Opportunity
              </h2>

              {/* Highlighted Date and Venue */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/20 w-fit mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-lg font-montserrat">
                  <div className="flex items-center gap-3 text-primary font-bold">
                    <Calendar className="h-6 w-6" />
                    <span className="text-xl">17 July 2025</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center gap-3 text-gray-700 font-semibold">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Mechanical Engineering Dept. UoM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-fit mx-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold font-montserrat rounded-lg shadow-lg group"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold font-montserrat rounded-lg"
              >
                View Partners
              </Button>
            </div>
          </div>

          {/* Hero Illustration - Simplified */}
          {/* <div
            className="hidden lg:block animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-32 w-32 mx-auto mb-6 text-primary" />
                  <p className="font-montserrat text-primary/80 font-semibold text-lg">
                    Connecting Talent with Innovation
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Stats Section - New Separate Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 font-montserrat mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-montserrat font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-montserrat">
              What is ECHELON 25?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-montserrat">
              Welcome to ECHELON 25, the inaugural career fair organized by the
              Department of Mechanical Engineering, University of Moratuwa. This
              event brings together passionate, skilled mechanical engineering
              students and visionary companies leading innovation across
              industries. ECHELON 25 is more than a career fair — it’s a
              celebration of talent, ambition, and collaboration. Join us on
              17th June 2025 to unlock new opportunities, build meaningful
              connections, and take bold steps toward success.
            </p>
          </div>
          <Image
            src="/logo-banner.jpg"
            alt="Logo banner"
            width={500}
            height={500}
            className="rounded-2xl w-full h-full object-cover"
          />
          {/* <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-8 h-80 flex items-center justify-center">
            <div className="text-center text-primary">
              <Cog
                className="h-32 w-32 mx-auto mb-4 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <p className="font-montserrat font-semibold">
                Engineering Excellence
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 font-montserrat">
            Engineering Opportunities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-0 shadow-md"
              >
                <CardContent className="pt-8 pb-6">
                  <opportunity.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 font-montserrat">
                    {opportunity.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 font-montserrat">
            Why Attend?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 font-montserrat">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-montserrat">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Timeline */}
      <section id="agenda" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 font-montserrat">
            Event Agenda
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agenda.map((item, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-primary hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-bold text-primary font-montserrat">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 font-montserrat">
                    {item.event}
                  </h3>
                  <p className="text-gray-600 text-sm font-montserrat">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      <OrganizingCommittee />

      {/* Partners Teaser */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 font-montserrat">
            Our Industry Partners
          </h2>
          <Carousel className="mb-12">
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-center justify-center p-8">
                      <div className="text-2xl font-bold text-gray-400 hover:text-primary transition-colors font-montserrat">
                        {partner}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Link href="/partners">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-semibold"
            >
              Learn about partnership opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 font-montserrat">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary font-montserrat">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed font-montserrat">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
