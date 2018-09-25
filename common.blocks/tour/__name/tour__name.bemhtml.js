block('tour').elem('name')(
    tag()('h1'),//сделать heading
    content()((node, ctx) => {
        return [
            {
                block: 'link',
                content: ctx.name,
                url: ctx.url,
            }
        ]
    })
);
