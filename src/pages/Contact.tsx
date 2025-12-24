import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactPage() {
  const { toast } = useToast();

  // Main form state - ADDED honeypot field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "general",
    message: "",
    website_url: "", // Honeypot field - hidden from users
    _submit_time: "" // Submission timestamp for bot detection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFormReady, setIsFormReady] = useState(false); // Form delay for bots

  // Add form readiness delay (2 seconds to prevent instant bot submissions)
  useEffect(() => {
    const timer = setTimeout(() => setIsFormReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Phone validation if provided
    if (formData.phone.trim() && !/^[\d\s\-\+\(\)]{10,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if form is ready (bot prevention)
    if (!isFormReady) {
      toast({
        title: "Please wait",
        description: "Form is still loading...",
        variant: "destructive"
      });
      return;
    }

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data with security fields
      const submissionData = {
        ...formData,
        _submit_time: Math.floor(Date.now() / 1000), // Current timestamp in seconds
        // Keep honeypot field as is (bots might fill it)
      };

      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours."
        });
        // Reset form - keep honeypot field in state but empty
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "general",
          message: "",
          website_url: "", // Keep honeypot empty
          _submit_time: "" // Reset timestamp
        });
        setErrors({});
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-ocean-deep text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31773.36073377661!2d55.438!3d-4.619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzcnMDguNCJTIDU1wrAyNicxNi44IkU!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
            className="w-full h-full opacity-30" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-deep/70 to-ocean-deep" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
          <MapPin className="w-12 h-12 text-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We're here to help you plan your perfect journey. Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-ocean font-medium text-sm tracking-widest uppercase">
                Send Us a Message
              </span>
              <h2 className="font-serif text-3xl font-bold text-navy mt-2 mb-8">
                We'd Love to Hear from You
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* HIDDEN HONEYPOT FIELD - BOTS WILL FILL THIS */}
                <div 
                  style={{ 
                    display: 'none', 
                    visibility: 'hidden', 
                    height: 0, 
                    overflow: 'hidden',
                    opacity: 0,
                    position: 'absolute',
                    left: '-9999px'
                  }}
                  aria-hidden="true"
                >
                  <label htmlFor="website_url" className="sr-only">
                    Leave this field empty if you're human
                  </label>
                  <input
                    type="text"
                    id="website_url"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_url}
                    onChange={(e) => setFormData({...formData, website_url: e.target.value})}
                    placeholder="Leave this field empty"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input 
                      id="name" 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border bg-card focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-border'}`}
                      placeholder="John Doe" 
                      data-testid="input-name"
                      disabled={!isFormReady}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email Address *
                    </label>
                    <input 
                      id="email" 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border bg-card focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-border'}`}
                      placeholder="john@example.com" 
                      data-testid="input-email"
                      disabled={!isFormReady}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                      Phone Number
                    </label>
                    <input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border bg-card focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-border'}`}
                      placeholder="+248 432 1080"
                      disabled={!isFormReady}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-navy mb-2">
                      Service Type
                    </label>
                    <select 
                      id="service" 
                      value={formData.serviceType} 
                      onChange={e => setFormData({...formData, serviceType: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-all"
                      disabled={!isFormReady}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="leisure">Leisure Travel</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="group">Group Booking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    required 
                    rows={5} 
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border bg-card focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-all resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
                    placeholder="Tell us about your travel plans..." 
                    data-testid="input-message"
                    disabled={!isFormReady}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {!isFormReady && (
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      Form is loading security checks... Please wait a moment.
                    </p>
                  </div>
                )}

                <Button 
                  variant="ocean" 
                  size="lg" 
                  type="submit" 
                  disabled={isSubmitting || !isFormReady}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <span className="text-ocean font-medium text-sm tracking-widest uppercase">
                Contact Information
              </span>
              <h2 className="font-serif text-3xl font-bold text-navy mt-2 mb-8">
                Visit Our Office
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Address</h3>
                    <p className="text-muted-foreground mt-1">
                      Seashell Travel (Pty) Ltd<br />
                      P.O. Box 349, VCS Building<br />
                      Victoria, Mahé, Seychelles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Phone</h3>
                    <a href="tel:+2484321080" className="text-ocean hover:text-ocean-light transition-colors">
                      +248 4321 080 | +248 4321 762 | +248 4324 361             
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Email</h3>
                    <a href="mailto:info@seashelltravel.sc" className="text-ocean hover:text-ocean-light transition-colors">
                      info@seashelltravel.sc
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Office Hours</h3>
                    <p className="text-muted-foreground mt-1">
                      Monday - Friday: 8:00 AM - 4:30 PM<br />
                      Saturday: 8:30 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-ocean mt-2 font-medium">
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 p-6 bg-ocean-deep rounded-2xl text-primary-foreground">
                <h3 className="font-semibold mb-4">Follow Us for Travel Tips</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com/sstsey" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}