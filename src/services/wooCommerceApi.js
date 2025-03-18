import axios from "axios";

const wooCommerceAPI = axios.create({
    baseURL: "https://www.wp.6164040.ru/wp-json/wc/v3",
    auth: {
        username: "ck_7597fd45f1ebdab6416fc113d3e003f26224fda9", 
        password: "cs_b38eda9b70f8b5911dc798547600c723d710a41f", 
    },
    timeout: 10000, // Устанавливаем тайм-аут 10 секунд
});

export const getProducts = async () => {
    try {
        const responce = await wooCommerceAPI.get("/products");
        return responce.data;
    } catch (error) {
        console.error("Ошибка при загрузке товаров:", {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
        });
        return [];
    }
};