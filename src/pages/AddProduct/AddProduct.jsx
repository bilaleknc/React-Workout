import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
	const [form, setForm] = useState({
		brand: '',
		description: '',
		price: '',
		title: '',
	});


	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const handleAddProduct = async (e, form) => {
		e.preventDefault();
		try {
			let response = await axios.post("http://dummyjson.com/products/add",
			{
				brand: form.brand,
				description: form.description,
				price: form.price,
				title: form.title,
			},
			{
				"Content-Type": "application/json",
			}
			);
			console.log(response.data);
			}catch (error) {
				console.error(error);
			}
		};

		return (
			<div className="container">
				<form className="col-12">
					<div className="mb-3">
						<label htmlFor="exampleInputEmail" className="form-label">
							Brand
						</label>
						<input
							type="text"
							className="form-control"
							id="brand"
							name="brand"
							onChange={handleChange}
							value={form.brand}
						/>
					</div>
					<button onClick={e => handleAddProduct(e, form)}
						className="btn btn-primary"
					>
						Add Product
					</button>
				</form>
			</div>
		);
}

export default AddProduct;