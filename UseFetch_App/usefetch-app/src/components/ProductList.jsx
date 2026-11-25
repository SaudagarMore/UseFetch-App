import React from "react";
import useFetch from "../hooks/useFetch";
const ProductList = () => {
    const {
        data,
        loading,
        error
    } = useFetch("https://dummyjson.com/products");
    if (loading) {
        return <h2 className="message">Loading Products...</h2>;
    }
    if (error) {
        return <h2 className="error">Error: {error}</h2>;
    }
    // Support both API response formats
    const products = Array.isArray(data)
        ? data
        : data?.products || [];
    if (products.length === 0) {
        return <h2 className="message">No Products Found</h2>;
    }
    return (
        <div className="container">
            <h1>Our Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img
                            src={product.thumbnail || product.images?.[0]}
                            alt={product.title}
                        />
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p className="category">
                                {typeof product.category === "object"
                                    ? product.category?.name
                                    : product.category}
                            </p>
                            <h2>${product.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProductList;