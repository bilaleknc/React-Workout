import React from "react";
import { Link } from "react-router-dom";
import axious from "axios";

export default function ProductCard(props) {
	const handleDelete = async id => {
		try {
			const response = await axious.delete("http://dummyjson.com/products/${id}");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<div className="card" style={{ height: "550px" }}>
				<img
				src={props.product.thumbnail}
				className="card-img-top"
				alt="..."
				style={{ height: "250px" }}
				/>
				<div className="card-body d-flex flex-column justify-content-between">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<div>
					<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary col-5"
					>
					Details
					</Link>
					<button
					onClick={() => handleDelete(props.product.id)}
					className="btn btn-danger offset-2 col-5"
					>
					Delete
					</button>
				</div>
				</div>
			</div>
		</div>
	)
}