import TerminalHeader from '@/components/TerminalHeader';
import StatusCard from '@/components/StatusCard';
import CommandList from '@/components/CommandList';
import Footer from '@/components/Footer';

/**
 * Home Page - Terminal Link-in-Bio
 * 
 * Main page displaying:
 * - Terminal header with typing animation
 * - Status card with system information
 * - Command list with interactive links
 * - Footer with attribution
 * 
 * Design Philosophy: Terminal/CLI interface for IF - Técnico em Informática
 */
export default function Home() {
  const headerLines = [
    '> initializing system...',
    '> class: IF - Técnico em Informática',
    '> status: online'
  ];

  const statusItems = [
    { label: 'cafezinho recomendado', value: '☕', isHighlight: false },
    { label: 'última atualização', value: 'hoje', isHighlight: true },
    { label: 'deploy concluído com sucesso', value: '✅', isHighlight: false }
  ];

  const commands = [
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
  ];

  const footerLines = [
    '// IF - Técnico em Informática',
    '// built by students, for students',
    '© 2024 • feito com ♥ e café'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 py-4 sm:py-6 md:py-8">
      <div className="max-w-2xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Terminal Header */}
        <TerminalHeader lines={headerLines} />

        {/* Status Card */}
        <StatusCard items={statusItems} />

        {/* Commands Section */}
        <CommandList commands={commands} />

        {/* Footer */}
        <Footer lines={footerLines} />
      </div>
    </div>
  );
}
