block('tour').mod('banner', true)(
    tag()('article'),
    addAttrs()((node, ctx) => ({style: "background-image: url(" + ctx.tour.img + ")"})),
    content()((node, ctx) => {
        return [
            {
                elem: 'content',
                mix: {block: 'page', elem: 'content'},
                content: [
                    {
                        elem: 'blank',
                        content: [
                            {
                                elem: 'name',
                                name: ctx.tour.name,
                                url: ctx.tour.url,
                            },
                            {
                                elem: 'features',
                                features: ctx.tour.features,
                            },
                            {
                                elem: 'price',
                                price: ctx.tour.price,
                            },
                            {
                                elem: 'buy',
                                urlBuy: ctx.tour.urlBuy,
                            },
                            {
                                elem: 'more',
                                url: ctx.tour.url,
                            },
                            {
                                elem: 'price-pierce',
                                pricePierce: ctx.tour.pricePierce,
                            }
                        ]
                    }
                ],
            }
        ]
    }),
);
