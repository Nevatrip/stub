block('logo')(
    tag()('span'),
    content()( (node, ctx) => {
        return[
            {
                elem: 'image'
            }
        ]
    })
);
