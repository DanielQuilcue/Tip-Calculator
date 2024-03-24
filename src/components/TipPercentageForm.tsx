import type { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../helpers";

type TipPercentageFormProps = {
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
};

export default function TipPercentageForm({
  tip,
  setTip,
}: TipPercentageFormProps) {
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
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOptions.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
