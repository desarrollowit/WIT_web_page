import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import logoLight from '../assets/logoWITMiniLight.png';
import logoDark from '../assets/logoWITMiniDark.png';
import horizontalBanner from '../assets/footer-bar.png';


export const Footer = () => {
    const { t } = useTranslation();
    const location = useLocation();

    // Generate breadcrumbs based on path
    const pathnames = location.pathname.split('/').filter((x) => x);

    const footerSections = [
        {
            title: t('navbar.product'),
            links: [
                { label: 'Sentinel', path: '/products/sentinel' },
                { label: 'TeL', path: '/products/tel' },
                { label: 'IoT', path: '/products/iot' },
                { label: 'Totems', path: '/products/totems' },
                { label: 'E-commerce', path: '/products/ecommerce' },
                { label: 'WiFi Urban', path: '/products/wifi-urban' },
            ],
        },
        {
            title: t('footer.solutions'),
            links: [
                { label: t('footer.items.software'), path: '#' },
                { label: t('footer.items.consulting'), path: '#' },
                { label: t('footer.items.digital'), path: '#' },
                { label: t('footer.items.cyber'), path: '#' },
            ],
        },
        {
            title: "BI & IA",
            links: [
                { label: t('navbar.menu.bi_section.items.dashboards'), path: '/bi/dashboards' },
                { label: t('navbar.menu.bi_section.items.reports'), path: '/bi/reports' },
                { label: t('navbar.menu.bi_section.items.kpis'), path: '/bi/kpis' },
                { label: 'Machine Learning', path: '#' },
            ],
        },
        {
            title: t('footer.company'),
            links: [
                { label: t('navbar.menu.about_section.items.history'), path: '/about' },
                { label: t('navbar.menu.about_section.items.team'), path: '/team' },
                { label: t('navbar.menu.about_section.items.culture'), path: '/culture' },
                { label: t('navbar.menu.about_section.items.careers'), path: '/careers' },
            ],
        },
        {
            title: t('footer.contact'),
            links: [
                { label: t('navbar.menu.contact_section.items.support'), path: '/support' },
                { label: t('navbar.menu.contact_section.items.sales'), path: '/sales' },
                { label: t('navbar.menu.contact_section.items.offices'), path: '/offices' },
                { label: '9 9073 7619', path: 'tel:990737619' },
                { label: 'Los Conquistadores 1700, Providencia', path: '/offices' },
            ],
        },
    ];

    return (
        <footer id="footer" className="relative z-10 bg-[#f5f5f7] dark:bg-black text-[12px] pt-12 pb-8 font-sans border-t border-gray-200 dark:border-white/10">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                {/* Logo Section */}
                <div className="mb-10 flex items-start">
                    <img
                        src={logoLight}
                        alt="WIT Logo"
                        className="h-10 md:h-12 w-auto dark:hidden opacity-90 transition-opacity hover:opacity-100"
                    />
                    <img
                        src={logoDark}
                        alt="WIT Logo"
                        className="h-10 md:h-12 w-auto hidden dark:block opacity-90 transition-opacity hover:opacity-100"
                    />
                </div>

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <ChevronRight size={12} className="opacity-40" />
                    {pathnames.map((name, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <ChevronRight size={12} />
                            <span className="capitalize">
                                {name.replace(/-/g, ' ')}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Directory Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-200 dark:border-gray-800 pb-10">
                    {footerSections.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-[11px] uppercase tracking-wider">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Middle Section: More ways to innovate */}
                <div className="py-6 border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400">
                    <p>
                        {t('footer.more_ways_innovate')}: <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">{t('footer.contact_expert')}</Link>, {t('footer.call_us')} <span className="text-gray-900 dark:text-white font-medium">9 9073 7619</span> {t('footer.search_offices')}.
                    </p>
                </div>

                {/* Bottom Legal Bar */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-gray-500 dark:text-gray-400">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center">
                        <p>{t('footer.copyright')}</p>
                        <div className="flex gap-4">
                            <Link to="#" className="hover:underline">{t('footer.privacy')}</Link>
                            <span className="hidden md:block text-gray-300 dark:text-gray-700">|</span>
                            <Link to="#" className="hover:underline">{t('footer.terms')}</Link>
                            <span className="hidden md:block text-gray-300 dark:text-gray-700">|</span>
                            <Link to="/contact" className="hover:underline">{t('footer.contact')}</Link>
                        </div>
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white hover:underline cursor-pointer">
                        {t('footer.location')}
                    </div>
                </div>
            </div>

            {/* Banner Section - Responsive Layout (Keeping original assets but styling them) */}
            <div className="mt-12 flex flex-col items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <img
                    src={horizontalBanner}
                    alt="WIT Banner"
                    className="w-full h-auto object-contain"
                />
            </div>
        </footer>
    );
};
