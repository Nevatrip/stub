block('footer').elem('main')(
    tag()('section'),
    content()( ( node, ctx ) => ({
        elem: 'content',
        elemMods: {'fdc': true},
        content: [
            {
              elem: 'heading',
            },
            {
              elem: 'main-nav',
            },
        ]
    }))
);
