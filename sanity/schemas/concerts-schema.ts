const concerts = {
    name: 'concerts',
    title: 'Concerts',
    type: 'document',
    fields: [
        {
            name: 'venue',
            title: 'Venue',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'ticketUrl',
            title: 'Ticket URL',
            type: 'url'
        },
        {
            name: 'datetime',
            title: 'Date & Time',
            type: 'datetime',
        }
    ]
}

export default concerts;