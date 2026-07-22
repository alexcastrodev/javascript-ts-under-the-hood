import React from 'react';
import Index3 from './index3';

export default function Index() {
    const [count, setCount] = React.useState(0);

    const countMemozed = React.useMemo(() => {
        return count + 1;
    }, [count]);

    return <div>
        <h1>Index {countMemozed} </h1>
        <button onClick={() => setCount(count + 1)}></button>
        <Index3 />
    </div>
}