import { motion } from 'framer-motion';
import { Sparkles, Globe, Heart, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const CulturePage = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white dark:bg-transparent text-black dark:text-white font-sans selection:bg-[#0071e3]/20 overflow-x-hidden">
            {/* Typographic Hero */}
            <section className="pt-48 pb-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={APPLE_TRANSITION}
                        className="space-y-4 mb-24"
                    >
                        <span className="text-[#0071e3] font-bold tracking-[0.2em] uppercase text-sm">{t('culture.tag')}</span>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-12">
                            {t('culture.hero_1')} <br />
                            {t('culture.hero_2')} <br />
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="text-[#f5f5f7] dark:text-[#1d1d1f]"
                            >
                                {t('culture.hero_infinite')}
                            </motion.span>
                        </h1>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={APPLE_TRANSITION}
                            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                        >
                            {t('culture.empowerment_title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...APPLE_TRANSITION, delay: 0.1 }}
                            className="text-xl md:text-2xl text-[#86868b] leading-relaxed font-medium"
                        >
                            {t('culture.empowerment_desc')}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Growth Stat Section */}
            <section className="bg-[#f5f5f7] dark:bg-transparent py-48">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24 space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={APPLE_TRANSITION}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                        >
                            {t('culture.stats_title')} <br /> <span className="italic font-serif text-[#0071e3]">{t('culture.stats_italic')}</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...APPLE_TRANSITION, delay: 0.1 }}
                            className="text-xl text-[#86868b]"
                        >
                            {t('culture.stats_desc')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: t('culture.stats_labels.women'), value: "38%", sub: t('culture.stats_labels.vs_2023'), color: "text-[#af52de]" },
                            { label: t('culture.stats_labels.remote'), value: "100%", sub: t('culture.stats_labels.freedom'), color: "text-[#0071e3]" },
                            { label: t('culture.stats_labels.diversity'), value: "15+", sub: t('culture.stats_labels.regions'), color: "text-[#34c759]" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.94 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...APPLE_TRANSITION, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-black/40 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-transparent dark:border-white/5 flex flex-col items-center text-center space-y-4 shadow-xl transition-all duration-700 shadow-sm hover:shadow-2xl"
                            >
                                <span className="text-sm font-bold uppercase tracking-widest text-[#86868b]">{stat.label}</span>
                                <span className={`text-7xl font-black tracking-tighter ${stat.color}`}>{stat.value}</span>
                                <span className="text-lg font-medium text-[#86868b] italic">{stat.sub}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Blocks */}
            <section className="py-48 max-w-7xl mx-auto px-4 space-y-48">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4 text-[#ff9500]">
                            <Sparkles className="w-8 h-8" />
                            <span className="text-xl font-bold tracking-tight">{t('culture.blocks.innovation_tag')}</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                            {t('culture.blocks.innovation_title')}
                        </h3>
                        <p className="text-xl text-[#86868b] leading-relaxed font-medium">
                            {t('culture.blocks.innovation_desc')}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="aspect-[4/5] bg-[#f5f5f7] dark:bg-black/40 border border-transparent dark:border-white/5 rounded-[4rem] overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff9500]/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Zap className="w-64 h-64 group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-24 items-center md:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="md:order-2 space-y-12"
                    >
                        <div className="flex items-center gap-4 text-[#0071e3]">
                            <Heart className="w-8 h-8" />
                            <span className="text-xl font-bold tracking-tight">{t('culture.blocks.wellbeing_tag')}</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                            {t('culture.blocks.wellbeing_title')}
                        </h3>
                        <p className="text-xl text-[#86868b] leading-relaxed font-medium">
                            {t('culture.blocks.wellbeing_desc')}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={APPLE_TRANSITION}
                        className="md:order-1 aspect-[4/5] bg-[#f5f5f7] dark:bg-black/40 border border-transparent dark:border-white/5 rounded-[4rem] overflow-hidden relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0071e3]/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Globe className="w-64 h-64 group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final Statement */}
            <section className="py-64 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={APPLE_TRANSITION}
                    className="max-w-5xl mx-auto space-y-12"
                >
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-12">
                        {t('culture.final.title')}
                    </h2>
                    <p className="text-2xl md:text-3xl text-[#86868b] font-medium leading-relaxed max-w-2xl mx-auto">
                        {t('culture.final.desc')}
                    </p>
                    <div className="pt-12">
                        <button className="bg-[#0071e3] text-white px-16 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-[#0071e3]/20">
                            {t('culture.final.button')}
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};
