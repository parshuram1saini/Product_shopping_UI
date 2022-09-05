import React from "react";
import "./product.css";

function Product({ productlist, handleAddProduct }) {
  return (
    <>
    
      <div className="products">
        {productlist.map((productitem, i) => {
          return (
            <div key={i} className="card">
              <div>
                <img
                  className="product-image"
                  src={productitem.thumbnail}
                  alt={productitem.title}
                />
              </div>
              <div>
                <h3 className="product-title">{productitem.title}</h3>
                <h4 className="product-brand">{productitem.brand}</h4>
                <h5 className="product-Category">{productitem.category}</h5>
              </div>
              <div className="product-price">$ {productitem.price}</div>
              <div>
                <button className="add-cart-btn" onClick={() => handleAddProduct(productitem)}>
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
