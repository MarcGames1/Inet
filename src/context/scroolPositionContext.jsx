import { createContext, useState, useEffect } from 'react';

const ScrollPosition = createContext();

const ScrollPositionProvider = ({ children }) => {
  const [scroolPosition, setScroolPosition] = useState(0);

  useEffect(() => {
    if (window || typeof window !== 'undefined') {
      window.onscroll = () => {
        setScroolPosition(
          (window.pageYOffset || document.documentElement.scrollTop) - document.documentElement.clientTop,
        );
      };
    }
  }, [scroolPosition]);

  return <ScrollPosition.Provider value={[scroolPosition]}>{children}</ScrollPosition.Provider>;
};

export { ScrollPositionProvider, ScrollPosition };
