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

    useEffect(() => {
        // Отслеживаем изменения состояния products
        console.log("Текущие продукты:", products);
    }, [products]);

    return (
        <div className="lcontainer">
            <h2 className="section__name">Каталог инструментов</h2>
            <div className="products">
                {/* Проверяем, есть ли продукты */}
                {products.length > 0 ? (
                    products.map((item) => (
                        <ProductCard key={item.id} item={item}/>
                    ))
                ) : (
                    <p>Нет доступных продуктов.</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;