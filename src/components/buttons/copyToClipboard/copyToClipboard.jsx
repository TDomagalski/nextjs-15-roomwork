// components/CopyToClipboard.jsx
'use client';

import { useState, useEffect } from 'react';

const CopyToClipboard = ({
  value,
  children,
  className = '',
  buttonStyle = 'icon',
  successDuration = 2000,
  icon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      className='w-5 h-5'
    >
      <rect x='9' y='9' width='13' height='13' rx='2' />
      <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
    </svg>
  ),
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), successDuration);
      return () => clearTimeout(timer);
    }
  }, [isCopied, successDuration]);

  return (
    <div className={`relative inline-block ${className}`}>
      <button onClick={copyToClipboard} aria-label='Kopiuj do schowka'>
        {buttonStyle === 'icon' ? icon : null}
        {children}
      </button>

      {isCopied && <div>Skopiowano!</div>}
    </div>
  );
};

export default CopyToClipboard;
