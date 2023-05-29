import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import NewProduct from './pages/newProduct';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/product/new' element={<NewProduct />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
