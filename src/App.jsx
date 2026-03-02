import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Star, Phone, MapPin, Mail, Instagram, ChevronRight } from 'lucide-react';
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
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import LightRays from './LightRays';
import DemoBanner from './DemoBanner';
import { cn } from '@/lib/utils';

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

  const stats = [
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 350, suffix: '+', label: 'Clients' },
    { value: 100, suffix: '%', label: 'Originality' },
    { value: 5, suffix: 'Y', label: 'Warranty' }
  ];

  const whyUsFeatures = [
    { Icon: Shield, name: "Authenticity Guaranteed", description: "All our Rolex watches are 100% authentic with full documentation", className: "col-span-3 lg:col-span-1", background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent" /> },
    { Icon: Award, name: "5-Year Warranty", description: "Extended warranty coverage for peace of mind", className: "col-span-3 lg:col-span-2", background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" /> },
    { Icon: Users, name: "Expert Staff", description: "Our team has decades of experience in luxury timepieces", className: "col-span-3 lg:col-span-2", background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-blue-500/10 to-transparent" /> },
    { Icon: Clock, name: "Full Condition", description: "Each watch is in perfect condition with 10/10 rating", className: "col-span-3 lg:col-span-1", background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_30%,#000_100%)]" /> }
  ];

  const reviews = [
    {
      name: "Maria Ionescu",
      gender: "F",
      text: "Bought a Rolex Submariner and was amazed by the full documentation included. The 5-year warranty gives me complete confidence.",
      rating: 5
    },
    {
      name: "Andrei Popescu",
      gender: "M",
      text: "Excellent service from start to finish. The Datejust 41 Blue was exactly as described with perfect condition.",
      rating: 5
    },
    {
      name: "Elena Vasilescu",
      gender: "F",
      text: "Professional staff and genuine Rolex watches. The attention to detail and full set acte cutie made this purchase perfect.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How do you ensure authenticity?",
      answer: "All Rolex watches are verified through official channels and come with full documentation including box and papers."
    },
    {
      question: "What is your warranty policy?",
      answer: "We offer a 5-year warranty on all watches with full coverage for any manufacturing defects."
    },
    {
      question: "Can I see the watch before purchasing?",
      answer: "Yes, we encourage in-person visits to inspect the watches and discuss details with our experts."
    },
    {
      question: "Do you offer financing options?",
      answer: "We provide flexible payment plans for eligible customers with proper documentation."
    },
    {
      question: "What makes your condition ratings different?",
      answer: "Our watches are carefully inspected and rated 10/10 based on originality, functionality, and cosmetic quality."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 3-5 business days within Romania with tracking information provided."
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible');
          setActiveSection(e.target.id);
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

  const services = [
    { name: "Rolex Datejust 41 - Blue", price: "14000 EUR" },
    { name: "Rolex Submariner", price: "55000 RON" }
  ];

  const valueProps = [
    { icon: Shield, title: "Authentic Watches", description: "100% Original Rolex" },
    { icon: Award, title: "5-Year Warranty", description: "Full Coverage" },
    { icon: Clock, title: "Condition 10/10", description: "Mint State" },
    { icon: Users, title: "Full Set Included", description: "Box & Papers" }
  ];

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
      <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip">
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
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="hero-blur hero-delay-1 mb-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <AnimatedShinyText className="text-sm font-medium">Premium Rolex Dealer</AnimatedShinyText>
            </div>
          </div>
          
          <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Premium Rolex Dealer
          </h1>
          
          <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Your trusted source for authentic luxury timepieces with 5-year warranty and full documentation. Experience the finest craftsmanship with guaranteed condition.
          </p>
          
          <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ShimmerButton className="shadow-2xl btn-hover" background="rgba(59, 130, 246, 1)">
              <span className="text-sm font-medium text-white">Book Appointment</span>
            </ShimmerButton>
            <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
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
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why Choose DPWatches?</h2>
            <p className="text-lg text-muted-foreground">Founded in 2016, we specialize in authentic Rolex watches with full documentation and guaranteed condition.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-on-scroll">
            {valueProps.map((prop, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
                      <prop.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-50 transition-colors">{prop.title}</h3>
                      <p className="text-sm text-muted-foreground">{prop.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Luxury Timepieces</h2>
            <p className="text-lg text-muted-foreground">Discover our premium Rolex collection with exceptional quality and service.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-50 transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Premium quality with full documentation and warranty coverage</p>
                  <Separator className="mb-5 bg-white/[0.06]" />
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent mb-6">
                    {service.price}
                  </div>
                  <ShimmerButton className="w-full shadow-2xl btn-hover" background="rgba(59, 130, 246, 1)">
                    <span className="text-sm font-medium text-white">Book Now</span>
                  </ShimmerButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why We're Different</h2>
            <p className="text-lg text-muted-foreground">Our unique advantages set us apart in the luxury watch market.</p>
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
      <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Real experiences from satisfied customers who trust us with their luxury watches.</p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card key={index} className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 card-hover mx-4 max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#3b82f6" colorTo="#3b82f6" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-blue-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="w-8 h-8 mr-3">
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
      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Answers to common questions about our luxury watch dealer services.</p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/[0.06] mb-4 rounded-xl">
                  <AccordionTrigger className="text-left py-4 px-6 hover:bg-white/[0.02] transition-colors duration-200 rounded-lg">
                    <span className="font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">Schedule a consultation or visit our location to explore our Rolex collection.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">Veris Pipera Park</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+40 734 049 253</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">office@dpwatches.ro</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-4">
                  <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.27 8.27 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z"/>
                    </svg>
                    WhatsApp
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="animate-on-scroll">
              <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <iframe 
                  src={"https://www.google.com/maps?q=" + encodeURIComponent("Veris Pipera Park") + "&output=embed"} 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
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
      <footer className="relative border-t border-white/[0.05] py-8 pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DPWatches. All rights reserved.</p>
            <div className="flex gap-3 mt-4 md:mt-0">
              <a href="https://www.instagram.com/dpwatches.ro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@dragospetcuwatches" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.27 8.27 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z"/>
                </svg>
              </a>
            </div>
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
};

export default App;
