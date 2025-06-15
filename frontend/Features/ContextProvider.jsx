import React,{useReducer,createContext} from 'react';
import CartReducer from './CartReducer';

export const CartContext = createContext();

export const ContextProvider = ({children}) => {
  const [cart,dispatch] = useReducer(CartReducer ,[]);
  return (
    <div>
      <CartContext.Provider value={{cart,dispatch}}>
{children}
      </CartContext.Provider>
    </div>
  )
}


