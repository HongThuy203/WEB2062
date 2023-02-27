import instance from "./config";
const getProducts = () => {
    return instance.get("/products");
}
const getProduct = (id) => {
    return instance.get(`/products/${id}`);
}
const addProducts = (product) => {
    return instance.post("/products", product);
}
const updateProducts = (product) => {
    return instance.put(`/products/${product.id}`, product);
}
const deleteProducts = (id) => {
    return instance.delete(`/products/${id}`);
}
export { getProduct, getProducts, addProducts, updateProducts, deleteProducts };