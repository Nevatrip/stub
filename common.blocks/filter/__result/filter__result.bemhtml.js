block('filter').elem('result')(
    content()((node, ctx) => {
        return {
            elem: 'content',
            mix: {block:'page', elem:'content'},
            // content: node._result.map(item=>({
            content: {
                block: 'tour',
                mods: {'preview': true},
            }
            // }))
        }
    })
);
