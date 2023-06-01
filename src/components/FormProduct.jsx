import { useDispatch } from 'react-redux';
import { createProductAction } from '../actions/productAction';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormProduct = () => {
	const [product, setProduct] = useState({
		name: '',
		price: '',
	});

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const addProduct = product => dispatch(createProductAction(product));

	const handleChange = e => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (!product.name || !product.name.trim()) {
			return toast.warn('Debe colocar un nombre de producto');
		}

		if (!product.price) {
			return toast.warn('Debe colocar un precio al producto');
		}

		addProduct({
			name: product.name.toLowerCase(),
			price: Number(product.price),
		});

		setProduct({
			name: '',
			price: '',
		});

		navigate('/');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='relative z-0 w-full mb-6 group'>
				<input
					type='text'
					name='name'
					id='name'
					className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
					placeholder=' '
					autoComplete='off'
					onChange={e => handleChange(e)}
					value={product.name}
				/>
				<label
					htmlFor='name'
					className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Nombre del producto
				</label>
			</div>

			<div className='relative z-0 w-full mb-6 group'>
				<input
					type='number'
					name='price'
					id='price'
					className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
					placeholder=' '
					autoComplete='off'
					onChange={e => handleChange(e)}
					value={product.price}
				/>
				<label
					htmlFor='price'
					className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					Precio del producto
				</label>
			</div>

			<button
				type='submit'
				className='text-white bg-blue-700 hover:bg-blue-800 outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-150'
			>
				Agregar
			</button>
		</form>
	);
};

export default FormProduct;
