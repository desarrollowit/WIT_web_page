import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { UserCircle, X, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const APPLE_SPRING = { type: "spring", stiffness: 260, damping: 20 } as any;
const APPLE_TRANSITION = { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] };

export const TeamPage = () => {
    const { t } = useTranslation();
    const [selectedMember, setSelectedMember] = useState<any>(null);

    const leadership = [
        {
            id: 1,
            name: t('team.leadership.luis.name'),
            role: t('team.leadership.luis.role'),
            quote: t('team.leadership.luis.quote'),
            bio: t('team.leadership.luis.bio'),
            image: null
        },
        {
            id: 2,
            name: t('team.leadership.directivo.name'),
            role: t('team.leadership.directivo.role'),
            quote: t('team.leadership.directivo.quote'),
            bio: t('team.leadership.directivo.bio'),
            image: null
        },
        {
            id: 3,
            name: t('team.leadership.engineering.name'),
            role: t('team.leadership.engineering.role'),
            quote: t('team.leadership.engineering.quote'),
            bio: t('team.leadership.engineering.bio'),
            image: null
        },
        {
            id: 4,
            name: t('team.leadership.operations.name'),
            role: t('team.leadership.operations.role'),
            quote: t('team.leadership.operations.quote'),
            bio: t('team.leadership.operations.bio'),
            image: null
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-transparent text-black dark:text-white font-sans selection:bg-[#0071e3]/20 overflow-x-hidden">
            {/* Header */}
            <section className="pt-48 pb-24 px-4 text-center max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={APPLE_TRANSITION}
                    className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
                >
                    {t('team.title')}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...APPLE_TRANSITION, delay: 0.1 }}
                    className="text-xl md:text-2xl text-[#86868b] max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    {t('team.subtitle')}
                </motion.p>
            </section>

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-4 pb-48">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {leadership.map((member, idx) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ ...APPLE_TRANSITION, delay: idx * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="aspect-[3/4] bg-[#f5f5f7] dark:bg-black/40 backdrop-blur-3xl rounded-3xl overflow-hidden mb-6 relative hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] transition-all duration-700 ease-[0.21, 0.45, 0.32, 0.9] border border-transparent dark:border-white/5 shadow-xl transition-all duration-700">
                                <div className="absolute inset-0 flex items-center justify-center text-[#d2d2d7] dark:text-[#424245]">
                                    <UserCircle className="w-48 h-48 opacity-20 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-1">{member.name}</h3>
                            <p className="text-[#86868b] font-medium mb-4">{member.role}</p>
                            <span className="text-[#0071e3] font-semibold inline-flex items-center text-sm group-hover:underline transition-all">
                                {t('team.view_profile')}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Profile Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-white/80 dark:bg-black/80 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.92, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.92, y: 30, opacity: 0 }}
                            transition={APPLE_SPRING}
                            className="bg-white dark:bg-black/60 backdrop-blur-3xl w-full max-w-6xl max-h-[90dvh] rounded-[3rem] overflow-y-auto relative shadow-2xl border border-[#f5f5f7] dark:border-white/10 transition-all duration-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-8 right-8 p-3 bg-[#f5f5f7] dark:bg-[#424245] rounded-full hover:scale-110 active:scale-95 transition-transform z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid md:grid-cols-2 gap-16 p-8 md:p-24 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ ...APPLE_TRANSITION, delay: 0.2 }}
                                    className="aspect-[3/4] bg-[#f5f5f7] dark:bg-[#424245] rounded-[2.5rem] flex items-center justify-center"
                                >
                                    <UserCircle className="w-64 h-64 text-[#d2d2d7] dark:text-[#1d1d1f] opacity-20" />
                                </motion.div>
                                <div className="space-y-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ ...APPLE_TRANSITION, delay: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none">{selectedMember.name}</h2>
                                        <p className="text-2xl text-[#0071e3] font-semibold">{selectedMember.role}</p>
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ ...APPLE_TRANSITION, delay: 0.4 }}
                                        className="text-3xl md:text-4xl font-serif italic text-[#86868b] leading-tight"
                                    >
                                        "{selectedMember.quote}"
                                    </motion.p>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ ...APPLE_TRANSITION, delay: 0.5 }}
                                        className="text-xl text-[#1d1d1f] dark:text-[#f5f5f7] leading-relaxed font-medium"
                                    >
                                        {selectedMember.bio}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ ...APPLE_TRANSITION, delay: 0.6 }}
                                        className="flex gap-6 pt-4"
                                    >
                                        <button className="flex items-center gap-3 text-lg font-bold hover:text-[#0071e3] transition-colors group">
                                            <Linkedin className="w-6 h-6" /> <span>{t('team.linkedin')}</span>
                                        </button>
                                        <button className="flex items-center gap-3 text-lg font-bold hover:text-[#0071e3] transition-colors group">
                                            <Mail className="w-6 h-6" /> <span>{t('team.email')}</span>
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
