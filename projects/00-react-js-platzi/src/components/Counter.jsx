import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>El contador está en:{count}</p>
        </div>
    )
}

export default Counter;