import { FC } from "react";
import { Button } from "@nextui-org/button"

// bad typescriptage
interface ScoreCardProps {
    row_values: any[],
    row_weights: any[],
    show_update: any[]
}

export const ScoreCard: FC<ScoreCardProps> = props => {
    let sum = 0;

    // assemble weights
    const rows = props.row_values;
    const weights = props.row_weights;
    for (let i = 0; i < rows.length; i++) {
        sum += Number(rows[i]) * Number(weights[i]);
    }

    if (!props.show_update[0]) {
        const clr = sum < 0 ? "text-red-500" : "text-green-500";
        return (
            <h1 className={"text-center text-8xl pt-8 animate-pulse " + clr}>
                {sum}!
            </h1>
        );
    } else {
        return (
            <div className="flex content-center">
                <Button className="grow h-32 text-5xl"
                    onClick={() => {
                        props.show_update[1](false)
                    }}
                > Click to reveal info</Button>
            </div>
        )
    }

}