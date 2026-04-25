import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import ctaBgContact from "@/assets/cta-bg-contact.jpg";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.rengoautomotives.com/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmitted(true);
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    } catch (error) {
      console.error('Contact error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <section className="relative py-16 overflow-hidden scroll-fade">
        <img src={ctaBgContact} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-4xl text-secondary-foreground">Contact Us</h1>
          <p className="text-muted-foreground text-sm mt-2 font-body normal-case tracking-normal font-normal">Home / Contact</p>
        </div>
      </section>

      <section className="container py-12 scroll-fade">
        <div className="grid md:grid-cols-3 gap-8 mb-12 scroll-fade">
          {[
            { icon: Phone, title: "Phone", lines: ["+91 9929095035", "+91 8930245250"] },
            { icon: Mail, title: "Email", lines: ["rengoautomotive@gmail.com"] },
            { icon: MapPin, title: "Address", lines: ["A-348-349 (S), Phool Bagh", "RIICO Industrial Area, Bhiwadi 301019, Rajasthan"] },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border p-6 rounded-sm text-center">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg text-foreground mb-2">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="text-sm text-muted-foreground">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 scroll-fade">
          <div>
            <h2 className="text-2xl text-foreground mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground text-sm mb-6 font-body normal-case tracking-normal font-normal">
              Have a question about our fuel pumps? Need help finding the right part for your vehicle? Fill out the form and our team will get back to you within 24 hours.
            </p>
            {submitted ? (
              <div className="bg-accent border border-border p-6 rounded-sm text-center">
                <p className="text-foreground font-semibold">Thank you! Your message has been sent.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary font-bold uppercase text-xs hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-border bg-card px-4 py-2.5 text-sm text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                  <input 
                    required 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-border bg-card px-4 py-2.5 text-sm text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required 
                    name="mobile"
                    type="tel"
                    placeholder="Mobile Number" 
                    value={formData.mobile}
                    onChange={handleChange}
                    className="border border-border bg-card px-4 py-2.5 text-sm text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                  <input 
                    required 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="border border-border bg-card px-4 py-2.5 text-sm text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                <textarea 
                  required 
                  name="message"
                  rows={5} 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-border bg-card px-4 py-2.5 text-sm text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" 
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground px-8 py-3 font-semibold uppercase text-sm hover:bg-primary/90 transition-colors rounded-sm font-heading disabled:opacity-50 w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl text-foreground mb-2">Business Hours</h2>
            <div className="bg-card border border-border p-6 rounded-sm mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold text-foreground normal-case tracking-normal font-heading">Working Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  ["Monday - Saturday", "9:00 AM - 7:00 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-foreground">{day}</span>
                    <span className="text-muted-foreground">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="scroll-fade">
        <div className="container py-12">
          <h2 className="text-2xl text-foreground mb-6 text-center">Our Location</h2>
          <div className="w-full h-[400px] rounded-sm overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.567!2d76.8612!3d28.2096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d47000000000%3A0x0!2sRIICO%20Industrial%20Area%2C%20Bhiwadi%2C%20Rajasthan%20301019!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rengo Automotive Location - RIICO Industrial Area, Bhiwadi"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
