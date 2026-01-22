import CommandItem from './CommandItem';

/**
 * CommandList Component
 * 
 * Displays a list of command items with:
 * - Section title in terminal style (> comandos disponíveis:)
 * - Multiple CommandItem components
 * - Proper spacing and layout
 * 
 * Design Philosophy: Terminal command menu with organized list
 */
interface Command {
  number: number;
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
  href?: string;
}

interface CommandListProps {
  title?: string;
  commands?: Command[];
}

export default function CommandList({
  title = '> comandos disponíveis:',
  commands = [
    {
      number: 1,
      icon: '📚',
      title: 'Class Materials',
      description: 'acessar conteúdos',
      href: '#'
    },
    {
      number: 2,
      icon: '📸',
      title: 'Official Instagram',
      description: 'seguir @if_informatica',
      href: '#'
    },
    {
      number: 3,
      icon: '🧑‍💻',
      title: 'Student Projects',
      description: 'ver projetos da turma',
      href: '#'
    },
    {
      number: 4,
      icon: '🗓️',
      title: 'Important Dates',
      description: 'calendário e prazos',
      href: '#'
    },
    {
      number: 5,
      icon: '☕',
      title: 'Memes & Backstage',
      description: 'porque programar é arte',
      href: '#'
    }
  ]
}: CommandListProps) {
  return (
    <div className="w-full mb-6">
      {/* Section title */}
      <h2 className="text-foreground font-semibold text-xs sm:text-sm md:text-base mb-4">
        {title}
      </h2>

      {/* Commands list */}
      <div className="space-y-2 sm:space-y-3">
        {commands.map((command) => (
          <CommandItem
            key={command.number}
            number={command.number}
            icon={command.icon}
            title={command.title}
            description={command.description}
            onClick={command.onClick}
            href={command.href}
          />
        ))}
      </div>
    </div>
  );
}
