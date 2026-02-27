import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Star, Phone, MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Collection' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize();

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { value: 350, suffix: '+', label: 'Authentic Watches' },
    { value: 2016, suffix: '', label: 'Founded' },
    { value: 5, suffix: '+', label: 'Years Warranty' },
    { value: 100, suffix: '%', label: 'Authenticity' }
  ];

  const services = [
    {
      name: "Rolex Datejust 41 - Blue",
      description: "Original blue dial with full set documents",
      price: "14000 EUR",
      icon: Shield
    },
    {
      name: "Rolex Submariner",
      description: "Certified original with complete paperwork",
      price: "55000 RON",
      icon: Award
    }
  ];

  const whyUsFeatures = [
    { 
      Icon: Shield, 
      name: "Authenticity Guaranteed", 
      description: "All watches are 100% original with official Rolex certification",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent" />
    },
    { 
      Icon: Award, 
      name: "5-Year Warranty", 
      description: "Full protection for your investment with extended warranty coverage",
      className: "col-span-3 lg:col-span-2", 
      background: <DotPattern opacity={0.04} className="absolute inset-0" />
    },
    { 
      Icon: Users, 
      name: "Condition 10/10", 
      description: "Every watch is professionally inspected and maintained to perfect condition",
      className: "col-span-3 lg:col-span-2", 
      background: <DotPattern opacity={0.04} className="absolute inset-0" />
    },
    { 
      Icon: Clock, 
      name: "Full Set Included", 
      description: "Complete box, papers, certificates, and documentation with each purchase",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-blue-500/10 to-transparent" />
    }
  ];

  const reviews = [
    {
      name: "Maria Ionescu",
      gender: "F",
      text: "I bought the Rolex Datejust 41 and was amazed by the full set documents. The warranty gives me peace of mind.",
      rating: 5
    },
    {
      name: "Andrei Popescu",
      gender: "M",
      text: "The Submariner arrived in perfect condition with all papers. Excellent service from DPWatches!",
      rating: 5
    },
    {
      name: "Elena Vasilescu",
      gender: "F",
      text: "I've owned multiple watches from DPWatches, and each time the authenticity and documentation were flawless.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How do you ensure watch authenticity?",
      answer: "All our watches come from verified Rolex dealers and are authenticated by certified experts before sale."
    },
    {
      question: "What does 'condition 10/10' mean?",
      answer: "Every watch is professionally inspected and maintained to the highest standards, ensuring perfect appearance and function."
    },
    {
      question: "Do you provide warranty on purchases?",
      answer: "Yes, all watches come with a 5-year warranty covering manufacturing defects and service issues."
    },
    {
      question: "What documents are included with each watch?",
      answer: "Each purchase includes the original box, papers, certificates, and full documentation from Rolex."
    },
    {
      question: "Can I visit your store in person?",
      answer: "Yes, you can schedule an appointment at our Veris Pipera Park location for a personal viewing of our collection."
    },
    {
      question: "How do I know if my watch is genuine?",
      answer: "We provide official authentication certificates and full documentation to verify the authenticity of every Rolex purchased."
    }
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <DemoBanner />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">DPWatches</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); handleScrollTo(link.id); }}
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); handleScrollTo(link.id); setIsMenuOpen(false); }}
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip"
      >
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#3b82f6" 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-blur hero-delay-1 mb-6">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
                <AnimatedShinyText className="text-sm font-medium">Premium Rolex Dealer</AnimatedShinyText>
              </div>
            </div>
            
            <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6">
              Authentic Rolex Watches Since 2016
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Your trusted dealer for 100% authentic luxury timepieces with full documentation and 5-year warranty. Experience the finest craftsmanship in Veris.
            </p>
            
            <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ShimmerButton className="shadow-2xl btn-hover" background="rgba(59, 130, 246, 1)">
                <span className="text-sm font-medium text-white">Book Appointment</span>
              </ShimmerButton>
              
              <Button 
                variant="outline" 
                className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
            
            <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                  <NumberTicker 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-4xl font-black bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(59,130,246,0.6)]" 
                  />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Trusted by Watch Enthusiasts Since 2016</h2>
            <p className="text-lg text-muted-foreground">
              DPWatches is your premier destination for authentic luxury watches in Romania. We provide only genuine Rolex models with full documentation and warranty coverage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Authentic Rolex Watches | 100% guaranteed originals",
              "5-Year Warranty | Full coverage protection",
              "Condition 10/10 | Mint condition watches",
              "Full Set Documents | Box, papers, certificates included"
            ].map((item, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-50 transition-colors">{item}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Premium Rolex Collections</h2>
            <p className="text-lg text-muted-foreground">
              Discover our curated selection of authentic luxury timepieces with full documentation and warranty coverage.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
                      <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-50 transition-colors mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <Separator className="mb-5 bg-white/[0.06]" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <ShimmerButton className="h-10 px-4 rounded-full btn-hover" background="rgba(59, 130, 246, 1)">
                      <span className="text-xs font-medium text-white">Book Now</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why-Us Section */}
      <section id="why-us" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Why Choose DPWatches?</h2>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for authentic luxury watches with unparalleled service and warranty coverage.
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index} 
                className={cn(feature.className, "hover:border-blue-500/20")} 
                background={feature.background}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
                    <feature.Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-50 transition-colors">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from satisfied customers who trusted us with their luxury timepiece investments.
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover max-w-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-blue-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1.jpg' : 'girl_1.jpg'}`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{review.name}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about purchasing authentic Rolex watches with full documentation.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="animate-on-scroll delay-1 border-b border-white/[0.05] py-6"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-blue-400 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Visit Our Store or Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Schedule an appointment at our Veris location or reach out for more information about our authentic Rolex collection.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Call Us</h3>
                      <p className="text-muted-foreground">+40 734 049 253</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">WhatsApp</h3>
                      <p className="text-muted-foreground">+40 734 049 253</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message on WhatsApp
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Email Us</h3>
                      <p className="text-muted-foreground">office@dpwatches.ro</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Visit Us</h3>
                      <p className="text-muted-foreground">Veris Pipera Park</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </Card>
            </div>
            
            <div>
              <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src={"https://www.google.com/maps?q=" + encodeURIComponent("Veris Pipera Park") + "&output=embed"}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] py-8 pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} DPWatches. All rights reserved.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/dpwatches.ro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-blue-500/20 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
};

export default App;
