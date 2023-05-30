import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
	return (
		<>
			<ToastContainer theme='dark' />
			<Header />
			<main className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 mt-5'>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
