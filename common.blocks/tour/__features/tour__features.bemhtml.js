block('tour').elem('features')(
    tag()('ul'),
    content()((node, ctx) => {
        return[
            ctx.features.map(item=>({
                elem: 'features-item',
                tag: 'li',
                content: item,
            }))
        ]
    })
);
