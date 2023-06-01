import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productAction';

const RowProduct = ({ product: { name, price, id } }) => {
	const formatMoney = money =>
		money.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	const dispatch = useDispatch();

	const confirmDeleteProduct = id => {
		dispatch(deleteProductAction(id));
	};

	return (
		<tbody>
			<tr className='border-b dark:border-gray-700'>
				<td className='px-4 py-3 font-bold text-md first-letter:uppercase'>
					{name}
				</td>
				<td className='px-4 py-3 font-bold text-md'>{formatMoney(price)}</td>
				<td className='px-4 py-3 flex items-center justify-end gap-2'>
					<Link
						to={`/product/edit/${id}`}
						className='text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-150 cursor-pointer'
					>
						Editar
					</Link>
					<button
						type='button'
						className='text-white bg-red-700 hover:bg-red-800 outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 transition duration-150 cursor-pointer'
						onClick={() => confirmDeleteProduct(id)}
					>
						Eliminar
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default RowProduct;
