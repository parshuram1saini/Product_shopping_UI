import React, { useRef } from "react";

function Header({ filterProducts, showCartProduct }) {
  const searchRef = useRef(null);
  console.log(searchRef?.current?.value);
  return (
    <div>
      <header className="header width-90">
        <div className="ui secondary  menu">
          <h2 className="active item">Product Shop</h2>
          <div className="item">Home</div>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input input-field">
                <input
                  type="text"
                  ref={searchRef}
                  onChange={() => filterProducts(searchRef.current.value)}
                  placeholder="Search by brand | catg..."
                />
                <i className="search link icon"></i>
              </div>
            </div>
            <div className="ui item" onClick={() => showCartProduct(true)}>
              <i className="cart arrow down icon cart-icon"></i>Cart
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
