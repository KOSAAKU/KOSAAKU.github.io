import React from 'react';

export const Logo: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const commonProps = {
    className: `w-full h-full ${className}`,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  };

  switch (name) {
    case 'gtg':
      return (
        <svg {...commonProps}>
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
        </svg>
      );
    case 'wikicat':
      return (
        <svg {...commonProps}>
           <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-3 5l2 6 1.5-3 1.5 3 2-6h2l-3 8h-2l-1.5-3.5L10 17H8l-3-8h2z" />
        </svg>
      );
    case 'quizzeo':
      return (
        <svg {...commonProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-2h2c0-3 2.5-1.5 2.5-4S14 7 12 7c-1.5 0-3 1-3 3h2c0-1 1-1.5 1.5-1.5S14 9 14 10s-1.5 1-2.5 2.5V14z" />
        </svg>
      );
    case 'carrefour':
      return (
        <svg {...commonProps}>
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z" />
        </svg>
      );
    case 'midnight':
      return (
        <svg {...commonProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      );
    case 'bricorama':
      return (
        <svg {...commonProps}>
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 4.5l6 5.4V19h-3.5v-6h-5v6H6v-6.1l6-5.4z" />
        </svg>
      );
    case 'ipssi':
      return (
        <svg {...commonProps}>
          <path d="M12 2L1 7l11 5 11-5-11-5zm0 3.36l6.53 2.97L12 11.3 5.47 8.33 12 5.36zM3.4 9.7l7.6 3.45V22c-5.5-.6-11-5.64-11-12.3zM20.6 9.7l-1.1.5v4.3h-1v-3.85l-1 .45v6.5c0 3.55-2.67 6.64-5.5 7.6v-2.05c1.8-.75 3.5-2.75 3.5-5.55V9.7z" />
        </svg>
      );
    case 'school42':
      return (
        <svg {...commonProps}>
          <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zm-9-4h2v-2h2v-2h-2V9h-2v2H8v2h2v2zm6 0h-2V9h2v6z" />
        </svg>
      );
    case 'lycee':
      return (
        <svg {...commonProps}>
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 16v-2h12v2H6z" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};