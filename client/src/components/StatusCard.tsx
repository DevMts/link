/**
 * StatusCard Component
 * 
 * Displays system status information in terminal comment style:
 * - Lines formatted as comments (//)
 * - Cyan accent for important values
 * - Thin cyan border with subtle glow
 * 
 * Design Philosophy: Terminal log/comment display with visual hierarchy
 */
interface StatusItem {
  label: string;
  value: string;
  isHighlight?: boolean;
}

interface StatusCardProps {
  items?: StatusItem[];
}

export default function StatusCard({
  items = [
    { label: 'cafezinho recomendado', value: '☕', isHighlight: false },
    { label: 'última atualização', value: 'hoje', isHighlight: true },
    { label: 'deploy concluído com sucesso', value: '✅', isHighlight: false }
  ]
}: StatusCardProps) {
  return (
    <div className="w-full terminal-glow rounded-lg p-4 md:p-6 mb-6 bg-card">
      <div className="space-y-2 md:space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-xs sm:text-sm md:text-base flex-wrap">
            <span className="text-muted-foreground">// {item.label}:</span>
            {item.isHighlight ? (
              <span className="px-2 py-1 rounded bg-accent text-accent-foreground font-semibold text-xs md:text-sm whitespace-nowrap">
                {item.value}
              </span>
            ) : (
              <span className="text-foreground">{item.value}</span>
            )}
            <span className="text-muted-foreground">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
