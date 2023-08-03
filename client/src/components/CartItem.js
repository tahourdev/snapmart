import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "./Qty";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useContext(CartContext);

  return (
    <div className="flex gap-x-8">
      <Link to={`/product/${item.id}`} className="w-[70px] h-[70px]">
        <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="" />
      </Link>
      <div className="flex-1 mb-3 border-b-[1px] border-slate-200">
        <div>
          {/* title */}
          <div className="flex justify-between mb-3">
            <Link to={`/product/${item.id}`}>{item.attributes.title}</Link>

            <div
              onClick={() => removeItemFromCart(item.id)}
              className="text-[24px] cursor-pointer hover:text-accent transition-all">
              <IoClose />
            </div>
          </div>

          {/* quatity */}
          <div className="flex items-center gap-x-10 mb-3">
            <div>
              <Qty item={item} />
            </div>
            <div className="text-accent text-xl">$ {item.attributes.price * item.amount}</div>
          </div>

          {/* price */}
          <div className="mb-3">
            <span className="text-accent">${item.attributes.price} per piece</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
