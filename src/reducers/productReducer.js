const initState = {
    products: [
        {
            id: 1,
            name: 'Product 1',
            description: 'description 1',
            unitPrice: 2,
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/26/21/16/carrot-juice-1623157_640.jpg'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'description 2',
            unitPrice: 4,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/08/25/16/12/lime-907124_640.jpg'
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'description 3',
            unitPrice: 6,
            imageUrl: 'https://cdn.pixabay.com/photo/2018/09/23/09/31/smoothie-3697014_640.jpg'
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'description 4',
            unitPrice: 6,
            imageUrl: 'https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_640.jpg'
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'description 5',
            unitPrice: 6,
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/23/15/52/fresh-orange-juice-1614822_640.jpg'
        },
        {
            id: 6,
            name: 'Product 6',
            description: 'description 6',
            unitPrice: 6,
            imageUrl: 'https://cdn.pixabay.com/photo/2016/08/23/15/52/fresh-orange-juice-1614822_640.jpg'
        },
    ]
}

const productReducer = (state = initState, action) => {
    return state
}

export default productReducer
