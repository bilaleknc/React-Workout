import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductBar/ProductCard";

export default function Homepage() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		handleGetProducts();
	}, []);

	const handleGetProducts = async () => {
		try {
			let response = await axios.get("http://dummyjson.com/products");
			setProducts(response.data.products);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		handleGetProducts();
	}, []);

	return (
		<div className="container">
			<div className="row">
				{products.map(product => (
					<div className="col-4">
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
	);
}