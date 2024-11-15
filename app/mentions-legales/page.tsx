"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Mentions Légales"
        description="Informations légales et conditions d'utilisation"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 prose prose-neutral dark:prose-invert max-w-none"
      >
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Informations légales</h2>
          <p>
            Le site btov-dev.fr est édité par la société B to V Développement, SARL au capital de 10 000€,
            immatriculée au Registre du Commerce et des Sociétés sous le numéro 933 304 800.
          </p>
          <p>
            Siège social : La Rochelle<br />
            Email : btovdeveloppement@gmail.com
          </p>
          <p>
            Directeur de la publication : Mme Chaffard <br />
            Hébergeur : [Nom et coordonnées de l hébergeur]
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Propriété intellectuelle</h2>
          <p>
            L ensemble du contenu de ce site (structure, textes, images, logos, base de données...) 
            est la propriété exclusive de B to V Développement ou de ses partenaires. Toute reproduction, 
            représentation, modification, publication, transmission, dénaturation, totale ou partielle 
            du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que 
            ce soit est interdite sans l autorisation écrite préalable de B to V Développement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Protection des données personnelles</h2>
          <p>
            Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au 
            Règlement Général sur la Protection des Données (RGPD), vous disposez d un droit 
            d accès, de rectification, de suppression et d opposition aux données personnelles 
            vous concernant. Pour exercer ces droits, vous pouvez nous contacter à l adresse 
            suivante : contact@btov-dev.fr
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
          <p>
            Le site utilise des cookies pour améliorer l expérience utilisateur. En naviguant 
            sur ce site, vous acceptez l utilisation de cookies conformément à notre politique 
            de confidentialité.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Loi applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, 
            les tribunaux français seront seuls compétents.
          </p>
        </section>
      </motion.div>
    </div>
  );
}