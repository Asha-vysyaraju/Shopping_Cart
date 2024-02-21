import { useState } from "react";
import { INITIAL_PRODUCT_LIST } from "../App";
import { Product } from "./Product";

// Displaying products
export function ProductList({ cart, setCart }) {
    const [productList, setProductList] = useState(INITIAL_PRODUCT_LIST);
    return (
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {productList.map((pd, index) => (
                        <Product key={index} product={pd} cart={cart} setCart={setCart} />
                    ))}
                </div>
            </div>
        </section>
    );
}
