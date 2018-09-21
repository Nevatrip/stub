block('navigation')(
    tag()('nav'),
    def()( ( node, ctx ) => {
            node._navigation = ctx.navigation;
            return applyNext()
        }
    ),
    content() ( (node, ctx) => {
        return[
            {
                elem: 'content',
                mix: { block: 'page', elem: 'content' },
                tag: 'ul',
                content: node._navigation.map( item => ({
                    elem: 'item',
                    tag: 'li',
                    attrs: {
                        href: item.url
                    },
                    content: [
                        {
                            block: 'link',
                            mix:  { block: 'navigation', elem: 'link' },
                            url: item.url,
                            content: [
                                {
                                    block: 'navigation',
                                    elem: 'title',
                                    tag: 'span',
                                    content: {
                                        html: item.title
                                    }
                                },
                                {
                                    block: 'navigation',
                                    elem: 'subtitle',
                                    tag: 'span',
                                    content: {
                                        html: item.subtitle
                                    }
                                }
                            ]
                        }
                    ]
                }) )
            }
        ]
    } )
);
