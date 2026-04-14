import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData } from "@/lib/data";

export function generateStaticParams() {
    return productsData.map((product) => ({
        id: product.id,
    }));
}

type Props = {
    params: { id: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const product = productsData.find((p) => p.id === params.id);

    if (!product) {
        return {
            title: 'Product Not Found | Eco69Lab',
        };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eco69lab.com';

    return {
        title: `${product.title} | Eco69Lab`,
        description: product.shortDescription,
        openGraph: {
            title: `${product.title} | Eco69Lab`,
            description: product.shortDescription,
            images: [{ url: `${baseUrl}${product.image}` }],
        },
    };
}

export default function ProductDetail({ params }: Props) {
    const product = productsData.find((p) => p.id === params.id);

    if (!product) return notFound();

    return (
        <div className="min-h-screen bg-background text-foreground font-outfit transition-colors duration-500 flex flex-col">
            <Header />

            {/* Product Hero Split (Height Reduced Extra) */}
            <main className="flex-grow">
                <section className="relative w-full min-h-[35vh] lg:min-h-[40vh] flex items-center border-b border-border bg-surface overflow-hidden">
                    {/* Background Image Panel */}
                    <div className="absolute inset-0 lg:w-1/2 lg:right-0 lg:left-auto right-0 h-[25vh] lg:h-full z-0">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            quality={100}
                            priority={true}
                            className="object-cover opacity-90"
                        />
                        {/* Fade out gradients for blending */}
                        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent lg:hidden" />
                        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-surface via-surface/10 to-transparent" />
                        <div className="hidden lg:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-surface to-transparent z-10" />
                    </div>

                    <div className="container relative z-10 px-8 md:px-16 mx-auto max-w-7xl w-full h-full flex flex-col justify-end lg:justify-center pt-[20vh] lg:pt-0 pb-12 lg:pb-0 mt-8 lg:mt-0">
                        <div className="lg:w-[55%] lg:pr-16 backdrop-blur-md lg:backdrop-blur-none bg-surface/50 lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none">
                            <Link href="/products" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover mb-4 transition-colors font-medium text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                Back to Solutions
                            </Link>

                            <h1 className="text-4xl md:text-5xl font-lora mb-4 text-foreground leading-[1.1]">
                                {product.title}
                            </h1>
                            <p className="text-base md:text-lg text-muted font-light leading-relaxed border-l-2 border-accent pl-6">
                                {product.shortDescription}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Product Details Section (Pulled up with reduced top padding) */}
                <section className="pt-16 pb-24 bg-background">
                    <div className="container px-8 md:px-16 mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                            <div className="lg:col-span-7">
                                <h3 className="text-2xl font-lora mb-6 text-accent">Overview</h3>
                                <p className="text-muted font-light leading-relaxed text-lg mb-8">
                                    {product.fullDescription}
                                </p>
                            </div>

                            <div className="lg:col-span-5 lg:-mt-24 relative z-20">
                                <div className="bg-surface rounded-[2rem] p-10 border border-border shadow-2xl">
                                    <h3 className="text-2xl font-lora mb-8 text-foreground">Key Features</h3>
                                    <ul className="space-y-6">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <span className="text-lg font-light text-muted leading-tight mt-1.5">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <a
                                        href={`mailto:info@eco69lab.com?subject=Quote Request: ${encodeURIComponent(product.title)}`}
                                        className="w-full bg-accent hover:bg-accent-hover text-background px-8 py-5 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                                    >
                                        Request Quote
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
