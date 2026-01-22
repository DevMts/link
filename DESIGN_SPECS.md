# Terminal Link-in-Bio - Design Specifications

## Visual Analysis from Reference Image

### Color Palette
- **Background**: Very dark navy/black (#0a0e27 or similar)
- **Text Primary**: Light cyan/teal (#00d9ff or similar) - for headings and interactive elements
- **Text Secondary**: Light gray (#b0b0b0 or similar) - for descriptions and secondary text
- **Accent/Highlight**: Bright cyan (#00ffff or similar) - for highlights and status badges
- **Border**: Subtle cyan/teal with low opacity - thin borders on cards
- **Status Green**: #00ff00 or bright green for success indicators

### Typography
- **Font Family**: Monospace (JetBrains Mono, Fira Code, or similar)
- **Header/Title**: Larger monospace, cyan color
- **Body Text**: Regular monospace, light gray
- **Accent Text**: Cyan monospace

### Layout Structure

#### Header Section
- Terminal window chrome at top (red, yellow, green dots)
- Title: "terminal v2.1.4"
- Terminal-style text output:
  - `> initializing system...`
  - `> class: IF - Técnico em Informática` (with "em Informática" in cyan)
  - `> status: online`
- Typing animation on load
- Blinking cursor after last line

#### Status Card
- Styled as terminal comments (`//`)
- Three lines of status:
  - `// cafezinho recomendado ☕ /`
  - `// última atualização: hoje` (with "hoje" in bright cyan badge)
  - `// deploy concluído com sucesso ✅`
- Thin cyan border
- Subtle glow effect
- Dark background matching page

#### Commands Section
- Title: `> comandos disponíveis:`
- 5 command cards in a list:
  - `[1] 📚 Class Materials` - `acessar conteúdos`
  - `[2] 📸 Official Instagram` - `seguir @if_informatica`
  - `[3] 🧑‍💻 Student Projects` - `ver projetos da turma`
  - `[4] 🗓️ Important Dates` - `calendário e prazos`
  - `[5] ☕ Memes & Backstage` - `porque programar é arte`
- Each card has:
  - Number badge `[1]`, `[2]`, etc. in cyan
  - Emoji icon
  - Title in light gray/white
  - Description in smaller, lighter gray text
  - Thin cyan border
  - Hover/tap glow effect
  - Entire card is clickable

#### Footer
- Terminal comment style:
  - `// IF - Técnico em Informática`
  - `// built by students, for students`
  - `© 2024 • feito com ♥ e café`
- Light gray text
- Smaller font size

### Visual Effects
- **Borders**: Thin cyan/teal lines with low opacity
- **Glow**: Subtle cyan glow on cards on hover/focus
- **Transitions**: Smooth 200-300ms transitions on hover
- **Cursor**: Blinking cursor animation after typing completes
- **Typing**: Character-by-character typing animation on load

### Spacing & Sizing
- Mobile-first design
- Generous padding inside cards
- Clear vertical rhythm between sections
- Responsive font sizes

### Interaction States
- **Hover**: Card glows with cyan, subtle scale or brightness increase
- **Active/Focus**: Clear focus ring for accessibility
- **Tap**: Mobile-friendly tap targets
- **Transitions**: All state changes are smooth (200-300ms)

### Mobile Considerations
- Full-width layout on mobile
- Touch-friendly spacing
- Readable font sizes on small screens
- Proper padding and margins for mobile devices
