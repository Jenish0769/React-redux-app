import { INCREMENT_VALUE, DECREMENT_VALUE, INITIAL_VALUE } from "../constants/constant";


export const counterReducer = (state = 0, action) => {

    switch (action.type) {
        case INCREMENT_VALUE:
            console.log('action', action)
            return state + Number(action.payload);
        case DECREMENT_VALUE:
            return state - Number(action.payload);
        case INITIAL_VALUE:
            return (state = 0);
        default:
            return state;
    }
};
export default counterReducer;
