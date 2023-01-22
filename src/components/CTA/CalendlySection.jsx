import { type } from 'os';
import React, { useState, useEffect } from 'react';
import CalendlyNoPic from './CalendlyNoPic';
import CalendlyPic from './CalendlyPicSection';

import useWindowDimensions from '@/hooks/useWindowDimension';

const CalendlySection = (
  props
) => {
  const { width, height } = useWindowDimensions();
  const [ismobile, setIsmobile] = useState(true);
  
  useEffect(() => {
    if (typeof width !== 'number' && Number.isNaN(width)) {
      
    } else if (Number(width) > 1024) {
      setIsmobile(false);
    }
  }, [width]);
  return ismobile ? <CalendlyNoPic {...props} /> : <CalendlyPic {...props} />;
};

export default CalendlySection;
