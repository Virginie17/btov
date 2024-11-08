import { Code2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="font-bold">B to V Développement</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Solutions web innovantes pour votre entreprise
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Développement Web</li>
              <li className="text-muted-foreground">Applications Web</li>
              <li className="text-muted-foreground">Sites E-commerce</li>
              <li className="text-muted-foreground">Maintenance</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>La Rochelle</span>
              </li>
              
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@btov-dev.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} B to V Développement. Tous droits réservés.</p>
          <div className="mt-4 space-x-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-foreground">
              Mentions Légales
            </Link>
            <Link 
              href="/politique-confidentialite" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}