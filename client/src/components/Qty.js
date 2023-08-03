import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { handleQtyInput, handleQtySelect } = useContext(CartContext);
  // console.log(item.amount);
  return (
    <div>
      {item.amount < 10 ? (
        <select
          onChange={(e) => handleQtySelect(e, item.id)}
          value={item.amount}
          className="p-2 rounded-lg w-[100px] h-[12] outline-none text-primary">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10+">10+</option>
        </select>
      ) : (
        <input
          type="text"
          onBlur={(e) => handleQtyInput(e, item.id)}
          className="w-[120px] h-12 rounded-md placeholder:text-primary text-primary outline-accent px-2"
          placeholder={item.amount}
        />
      )}
    </div>
  );
};

export default Qty;
