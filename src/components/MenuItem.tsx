import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { OrderActions } from "../Reducers/OrderReducer";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <>
      <button
        className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 w-full flex justify-between p-3 "
        onClick={() => dispatch({ type: "add-item", payload: { item } })}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  );
}
