import { useEffect, useState } from 'react';


const useWindowDimension = () => {
    const [windowDimensions, setWindowDimensions] = useState ({
        width: NaN,
        height: NaN,
    });
    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimension;