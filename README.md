# 🍋 Lemon Team Moving

A modern, high-converting, SEO-optimized moving company website for **Lemon Team Moving** — a trusted NYC moving company with 8+ years of experience serving New York City, Westchester County, and New Rochelle.

Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com), this site is designed to generate leads, phone calls, and quote requests with a clean white design accented with Lemon Yellow.

## ✨ Features

- 🏠 **Conversion-focused homepage** with hero, credibility badges, services, locations, testimonials, and FAQs
- ⚙️ **Dynamic services pages** for local, long-distance, residential, commercial, packing, furniture, piano moving, and storage
- 📍 **Location pages** for NYC, Manhattan, Brooklyn, Queens, Bronx, Staten Island, Westchester County, and New Rochelle
- ⭐ **Testimonials** with star ratings
- ❓ **FAQ section** with FAQ Schema markup for rich SEO results
- 📌 **Sticky header** with "Get Free Moving Quote" CTA
- 🟡 **Floating "Get Free Quote" button** on all pages
- 🔗 **Internal linking** on the phrase "movers NYC"
- 📱 Mobile-first responsive layout with fast loading
- 🔍 SEO-optimized metadata using your target keywords

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3661715b2ac5cef3df9522&clone_repository=6a3662f25b2ac5cef3df9538)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: **Create a modern, high-converting, SEO-optimized moving company website for the brand "Lemon Team Moving".** Brand Name: Lemon Team Moving, Industry: Moving and Packing Services, Experience: 8+ Years, Service Areas: NYC, Westchester County, and New Rochelle, Business Goal: Generate leads, phone calls, and quote requests. Includes SEO keywords (movers nyc, nyc movers, nyc moving company, etc.), modern premium design with clean white background and Lemon Yellow accents, sticky header with CTA, floating Get Free Quote button, hero, credibility badges, about, services, locations, why choose us, testimonials, FAQs with schema, and CTA section. Logo from https://lemonteamoving.com/wp-content/uploads/2024/09/Lemon-logo.png with internal linking on phrase movers NYC to https://lemonteamoving.com/."

### Code Generation Prompt

> "Build a Next.js application for a company website called 'My Company'. The content is managed in Cosmic CMS with the following object types: site-settings, services, team-members, locations, case-studies, testimonials, faqs. Create a beautiful, modern, responsive design with a homepage and pages for each content type. Create a modern, high-converting, SEO-optimized moving company website for the brand 'Lemon Team Moving' with Lemon Yellow accents, sticky header with CTA, floating Get Free Quote button, and FAQ schema markup."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cosmic](https://www.cosmicjs.com/docs)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a bucket containing the content types listed above

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (these are provided automatically when cloning in Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single location by slug
const { object: location } = await cosmic.objects
  .findOne({ type: 'locations', slug: 'manhattan-movers' })
  .depth(1)
```

## 🌌 Cosmic CMS Integration

This application reads from the following Cosmic object types:

- **site-settings** — brand name, logo, phone number, hero content, about, credibility badges, why-choose-us, and CTA copy
- **services** — service name, icon, descriptions, and featured image
- **team-members** — name, role, photo, bio, years of experience
- **locations** — location name, SEO description, featured image
- **testimonials** — client name, rating, quote, location
- **faqs** — questions and answers

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## ☁️ Deployment Options

### Vercel

1. Push your code to a Git repository
2. Import the project into [Vercel](https://vercel.com/)
3. Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify

1. Connect your repository to [Netlify](https://www.netlify.com/)
2. Set the build command to `bun run build`
3. Add your environment variables
4. Deploy

<!-- README_END -->