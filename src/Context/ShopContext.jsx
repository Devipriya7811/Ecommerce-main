import React, { createContext, useState } from "react";


export const ShopContext = createContext ;

const ShopContextProvider = (props) => {
    
    const [cartItems,setCartItems] = useState(getDefaultCart())
    

    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider