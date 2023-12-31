import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { title, price, category, id, image } = product;
    return (
      <div
        className="four wide column"
        key={id}
        style={{ paddingTop: "55px", minHeight: "500px" }}
      >
        <Link to={`/product/${id}` }>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img
                style={{ height: "25vw", objectFit: "cover" }}
                src={image}
                alt={title}
              />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
