import type { Dispatch } from "react";
import { tipOptions } from "../helpers";
import { OrderActions } from "../Reducers/OrderReducer";

type TipPercentageFormProps = {
  // tip: number;
  dispatch: Dispatch<OrderActions>;
  // setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({
  // tip,
  dispatch,
  tip,
}: // setTip,
TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form className="flex gap-4 ">
        {tipOptions.map((tipOptions) => (
          <div className="flex gap-1" key={tipOptions.id}>
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
            <input
              id={tipOptions.id}
              type="radio"
              name="tip"
              value={tipOptions.value}
              onChange={(e) =>
                dispatch({
                  type: "add-tip",
                  payload: { value: +e.target.value },
                })
              }
              checked={tipOptions.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
