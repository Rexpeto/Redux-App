import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	LOADING_PRODUCTS,
	LOADING_PRODUCTS_SUCCESS,
} from '../types';

const initialState = {
	products: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				loading: action.payload,
			};

		case ADD_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				products: [...state.products, action.payload],
			};
		case LOADING_PRODUCTS:
			return {
				...state,
				loading: action.payload,
			};
			
		case LOADING_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
			};

		default:
			return state;
	}
};
