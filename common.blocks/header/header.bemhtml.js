block('header')(
    tag()('header'),
    def()( ( node, ctx ) => {
            node._logo = ctx.logo;
            node._description = ctx.description;
            node._phone = ctx.phone;
            node._email = ctx.email;
            node._langs = ctx.langs;
            node._slogan = ctx.slogan;
            return applyNext()
        }
    ),
    content()( ( node, ctx ) => {
        return [
            {
                elem: 'content',
                mix: { block: 'page', elem: 'content' },
                content: [
                    {
                        elem: 'logo',
                        elemMods: {'is-link': true}
                    },
                    {
                        elem: 'slogan',
                        elemMods: {'is-heading': true}
                    },
                    {
                        elem: 'langs',
                        currentLang: 'ru'
                    },
                    {
                        elem: 'contacts'
                    }
                ]
            }
        ]
    } )
);
