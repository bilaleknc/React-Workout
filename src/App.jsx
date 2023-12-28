import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Homepage.jsx';
import About from './pages/About/about';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Navi from './layouts/Navi.jsx';
// import NotFound from './pages/NotFound/NotFound';


function App() {
	return (
		<>
			<BrowserRouter>
				<Navi />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/add-product" element={<AddProduct />} />
					<Route path="/product-detail/:id" element={<ProductDetails />} />				
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			</BrowserRouter>
		</>);
}

export default App;
