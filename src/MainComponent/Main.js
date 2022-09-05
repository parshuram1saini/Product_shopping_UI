import React, { useState, useEffect } from "react";
import Product from "./component/Product";
import Header from "./component/Header";
import CartItem from "./component/CartItem";
import axios from "axios";
import "./Main.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [openCartbox, setOpenCartbox] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productlist, setProductList] = useState(null);
  const getProductData = async () => {
    axios.get("https://dummyjson.com/products?limit=100").then((res) => {
      setAllProducts(res.data.products);
      setProductList(res.data.products);
    });
  };
  ///-----intial data fetch --------/////
  useEffect(() => {
    getProductData();
  }, []);

  ///-----update data fetch --------/////
  useEffect(() => {}, [productlist]);
  function filterProducts(searchValue) {
    const updatedList = allProducts.filter(
      (x) =>
        x.category.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
        x.brand.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
    setProductList(updatedList);
  }

  ///------add the Product --------/////
  const handleAddProduct = (product) => {
    const productexist = cartItems.find((item) => item.id === product.id);
    if (productexist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productexist, quantity: productexist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  console.log(cartItems);
  //////----------Remove the product ------////
  const handleRemoveProduct = (product) => {
    const productexist = cartItems.find((item) => item.id === product.id);

    if (productexist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productexist, quantity: productexist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  ////------Show cart Modal-------///
  const showCartProduct = (value) => {
    console.log("true");
    setOpenCartbox(value);
  };
  return (
    <div>
      <Header
        filterProducts={filterProducts}
        cartItems={cartItems}
        showCartProduct={showCartProduct}
      />
      {productlist && (
        <Product
          productlist={productlist}
          handleAddProduct={handleAddProduct}
        />
      )}
      <div>
        {openCartbox && (
          <div className="d-flex">
          <div
            className={"fix-transparent"}
            onClick={()=>showCartProduct()}
          ></div>
           <CartItem
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            cartItems={cartItems}
            handleClearCart={handleClearCart}
          />
        </div>
         
        )}
      </div>
    </div>
  );
}

export default App;
