// https://html.spec.whatwg.org/multipage/sections.html#the-address-element
block('address')(
    tag()('address'),
    content()((node, ctx) => {
        return [
            {
                elem: 'phone'
            },
            {
                elem: 'email'
            },
            {
                elem: 'social',
            },
        ]
    }),
);
