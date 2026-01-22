import { useState } from 'react';

/**
 * CommandItem Component
 * 
 * Displays a single command card with:
 * - Number badge [1], [2], etc.
 * - Emoji icon
 * - Title and description
 * - Hover glow effect
 * - Click handler for navigation
 * 
 * Design Philosophy: Interactive terminal command with hover feedback
 */
interface CommandItemProps {
  number: number;
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
  href?: string;
}

export default function CommandItem({
  number,
  icon,
  title,
  description,
  onClick,
  href
}: CommandItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full terminal-glow-hover rounded-lg p-3 sm:p-4 md:p-5 bg-card text-left transition-all duration-300 group border border-accent/30 active:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background"
      style={{
        borderColor: isHovered ? 'rgba(0, 217, 255, 0.6)' : 'rgba(0, 217, 255, 0.3)',
        boxShadow: isHovered
          ? '0 0 30px rgba(0, 217, 255, 0.25), inset 0 0 30px rgba(0, 217, 255, 0.1)'
          : '0 0 20px rgba(0, 217, 255, 0.15), inset 0 0 20px rgba(0, 217, 255, 0.05)'
      }}
    >
      <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
        {/* Number badge */}
        <div className="flex-shrink-0 text-accent font-semibold text-xs sm:text-sm md:text-base">
          [{number}]
        </div>

        {/* Icon and content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base sm:text-lg md:text-xl flex-shrink-0">{icon}</span>
            <h3 className="text-foreground font-semibold text-xs sm:text-sm md:text-base">
              {title}
            </h3>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}
