"use client";

import { useState, FC } from "react";
import { Image } from "@nextui-org/image";
import { Slider, SliderValue } from "@nextui-org/slider";
import { LifeStatProps } from "@/app/life_stat_info";

// probably works
export const LifeStat: FC<LifeStatProps> = props => {
  // states (omg)
  const [ value, setValue ] = props.stateControl; 
  const [input, setInput] = useState<string>("0");
  const [msg, setMessage] = useState<string>(getMessage(0));

  // reload on value change for both
  function handleChange(new_value: SliderValue) {
    if (isNaN(Number(new_value))) return;

    setValue(new_value);
    setInput(new_value.toString());
    setMessage(getMessage(new_value));
    props.isUpdated[1](true);
  };

  // fetch message
  function getMessage(real_val: SliderValue): string {
    if (!props.messages) {
      return "<TBD>";
    }

    // cast ? to number
    real_val = Number(real_val);

    // iterate for the valid messages
    const pool = [];
    for (let index = 0; index < props.messages.length; index++) {
      const msg = props.messages[index];
      if (msg.start_val <= real_val && (msg.end_val || Number.POSITIVE_INFINITY) >= real_val) {
        pool.push(msg);
      }
    }

    // shitty homemade code
    if (pool.length == 0) {
      return "<IDK>";
    }

    let max_index = 0;
    for (let i = 0; i < pool.length; i++) {
      if ((pool[i].rarity || 0) > (pool[max_index].rarity || 0)) max_index = i;
    }

    return pool[max_index].message;
  }

  return (
    <div className={props.border_arts + " border-gray-100 border-2 rounded-xl p-4 m-4 grid grid-cols-10 content-center items-center [&>*]:m-4"}>

      {/* icon emoji is arbitarily sized */}
      <Image className="grow" src={props.icon} width={128} height={96} />
      <div className="grow"> {props.description || "<TBD>"} </div>

      <Slider
        aria-label="slider for saying the thing"
        step={props.step || 0.01}
        maxValue={props.max_val || 30}
        minValue={props.min_val || 0}
        value={value}
        classNames={{ base: "max-w-md grid-cols-subgrid col-span-4" }}
        onChangeEnd={(val) => setValue(val)}
        hideValue={true}
        disableThumbScale={false}
        isDisabled={false}
        onChange={handleChange}
      />

      {/* input that also links to the slider */}
      <input className="grow px-1 py-0.5 w-12 text-right text-small text-default-700 font-medium bg-default-100 outline-none transition-colors rounded-small border-medium border-transparent hover:border-primary focus:border-primary"
        type="text"
        aria-label="Temperature value"
        value={input}
        onChange={(e) => {
          const val = e.target.value;
          setInput(val);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isNaN(Number(input))) {
            setValue(Number(input));
          }
        }} />

      <div className="grid-cols-subgrid col-span-3"> {msg} </div>
    </div>

  );
};
