import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Formulaire = () => {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    domaine: "",
    type: "",
    pays: "",
    siteWeb: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.prenom || !form.nom || !form.email || !form.telephone || !form.domaine || !form.type || !form.description) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Formulaire envoyé avec succès !");
    console.log("Form data:", form);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="flex items-center gap-4 px-8 py-6 border-b border-border">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="w-4 h-4" /> Retour
          </Button>
        </Link>
        <span className="text-xl font-bold tracking-tight">MonEntreprise</span>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Formulaire de contact</h1>
        <p className="text-muted-foreground mb-10">Remplissez les informations ci-dessous. Les champs marqués * sont obligatoires.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom *</Label>
              <Input id="prenom" placeholder="Votre prénom" value={form.prenom} onChange={(e) => handleChange("prenom", e.target.value)} maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom">Nom *</Label>
              <Input id="nom" placeholder="Votre nom" value={form.nom} onChange={(e) => handleChange("nom", e.target.value)} maxLength={100} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" placeholder="exemple@email.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} maxLength={255} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone">Téléphone *</Label>
              <Input id="telephone" type="tel" placeholder="+212 6XX XXX XXX" value={form.telephone} onChange={(e) => handleChange("telephone", e.target.value)} maxLength={20} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="domaine">Domaine d'activité *</Label>
            <Input id="domaine" placeholder="Ex: Technologie, Santé, Éducation..." value={form.domaine} onChange={(e) => handleChange("domaine", e.target.value)} maxLength={150} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Type d'organisation *</Label>
              <Select value={form.type} onValueChange={(v) => handleChange("type", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entreprise">Entreprise</SelectItem>
                  <SelectItem value="institution">Institution</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="pays">Pays</Label>
              <Input id="pays" placeholder="Votre pays" value={form.pays} onChange={(e) => handleChange("pays", e.target.value)} maxLength={100} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="siteWeb">Site web</Label>
            <Input id="siteWeb" type="url" placeholder="https://www.example.com" value={form.siteWeb} onChange={(e) => handleChange("siteWeb", e.target.value)} maxLength={255} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description du besoin *</Label>
            <Textarea id="description" placeholder="Décrivez votre projet ou besoin..." rows={5} value={form.description} onChange={(e) => handleChange("description", e.target.value)} maxLength={1000} />
          </div>

          <Button type="submit" size="lg" className="w-full text-base py-6">
            Envoyer le formulaire
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Formulaire;
