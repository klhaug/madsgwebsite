const bio = {
    name: 'bio',
    title: 'Bio',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}

export default bio;