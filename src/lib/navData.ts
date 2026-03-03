export const navData: Record<string, { title: string; links: string[]; linkPaths?: string[] }[]> = {
    'Producto': [
        {
            title: 'navbar.menu.products.title',
            links: ['Sentinel', 'TeL', 'Totems', 'E-commerce', 'WiFi Urban'],
            linkPaths: ['/products/sentinel', '/products/tel', '/products/totems', '/products/ecommerce', '/products/wifi-urban']
        },
        { title: 'navbar.menu.solutions.title', links: ['navbar.menu.solutions.items.software', 'navbar.menu.solutions.items.consulting', 'navbar.menu.solutions.items.digital', 'navbar.menu.solutions.items.cyber'] },
        { title: 'navbar.menu.platforms.title', links: ['navbar.menu.platforms.items.saas', 'navbar.menu.platforms.items.cloud', 'navbar.menu.platforms.items.integrations', 'navbar.menu.platforms.items.apis'] },
    ],
    'Clientes': [
        { title: 'navbar.menu.cases.title', links: ['navbar.menu.cases.items.finance', 'navbar.menu.cases.items.retail', 'navbar.menu.cases.items.health', 'navbar.menu.cases.items.government', 'navbar.menu.cases.items.timeline'] },
        {
            title: 'navbar.menu.testimonials.title',
            links: ['Reseñas', 'navbar.menu.testimonials.items.clients', 'navbar.menu.testimonials.items.impact'],
            linkPaths: ['/reviews', '#', '#']
        },
    ],
    'Partners': [
        { title: 'navbar.menu.alliances.title', links: ['navbar.menu.alliances.items.microsoft', 'navbar.menu.alliances.items.aws', 'navbar.menu.alliances.items.google', 'navbar.menu.alliances.items.partner'] },
        { title: 'navbar.menu.become_partner.title', links: ['navbar.menu.become_partner.items.benefits', 'navbar.menu.become_partner.items.requirements', 'navbar.menu.become_partner.items.register'] },
    ],
    'IA': [
        { title: 'navbar.menu.ai.title', links: ['navbar.menu.ai.items.ml', 'navbar.menu.ai.items.nlp', 'navbar.menu.ai.items.vision'] },
        { title: 'navbar.menu.data_services.title', links: ['navbar.menu.data_services.items.bigdata', 'navbar.menu.data_services.items.analytics', 'navbar.menu.data_services.items.bi'] },
    ],
    'BI': [
        {
            title: 'navbar.menu.bi_section.title',
            links: ['navbar.menu.bi_section.items.dashboards', 'navbar.menu.bi_section.items.reports', 'navbar.menu.bi_section.items.kpis'],
            linkPaths: ['/bi/dashboards', '/bi/reports', '/bi/kpis']
        },
        {
            title: 'navbar.menu.tools.title',
            links: ['navbar.menu.tools.items.powerbi', 'navbar.menu.tools.items.tableau', 'navbar.menu.tools.items.looker'],
            linkPaths: ['/bi/power-bi', '/bi/tableau', '/bi/looker']
        },
    ],
    'Acerca de wit': [
        {
            title: 'navbar.menu.about_section.title',
            links: ['navbar.menu.about_section.items.history', 'navbar.menu.about_section.items.team', 'navbar.menu.about_section.items.culture', 'navbar.menu.about_section.items.careers'],
            linkPaths: ['/about', '/team', '/culture', '/careers']
        },
        {
            title: 'navbar.menu.contact_section.title',
            links: ['navbar.menu.contact_section.items.support', 'navbar.menu.contact_section.items.sales', 'navbar.menu.contact_section.items.offices'],
            linkPaths: ['/support', '/sales', '/offices']
        },
    ],
};
