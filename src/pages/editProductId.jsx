import { useNavigate } from 'react-router-dom';
import FormProductEdit from '../components/FormProductEdit';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const EditProductId = () => {
	const product = useSelector(state => state.products.product);
	const navigate = useNavigate();

	useEffect(() => {
		if (!product.id) {
			navigate('/');
		}
	}, []);

	return (
		<div className='w-full'>
			<h1 className='text-white text-2xl font-bold mb-8'>Editar producto</h1>
			<FormProductEdit />
		</div>
	);
};

export default EditProductId;
