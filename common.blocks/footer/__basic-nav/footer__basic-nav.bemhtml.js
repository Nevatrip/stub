block('footer').elem('basic-nav')(
    tag()('ul'),
    content()((node, ctx) => {
        return node._basicNav.map(item => ({
            elem: 'basic-nav-item',
            tag: 'li',
            content: [
                {
                    mix: {block: 'footer', elem: 'basic-nav-link'},
                    block: 'link',
                    content: item.name,
                    url: item.url,
                }
            ],
        }))
    })
);
