import axios from "axios";
import { Product } from "../store/Products/types";
import { getWebServiceURL } from "./utils/getURL";

export async function fetchProductsService(): Promise<Product[]> {
  const URL = getWebServiceURL("/product/list");
  const response = await axios.post(URL);
  return response.data.map((el: Product) => ({
    ...el,
    id: el.id,
    name: el.name,
    description: el.description,
    brand: el.brand,
    amount: el.amount,
    exclude: el.exclude,
    productType: el.productType,
    price: el.price,
    idSale: el.idSale
  }));
}

export async function addProductService(product: Product): Promise<Product> {
  const URL = getWebServiceURL("/product/insert");
  console.log(product)
  const response: Product = await axios.post(URL, product);
  return response;
}

export async function deleteProductService(
  idProduct: number
): Promise<Product> {
  const URL = getWebServiceURL("/product/delete");
  const response: Product = await axios.post(URL, idProduct);
  return response;
}

export async function updateProductService(product: Product): Promise<Product> {
  const URL = getWebServiceURL("/product/update");
  const response: Product = await axios.post(URL, product);
  return response;
}
