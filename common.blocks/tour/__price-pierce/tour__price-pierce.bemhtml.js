block('tour').elem('price-pierce')(
    content()((node, ctx) => {
        return {
            html: ctx.pricePierce + '&nbsp;₽ на&nbsp;причале'
        }
    })
);
