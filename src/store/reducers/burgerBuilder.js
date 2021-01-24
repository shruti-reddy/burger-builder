import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null, // we should get ingredients from firebase
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 30,
    cheese: 25,
    tomato: 15,
    mushroom: 30,
    paneer: 30,
    chili: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] +1
                },
                totalPrice: state.totalPrice+INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] -1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                error:false
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
};

export default reducer;