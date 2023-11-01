export default () => ({
    isLoading:true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: '1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias commodi inventore at repellat aliquam nostrum earum cumque perspiciatis dolore! Animi deleniti reprehenderit impedit rerum repudiandae placeat magni modi quis voluptates.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: '2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias commodi inventore at repellat aliquam nostrum earum cumque perspiciatis dolore! Animi deleniti reprehenderit impedit rerum repudiandae placeat magni modi quis voluptates.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: '3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias commodi inventore at repellat aliquam nostrum earum cumque perspiciatis dolore! Animi deleniti reprehenderit impedit rerum repudiandae placeat magni modi quis voluptates.',
            picture: null
        },
    ]


})

