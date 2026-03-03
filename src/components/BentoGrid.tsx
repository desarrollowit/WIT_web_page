
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import totemImage from '../assets/totem.jpg';
import ecommerceImage from '../assets/E COMMERCE2.png';
import wifiUrbanImage from '../assets/WIFI URBAN.jpg';
import telImage from '../assets/TEL.png';
import sentinelImage from '../assets/SENTINEL.png';
import { videoUrls } from '../constants/videoUrls';
import iotBanner from '../assets/baners_vento/BANNER COLORES-01-IOT.png';
import telBanner from '../assets/baners_vento/BANNER COLORES-05-TEL.png';
import iotPoster from '../assets/iot-poster.jpg';
import { SmartVideo } from './SmartVideo';

export const BentoGrid = () => {
    const { t } = useTranslation();

    // Section Titles
    const sectionTitle = t('grid.latest');
    const sectionSubtitle = t('grid.whats_new');

    const products = [
        {
            id: 1,
            title: 'Sentinel',
            subtitle: t('grid.sentinel_subtitle'),
            description: '',
            className: 'md:col-span-2 bg-black text-white',
            theme: 'dark',
            image: sentinelImage,
            path: '/products/sentinel'
        },
        {
            id: 2,
            title: 'TeL (Telemetría Avanzada)',
            subtitle: t('grid.tel_subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark',
            image: telImage,
            path: '/products/tel',
            banner: telBanner
        },
        {
            id: 3,
            title: t('grid.iot.title'),
            subtitle: t('grid.iot.subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark',
            video: videoUrls.iot,
            path: '/products/iot',
            banner: iotBanner,
            poster: iotPoster
        },
        {
            id: 4,
            title: t('grid.totems.title'),
            subtitle: t('grid.totems.subtitle'),
            description: '',
            className: 'md:col-span-2 bg-[#F5F5F7] dark:bg-gray-800 text-black dark:text-white',
            theme: 'light',
            image: totemImage,
            path: '/products/totems'
        },
        {
            id: 5,
            title: t('grid.ecommerce.title'),
            subtitle: t('grid.ecommerce.subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark',
            image: ecommerceImage,
            path: '/products/ecommerce'
        },
        {
            id: 6,
            title: t('grid.wifi.title'),
            subtitle: t('grid.wifi.subtitle'),
            description: '',
            className: 'md:col-span-1 bg-black text-white',
            theme: 'dark',
            image: wifiUrbanImage,
            path: '/products/wifi-urban'
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-white dark:bg-transparent transition-colors duration-300 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-semibold mb-12 text-center text-black dark:text-white"
            >
                {sectionTitle} <span className="text-gray-400 dark:text-gray-500">{sectionSubtitle}</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`relative overflow-hidden h-[500px] group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500 ${product.className}`}
                    >
                        {/* Background Media Logic */}
                        {product.image && (
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                            </div>
                        )}

                        {/* Optimized Smart Video */}
                        {product.video && (
                            <SmartVideo
                                src={product.video}
                                poster={product.poster}
                                className="absolute inset-0 z-0 h-full w-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                            </SmartVideo>
                        )}

                        {/* Banner Image - Full Width Header Style */}
                        {product.banner && (
                            <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
                                <img
                                    src={product.banner}
                                    alt={product.title}
                                    className="w-auto h-auto max-w-full object-contain select-none pointer-events-none shadow-sm"
                                />
                            </div>
                        )}

                        {/* Hover Overlay for Better Text Visibility */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                        <div className={`absolute inset-0 flex flex-col items-center justify-start pt-24 p-8 z-10 text-white`}>
                            {/* ... existing header logic ... */}
                            {!product.banner && (
                                <h3
                                    className="text-3xl md:text-4xl font-semibold text-center leading-tight mb-2 relative z-10"
                                    style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                                >
                                    {product.title}
                                </h3>
                            )}
                            <p
                                className="text-lg font-medium opacity-0 group-hover:opacity-90 text-center mb-2 transition-opacity duration-500 relative z-10"
                                style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                            >
                                {product.subtitle}
                            </p>
                            <p
                                className="text-sm font-medium opacity-80 text-center relative z-10"
                                style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                            >
                                {product.description}
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                                <Link
                                    to={`/request-demo?product=${product.title}`}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white`}
                                    style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                                >
                                    {t('product.template.cta_demo')}
                                </Link>
                                <Link
                                    to={product.path}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border-2 border-white text-white hover:bg-white/10`}
                                    style={product.id === 5 ? { textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' } : {}}
                                >
                                    {t('grid.learn_more')}
                                </Link>
                            </div>
                        </div>

                        {/* Placeholder Content (only if no image or video) */}
                        {(!product.image && !product.video) && (
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-center justify-center overflow-hidden">
                                <div className={`w-3/4 h-3/4 flex items-center justify-center ${product.theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>
                                    <span className="text-xs">Product Image</span>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
