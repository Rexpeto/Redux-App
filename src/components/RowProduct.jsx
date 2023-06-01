import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEdit } from '../actions/productAction';
import Swal from 'sweetalert2';

const RowProduct = ({ product: { name, price, id }, product }) => {
	const formatMoney = money =>
		money.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const confirmDeleteProduct = id => {
		Swal.fire({
			title: '¿Estas seguro?',
			text: `Eliminaras el producto ${name}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, eliminar!',
		}).then(result => {
			if (result.isConfirmed) {
				dispatch(deleteProductAction(id));
			}
		});
	};

	const handleEdit = id => {
		dispatch(getProductEdit(product));
		navigate(`/product/edit/${id}`);
	};

	return (
		<tbody>
			<tr className='border-b dark:border-gray-700'>
				<td className='px-4 py-3 font-bold text-md first-letter:uppercase'>
					{name}
				</td>
				<td className='px-4 py-3 font-bold text-md'>{formatMoney(price)}</td>
				<td className='px-4 py-3 flex items-center justify-end gap-2'>
					<button
						type='button'
						className='text-white bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-150 cursor-pointer'
						onClick={() => handleEdit(id)}
					>
						Editar
					</button>
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
