import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Star, Phone, Mail, MapPin, Instagram } from 'lucide-react';
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
import LightRays from './LightRays';
import DemoBanner from './DemoBanner';
import { cn } from '@/lib/utils';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Collections' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 350, suffix: '+', label: 'Watches Sold' },
    { value: 2016, suffix: '', label: 'Founded' },
    { value: 5, suffix: '+', label: 'Years Warranty' },
    { value: 100, suffix: '%', label: 'Authenticity' }
  ];

  const aboutItems = [
    {
      icon: Shield,
      title: "100% Original Watches",
      description: "Authenticity guaranteed with certificate"
    },
    {
      icon: Clock,
      title: "5-Year Warranty",
      description: "Comprehensive protection for your investment"
    },
    {
      icon: Award,
      title: "Full Set Documentation",
      description: "Complete box, papers, and accessories included"
    },
    {
      icon: Users,
      title: "10/10 Condition",
      description: "Premium quality restored to factory standards"
    }
  ];

  const services = [
    {
      name: "Rolex Datejust 41 - Blue",
      description: "Authenticity guaranteed with certificate",
      price: "14,000 EUR",
      image: "/assets/cars/car_audi.jpg"
    },
    {
      name: "Rolex Submariner",
      description: "Full documentation included with 5-year warranty",
      price: "55,000 RON",
      image: "/assets/cars/car_bmw.jpg"
    }
  ];

  const whyUsFeatures = [
    {
      Icon: Shield,
      name: "Authenticity Certified",
      description: "All watches come with official Rolex certificates and authenticity guarantees",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent" />
    },
    {
      Icon: Award,
      name: "5-Year Warranty",
      description: "We stand behind every timepiece with comprehensive coverage for your investment",
      className: "col-span-3 lg:col-span-2",
      background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" />
    },
    {
      Icon: Users,
      name: "Expert Team",
      description: "Our specialists are certified in luxury watch restoration and authentication",
      className: "col-span-3 lg:col-span-2",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent" />
    },
    {
      Icon: Clock,
      name: "Quality Assurance",
      description: "Every piece undergoes rigorous inspection to ensure 10/10 condition before sale",
      className: "col-span-3 lg:col-span-1",
      background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" />
    }
  ];

  const reviews = [
    {
      name: "Maria Ionescu",
      gender: "F",
      text: "Bought a Rolex Datejust 41 - Blue with full documentation. The warranty process was smooth and transparent.",
      rating: 5
    },
    {
      name: "Andrei Popescu",
      gender: "M",
      text: "The Submariner I purchased has perfect condition. The team at DPWatches provided excellent service throughout.",
      rating: 5
    },
    {
      name: "Elena Marinescu",
      gender: "F",
      text: "Trusted DPWatches for my first Rolex purchase. Full set acte and 5-year guarantee gave me complete peace of mind.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How do you ensure watch authenticity?",
      answer: "All our Rolex watches come with official certificates from Rolex and undergo rigorous authentication checks before sale."
    },
    {
      question: "What is included in the full set documentation?",
      answer: "Each watch includes original box, papers, warranty card, and all accessories from the manufacturer."
    },
    {
      question: "Do you offer warranty coverage for purchased watches?",
      answer: "Yes, we provide a comprehensive 5-year warranty on all our Rolex collections with full documentation."
    },
    {
      question: "Can I return or exchange my Rolex purchase?",
      answer: "Returns are possible within 14 days if the watch is in original condition with all accessories included."
    },
    {
      question: "How long does delivery take for Rolex watches?",
      answer: "Standard delivery takes 3-5 business days, with express options available upon request."
    },
    {
      question: "Do you provide maintenance or servicing for purchased watches?",
      answer: "Yes, we offer professional servicing and maintenance for all Rolex watches under warranty."
    }
  ];

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
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

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'fill-blue-400 text-blue-400' : 'text-zinc-600'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <DemoBanner />
      
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">DPWatches</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={() => setIsMenuOpen(false)} 
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
          <div className="text-center">
            <div className="hero-blur hero-delay-1 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-6">
              <AnimatedShinyText className="text-sm font-medium">Premium Rolex Dealer</AnimatedShinyText>
            </div>
            
            <h1 className="hero-blur hero-delay-2 max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6">
              Your Trusted Rolex Dealer
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Premium authentic Rolex watches with 5-year guarantee, full documentation, and 10/10 condition. Since 2016.
            </p>
            
            <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ShimmerButton className="shadow-2xl btn-hover" background="rgba(59,130,246,1)">
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
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Why Choose DPWatches?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Your trusted source for authentic Rolex watches since 2016. We guarantee 100% original pieces with full documentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {aboutItems.map((item, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={120} duration={20} delay={index * 1.5} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-50 transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
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
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Premium Rolex Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Discover our curated selection of authentic Rolex timepieces with full warranty and documentation.
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
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-48 object-cover rounded-xl mb-6 img-hover"
                  />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-50 transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Separator className="mb-5 bg-white/[0.06]" />
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <ShimmerButton className="shadow-2xl btn-hover" background="rgba(59,130,246,1)">
                      <span className="text-sm font-medium text-white">Book Now</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Why Trust DPWatches?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Your peace of mind is our priority. Here's what sets us apart from other dealers.
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
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Real experiences from satisfied customers who trust DPWatches for their Rolex collections.
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover max-w-sm mx-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6">
                    <div className="flex items-center mb-4">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="w-8 h-8 mr-3">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1' : 'girl_1'}.jpg`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{review.name}</span>
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
      <section id="faq" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Find answers to common questions about our authentic Rolex watches and services.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="animate-on-scroll delay-1 border-white/[0.05] rounded-xl mb-4"
              >
                <AccordionTrigger className="text-left text-base hover:bg-white/[0.02] transition-colors duration-200 py-4 px-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready to Find Your Perfect Rolex?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Contact us today to schedule an appointment or request more information about our premium collections.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Phone</h3>
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
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Email</h3>
                      <p className="text-muted-foreground">office@dpwatches.ro</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Address</h3>
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
              
              <Button 
                variant="outline" 
                className="w-full h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
            
            <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <iframe 
                src={"https://www.google.com/maps?q=" + encodeURIComponent("Veris Pipera Park") + "&output=embed"} 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="DPWatches Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-8 pb-32">
        <Separator className="mb-8" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} DPWatches. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a 
              href="https://www.instagram.com/dpwatches.ro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block">
        <ProgressiveBlur position="bottom" height="250px" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <ProgressiveBlur position="bottom" height="150px" />
      </div>
    </>
  );
}