const tour = {
    name: 'АКЦИЯ - Экскурсия под развод мостов на 2-палубном теплоходе',
    img: 'https://nevatrip.ru/assets/img/e/night/nochnaya-ekskursiya-pod-razvod-mostov_bg.jpg',
    url: 'https://nevatrip.ru/night/nochnaya-ekskursiya-pod-razvod-mostov',
    features: ['Расширенный маршрут', 'Лучшая цена', '1,5 часовая экскурсия с живым гидом', 'Двухпалубный комфортабельный теплоход'],
    price: '780',
    urlBuy: 'https://nevatrip.ru/buy-tickets?id=27',
    pricePierce: 'не реализуется',
};

module.exports = {
    block: 'page',
    title: 'Шапка, навигация и футер.',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'header.min.css'}
    ],
    scripts: [{elem: 'js', url: 'header.min.js'}],
    mods: {theme: 'islands'},
    content: [
        {
            block: 'header',
            logo: 'https://nevatrip.ru/assets/img/nevatrip_logo_md.png',
            logoDescription: 'Водные экскурсии по рекам и каналам Петербурга, прогулки по Неве на теплоходе NevaTrip',
            slogan: 'Лучшие водные экскурсии по Петербургу',
            email: 'info@nevatrip.ru',
            phone: '+78122449824',
            langs: ['ru', 'en', 'ch']
        },
        {
            block: 'navigation',
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
            block: 'tour',
            mods: {'banner': true},
            tour: tour,
        },
        {
            block: 'features',
            imgUrl: 'https://nevatrip.ru/assets/img/e/night/nochnaya-ekskursiya-pod-razvod-mostov_bg.jpg',
            features: [
                {
                    name: 'Электронный билет',
                    description: 'с открытым временем',
                    img: '<svg class="utp__icon" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g fill="#409ECE" fill-rule="evenodd"><path d="M46.2 53.2c.899 0 1.55-.651 1.55-1.55 0-.913-.816-1.55-1.55-1.55-.913 0-1.55.817-1.55 1.55 0 .913.818 1.55 1.55 1.55M49.791 23.212a1.005 1.005 0 0 0-.74.257.935.935 0 0 0-.302.684l-.041 3.705c-.003.34.166.662.453.863a1.09 1.09 0 0 0 .62.198.985.985 0 0 0 .675-.26.94.94 0 0 0 .3-.684l.042-3.705c.006-.548-.446-1.022-1.007-1.058M49.706 31.919a.977.977 0 0 0-.74.256.939.939 0 0 0-.302.685l-.041 3.706c0 .017.002.033.006.063.018.322.182.613.448.799.163.115.355.182.552.195l.06.002c.12 0 .242-.023.367-.07a.947.947 0 0 0 .615-.874l.042-3.704c.006-.55-.446-1.023-1.007-1.058M64.249 32.868a.953.953 0 0 0 .864.531.903.903 0 0 0 .76-.404l3.02-4.58a.891.891 0 0 0 .126-.673.949.949 0 0 0-.416-.6c-.438-.284-1.014-.17-1.29.246l-2.133 3.236-.985-1.96a.964.964 0 0 0-1.248-.447.872.872 0 0 0-.297.221.86.86 0 0 0-.173.29.897.897 0 0 0 .048.708l.125.25 1.599 3.182z"></path><path d="M79.57 34.895a6.507 6.507 0 0 0 2.222 1.514l-.023 6.759c-.001.321-.13.624-.363.856a1.221 1.221 0 0 1-.861.355h-.004l-17.891-.042v-4.913a8.995 8.995 0 0 0 2.862.482l.118-.001a9.207 9.207 0 0 0 1.706-.183 9.25 9.25 0 0 0 5.937-4.009 9.124 9.124 0 0 0 1.32-7.006 8.866 8.866 0 0 0-3.852-5.604c-2.456-1.592-5.45-1.851-8.091-.87a9.291 9.291 0 0 0-2.1 1.107 9.406 9.406 0 0 0-1.044.842l-.081.072a2.82 2.82 0 0 0-.128.119 9.43 9.43 0 0 0-1.211 1.48 9.172 9.172 0 0 0-.597 1.068 8.824 8.824 0 0 0-.377.893 9.134 9.134 0 0 0 .167 6.671c.117.275.254.553.418.848.054.097.12.183.177.277-.058-.002-.114-.01-.173-.01-2.684 0-4.95 2.267-4.95 4.95v3.764l-2.132-.004.01-2.886a1 1 0 0 0-.997-.998h-.002a1 1 0 0 0-1.002.992l-.01 2.887-7.97-.018a1.214 1.214 0 0 1-.863-.36 1.2 1.2 0 0 1-.358-.857l.022-6.761c.419-.17.839-.403 1.28-.71a6.518 6.518 0 0 0 2.572-3.627c.113-.41.184-.843.212-1.285.003-.048.008-.096.013-.144.009-.078.017-.157.018-.238.005-1.746-.698-3.395-1.978-4.642a6.5 6.5 0 0 0-2.077-1.382l.022-6.76c.002-.322.13-.626.364-.856.232-.229.537-.355.86-.355h.004l7.853.018.122.086a.406.406 0 0 0-.004.051l-.013 3.682c0 .339.17.651.453.835.164.106.359.17.549.162a.997.997 0 0 0 .999-.992l.013-3.682a.914.914 0 0 0-.011-.137l9.85.023 2.1.005 17.983.042c.326.001.63.129.862.36a1.2 1.2 0 0 1 .358.857l-.022 6.765c-2.441.984-4.085 3.391-4.094 6a6.433 6.433 0 0 0 1.834 4.51zM60.55 36.06a7.09 7.09 0 0 1-2.132-4.334 7.398 7.398 0 0 1 1.179-4.89c.282-.425.607-.802.953-1.15a7.441 7.441 0 0 1 2.1-1.485 7.438 7.438 0 0 1 3.17-.726c1.35 0 2.71.374 3.915 1.156 2.082 1.351 3.296 3.658 3.248 6.171a7.387 7.387 0 0 1-1.222 3.928 7.469 7.469 0 0 1-3.137 2.685c-1.94.885-4.097.889-5.974.063a7.199 7.199 0 0 1-1.026-.542 7.094 7.094 0 0 1-1.074-.876zm0 45.24h-22.9v-6.15c0-.543-.44-.996-1.057-1.055-1.377 0-6.942-1.218-6.942-6.846v-4.215l.898.18c.43.087.918.186 1.25.186.518 0 1.043-.088 1.568-.263 1.13-.403 2.005-1.202 2.693-2.481a1 1 0 0 0 .089-.207l.008-.799.744.05h10.117l-.922 1.206c-1.224 1.601-1.845 3.635-1.845 6.044 0 .589.46 1.05 1.049 1.05s1.05-.461 1.05-1.05c0-2.296.664-4.174 1.92-5.43 1.78-1.781 4.3-1.92 5.03-1.92h.2a1.69 1.69 0 0 0 1.05-.35c.185-.137.3-.406.3-.7v-18.1a2.853 2.853 0 0 1 2.85-2.85 2.819 2.819 0 0 1 2.85 2.85V81.3zm-22.9 10.1h22.9v-7.9h-22.9v7.9zM27.394 59.535c-.501-.251-1.106-.761-1.31-1.459-.295-.79-.073-1.523.127-2.021.379-.884 1.277-1.455 2.29-1.455.366 0 .637.097.874.182l.269.102 3.303 1.701c.584.29.993.744 1.259 1.407.252.497.2 1.222-.134 1.892-.297.595-.753 1.007-1.415 1.272a1.615 1.615 0 0 1-.737.163c-.515 0-.992-.191-1.187-.268l-3.34-1.516zm-1.321-10.203l-.006-.02c-.217-.644-.16-1.353.163-1.997.227-.455.729-1.059 1.422-1.276.325-.139.628-.139.849-.139.367 0 .638.097.872.181l.27.102 3.303 1.701c.585.293.994.746 1.26 1.407.252.498.2 1.223-.134 1.893-.297.595-.753 1.007-1.415 1.272a1.615 1.615 0 0 1-.737.163c-.515 0-.992-.191-1.187-.268l-3.335-1.515c-.5-.249-1.147-.793-1.325-1.504zm-.027-8.938a2.424 2.424 0 0 1 .193-1.897c.228-.448.729-1.044 1.413-1.258.325-.139.628-.139.849-.139.366 0 .635.096.869.18l.274.103 3.302 1.701c.585.293.994.747 1.26 1.407.252.498.2 1.223-.14 1.904a2.32 2.32 0 0 1-2.152 1.385c-.377 0-.753-.082-1.116-.243l-3.3-1.5c-.73-.365-1.233-.933-1.452-1.643zm-3.27-10.908c-.996-1.14-.954-2.918.094-3.966a2.781 2.781 0 0 1 1.98-.819c.749 0 1.452.291 1.98.819l2.82 2.819V34.9h-1.46l-5.414-5.414zM31.75 8H60.55v6.367l-19.803-.046h-.01c-.855 0-1.662.332-2.272.935a3.173 3.173 0 0 0-.955 2.26l-.027 8.228.735.203a4.516 4.516 0 0 1 2.143 1.335 4.478 4.478 0 0 1 1.088 2.149c.063.318.094.603.093.868-.007 2.022-1.386 3.806-3.354 4.338l-.735.199-.028 8.228a3.174 3.174 0 0 0 .94 2.266 3.22 3.22 0 0 0 2.274.945l12.112.028v11.196H36.293l-.19-.471c-.361-.905-.876-1.559-1.618-2.054l-.905-.602.885-.632a4.32 4.32 0 0 0 1.448-1.792c.536-1.159.604-2.446.189-3.525-.347-.953-.941-1.732-1.718-2.249l-.904-.603.885-.632a4.32 4.32 0 0 0 1.449-1.791c.535-1.16.603-2.446.189-3.523-.517-1.444-1.557-2.213-2.332-2.601L31.75 36V8zm51.34 18.053l.736-.2.028-8.228a3.167 3.167 0 0 0-.938-2.265 3.207 3.207 0 0 0-2.277-.946l-17.99-.042V7.05c0-.589-.461-1.05-1.05-1.05H30.8c-.588 0-1.05.461-1.05 1.05v18.31l-1.28-1.28c-.923-.923-2.174-1.432-3.52-1.432s-2.596.509-3.52 1.432c-.922.923-1.43 2.173-1.43 3.52s.508 2.597 1.43 3.52l4.53 4.53-.53.53c-.531.532-.932 1.053-1.163 1.513-.94 2.052-.321 4.468 1.469 5.746l.855.611-.854.61a4.792 4.792 0 0 0-1.47 1.733 4.75 4.75 0 0 0-.156 3.614c.373.933.928 1.69 1.65 2.251l.794.617-.82.585a4.797 4.797 0 0 0-1.468 1.733 4.752 4.752 0 0 0-.16 3.605c.43 1.204 1.285 2.153 2.42 2.676l.923.368v5.408c0 6.516 5.682 8.36 7.423 8.77l.577.137V92.55c0 .589.462 1.05 1.05 1.05h25.1c.589 0 1.05-.461 1.05-1.05V46.326l17.883.042h.008c.856 0 1.664-.332 2.274-.935a3.172 3.172 0 0 0 .954-2.26l.029-8.132v-.096l-.735-.202a4.513 4.513 0 0 1-2.311-1.523 4.493 4.493 0 0 1-1.013-2.83c.007-2.022 1.386-3.806 3.353-4.337z"></path></g></svg>',
                },
                {
                    name: 'Выгодные цены',
                    description: 'при покупке онлайн',
                    img: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g fill="none" fill-rule="evenodd"><path fill="#409ECE" d="M34.584 24.735a.794.794 0 0 0 .586.265.794.794 0 0 0 .587-.265.963.963 0 0 0 0-1.28l-9.34-10.19a.78.78 0 0 0-1.174 0 .963.963 0 0 0 0 1.28l9.34 10.19zM20.122 68.95l-9.888 10.042a.82.82 0 0 0 0 1.15.786.786 0 0 0 1.132 0L21.254 70.1a.82.82 0 0 0 0-1.15.791.791 0 0 0-1.132 0M12.875 59a.876.876 0 0 0 .267-.041l7.25-2.277a.857.857 0 0 0 .566-1.082.873.873 0 0 0-1.1-.557l-7.25 2.277a.857.857 0 0 0-.566 1.082.873.873 0 0 0 .833.598M20.425 28.649l5.14 3.207c.156.097.33.144.504.144a.94.94 0 0 0 .782-.41.877.877 0 0 0-.276-1.24l-5.14-3.206a.95.95 0 0 0-1.286.265.877.877 0 0 0 .276 1.24M62.83 25a.794.794 0 0 0 .586-.265l9.34-10.19a.963.963 0 0 0 0-1.28.78.78 0 0 0-1.172 0l-9.34 10.19a.963.963 0 0 0 0 1.28.79.79 0 0 0 .586.265M76.878 68.95a.79.79 0 0 0-1.13 0 .82.82 0 0 0 0 1.149l9.886 10.042a.79.79 0 0 0 1.132 0 .82.82 0 0 0 0-1.149L76.878 68.95zM77.143 55.043a.873.873 0 0 0-1.1.557.857.857 0 0 0 .566 1.082l7.249 2.277a.874.874 0 0 0 1.1-.557.857.857 0 0 0-.567-1.082l-7.248-2.277zM71.15 31.59a.94.94 0 0 0 .78.41.945.945 0 0 0 .505-.144l5.14-3.207a.877.877 0 0 0 .276-1.24.95.95 0 0 0-1.286-.265l-5.14 3.207a.877.877 0 0 0-.276 1.24"></path><path fill="#419DCD" d="M49.61 49.946h-2.527V43h2.527a3.477 3.477 0 0 1 3.473 3.473 3.477 3.477 0 0 1-3.473 3.473m2.692-8.232A5.423 5.423 0 0 0 49.61 41h-3.527a.987.987 0 0 0-.943.714c-.028.091-.057.184-.057.286v10.813H44a1 1 0 1 0 0 2h1.083V57a1 1 0 1 0 2 0v-2.187H50a1 1 0 1 0 0-2h-2.917v-.867h2.527a5.479 5.479 0 0 0 5.473-5.473 5.472 5.472 0 0 0-2.781-4.759"></path><path fill="#409ECE" d="M49.392 67.82a.842.842 0 0 0-.784 0l-20.47 10.794 3.91-22.86a.846.846 0 0 0-.242-.747l-16.56-16.19 22.885-3.335a.84.84 0 0 0 .634-.462L49 14.22l10.236 20.8c.123.249.359.422.633.462l22.886 3.335-16.562 16.19a.845.845 0 0 0-.241.747l3.91 22.86-20.47-10.793zm18.292-11.915L85.15 38.83a.845.845 0 0 0-.467-1.438L60.55 33.876 49.754 11.942c-.283-.576-1.226-.576-1.508 0L37.453 33.876l-24.134 3.517a.842.842 0 0 0-.467 1.438l17.465 17.075-4.122 24.107a.84.84 0 1 0 1.22.89L49 69.521l21.587 11.382a.851.851 0 0 0 .886-.064.845.845 0 0 0 .334-.826l-4.123-24.108z"></path></g></svg>',
                },
                {
                    name: 'Быстрая покупка',
                    description: 'в 2 клика',
                    img: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g fill="#419DCD" fill-rule="evenodd"><path d="M78.389 38.772c.84 0 1.523.683 1.523 1.522 0 .84-.683 1.523-1.523 1.523h-9.831v1.497h9.83c.84 0 1.524.682 1.524 1.522s-.683 1.523-1.523 1.523H67.074a.75.75 0 0 0-.658 1.105 8.338 8.338 0 0 1 1.006 3.968 8.364 8.364 0 0 1-4.165 7.211c-.228.133-.484.2-.746.2-.135 0-.27-.017-.405-.053a1.525 1.525 0 0 1-.93-.701 1.526 1.526 0 0 1 .552-2.08 5.309 5.309 0 0 0 2.648-4.577 5.296 5.296 0 0 0-5.29-5.29 5.41 5.41 0 0 0-.627.04 5.216 5.216 0 0 0-1.394.364 5.313 5.313 0 0 0-3.27 4.886c0 .535.094 1.087.28 1.642l.095.29-.259.162c-.225.14-.432.296-.642.45-.412.3-.804.617-1.15.964l-.396.399-.23-.513a8.228 8.228 0 0 1-.74-3.394c0-.986.181-1.97.54-2.926a.75.75 0 0 0-.7-1.011h-20.28V34.23H78.389a1.523 1.523 0 0 1 0 3.045h-9.831v1.497h9.83zm-19.93 13.293v-4.363c.205-.034.413-.063.627-.063a3.798 3.798 0 0 1 3.794 3.793c0 .262-.037.538-.115.866l-.1.414-.402-.138a9.713 9.713 0 0 0-3.804-.51zm8.963 9.803v2.659h-8.963V58.47a3.001 3.001 0 0 0 0-2.291v-2.605a8.166 8.166 0 0 1 2.687.224l.809.206-.68.485a.838.838 0 0 0-.08.066 1.638 1.638 0 0 1-.217.16 3.023 3.023 0 0 0-1.098 4.125 3.032 3.032 0 0 0 2.615 1.506c.529 0 1.051-.14 1.511-.407a9.843 9.843 0 0 0 2.043-1.575l.396-.4.23.514a8.238 8.238 0 0 1 .747 3.39zm2.192 4.155l-2.122 21.213H46.29l1.614-16.145.14-1.394.367-3.667v-.007h21.204zm.975 5.287l2.39 15.926h-3.982l1.592-15.926zm-52.195-1.613v-1.268h6.051c.268 0 .527-.024.78-.06.082-.01.158-.03.238-.046.167-.031.33-.066.488-.113.088-.026.171-.057.257-.088a4.474 4.474 0 0 0 .644-.288c.122-.067.237-.14.35-.217.069-.05.138-.096.202-.148.11-.089.208-.183.304-.28.05-.052.104-.1.15-.155.112-.13.207-.269.292-.413.017-.028.038-.053.055-.081.088-.163.16-.332.21-.51h18.49l-.367 3.667H18.394zm0-3.667h8.477a1.65 1.65 0 0 1-.202.233c-.017.017-.04.033-.058.05a2.513 2.513 0 0 1-.237.182l-.096.06a2.95 2.95 0 0 1-.304.161c-.02.008-.037.019-.056.028a3.378 3.378 0 0 1-.406.141l-.114.03c-.111.027-.225.05-.342.068l-.133.02a4.024 4.024 0 0 1-.478.031h-6.05V66.03zm34.875-6.694v5.19h-2.517v-2.658c0-1.175.246-2.32.733-3.403l.231-.516.397.402a9.72 9.72 0 0 0 1.156.985zm3.796.663v4.528h-2.401V60.16A3.03 3.03 0 0 0 57.065 60zm-.622-3.99c.281.161.493.404.622.695.033.074.064.148.085.229.092.34.057.69-.085 1.006-.022.05-.04.102-.068.149-.203.35-.53.603-.924.708a1.505 1.505 0 0 1-1.157-.153c-.087-.05-.168-.11-.252-.162a8.652 8.652 0 0 1-1.84-1.586l-.224-.256.224-.255c.138-.158.296-.294.445-.44a8.323 8.323 0 0 1 1.357-1.106l.038-.023.242-.155.219.25c.398.452.84.821 1.318 1.099zm.622-2.217v.825c-.028-.021-.058-.04-.084-.062a.943.943 0 0 0-.082-.065l-.68-.484.81-.207.036-.007zm-1.155-1.22l-.404.139-.098-.415a3.704 3.704 0 0 1-.115-.864c0-1.347.71-2.524 1.772-3.197v4.027c-.388.08-.774.18-1.155.31zM18.394 20.404H53.27v12.329H30.313v-2.27h-1.497v20.799h1.497v-2.271h19.244l-.097.467a9.637 9.637 0 0 0-.206 1.974c0 1.75.483 3.485 1.396 5.017l.118.198-.118.198a9.8 9.8 0 0 0-1.396 5.023v2.659h-1.522a.733.733 0 0 0-.369.109H18.394V20.404zm0-5.165h34.307c2.407 0 4.364 1.928 4.364 4.297v13.197h-2.401V19.011h-36.27v-3.772zm63.014 25.055a3.01 3.01 0 0 0-.786-2.012l-.233-.258.234-.26a3.008 3.008 0 0 0 .785-2.011 3.023 3.023 0 0 0-3.02-3.02H58.46V19.536c0-3.137-2.583-5.691-5.758-5.691H17V71.09h29.398l-1.682 16.817c-.02.21.049.422.19.579a.752.752 0 0 0 .555.245h28.387a.75.75 0 0 0 .74-.86l-3.43-22.706a.73.73 0 0 0-.163-.395.75.75 0 0 0-.555-.244h-1.522v-2.659a9.847 9.847 0 0 0-1.392-5.027l-.118-.198.118-.199a9.8 9.8 0 0 0 1.392-5.012 9.836 9.836 0 0 0-.49-3.068l-.168-.509H78.39a3.023 3.023 0 0 0 3.02-3.019c0-.733-.28-1.449-.787-2.012l-.233-.259.234-.26a3.008 3.008 0 0 0 .785-2.01z"></path><path d="M58.204 77.464h-1.956v-5.377h1.956a2.692 2.692 0 0 1 2.69 2.689 2.692 2.692 0 0 1-2.69 2.688m2.084-6.373a4.198 4.198 0 0 0-2.084-.552h-2.73a.764.764 0 0 0-.73.552c-.022.07-.044.143-.044.222v8.371h-.839a.773.773 0 1 0 0 1.548h.839v1.693a.774.774 0 1 0 1.548 0v-1.693h2.258a.774.774 0 1 0 0-1.548h-2.258v-.671h1.956c2.337 0 4.237-1.9 4.237-4.237 0-1.579-.869-2.956-2.153-3.685"></path></g></svg>',
                },
                {
                    name: 'Все маршруты',
                    description: 'Самый широкий выбор прогулок',
                    img: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g fill="#409ECE" fill-rule="evenodd" stroke="#409ECE" stroke-width=".5"><path d="M50.205 51.557a5.848 5.848 0 0 1-5.842-5.842 5.85 5.85 0 0 1 5.842-5.843 5.85 5.85 0 0 1 5.842 5.843 5.847 5.847 0 0 1-5.842 5.842m0-13.389c-4.161 0-7.546 3.387-7.546 7.546 0 4.16 3.386 7.545 7.546 7.545s7.545-3.385 7.545-7.545c0-4.159-3.384-7.546-7.545-7.546M20.786 84.235a5.32 5.32 0 0 1-5.313-5.313 5.32 5.32 0 0 1 5.313-5.315 5.321 5.321 0 0 1 5.314 5.315 5.32 5.32 0 0 1-5.314 5.313m0-12.33a7.024 7.024 0 0 0-7.016 7.016 7.023 7.023 0 0 0 7.016 7.016 7.024 7.024 0 0 0 7.017-7.016 7.024 7.024 0 0 0-7.017-7.017"></path><path d="M20.786 76.788a2.132 2.132 0 1 0 0 4.265 2.132 2.132 0 0 0 0-4.265M73.33 12.703a5.32 5.32 0 0 1 5.313 5.314 5.32 5.32 0 0 1-5.313 5.313 5.32 5.32 0 0 1-5.314-5.313 5.32 5.32 0 0 1 5.314-5.314m0 12.331a7.025 7.025 0 0 0 7.017-7.017A7.025 7.025 0 0 0 73.33 11a7.025 7.025 0 0 0-7.018 7.017 7.025 7.025 0 0 0 7.018 7.017"></path><path d="M73.33 20.15a2.132 2.132 0 1 0 0-4.264 2.132 2.132 0 0 0 0 4.264M49.91 74.686c-2.825-3.21-14.134-16.815-14.134-28.992 0-7.545 5.894-13.754 13.42-14.136.228-.012.456-.018.686-.018 3.562 0 7.07 1.398 9.717 3.89 2.847 2.682 4.435 6.27 4.47 10.102.105 11.614-11.34 25.832-14.159 29.154m19.632-27.718H65.73c.03-.486.048-.97.043-1.45-.039-4.301-1.817-8.323-5.004-11.326-3.153-2.97-7.407-4.533-11.658-4.335-8.43.427-15.035 7.384-15.035 15.837 0 .424.015.848.04 1.274h-7.15c-7.998 0-14.26-6.288-14.26-14.316 0-3.847 1.496-7.462 4.212-10.18 2.875-2.875 6.443-4.458 10.047-4.458H59.17v1.696l4.412-2.547-4.412-2.548v1.696H26.963c-4.059 0-8.054 1.76-11.25 4.958A15.992 15.992 0 0 0 11 32.652c0 8.982 7.012 16.019 15.963 16.019h7.31c1.732 13.604 14.45 27.27 15.03 27.885a.85.85 0 0 0 .62.268h.01a.852.852 0 0 0 .623-.282c.58-.642 13.205-14.798 14.997-27.871h3.99c7.963 0 14.442 6.494 14.442 14.478v1.048c0 7.874-6.479 14.279-14.443 14.279H30.37a.851.851 0 0 0 0 1.703h39.173c8.903 0 16.146-7.17 16.146-15.982v-1.048c0-8.922-7.243-16.181-16.146-16.181"></path></g></svg>',
                },
            ]
        },
        {
            block: 'form',
            content: [
                {
                    elem: 'header',
                    dayHeading: 'Время суток',
                    dayTags: [
                        {
                            name: 'День',
                            img: '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><g fill="none" fill-rule="evenodd" stroke="#FFD84A"><path d="M11.5 7.429a4.071 4.071 0 1 1 0 8.142 4.071 4.071 0 0 1 0-8.142z"></path><path stroke-linecap="round" d="M11.5 5.071V1M11.5 22v-4.071M17.929 11.5H22M1 11.5h4.071M17 7.357L18.357 6M6 18.357L7.357 17M17 17l1.357 1.357M6 6l1.357 1.357"></path></g></svg>',
                        },
                        {
                            name: 'Вечер',
                            img: '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17"><g fill="#FFD84A" fill-rule="evenodd"><path d="M9.5 17a.59.59 0 0 1-.42-.177l-2.2-2.252H.593A.6.6 0 0 1 0 13.964c0-.334.266-.607.594-.607h6.531c.158 0 .309.064.42.177l1.955 2 1.955-1.998a.588.588 0 0 1 .42-.179h6.531c.328 0 .594.273.594.607a.6.6 0 0 1-.594.607h-6.285l-2.202 2.252A.585.585 0 0 1 9.5 17M14.535 12.143a.581.581 0 0 1-.202-.037.61.61 0 0 1-.357-.777 4.787 4.787 0 0 0 .274-1.615c0-2.679-2.13-4.857-4.75-4.857S4.75 7.035 4.75 9.714c0 .56.092 1.103.273 1.615a.611.611 0 0 1-.356.777.588.588 0 0 1-.76-.364 6.067 6.067 0 0 1-.344-2.028c0-3.348 2.663-6.071 5.937-6.071 3.274 0 5.938 2.723 5.938 6.071 0 .7-.117 1.383-.345 2.028a.595.595 0 0 1-.558.4M9.5 2.428a.6.6 0 0 1-.594-.607V.607A.6.6 0 0 1 9.5 0a.6.6 0 0 1 .594.607v1.214a.6.6 0 0 1-.594.607M1.781 10.321H.594A.6.6 0 0 1 0 9.714a.6.6 0 0 1 .594-.607H1.78a.6.6 0 0 1 .594.607.6.6 0 0 1-.594.607M18.406 10.321H17.22a.6.6 0 0 1-.594-.607.6.6 0 0 1 .594-.607h1.187a.6.6 0 0 1 .594.607.6.6 0 0 1-.594.607M4.042 4.74a.59.59 0 0 1-.42-.176l-.84-.86a.617.617 0 0 1 0-.859.585.585 0 0 1 .84 0l.84.859a.617.617 0 0 1 0 .858.581.581 0 0 1-.42.179M14.957 4.74a.59.59 0 0 1-.42-.176.617.617 0 0 1 0-.859l.84-.858a.585.585 0 0 1 .84 0 .62.62 0 0 1 0 .858l-.84.859a.59.59 0 0 1-.42.177"></path></g></svg>',
                        },
                        {
                            name: 'Ночь',
                            img: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13"><g fill="none" fill-rule="evenodd"><path d="M0 9.032h14.864v.941H0z"></path><path fill="#FFD84A" d="M14.864 9.503c0-.26-.238-.47-.53-.47H.53c-.291 0-.53.21-.53.47s.239.47.53.47h13.806a.56.56 0 0 0 .374-.137.443.443 0 0 0 .155-.333M1.548 7h5.904C7.754 7 8 6.776 8 6.5S7.754 6 7.452 6H1.548C1.246 6 1 6.224 1 6.5s.246.5.548.5M13 6.5c0-.276-.265-.5-.591-.5h-1.817c-.327 0-.592.224-.592.5s.265.5.592.5h1.817c.326 0 .591-.224.591-.5M8.485 12h-3.97a.509.509 0 0 0-.515.5c0 .275.231.5.515.5h3.97A.509.509 0 0 0 9 12.5c0-.276-.231-.5-.515-.5"></path><path fill="#FFD84A" d="M21.34 9.42a5.406 5.406 0 0 1-4.433-2.96 5.208 5.208 0 0 1-.547-2.337c0-1.094.337-2.147.975-3.045a.535.535 0 0 0 .04-.542.562.562 0 0 0-.46-.308c-3.067-.225-5.9 1.778-6.713 4.668h1.144a5.347 5.347 0 0 1 4.048-3.51l.523-.102-.197.49a6.27 6.27 0 0 0-.453 2.349c0 .986.222 1.933.659 2.813a6.498 6.498 0 0 0 3.842 3.273l.506.16-.41.334a5.427 5.427 0 0 1-5.875.63H12.09A6.527 6.527 0 0 0 16.444 13a6.509 6.509 0 0 0 5.303-2.732.536.536 0 0 0-.407-.848"></path></g></svg>',
                        }
                    ],
                    basicHeading: 'Параметры прогулки',
                    basicTags: ['С экскурсией', 'Для двоих', 'Для компаний', 'Для туристических групп', 'С детьми', 'Билет на целый день', 'По рекам и каналам', 'Кафе', 'С выходом в Финский залив', 'Бар', 'Ресторан', 'Ужин-круиз', 'Развод мостов', 'С живой музыкой', 'Метеор', 'Петергоф', 'Пригороды', 'Активный отдых',]
                },
                {
                    elem: 'content',
                    content: [
                        {
                            block: tour,
                            mods: {'preview': true},
                        },
                        {
                            block: tour,
                            mods: {'preview': true},
                        },
                        {
                            block: tour,
                            mods: {'preview': true},
                        },
                    ]
                },
            ],
        },
        {
            block: 'page',//should go before footer
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
                    name: 'Причалы Санкт-Петербурга',
                    url: 'https://nevatrip.ru/prichaly-sankt-peterburga'
                },
                {
                    name: 'Активные водные прогулки',
                    url: 'https://nevatrip.ru/active'
                },
                {
                    name: 'Корпоратив на теплоходе',
                    url: 'https://nevatrip.ru/korporativ-na-teplohode'
                },
                {
                    name: 'Экскурсии по Неве с гидом',
                    url: 'https://nevatrip.ru/ekskursii-po-neve'
                },
                {
                    name: 'Прогулки по рекам и каналам',
                    url: 'https://nevatrip.ru/progulki-po-rekam-i-kanalam-peterburga'
                },
                {
                    name: 'Выпускной на теплоходе',
                    url: 'https://nevatrip.ru/vipusknoy-na-teplokhode'
                },
                {
                    name: 'Экскурсии на развод мостов с гидом',
                    url: 'https://nevatrip.ru/ekskursii-na-razvod-mostov'
                },
                {
                    name: 'Прогулки по Неве на теплоходе',
                    url: 'https://nevatrip.ru/progulki-po-neve-na-teplohode'
                },
                {
                    name: 'День рождения на теплоходе',
                    url: 'https://nevatrip.ru/den-rojdeniya-na-teplokhode'
                },
                {
                    name: 'Недорогие экскурсии: цены 2018',
                    url: 'https://nevatrip.ru/ekskursii-po-peterburgu-tsena'
                },
                {
                    name: 'Экскурсии по пригородам Петербурга',
                    url: 'https://nevatrip.ru/ehkskursii-po-prigorodam-peterburga'
                },
                {
                    name: 'Банкет на теплоходе',
                    url: 'https://nevatrip.ru/banket-na-teplohode'
                },
                {
                    name: 'Романтический вечер на теплоходе',
                    url: 'https://nevatrip.ru/romanticheskij-vecher-dlya-dvoih-spb'
                },
                {
                    name: 'Музыкальные и джазовые теплоходы',
                    url: 'https://nevatrip.ru/muzykalnij-teplohod'
                },
                {
                    name: 'Свадьба на теплоходе',
                    url: 'https://nevatrip.ru/svadba-na-teplokhode'
                },
                {
                    name: 'Ресторан на теплоходе',
                    url: 'https://nevatrip.ru/restoran-na-teplohode'
                },
                {
                    name: 'Прогулки на речном трамвайчике',
                    url: 'https://nevatrip.ru/rechnoj-tramvajchik-peterburga'
                },
                {
                    name: 'Групповые экскурсии по Петербургу',
                    url: 'https://nevatrip.ru/gruppovye-ehkskursii-po-peterburgu'
                },
                {
                    name: 'Экскурсии для детей',
                    url: 'https://nevatrip.ru/ekskursii-dlya-detey-spb'
                },
            ],
            basicNav: [
                {
                    name: 'О нас',
                    url: 'https://nevatrip.ru/#nevatrip'
                },
                {
                    name: 'Оферта',
                    url: 'https://nevatrip.ru/oferta'
                },
                {
                    name: 'Сотрудничество',
                    url: 'https://nevatrip.ru/sotrudnichestvo'
                },
                {
                    name: 'Наш Блог',
                    url: 'https://nevatrip.ru/blog'
                },
                {
                    name: 'Прогулки в Москве',
                    url: 'https://moskvatrip.ru/'
                },
            ],
            copyright: '© 2014–2018&nbsp;Санкт-Петербург, ул Малая Морская 11',
        }
    ]
};

