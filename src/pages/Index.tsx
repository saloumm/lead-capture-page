import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-border">
        <span className="text-xl font-bold tracking-tight">MonEntreprise</span>
        <Link to="/formulaire">
          <Button variant="default" size="sm">Nous contacter</Button>
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Bienvenue</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Votre partenaire pour <span className="text-primary">réussir</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-10">
          Nous accompagnons les entreprises et institutions dans leur transformation. Remplissez le formulaire pour commencer.
        </p>
        <Link to="/formulaire">
          <Button size="lg" className="gap-2 text-base px-8 py-6">
            Commencer <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © 2026 MonEntreprise. Tous droits réservés.
      </footer>
    </div>
  );
};

export default Index;
