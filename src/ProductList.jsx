import { useEffect } from 'react';
import './ProductList.css'
import addItemReducer from './CartSlice.jsx';
import { ProductList } from './ProductList.1.jsx';
export const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
       ...prevState,
       [product.name]: true, 
     }));
  };

export default ProductList;
