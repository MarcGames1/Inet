import React, { useState } from 'react';

const Spinner = () => {
  const [spin, setSpin] = useState(false);

  return (
    <div onMouseEnter={() => setSpin(true)} onMouseLeave={() => setSpin(false)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-rolling"
        style={{ background: 'none' }}
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#00b8d4"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform={`rotate(${spin ? '180' : '0'} 50 50)`}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Spinner;
