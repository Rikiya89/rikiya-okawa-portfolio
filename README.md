## Space Portfolio

Personal portfolio site built with [Next.js](https://nextjs.org/) (App Router) + Tailwind CSS.

Includes optional Basic Auth protection for private work pages.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values.

- `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD`: Basic auth for `/clientworks` and `/clientworks_jp`
- `NEXT_PUBLIC_SITE_URL`: Used for `metadataBase` (SEO)

Security note: don’t commit `.env.local` or share real credentials in a public repo.

## Sharing Basic Auth (for job applications)

- Use demo-only credentials (no sensitive access), and rotate/delete them anytime.
- Share credentials privately (email/LinkedIn/password manager), not in the repo or a public page.

## Scripts

- `npm run dev`: local development
- `npm run lint`: lint
- `npm run build`: production build
- `npm run start`: start production server

## Notes

- Fonts are loaded via CSS `@import` (Google Fonts + Typekit).
- Basic auth is implemented in `middleware.ts`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy is [Vercel](https://vercel.com/).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
