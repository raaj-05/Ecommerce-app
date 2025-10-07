import axios from "axios";


const endPointUrl ="https://dummyjson.com"

export const getDetailsOfProduct =async(limit ,skip)=>{
   const response = await axios.get(`${endPointUrl}/products?limit=${limit}&skip=${skip}`);
   return response.data;
}

 

export const searchProduct = async(product)=>{
   const response = await axios.get(`${endPointUrl}/products/search?q=${product}`);
   return response.data;
}

export const addItemCartApi = async(finalData) =>{
   const userId = finalData.userId;
   const id = finalData.itemId;
   const response = await axios.post(`${endPointUrl}/carts/add`,{
     userId,
    products: [
      {
        id,
        quantity: 1,
      },
    ]}
   );
   // console.log(`cart item data`, response.data)
   return response.data;
}
