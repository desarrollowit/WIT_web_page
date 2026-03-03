import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    ChevronRight,
    Play,
    Cpu,
    ShieldCheck,
    Zap,
    Globe,
    Smartphone,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LightRays } from '../components/LightRays';

interface ProductImage {
    url: string;
    alt: string;
    type: 'image' | 'video';
}

interface ProductPageProps {
    productName: string;
    tagline: string;
    description: string;
    price?: string;
    features: string[];
    images: ProductImage[];
    specs: { label: string; value: string }[];
}

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const ProductPage = ({
    productName,
    tagline,
    description,
    price,
    features,
    images,
    specs
}: ProductPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);


    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentImageIndex((prevIndex) => {
            let newIndex = prevIndex + newDirection;
            if (newIndex < 0) newIndex = images.length - 1;
            if (newIndex >= images.length) newIndex = 0;
            return newIndex;
        });
    };

    const getFeatureIcon = (index: number) => {
        const icons = [Cpu, ShieldCheck, Zap, Globe, Smartphone, CheckCircle2];
        const Icon = icons[index % icons.length];
        return <Icon className="w-8 h-8 text-[#0071e3]" />;
    };

    return (
        <div className="min-h-screen bg-white dark:bg-transparent text-black dark:text-white font-sans selection:bg-[#0071e3]/20 overflow-x-hidden">

            {/* Immersive Typographic Hero */}
            <section id="hero" className="relative pt-48 pb-32 px-4 overflow-hidden">
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="max-w-7xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={APPLE_TRANSITION}
                        className="space-y-4"
                    >
                        <span className="text-[#0071e3] font-semibold tracking-[0.1em] text-lg block mb-2">
                            WIT {productName}
                        </span>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8">
                            {productName}.
                        </h1>
                        <p className="text-3xl md:text-5xl text-[#86868b] font-semibold tracking-tight leading-tight max-w-5xl mx-auto">
                            {tagline}
                        </p>
                        {price && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-2xl text-[#1d1d1f] dark:text-[#f5f5f7] font-medium mt-12"
                            >
                                Desde {price}
                            </motion.p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...APPLE_TRANSITION, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
                    >
                        <button
                            onClick={() => navigate(`/request-demo?product=${productName}`)}
                            className="bg-[#0071e3] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#0077ed] transition-all flex items-center gap-2 group"
                        >
                            {t('product.template.cta_demo')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigate('/sales')}
                            className="text-[#0071e3] font-semibold text-lg hover:underline underline-offset-4 flex items-center gap-1 group"
                        >
                            {t('product.template.cta_sales')}
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Large Immersion Gallery */}
            <section id="gallery" className="pb-48 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="relative aspect-[16/10] bg-[#f5f5f7] dark:bg-transparent rounded-[3.5rem] overflow-hidden group shadow-2xl"
                    >
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentImageIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(_, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -10000) paginate(1);
                                    else if (swipe > 10000) paginate(-1);
                                }}
                                className="absolute inset-0 flex items-center justify-center p-2 md:p-4"
                            >
                                {images[currentImageIndex].type === 'image' ? (
                                    <div className="relative w-full h-full max-w-full max-h-full bg-[#f5f5f7] dark:bg-black/40 backdrop-blur-3xl border border-transparent dark:border-white/5 shadow-xl transition-all duration-700 p-1.5 rounded-[1.8rem] shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                                        <div className="w-full h-full bg-[#0a0a0a] p-[14px] rounded-[1.4rem] ring-1 ring-white/10">
                                            <div className="w-full h-full overflow-hidden rounded-[1.1rem] bg-white dark:bg-black shadow-inner border border-transparent dark:border-white/5">
                                                <img
                                                    src={images[currentImageIndex].url}
                                                    alt={images[currentImageIndex].alt}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full max-w-full max-h-full bg-[#f5f5f7] dark:bg-black/40 backdrop-blur-3xl border border-transparent dark:border-white/5 shadow-xl transition-all duration-700 p-1.5 rounded-[1.8rem] shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                                        <div className="w-full h-full bg-[#0a0a0a] p-[14px] rounded-[1.4rem] ring-1 ring-white/10">
                                            <div className="w-full h-full overflow-hidden rounded-[1.1rem] bg-black relative shadow-inner">
                                                <video
                                                    src={images[currentImageIndex].url}
                                                    className="w-full h-full object-cover"
                                                    autoPlay loop muted playsInline
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
                                                    <Play className="w-16 h-16 text-white/50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress Indicators */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10 p-2 bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-full border border-white/20">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentImageIndex ? 1 : -1);
                                        setCurrentImageIndex(index);
                                    }}
                                    className={`h-1 rounded-full transition-all duration-500 ease-apple ${index === currentImageIndex
                                        ? 'bg-[#1d1d1f] dark:bg-white w-12'
                                        : 'bg-[#1d1d1f]/20 dark:bg-white/20 w-1'}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Apple Grid Features */}
            <section id="overview" className="py-48 px-6 bg-white dark:bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="mb-32 max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
                            {t('product.template.features_title')}
                        </h2>
                        <p className="text-2xl md:text-3xl text-[#86868b] font-medium leading-tight">
                            {description}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...APPLE_TRANSITION, delay: index * 0.1 }}
                                whileHover={{ y: -15, transition: { duration: 0.4, ease: [0.21, 0.45, 0.32, 0.9] } }}
                                className="bg-white dark:bg-black/40 backdrop-blur-3xl border border-transparent dark:border-white/5 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] group flex flex-col justify-between aspect-square md:aspect-auto h-[400px] p-12 rounded-[3.5rem] overflow-hidden relative cursor-pointer"
                            >
                                {/* LightRays Background Layer for Dark Mode */}
                                <div className="absolute inset-0 pointer-events-none hidden dark:block opacity-40">
                                    <LightRays />
                                </div>

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="space-y-8">
                                        <div className="w-16 h-16 rounded-2xl bg-[#0071e3]/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0071e3]/10 transition-all duration-500">
                                            {getFeatureIcon(index)}
                                        </div>
                                        <h3 className="text-3xl font-bold tracking-tight leading-tight">{feature}</h3>
                                    </div>
                                    <div className="text-[#0071e3] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 font-semibold">
                                        Conoce más <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clean Tech Specs */}
            <section id="specs" className="py-48 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-24 border-b pb-12 border-[#f5f5f7] dark:border-[#1d1d1f]">
                        {t('product.template.specs_title')}
                    </h2>

                    <div className="space-y-12">
                        {specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col md:flex-row justify-between items-start pt-8 first:pt-0"
                            >
                                <span className="text-lg font-semibold text-[#86868b] min-w-[240px] mb-2 md:mb-0 uppercase tracking-widest text-[11px]">
                                    {spec.label}
                                </span>
                                <span className="text-xl md:text-2xl font-semibold tracking-tight leading-relaxed max-w-xl">
                                    {spec.value}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Final CTA */}
            <section className="py-64 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={APPLE_TRANSITION}
                    className="max-w-6xl mx-auto space-y-16"
                >
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
                        Hazlo real.<br />A escala WIT.
                    </h2>
                    <p className="text-2xl md:text-3xl text-[#86868b] font-medium leading-relaxed max-w-2xl mx-auto">
                        {t('product.template.cta_footer_desc')}
                    </p>
                    <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button
                            onClick={() => navigate(`/request-demo?product=${productName}`)}
                            className="w-full sm:w-auto bg-[#0071e3] text-white px-20 py-6 rounded-full font-bold text-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#0071e3]/20"
                        >
                            {t('product.template.cta_demo')}
                        </button>
                    </div>
                    <p className="text-[12px] text-[#86868b] font-medium">
                        Disponible para implementaciones corporativas y mineras a nivel global.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};
