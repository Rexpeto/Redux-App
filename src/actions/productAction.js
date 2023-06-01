import { toast } from 'react-toastify';
import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	LOADING_PRODUCTS,
	LOADING_PRODUCTS_SUCCESS,
	DELETE_PRODUCT,
	DELETE_PRODUCT_SUCCESS,
} from '../types';
import clientAxios from '../config/axios';

/**
 * Create new producto
 */
export const createProductAction = product => {
	return async dispatch => {
		dispatch(addProduct());

		try {
			await clientAxios.post('/products', product);
			dispatch(addProductSuccess(product));
			toast.success('Producto agreagado con exito');
		} catch (e) {
			toast.error('Oops!! Ocurrió un error');
		}
	};
};

const addProduct = () => ({
	type: ADD_PRODUCT,
	payload: true,
});

const addProductSuccess = product => ({
	type: ADD_PRODUCT_SUCCESS,
	payload: product,
});

/**
 * Loading Products
 */

export const loadingProducts = () => {
	return async dispatch => {
		dispatch(downloadProduct());

		try {
			const { data } = await clientAxios('/products');
			dispatch(downloadProductSucces(data));
		} catch (error) {
			toast.error('Oops! Ocurrió un error');
		}
	};
};

const downloadProduct = () => ({
	type: LOADING_PRODUCTS,
	payload: false,
});

const downloadProductSucces = products => ({
	type: LOADING_PRODUCTS_SUCCESS,
	payload: products,
});

/**
 * Delete Product
 */

export const deleteProductAction = id => {
	return async dispatch => {
		dispatch(deleteProduct(id));

		try {
			await clientAxios.delete(`/products/${id}`);
			dispatch(deleteProductSuccess());
		} catch ({ response }) {
			toast.error('Oops! Ocurrió un error');
		}
	};
};

const deleteProduct = id => ({
	type: DELETE_PRODUCT,
	payload: id,
});

const deleteProductSuccess = () => ({
	type: DELETE_PRODUCT_SUCCESS,
});
