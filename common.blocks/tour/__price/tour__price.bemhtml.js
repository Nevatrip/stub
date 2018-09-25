block('tour').elem('price')(
    content()((node, ctx) => {
        return {
            html: ctx.price + '&nbsp;₽'
        }
    })
);
