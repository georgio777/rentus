import { getProducts } from "../services/wooCommerceApi";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Получаем продукты и обновляем состояние
        getProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке продуктов:", error);
            });
    }, []);


    return (
        <div className="lcontainer">
            <h2 id="catalog" className="section__name">Каталог инструментов</h2>
            <div className="products">
                {/* Проверяем, есть ли продукты */}
                {products.length > 0 ? (
                    products.map((item) => (
                        <ProductCard key={item.id} item={item}/>
                    ))
                ) : (
                    <div className="loader"></div>
                )}
            </div>
        </div>
    );
}

export default ProductList;