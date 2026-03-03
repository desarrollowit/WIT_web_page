import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LightRays } from '../components/LightRays';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const OfficesPage = () => {
    const { t } = useTranslation();

    const offices = [
        {
            city: "Santiago, Chile",
            name: "Casa Matriz WIT",
            address: "Los Conquistadores 1700, Comuna Providencia, Región Metropolitana",
            phone: "+56990737619",
            hours: "Lun - Vie: 9:00 - 18:30",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Los+Conquistadores+1700+Providencia+Santiago"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-transparent text-black dark:text-white pt-24 pb-20 selection:bg-[#0071e3]/20 relative">

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={APPLE_TRANSITION}
                    className="space-y-8"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">{t('offices.hero_title')}</h1>
                    <p className="text-2xl text-[#86868b] font-medium max-w-2xl mx-auto">
                        {t('offices.hero_subtitle')}
                    </p>
                </motion.div>
            </section>

            {/* Offices List */}
            <section className="max-w-7xl mx-auto px-4 py-20 relative">

                <div className="grid grid-cols-1 gap-12">
                    {offices.map((office, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={APPLE_TRANSITION}
                            className="bg-[#f5f5f7] dark:bg-black/60 backdrop-blur-3xl rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row border border-transparent dark:border-white/5 shadow-xl transition-all duration-700 relative group"
                        >
                            {/* Card-specific LightRays atmosphere */}
                            <div className="absolute inset-0 pointer-events-none hidden dark:block opacity-40">
                                <LightRays />
                            </div>

                            <div className="relative z-10 w-full flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 aspect-video lg:aspect-auto">
                                    <img
                                        src={office.image}
                                        alt={office.city}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-between space-y-12">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 text-[#0071e3] font-bold tracking-tight">
                                            <MapPin className="w-5 h-5" />
                                            {office.city}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{office.name}</h2>
                                        <p className="text-xl text-[#86868b] font-medium leading-relaxed">{office.address}</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-t border-gray-200 dark:border-gray-800">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest leading-none">
                                                <Phone className="w-3 h-3" /> {t('offices.labels.phone')}
                                            </div>
                                            <p className="text-lg font-bold tracking-tight">{office.phone}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest leading-none">
                                                <Clock className="w-3 h-3" /> {t('offices.labels.hours')}
                                            </div>
                                            <p className="text-lg font-bold tracking-tight">{office.hours}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={office.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black dark:bg-white text-white dark:text-black py-4 px-10 rounded-full font-bold text-lg inline-flex items-center gap-3 w-fit hover:scale-105 transition-transform shadow-lg"
                                    >
                                        <Navigation className="w-5 h-5" /> {t('offices.labels.get_directions')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};
