import { useState } from "react";
import * as classes from './Counter.module.scss'

console.log(classes);

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1 className="text-9xl">Счётчик</h1>
            <button className={classes.btn} onClick={increment}>
                {count}
            </button>
        </div>
    );
};