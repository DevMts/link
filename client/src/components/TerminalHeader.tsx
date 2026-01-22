import { useState, useEffect } from 'react';

interface TerminalHeaderProps {
  title?: string;
  lines?: string[];
}

/**
 * TerminalHeader Component
 *
 * Displays a terminal-style header with:
 * - Window chrome (red, yellow, green dots)
 * - Title bar
 * - Typing animation for multiple lines
 * - Blinking cursor after animation completes
 *
 * Design Philosophy: Terminal/CLI interface with authentic system output feel
 */
export default function TerminalHeader({
  title = 'terminal v2.1.4',
  lines = [
    '> initializing system...',
    '> class: IF - Técnico em Informática',
    '> status: online'
  ]
}: TerminalHeaderProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Combine all lines into one string with line breaks
  const secretLines = [
    '> access granted',
    '> user: root@devmts',
    '> mode: terminal unlocked 😈'
  ];
  const [isSecretMode, setIsSecretMode] = useState(false);
  const [secretClicks, setSecretClicks] = useState(0);

  const fullText = (isSecretMode ? secretLines : lines).join('\n');


  // Typing animation effect
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 30); // Typing speed
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedText, fullText]);

  // Cursor blink effect (only after typing is complete)
  useEffect(() => {
    if (!isTypingComplete) return;

    const timer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, [isTypingComplete]);


  function handleSecretClick() {
    setSecretClicks((prev) => {
      const next = prev + 1;

      if (next === 5) {
        setIsSecretMode(true);

        setDisplayedText('');
        setIsTypingComplete(false);
        setShowCursor(true);

        return 0;
      }

      return next;
    });
  }





  return (
    <div className="w-full terminal-glow rounded-lg overflow-hidden mb-6 bg-card">
      {/* Terminal window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-accent/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />

          <div className="w-3 h-3 rounded-full bg-yellow-500" />

          <button
            onClick={handleSecretClick}
            aria-label="secret terminal trigger"
            className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>

        <span className="text-xs text-muted-foreground ml-auto font-mono">{title}</span>
      </div>

      {/* Terminal output area */}
      <div className="p-4 md:p-6 min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
        <pre className="text-xs sm:text-sm md:text-base leading-relaxed font-mono text-foreground whitespace-pre-wrap break-words">
          {displayedText}
          {isTypingComplete && (
            <span className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
              ▌
            </span>
          )}
        </pre>
      </div>
    </div>
  );
}
