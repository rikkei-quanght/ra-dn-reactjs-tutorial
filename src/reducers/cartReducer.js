const initState = {
    cart: [],
    total: 0
}

const cartReducer = (state = initState, action) => {
    let cart = []
    switch (action.type) {
        case 'ADD_TO_CART':
            cart = [...state.cart, action.payload]
            break;
        default:
            break;
    }

    return {
        cart: cart,
        total: 0 // TODO
    }
}

export default cartReducer
