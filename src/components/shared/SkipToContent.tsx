import React from 'react';

const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[var(--surface-0)] focus:text-[var(--forest-700)] focus:border-2 focus:border-[var(--forest-500)] focus:rounded-xl focus:shadow-xl focus:outline-none focus:font-semibold text-xs"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
