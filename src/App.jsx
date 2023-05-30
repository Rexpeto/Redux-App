import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import NewProduct from './pages/newProduct';
import Index from './pages';
import EditProductId from './pages/editProductId';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Index />} />
					<Route path='/product/new' element={<NewProduct />}></Route>
					<Route path='/product/edit/:id' element={<EditProductId />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
