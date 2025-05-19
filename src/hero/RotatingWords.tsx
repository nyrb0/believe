import { useState, useEffect } from 'react';

const RotatingWords = () => {
    const words = ['yourself', 'your version', 'friends'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % words.length);
        }, 200);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span
            style={{
                display: 'inline-block',
                transition: 'opacity 0.1s ease',
                opacity: 1,
            }}
        >
            {words[index]}
        </span>
    );
};

export default RotatingWords;
