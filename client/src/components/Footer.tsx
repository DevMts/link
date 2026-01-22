/**
 * Footer Component
 * 
 * Displays footer information in terminal comment style:
 * - Multiple comment lines (//)
 * - Light gray text
 * - Centered alignment
 * - Smaller font size
 * 
 * Design Philosophy: Terminal footer with attribution and copyright
 */
interface FooterProps {
  lines?: string[];
}

export default function Footer({
  lines = [
    '// IF - Técnico em Informática',
    '// built by students, for students',
    '© 2024 • feito com ♥ e café'
  ]
}: FooterProps) {
  return (
    <footer className="w-full mt-8 md:mt-12 pt-6 md:pt-8 border-t border-accent/20">
      <div className="text-center space-y-1 md:space-y-2">
        {lines.map((line, index) => (
          <p
            key={index}
            className="text-xs sm:text-sm text-muted-foreground font-mono"
          >
            {line}
          </p>
        ))}
      </div>
    </footer>
  );
}
