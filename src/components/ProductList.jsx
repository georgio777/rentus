import { getProducts } from "../services/wooCommerceApi";
import { useState, useEffect } from "react";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts().then((data) => setProducts(data)
    );
        
    }, []);

    return (
        <p> </p>
    )
}

export default ProductList;