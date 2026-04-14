import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground font-outfit transition-colors duration-500 flex flex-col">
            <Header />
            <main className="flex-grow container relative z-10 px-8 md:px-16 mx-auto max-w-4xl py-32 mt-20">
                <h1 className="text-4xl md:text-5xl font-lora mb-12 text-accent">Privacy Policy</h1>

                <div className="prose prose-invert max-w-none text-muted font-light leading-relaxed prose-headings:font-lora prose-headings:text-foreground prose-a:text-accent space-y-8">
                    <p className="text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">1. Introduction</h2>
                        <p>Welcome to Eco69Lab. We are committed to protecting your privacy and ensuring that your personal data is handled safely and responsibly in accordance with global data protection standards, including GDPR and CCPA.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">2. Data Collection</h2>
                        <p>We may collect personal identification information such as your name, email address, and phone number when you request consultancy, tools, or partnerships. We also automatically collect interaction data via standard logging metrics.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">3. Data Usage</h2>
                        <p>The information we collect is used to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 ml-6">
                            <li>Facilitate global equipment sourcing and fulfillment</li>
                            <li>Provide customer support and implementation guidance</li>
                            <li>Improve our website and product offerings</li>
                            <li>Send periodic operational emails concerning your orders</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">4. Security</h2>
                        <p>Eco69Lab takes the security of your data very seriously. We employ enterprise-grade security protocols, encryption, and secure cloud storage to protect against unauthorized access or breaches.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact our Data Protection Officer at: <a href="mailto:info@eco69lab.com" className="hover:underline">info@eco69lab.com</a></p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
