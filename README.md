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
Les trois pages de présentation Veylan Academy sont intégrées. Les boutons de chaque page sont prêts à ouvrir directement le checkout Chariow correspondant dès que les trois liens réels seront renseignés dans les variables d'environnement publiques prévues. Aucun paiement n'est activé tant que ces liens ne sont pas configurés.

## Sécurité
- Ne jamais committer `.env.local`.
- Les secrets Chariow restent côté serveur.
- Les notifications de paiement devront être vérifiées côté serveur avant toute livraison.

## Configuration Chariow
Renseigner dans l'environnement Vercel (et localement dans `.env.local`) les trois liens de paiement directs :
- `NEXT_PUBLIC_CHARIOW_CHECKOUT_AI_PRODUCTIVITY_MASTERY`
- `NEXT_PUBLIC_CHARIOW_CHECKOUT_BUSINESS_SALES_SYSTEM`
- `NEXT_PUBLIC_CHARIOW_CHECKOUT_AI_CREATOR_STUDIO`

Ces valeurs sont des URL de checkout publiques, jamais des clés secrètes. Les clés privées et secrets de webhook restent côté serveur.

## Prochaines étapes
1. Récupérer les trois liens de paiement Chariow réels et les configurer dans Vercel.
2. Finaliser le contenu téléchargeable de chaque offre et ses modalités de livraison.
3. Vérifier les notifications de paiement côté serveur avant toute livraison automatisée.
4. Finaliser les pages légales et les coordonnées de contact.
5. Valider les contrôles CI, puis déployer sur Vercel.


<!-- Framework preset: Next.js. Build and output settings are managed by Vercel. -->

