import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Página não encontrada</p>
        <button
          onClick={() => setLocation("/")}
          className="text-accent hover:underline font-semibold"
        >
          Voltar para home
        </button>
      </div>
    </div>
  );
}
