import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background text-foreground font-outfit transition-colors duration-500 flex flex-col">
            <Header />
            <main className="flex-grow container relative z-10 px-8 md:px-16 mx-auto max-w-4xl py-32 mt-20">
                <h1 className="text-4xl md:text-5xl font-lora mb-12 text-accent">Terms of Service</h1>

                <div className="prose prose-invert max-w-none text-muted font-light leading-relaxed prose-headings:font-lora prose-headings:text-foreground prose-a:text-accent space-y-8">
                    <p className="text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">1. Agreement to Terms</h2>
                        <p>By accessing or using Eco69Lab's services and website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our network or use our products.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">2. Eco-Tech Guidelines</h2>
                        <p>Eco69Lab provides laboratory setups, ESD workspaces, and medical equipment. All products and implementations are offered under strict environmental sustainability guidelines. Users agree to utilize our tools under lawful scientific protocols.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">3. Intellectual Property</h2>
                        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Eco69Lab and its licensors. The branding, bio-tech imagery, and technological integrations are protected by international copyright laws.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">4. Liability Limitation</h2>
                        <p>In no event shall Eco69Lab, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our bio-tech and laboratory solutions.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-foreground mb-4">5. Governing Law</h2>
                        <p>These Terms shall be governed and construed in accordance with international business integration practices and localized under the laws of Plovdiv, Bulgaria, without regard to its conflict of law provisions.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
