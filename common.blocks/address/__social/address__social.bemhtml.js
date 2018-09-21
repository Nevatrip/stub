block('address').elem('social')(
    content()( (node, ctx) => {
        return node._social.map( item => ( {
            block: 'link',
            mix:  { block: 'address', elem: 'social-item' },
            content: item.name,
            url: item.url,
            target: '_blank'
        }) )
    } )
);
