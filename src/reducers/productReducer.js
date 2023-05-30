import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

const initialState = {
	products: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
