const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            const newObj = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: getTotalPrice(currentItems),
                }
            };
            const totalCount = Object.keys(newObj).reduce(
                (sum, key) => newObj[key].items.length + sum, 0
            )
            const totalPrice = Object.keys(newObj).reduce(
                (sum, key) => newObj[key].totalPrice + sum, 0
            )

            return {
                ...state,
                items: newObj,
                totalPrice,
                totalCount,
            }
        };
        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0,
            }
        case 'REMOVE_CART_ITEM':
            const newItems = {
                ...state.items
            }
            const currTotalPrice = newItems[action.payload].totalPrice;
            const currTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currTotalPrice,
                totalCount: state.totalCount - currTotalCount,
            }
        default:
            return state
    }
}

export default cart;