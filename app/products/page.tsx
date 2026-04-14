import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/lib/data";

export default function Products() {
    return (
        <div className="min-h-screen bg-background text-foreground font-outfit transition-colors duration-500 flex flex-col">
            <Header />

            {/* Products Hero */}
            <section className="relative py-32 bg-surface overflow-hidden border-b border-border">
                {/* Soft gradient orb in the background */}
                <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-lora mb-6 text-accent">
                            Products & Solutions
                        </h1>
                        <p className="text-xl text-muted font-light leading-relaxed">
                            Explore our comprehensive ecosystem of laboratory gear, sterile equipment, and advanced measurement tools engineered for a sustainable future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Bento Grid */}
            <main className="flex-grow container relative z-10 px-8 md:px-16 mx-auto max-w-7xl py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {productsData.map((product) => (
                        <Link
                            href={`/products/${product.id}`}
                            key={product.id}
                            className={`group flex flex-col justify-end bg-surface-hover/80 hover:bg-surface transition-all duration-500 border border-border rounded-[2.5rem] overflow-hidden relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] shadow-sm hover:shadow-2xl hover:shadow-accent/10 ${product.span}`}
                        >
                            {/* Feature Image Background */}
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                quality={90}
                                className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                            />

                            {/* Gradient Overlay ensuring text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

                            <div className={`relative z-20 p-10 flex flex-col justify-end h-full ${product.title === 'Electronic Production Equipment' ? 'md:items-center' : ''}`}>
                                <h2 className="text-3xl font-lora text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                    {product.title}
                                </h2>
                                <p className={`text-muted font-light leading-relaxed max-w-xl ${product.title === 'Electronic Production Equipment' ? 'md:mx-auto' : ''}`}>
                                    {product.shortDescription}
                                </p>
                                <div className="mt-8 overflow-hidden h-0 group-hover:h-6 transition-all duration-500 origin-bottom">
                                    <span className="flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                                        View Details
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
