import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Target, Globe, Shield, Zap, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const AboutPage = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    const timelineData = [
        { year: "2009", title: t('about.timeline.zap_title'), desc: t('about.timeline.zap_desc'), icon: <Zap className="w-8 h-8" /> },
        { year: "2014", title: t('about.timeline.globe_title'), desc: t('about.timeline.globe_desc'), icon: <Globe className="w-8 h-8" /> },
        { year: "2019", title: t('about.timeline.target_title'), desc: t('about.timeline.target_desc'), icon: <Target className="w-8 h-8" /> },
        { year: "2024", title: t('about.timeline.shield_title'), desc: t('about.timeline.shield_desc'), icon: <Shield className="w-8 h-8" /> }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-[#0071e3]/20 overflow-hidden">

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center px-4">
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={APPLE_TRANSITION}
                        className="space-y-4"
                    >
                        <span className="text-xl md:text-2xl font-semibold tracking-tight text-[#86868b]">{t('about.hero_tag')}</span>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-12">
                            {t('about.hero_title')} <br />
                            <span className="text-[#0071e3]">{t('about.hero_title_blue')}</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Sections */}
            <section className="relative max-w-7xl mx-auto px-4 py-64">
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#f5f5f7] dark:bg-[#1d1d1f] hidden md:block" />

                <div className="space-y-[40vh] relative">
                    {timelineData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={APPLE_TRANSITION}
                            className={`flex flex-col md:flex-row items-center gap-24 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            <div className="flex-1 text-center md:text-left space-y-6">
                                <motion.span
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ ...APPLE_TRANSITION, delay: 0.2 }}
                                    className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#d2d2d7] dark:text-[#2d2d2f] leading-none select-none tracking-tighter"
                                >
                                    {item.year}
                                </motion.span>
                                <h3 className="text-4xl md:text-6xl font-bold tracking-tight">{item.title}</h3>
                                <p className="text-2xl text-[#86868b] leading-relaxed max-w-lg mx-auto md:mx-0 font-medium tracking-tight">
                                    {item.desc}
                                </p>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative z-10 w-32 h-32 bg-white dark:bg-black/40 backdrop-blur-3xl rounded-full border border-[#f5f5f7] dark:border-white/5 flex items-center justify-center text-[#0071e3] shadow-xl transition-all duration-700"
                            >
                                {item.icon}
                            </motion.div>

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Carbon Neutral Section */}
            <section className="bg-white dark:bg-black py-64 border-t border-[#f5f5f7] dark:border-[#1d1d1f]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-24 space-y-32">
                    <div className="grid lg:grid-cols-2 gap-32 items-end">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={APPLE_TRANSITION}
                            className="space-y-16"
                        >
                            <div className="flex items-center gap-4 text-[#34c759]">
                                <Leaf className="w-10 h-10" />
                                <span className="text-2xl font-bold tracking-tight">{t('about.carbon.tag')}</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-12">
                                {t('about.carbon.title_1')} <br />
                                <span className="text-[#34c759] italic">{t('about.carbon.title_2_italic')}</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={APPLE_TRANSITION}
                            className="space-y-12"
                        >
                            <p className="text-3xl text-[#86868b] leading-tight font-medium tracking-tight">
                                {t('about.carbon.desc_main')}
                            </p>
                            <p className="text-xl text-[#86868b] leading-relaxed max-w-xl">
                                {t('about.carbon.desc_detail')}
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: t('about.carbon.stats.consumption'), value: "-15%", sub: t('about.carbon.stats.bus_fleet'), color: "text-[#34c759]" },
                            { label: t('about.carbon.stats.emissions'), value: "-22k", sub: t('about.carbon.stats.co2_tons'), color: "text-[#34c759]" },
                            { label: t('about.carbon.stats.hardware'), value: t('about.carbon.stats.recyclable'), sub: t('about.carbon.stats.recyclable_sub'), color: "text-[#34c759]" },
                            { label: t('about.carbon.stats.energy'), value: t('about.carbon.stats.sustainable'), sub: t('about.carbon.stats.house'), color: "text-[#34c759]" }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...APPLE_TRANSITION, delay: idx * 0.1 }}
                                className="bg-[#f5f5f7] dark:bg-black/40 backdrop-blur-3xl p-12 rounded-[3.5rem] space-y-4 hover:shadow-xl transition-shadow cursor-default border border-transparent dark:border-white/5 shadow-xl transition-all duration-700"
                            >
                                <span className={`text-5xl font-bold tracking-tighter block ${card.color}`}>{card.value}</span>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-[#86868b] lg:text-[#424245] uppercase tracking-widest leading-none">{card.label}</p>
                                    <p className="text-sm font-medium text-[#86868b]">{card.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-64 px-4 text-center bg-[#f5f5f7] dark:bg-transparent">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={APPLE_TRANSITION}
                    className="max-w-5xl mx-auto space-y-16"
                >
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
                        {t('about.footer_cta.title')} <br /> <span className="text-[#0071e3]">{t('about.footer_cta.title_blue')}</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link to="/contact" className="bg-[#0071e3] text-white px-16 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform hover:bg-[#0077ed] shadow-lg shadow-[#0071e3]/20">
                            {t('about.footer_cta.contact')}
                        </Link>
                        <Link to="/careers" className="text-[#0071e3] font-bold text-2xl group flex items-center gap-2">
                            {t('about.footer_cta.careers')} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};
