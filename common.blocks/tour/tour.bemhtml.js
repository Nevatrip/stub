block('tour')(
    tag()('article'),
    content()( ( node, ctx ) => {
        return [
            {
                elem: 'name',
                content: ctx.tour.name,
            },
            {
                elem: 'features',
                content: ctx.tour.features,
            },
            {
                elem: 'price',
                content: ctx.tour.price,
            },
            {
                elem: 'pricePierce',
                content: ctx.tour.pricePierce,
            }
        ]
    } )
);
