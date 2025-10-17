import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-form-id";

export const ContactSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);

        // simple validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus({ type: "error", message: "Please fill all fields." });
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setStatus({ type: "success", message: "Message sent — I will get back to you soon." });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                const data = await res.json().catch(() => ({}));
                setStatus({ type: "error", message: data.error || "Failed to send message." });
            }
        } catch (err) {
            setStatus({ type: "error", message: "Network error, please try again later." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? Feel free to reach out! I'm always open to discussing
                    new opportunities, collaborations, or simply connecting with like-minded individuals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:mejaouelmalekt1@gmail.com" className="text-muted-foreground transition-colors">
                                        mejaouelmalekt1@gmail.com
                                    </a>
                                </div>
                            </div>

                             <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Upwork</h4>
                                    <a href="https://www.upwork.com/freelancers/~0186d0575d04bf2a32?mp_source=share" className="text-muted-foreground transition-colors text-align-center">
                                            Malek Mejaouel
                                    </a>
                                </div>
                            </div>
                            

                        

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+21694231325" className="text-muted-foreground transition-colors">
                                        +216 94231325
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">Tunis, Tunisia</p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="mb-3">Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://www.linkedin.com/in/malek-mejaouel/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                        <Linkedin />
                                    </a>
                                    <a href="https://www.facebook.com/malek.mejaouel.2025" target="_blank" rel="noreferrer" aria-label="Facebook">
                                        <Facebook />
                                    </a>
                                    <a href="https://www.instagram.com/malek_mejaouel1/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                        <Instagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-card p-6 rounded-lg shadow-xs">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-3 py-2 rounded-md border border-border bg-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-2 rounded-md border border-border bg-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Message</label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-3 py-2 rounded-md border border-border bg-transparent min-h-[120px]"
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="cosmic-button px-6 py-2 inline-flex items-center gap-2"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                    {status && (
                                        <div className={`text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                                            {status.message}
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};