import { ActionTypes } from "../constants/actionTypes"
export const setProducts=(product)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:product,
    };
};
export const selectedProduct=(productDetails)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:productDetails,
    };
};

export const removeProduct=(productDetails)=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload:productDetails,
    };
};