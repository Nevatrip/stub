block('tour').elem('buy')(
    replace()((node, ctx) => {
        return {
            block: 'link',
            mix: {block: node.block, elem: node.elem},
            content: 'Купить',
            url: ctx.urlBuy,
        }
    })
);
