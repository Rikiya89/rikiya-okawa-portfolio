Portfolio site built with [Next.js](https://nextjs.org/) (App Router) + Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values.

- `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD`: Basic auth for `/clientworks` and `/clientworks_jp`
- `NEXT_PUBLIC_SITE_URL`: Used for `metadataBase` (SEO)

## Notes

- Fonts are loaded via CSS `@import` (Google Fonts + Typekit).

## Codex Tasks

- See today’s summary: [CODEX_TODAY_TASKS.md](./CODEX_TODAY_TASKS.md)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
