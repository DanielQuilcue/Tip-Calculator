import { menuItems } from "../data/db";
// import useOrder from "../hooks/useOrder";
import MenuItem from "../components/MenuItem";
import OrderContents from "../components/OrderContents";
import OrderTotals from "../components/OrderTotals";
import TipPercentageForm from "../components/TipPercentageForm";
import { useReducer } from "react";
import { initialState, orderReducer } from "../Reducers/OrderReducer";

export default function Main() {
  // const { order, addItem, tip, setTip, removeItem, placeOrder } = useOrder();
  // const { placeOrder } = useOrder();

  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <h2 className="text-4xl font-black  text-center">Menú</h2>
        </div>
        <div className="space-y-3 mt-10">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} dispatch={dispatch} />
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state?.order.length ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />

              <TipPercentageForm dispatch={dispatch} tip={state.tip} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
        <div></div>
      </div>
    </main>
  );
}
