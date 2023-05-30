import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

/**
 * Create new producto
 */
export const createProductAction = product => {
	return () => console.log(product);
};
