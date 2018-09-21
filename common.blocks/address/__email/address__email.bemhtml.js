block('address').elem('email')(
    content()((node, ctx) => {
        return {
            block: 'link',
            mix: {block: node.block, elem: node.elem},
            content: node._email,
            url: 'mailto:' + node._email
        }
    }),
);
