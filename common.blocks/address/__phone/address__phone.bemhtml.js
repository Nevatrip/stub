block('address').elem('phone')(
    content()((node, ctx) => {
        return {
            block: 'link',
            mix: {block: node.block, elem: node.elem},
            content: node._phone,
            url: 'tel:' + node._phone
        }
    }),
);
