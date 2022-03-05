import axios from 'axios';

const Product_API_Base_URL ="http://localhost:8090/";

class ProductService{
    getProduct(){
        return axios.get(Product_API_Base_URL + "product");
    }
    addProduct(objProduct){
        return axios.post(Product_API_Base_URL + "product-add", objProduct);
    }
    getProductById(id){
        return axios.get(Product_API_Base_URL + "product-update/" + id);
    }
    updateProduct(objProduct, id){
        return axios.put(Product_API_Base_URL + "product-update/" + id, objProduct);
    }
    deleteProduct(id){
        return axios.delete(Product_API_Base_URL + "product-delete/" + id);
    }


}

export default new ProductService();