module.exports = {
    block: 'page',
    title: 'Шапка, навигация и футер.',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'header.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'header.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block: 'header',
            logo: 'https://nevatrip.ru/assets/img/nevatrip_logo_md.png',
            logoDescription: 'Водные экскурсии по рекам и каналам Петербурга, прогулки по Неве на теплоходе NevaTrip',
            slogan: 'Лучшие водные экскурсии по Петербургу',
            email: 'info@nevatrip.ru',
            phone: '+78122449824',
            langs: [ 'ru', 'en', 'ch' ]
        },
        {   block: 'navigation',
            navigation: [
                {
                    title: 'Дневные&nbsp;экскурсии',
                    subtitle: 'по рекам и каналам',
                    url: '/day'
                },
                {
                    title: 'Ночные прогулки',
                    subtitle: 'под развод мостов',
                    url: '/night'
                },
                {
                    title: 'Метеор',
                    subtitle: 'в Петергоф и пригороды',
                    url: '/meteors'
                },
                {
                    title: 'Аренда теплохода',
                    subtitle: 'на свадьбу, корпоратив',
                    url: '/arenda-teplokhoda'
                }
            ]
        },
        {
            block: 'page',
            elem: 'spreader'
        },
        {
            block: 'footer',
            awards: [
                'Лучшая компания 2014 года всероссийской программы «Ты — предприниматель» в Санкт-Петербурге',
                '1 место «Молодой предприниматель России 2015» в номинации «Сфера услуг»'
            ],
            social: [
                {
                    name: 'vk',
                    url: 'https://vk.com/neva.trip',
                },
                {
                    name: 'ig',
                    url: 'https://www.instagram.com/nevatrip.ru/',
                },
                {
                    name: 'tg',
                    url: 'tg://resolve?domain=nevatrip_bot',
                }
            ],
            mainNavHeading: 'А здесь ещё больше подборок с прогулками и экскурсиями:',
            mainNav: [
                {
                    name:'Причалы Санкт-Петербурга',
                    url:'https://nevatrip.ru/prichaly-sankt-peterburga'
                },
                {
                    name:'Активные водные прогулки',
                    url:'https://nevatrip.ru/active'
                },
                {
                    name:'Корпоратив на теплоходе',
                    url:'https://nevatrip.ru/korporativ-na-teplohode'
                },
                {
                    name:'Экскурсии по Неве с гидом',
                    url:'https://nevatrip.ru/ekskursii-po-neve'
                },
                {
                    name:'Прогулки по рекам и каналам',
                    url:'https://nevatrip.ru/progulki-po-rekam-i-kanalam-peterburga'
                },
                {
                    name:'Выпускной на теплоходе',
                    url:'https://nevatrip.ru/vipusknoy-na-teplokhode'
                },
                {
                    name:'Экскурсии на развод мостов с гидом',
                    url:'https://nevatrip.ru/ekskursii-na-razvod-mostov'
                },
                {
                    name:'Прогулки по Неве на теплоходе',
                    url:'https://nevatrip.ru/progulki-po-neve-na-teplohode'
                },
                {
                    name:'День рождения на теплоходе',
                    url:'https://nevatrip.ru/den-rojdeniya-na-teplokhode'
                },
                {
                    name:'Недорогие экскурсии: цены 2018',
                    url:'https://nevatrip.ru/ekskursii-po-peterburgu-tsena'
                },
                {
                    name:'Экскурсии по пригородам Петербурга',
                    url:'https://nevatrip.ru/ehkskursii-po-prigorodam-peterburga'
                },
                {
                    name:'Банкет на теплоходе',
                    url:'https://nevatrip.ru/banket-na-teplohode'
                },
                {
                    name:'Романтический вечер на теплоходе',
                    url:'https://nevatrip.ru/romanticheskij-vecher-dlya-dvoih-spb'
                },
                {
                    name:'Музыкальные и джазовые теплоходы',
                    url:'https://nevatrip.ru/muzykalnij-teplohod'
                },
                {
                    name:'Свадьба на теплоходе',
                    url:'https://nevatrip.ru/svadba-na-teplokhode'
                },
                {
                    name:'Ресторан на теплоходе',
                    url:'https://nevatrip.ru/restoran-na-teplohode'
                },
                {
                    name:'Прогулки на речном трамвайчике',
                    url:'https://nevatrip.ru/rechnoj-tramvajchik-peterburga'
                },
                {
                    name:'Групповые экскурсии по Петербургу',
                    url:'https://nevatrip.ru/gruppovye-ehkskursii-po-peterburgu'
                },
                {
                    name:'Экскурсии для детей',
                    url:'https://nevatrip.ru/ekskursii-dlya-detey-spb'
                },
            ],
            basicNav: [
                {
                    name:'О нас',
                    url:'https://nevatrip.ru/#nevatrip'
                },
                {
                    name:'Оферта',
                    url:'https://nevatrip.ru/oferta'
                },
                {
                    name:'Сотрудничество',
                    url:'https://nevatrip.ru/sotrudnichestvo'
                },
                {
                    name:'Наш Блог',
                    url:'https://nevatrip.ru/blog'
                },
                {
                    name:'Прогулки в Москве',
                    url:'https://moskvatrip.ru/'
                },
            ],
            copyright: '© 2014–2018&nbsp;Санкт-Петербург, ул Малая Морская 11',
        }
    ]
};

