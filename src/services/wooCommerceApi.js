import axios from "axios";

const wooCommerceAPI = axios.create({
    baseURL: "https://6164040.ru/wp-json/wc/v3",
    auth: {
        username: "ck_3b7d75096658167abdc9a8723dad5a9b8fa8ac96", 
        password: "cs_4631faabcc4c7a93223d36672b07cf227410802e", 
    }
});

export const getProducts = async () => {
    try {
        const responce = await wooCommerceAPI.get("/products");
        return responce.data;
    } catch (error) {
        console.error("Ошибка при загрузке товаров:", error);
        return [];
    }
};