# Veylan Store

Boutique indépendante de produits numériques : formations, ebooks, guides et ressources pratiques.

## Stack technique
- Next.js 15 — App Router
- React 19
- TypeScript strict
- Tailwind CSS 4
- Déploiement prévu sur Vercel
- Paiements prévus via Chariow

## Démarrage local
```bash
npm install
cp .env.example .env.local
npm run dev
```
Ouvrir http://localhost:3000.

## Scripts
- `npm run dev` : serveur local
- `npm run build` : build de production
- `npm run lint` : analyse ESLint
- `npm run typecheck` : vérification TypeScript

## État actuel
Le socle frontend et les pages de démonstration sont en cours de construction. Les produits et prix du catalogue sont fictifs. Aucun paiement n'est activé à ce stade.

## Sécurité
- Ne jamais committer `.env.local`.
- Les secrets Chariow restent côté serveur.
- Les notifications de paiement devront être vérifiées côté serveur avant toute livraison.

## Prochaines étapes
1. Valider les produits, descriptions et prix.
2. Définir le parcours de paiement Chariow.
3. Implémenter la confirmation serveur et la livraison numérique.
4. Ajouter l'administration des produits et commandes.
5. Ajouter les tests et configurer le déploiement Vercel.


<!-- Preview deployment trigger: storefront branch -->
