import React, { useContext } from "react";
// import close icon
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
//stripe
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51NQWG1HAX1YMmq1111AAIRwO0Uf5NW1G1MavuxKWzEhoX1YhZ7kQOGzvkBH8qeN2RxrwKngvAYvHLICsG0hMDHoy009TeIuYoH"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        {/* close icon */}
        <div className="relative text-4xl w-20 h-[98px] z-30 flex justify-start items-center">
          <IoClose className="cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex flex-col gap-y-2">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* Subtotal */}
      {cart.length >= 1 && (
        <div className="px-6 py-6 flex flex-col">
          {/* subtotal */}
          <div className="text-lg flex justify-between">
            <div>Subtotal</div>
            <div>$ {total}</div>
          </div>

          {/* Total */}
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>$ {total}</div>
          </div>
        </div>
      )}

      {/* button */}
      <div className="px-6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button onClick={clearCart} className="btn btn-accent hover:bg-accent-hover text-primary">
              Clear cart
            </button>
            <button
              onClick={handlePayment}
              className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
              Checkout
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="absolute top-0 left-0 h-full flex justify-center flex-col items-center right-0 text-white/30 z-10">
            <div className="text-2xl">Your cart is empty</div>
            <div className="text-5xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
