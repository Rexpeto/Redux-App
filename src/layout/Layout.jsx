import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const Layout = () => {
	const loading = useSelector(state => state.products.loading);

	return (
		<>
			<ToastContainer theme='dark' />
			<Header />
			<main className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 my-5'>
				{loading ? <Spinner /> : <Outlet />}
			</main>
		</>
	);
};

export default Layout;
