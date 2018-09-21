block('logo').elem('image')(
    replace()( node => {
        return [
            {
                block: 'image',
                mix: { block: node.block, elem: node.elem },
                url: node._logo,
                alt: node._description,
            },
        ]
    })
);
