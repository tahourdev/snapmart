import React, { createContext, useEffect, useState } from "react";

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartBumping, setCartBumping] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // cart amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  // cart total
  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return a + c.attributes.price * c.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // add to cart function
  const addToCart = (item, id) => {
    const itemId = parseInt(id);
    // console.log(itemId);
    const newItem = { ...item[0], amount: 1 };
    // console.log(newItem);
    setCart([...cart, newItem]);
    console.log("the new item has been add to the card");
    // check item if already in the cart
    const cartItem = cart.find((item) => {
      // this block of code is a function that will be executed when it is found with the id
      return item.id === itemId;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemId) {
          console.log("the amount of the item has been updated to : " + cartItem.amount);
          setAmount(cartItem.amount + 1);
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      console.log("the amount item has been updated to the cart");
      setCart(newCart);
    } else {
      console.log("new item has been added to the cart");
      setCart([...cart, newItem]);
    }
    //open the cart sidebar
    // setIsOpen(true);
    setCartBumping(true);
  };

  //qty handle input
  const handleQtyInput = (e, id) => {
    const value = parseInt(e.target.value);
    //find the item in the cart by id
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  //qty cart select handle
  const handleQtySelect = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          setAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  // Remove Item
  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        itemAmount,
        setItemAmount,
        amount,
        cartBumping,
        setCartBumping,
        addToCart,
        cart,
        removeItemFromCart,
        handleQtyInput,
        handleQtySelect,
        total,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
