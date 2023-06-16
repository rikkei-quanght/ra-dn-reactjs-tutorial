const initState = {
    count: 3,
}

const countReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UP_COUNT':
            console.log('countReducer', 'UP_COUNT')
            return {
                // ...state
                count: state.count + action.payload
            }
        case 'DOWN_COUNT':
            console.log('countReducer', 'DOWN_COUNT')
            return {
                // ...state
                count: state.count - action.payload
            }
        default:
            return state
    }
}

export default countReducer
