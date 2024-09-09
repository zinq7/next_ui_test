"use client";

import { LifeStat } from "@/components/life_stat";
import { questions } from "@/app/questions";
import { ScoreCard } from "@/components/score_card";
import { useState } from "react";
import { SliderValue } from "@nextui-org/slider";

export default function Home() {
  const responseStates: any[] = [useState<SliderValue>(0), useState<SliderValue>(0), useState<SliderValue>(0)];
  const colors = ["border-slate-800", "border-stone-700", "border-zinc-600"]
  const life_rows: any = [];
  const [isUpdated, setUpdated] = useState<boolean>(true);

  for (let i = 0; i < questions.length; i++) {
    // dumb
    questions[i]["border_arts"] = colors[i];
    life_rows.push(
      <LifeStat key={i + "-" + colors[i]} {...questions[i]} stateControl={responseStates[i]} isUpdated={[isUpdated, setUpdated]} />
    );
  }

  return (
    <div>
      {life_rows}
      <ScoreCard show_update={[isUpdated, setUpdated]}
        row_values={responseStates.map((input) => input[0])}
        row_weights={questions.map((input) => input.importance)} />
    </div>
  );
}
