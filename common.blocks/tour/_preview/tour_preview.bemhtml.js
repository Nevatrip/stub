block('tour').mod('preview', true)(
    tag()('article'),
    def()( (node,ctx)=>{
        node._img = ctx.img;
        node._name = ctx.name;
        return applyNext()
    }),
    content()((node, ctx) => {
        return [
            {
                elem: 'content',
                mix: {block: 'page', elem: 'content'},
                content: [
                    {
                        elem: 'row',
                        content: [
                            {
                                elem: 'col',
                                content: [
                                    {
                                        elem: 'image',
                                    }
                                ]
                            },
                            {
                                elem: 'col',
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
                                        elem: 'price-pierce',
                                        pricePierce: ctx.tour.pricePierce,
                                    }
                                ]
                            },
                        ],
                    }
                ],
            }
        ]
    }),
);
