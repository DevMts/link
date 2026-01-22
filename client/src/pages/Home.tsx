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

  function getDailyPhrase() {
    const day = new Date().getDay();

    const phrases: Record<number, string> = {
      0: 'domingo de deploy mental 🧠',        // Sunday
      1: 'segunda, coragem ativada ⚡',        // Monday
      2: 'terça no modo foco 🎯',              // Tuesday
      3: 'quarta, meio do caminho 🧭',         // Wednesday
      4: 'quinta produtiva 🚀',                // Thursday
      5: 'sexta em ritmo de commit final 🔥',  // Friday
      6: 'sábado, código opcional 😴'          // Saturday
    };


    return phrases[day];
  }

  const statusItems = [
    { label: getDailyPhrase(), value: '☕', isHighlight: false },
    { label: 'última atualização', value: 'hoje', isHighlight: true },
    { label: 'deploy concluído com sucesso', value: '✅', isHighlight: false }
  ];

  const commands = [
    {
      number: 1,
      icon: '📸',
      title: 'Oficial Instagram',
      description: 'seguir @infoxii',
      href: 'https://www.instagram.com/infoxii/'
    },
    {
      number: 2,
      icon: '👥',
      title: 'Grupo Calourada',
      description: 'entrar no grupo',
      href: 'https://chat.whatsapp.com/GRIFugENSOe3xKOMs6oqj2'
    },
    {
      number: 3,
      icon: '🏀',
      title: 'JM',
      description: 'vice representante',
      href: '#'
    },
    {
      number: 4,
      icon: '🧑🏿‍💼',
      title: 'Brenno',
      description: 'nosso querido representante',
      href: 'https://w.app/bj8m7w'
    },
    {
      number: 5,
      icon: '👱🏼‍♀️',
      title: 'Manu',
      description: 'responsável da sala',
      href: 'https://w.app/bj8m7w'
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
