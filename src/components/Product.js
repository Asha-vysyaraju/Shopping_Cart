import { useState } from "react";

// Displays products
export function Product({ product, cart, setCart }) {
  const [btnDisplay, setBtnDisplay] = useState(true);

  return (
    <div>
      <div class="col mb-5">
        <div class="card h-100">
          {/* Sale badge */}
          <div
            class="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            {product.sale}
          </div>
          {/* Product image */}
          <img class="card-img-top" src={product.poster} alt="..." />
          {/* Product details */}
          <div class="card-body p-4">
            <div class="text-center">
            {/* Product name */}
              <h5 class="fw-bolder">{product.name}</h5>
               {/* Product reviews */}
              <div class="d-flex justify-content-center small text-warning mb-2">
                {product.review}
              </div>
               {/* Product old price */}
              <span class="text-muted text-decoration-line-through">
                {product.oldPrice}
              </span>
                 {/* Product Price */}
              {product.price}
            </div>
          </div>

          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
                {/* Changing cart value  */}
              <button
                onClick={() => {
                  setBtnDisplay(!btnDisplay);
                  btnDisplay ? setCart(cart + 1) : setCart(cart - 1);
                }}
                class="btn btn-outline-dark mt-auto"
                href="#"
              >
                 {/* display button text on btnDisplay value */}
                {btnDisplay ? "Add to cart" : "Remove from cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
