import { getProducts } from "../services/wooCommerceApi";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
    const [products, setProducts] = useState([]);
    const cacheKey = "cachedProducts"; // Ключ для localStorage

    useEffect(() => {
        // Проверяем, есть ли данные в localStorage
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
            setProducts(JSON.parse(cachedData)); // Устанавливаем кэшированные данные сразу
        }

        // Запрашиваем данные с сервера
        getProducts()
            .then((serverData) => {
                // Сравниваем данные с сервера с кэшированными
                const cached = cachedData ? JSON.parse(cachedData) : [];
                const isDataDifferent = JSON.stringify(serverData) !== JSON.stringify(cached);

                if (isDataDifferent) {
                    // Если данные отличаются, обновляем состояние и localStorage
                    setProducts(serverData);
                    localStorage.setItem(cacheKey, JSON.stringify(serverData));
                }
            })
            .catch((error) => {
                console.error("Ошибка при загрузке продуктов:", error);
            });
    }, []); // Пустой массив зависимостей, чтобы эффект сработал только при монтировании

    return (
        <div className="lcontainer">
            <h2 id="catalog" className="section__name">Каталог инструментов</h2>
            <div className="products">
                {/* Проверяем, есть ли продукты */}
                {products.length > 0 ? (
                    products.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))
                ) : (
                    <div className="loader"></div>
                )}
            </div>
        </div>
    );
}

export default ProductList;