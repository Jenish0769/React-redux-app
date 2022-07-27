import { INCREMENT_VALUE, DECREMENT_VALUE, INITIAL_VALUE } from "../constants/constant";

export const counterReducer = (state = 0, action) => {
    let previousState = state;
    switch (action.type) {
        case INCREMENT_VALUE:
            return (previousState) => previousState + 1;
        case DECREMENT_VALUE:
            return (previousState) => previousState + 1;
        case INITIAL_VALUE:
            return state;
        default:
            return state;
    }
};
export default counterReducer;
