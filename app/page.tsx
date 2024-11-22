"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Laptop, Rocket, CheckCircle2, Users, Trophy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  

  const features = [
    { title: "Solutions sur Mesure", description: "Développement adapté à vos besoins spécifiques" },
    { title: "Technologies Modernes", description: "Utilisation des dernières technologies web" },
    { title: "Support Réactif", description: "Assistance technique rapide et efficace" },
    { title: "Qualité Premium", description: "Standards de qualité les plus élevés" },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "1 499€",
      description: "Parfait pour les petites entreprises",
      features: [
        "Site vitrine jusqu'à 5 pages",
        "Design responsive",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Hébergement inclus (1 an)",
        "Support par email"
      ],
      cta: "Commencer",
      popular: false
    },
    {
      name: "Business",
      price: "2 999€",
      description: "Idéal pour les entreprises en croissance",
      features: [
        "Site jusqu'à 10 pages",
        "Design personnalisé",
        "Blog intégré",
        "Optimisation SEO avancée",
        "Tableau de bord analytics",
        "Support prioritaire",
        "Formation utilisateur",
        "Maintenance mensuelle"
      ],
      cta: "Choisir Business",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      description: "Pour les grands projets",
      features: [
        "Nombre de pages illimité",
        "Design sur mesure",
        "Fonctionnalités avancées",
        "API personnalisée",
        "SEO premium",
        "Support 24/7",
        "Maintenance premium",
        "Évolutions garanties"
      ],
      cta: "Nous contacter",
      popular: false
    }
  ];

  return (
    <div className="flex flex-col">
      
      {/* Hero Section avec Parallax */}
<section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
  <div className="absolute inset-0 bg-grid-white/10" />
  <div className="container relative mx-auto flex min-h-[90vh] px-4">
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-8">
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Transformons vos{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Idées
            </span>{" "}
            en Réalité Digitale
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Situé a la Rochelle, je crée des solutions digitales innovantes qui propulsent votre entreprise vers le succès.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="text-lg">
              <Link href="/contact">
                Démarrer votre Projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg">
              <Link href="/portfolio">
                Voir mes Réalisations
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <div className="relative w-[60px] h-[80px] lg:w-[100px] lg:h-[150px]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:-translate-x-4 before:-translate-y-4 before:rounded-2xl before:border-2 before:border-primary/20">
            <div className="relative h-full w-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-2xl">
              <Image
                src="/assets/photo.webp"
                alt="Virginie chaffard"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
                sizes="(max-width: 1024px) 150px, 200px"
                quality={95}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* Section Image La Rochelle */}
<section className="py-12">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative h-[150px] md:h-[300px] max-w-[700px] mx-auto overflow-hidden rounded-xl"
    >
      <Image
        src="/assets/la_rochelle.webp"
        alt="La Rochelle"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 700px"
      />
    </motion.div>
  </div>
</section>
      
        {/* Section Services */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Mes Services</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Des solutions innovantes pour votre succès digital
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <Code className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Développement Web</h3>
                <p className="text-muted-foreground">
                  Sites web modernes et performants, développés avec les dernières technologies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <Laptop className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Applications Web</h3>
                <p className="text-muted-foreground">
                  Applications sur mesure pour optimiser vos processus métier.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <Rocket className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">E-commerce</h3>
                <p className="text-muted-foreground">
                  Solutions e-commerce performantes pour développer votre activité en ligne.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <Users className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Formation</h3>
                <p className="text-muted-foreground">
                  Formation personnalisée pour maîtriser votre solution digitale.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <Trophy className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">SEO</h3>
                <p className="text-muted-foreground">
                  Optimisation pour les moteurs de recherche et visibilité en ligne.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <CheckCircle2 className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Maintenance</h3>
                <p className="text-muted-foreground">
                  Support technique et maintenance évolutive de vos solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Section Méthode de Travail */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ma Méthode de Travail</h2>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Une approche structurée pour garantir le succès de votre projet
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">1</div>
        <h3 className="mb-2 text-xl font-semibold">Échange Initial</h3>
        <p className="text-muted-foreground">Compréhension approfondie de vos besoins et objectifs</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">2</div>
        <h3 className="mb-2 text-xl font-semibold">Proposition</h3>
        <p className="text-muted-foreground">Élaboration d une solution personnalisée et chiffrage détaillé</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">3</div>
        <h3 className="mb-2 text-xl font-semibold">Développement</h3>
        <p className="text-muted-foreground">Réalisation de votre projet avec des points réguliers</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">4</div>
        <h3 className="mb-2 text-xl font-semibold">Livraison</h3>
        <p className="text-muted-foreground">Mise en ligne et accompagnement pour la prise en main</p>
      </motion.div>
    </div>
  </div>
</section>
{/* Section Ce qui me rend unique */}
<section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ce qui me rend unique</h2>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Des atouts qui font la différence pour votre projet
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
      >
        <h3 className="mb-4 text-xl font-semibold">Expertise Technique</h3>
        <p className="text-muted-foreground">
          Maîtrise des dernières technologies web et veille technologique constante pour des solutions toujours innovantes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
      >
        <h3 className="mb-4 text-xl font-semibold">Approche Personnalisée</h3>
        <p className="text-muted-foreground">
          Chaque projet est unique et mérite une attention particulière. Je m adapte à vos besoins spécifiques.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="group rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
      >
        <h3 className="mb-4 text-xl font-semibold">Communication Claire</h3>
        <p className="text-muted-foreground">
          Transparence et disponibilité tout au long du projet pour une collaboration efficace.
        </p>
      </motion.div>
    </div>
  </div>
</section>


      {/* Section Tarifs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Configurez Votre Projet</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Des solutions adaptées à tous les budgets pour concrétiser votre projet web
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md ${
                  plan.popular ? 'border-primary ring-2 ring-primary ring-offset-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Populaire
                  </div>
                )}
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-4 text-muted-foreground">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Caractéristiques */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Pourquoi me Choisir</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Mon expertise et mon engagement font la différence
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <CheckCircle2 className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
{/* Section FAQ */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Questions Fréquentes</h2>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Tout ce que vous devez savoir sur mes services
      </p>
    </motion.div>

    <div className="grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-lg border bg-card p-6"
      >
        <h3 className="mb-3 text-xl font-semibold">Combien coûte un site web ?</h3>
        <p className="text-muted-foreground">
          Le coût varie selon vos besoins spécifiques. Je vous propose des solutions à partir de 1499€. Contactez-moi pour un devis personnalisé.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-lg border bg-card p-6"
      >
        <h3 className="mb-3 text-xl font-semibold">Quel est le délai de réalisation ?</h3>
        <p className="text-muted-foreground">
          Le délai varie suivant la complexité du projet. J établit un planning précis dès le début.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="rounded-lg border bg-card p-6"
      >
        <h3 className="mb-3 text-xl font-semibold">Proposez-vous un service de maintenance ?</h3>
        <p className="text-muted-foreground">
          Oui, je propose des services de maintenance pour garantir la performance et la sécurité de votre site web.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="rounded-lg border bg-card p-6"
      >
        <h3 className="mb-3 text-xl font-semibold">Quelles technologies utilisez-vous ?</h3>
        <p className="text-muted-foreground">
          J utilise les dernières technologies web (React, Next.js, Node.js) pour créer des sites modernes et performants.
        </p>
      </motion.div>
    </div>
  </div>
</section>



      {/* Section CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Prêt à Transformer votre Vision en Réalité ?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-black dark:text-white">
              Contactez-moi dès aujourd hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg"
            >
              <Link href="/contact">
                Commencer votre Projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}