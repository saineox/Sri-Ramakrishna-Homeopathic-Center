import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../theme/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-[var(--border)] hover:bg-[var(--surface-2)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--forest-500)]"
      aria-label="Toggle visual theme"
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <span
          className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ${
            theme === 'dark' ? 'translate-y-0 rotate-0' : '-translate-y-10 rotate-90'
          }`}
        >
          <Sun className="w-5 h-5 text-[var(--saffron-500)]" />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ${
            theme === 'light' ? 'translate-y-0 rotate-0' : 'translate-y-10 rotate-90'
          }`}
        >
          <Moon className="w-5 h-5 text-[var(--forest-500)]" />
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
