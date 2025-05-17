# Personal Portfolio Website

## Course Context

- **Program**: Frontend Programming
- **Course**: Front-End Development
- **Project Type**: Individual Project (Project-3: Personal Portfolio Website)

## Overview

A responsive personal portfolio website built with React, Next.js 15, TypeScript, and Tailwind CSS. This project showcases my development skills, experience, and projects in a modern, interactive interface. The website features smooth animations powered by Framer Motion, a clean design focusing on user experience, and a fully responsive layout that works seamlessly across all device sizes.

## Live Demo

The portfolio website is deployed and live:

[https://www.frontender.se)

## Features

### Layout & Design

- Sleek, modern design with thoughtful color scheme and typography
- Smooth animations and transitions using Framer Motion
- Fully responsive layout that adapts to mobile, tablet, and desktop viewports
- Intuitive navigation with interactive menu elements
- Cohesive visual language throughout all pages

### Home Page

- Dynamic hero section with custom typewriter effect
- Skills overview with animated presentation
- Featured projects section with project cards
- Call-to-action sections for contacting

### About Page

- Comprehensive personal profile and biography
- Interactive experience timeline with expandable sections
- Educational background with detailed information
- Skills and language proficiency visualizations
- Personal interests section with running achievements

### Projects Page

- Showcase of featured development projects
- Project details including technologies used and descriptions
- Direct links to live demos and GitHub repositories
- Responsive grid layout for project cards
- Visual project previews

### Contact Page

- Functional contact form powered by React Email and Resend
- Input validation and error handling
- Social media links and contact information
- Interactive location information with map reference
- Availability information for potential clients/employers

### Technical Features

- TypeScript for type-safe code throughout the application
- Next.js App Router for optimized routing and page rendering
- Server components and client components with clear separation
- Tailwind CSS for responsive, utility-first styling
- Framer Motion for smooth, high-performance animations
- React Icons for consistent iconography
- Responsive image optimization with Next.js Image component
- API routes for form processing
- Modular component architecture

## Technology Stack

- **Frontend Framework**: React 19 / Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons / Lucide React
- **Component Library**: shadcn/ui components
- **Email Integration**: Resend
- **Deployment**: Vercel

## Project Structure

```plaintext
├── app/                 # Next.js app directory with pages
│   ├── about/           # About page
│   ├── api/             # API routes
│   │   └── contact/     # Contact form endpoint
│   ├── contact/         # Contact page
│   ├── projects/        # Projects page
│   ├── globals.css      # Global CSS with Tailwind
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page component
├── components/          # React components
│   ├── ui/              # UI components (shadcn)
│   ├── footer.tsx       # Footer component
│   ├── header.tsx       # Header with navigation
│   ├── skills.tsx       # Skills display component
│   └── typewriter.tsx   # Custom typewriter effect
├── lib/                 # Utility functions and data
│   ├── data/            # Static data for the site
│   │   └── data.ts      # Content data (experience, projects, etc.)
│   ├── types/           # TypeScript type definitions
│   │   └── types.ts     # Shared type interfaces
│   └── utils.ts         # Utility helper functions
├── public/              # Static assets
│   ├── icons/           # Icon assets
│   ├── images/          # Image assets
│   └── logos/           # Logo assets
├── .gitignore           # Git ignore file
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration
├── README.md            # Project documentation
└── tsconfig.json        # TypeScript configuration
```

## Key Features Implementation

### Typewriter Effect

The home page features a custom typewriter effect that simulates realistic typing with:

- Natural pauses and mistakes
- Backtracking to correct "typos"
- Synonyms that get replaced
- Keyboard adjacency for realistic mistakes

```typescript
const typeChar = async (char: string) => {
  // Thinking pause
  if (Math.random() < pauseProbability) {
    await wait(50 + Math.random() * 100)
  }
  // Introduce typo
  if (Math.random() < mistakeProbability && /[A-Za-z0-9]/.test(char)) {
    const wrongCount = Math.ceil(Math.random() * maxMistakeLength)
    for (let i = 0; i < wrongCount; i++) {
      setDisplayedText((p) => p + getWrongChar(char))
      await wait(typingSpeed * 0.8)
    }
    // Delete each wrong char
    for (let i = 0; i < wrongCount; i++) {
      setDisplayedText((p) => p.slice(0, -1))
      await wait(typingSpeed * 0.6)
    }
  }
  // Type the intended character
  setDisplayedText((p) => p + char)
}
```

### Animated Timelines

The About page uses interactive timelines for experience and education with:

- Expandable sections for showing more or less entries
- Smooth animations when expanding/collapsing
- Visual timeline with connecting elements
- Hover effects for individual timeline nodes

### Contact Form with Validation

The contact form implements:

- Client-side input validation
- Server-side processing via API routes
- Email delivery with Resend
- Error handling and success messages
- Loading states during submission

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setError(null)

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (response.ok) {
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    } else {
      setError(data.error || "Something went wrong. Please try again.")
    }
  } catch (error) {
    setError("Failed to submit form. Please check your connection.")
  } finally {
    setIsSubmitting(false)
  }
}
```

### Responsive Navigation

The header component features:

- Desktop navigation with hover effects
- Mobile-friendly hamburger menu
- Smooth animations for menu transitions
- Scroll-aware behavior that changes appearance based on scroll position

## Installation and Setup

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/herrgallardo/frontender.git

# Navigate to the project directory
cd frontender

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables Setup

The contact form functionality requires setting up environment variables for email delivery:

1. Create a `.env.local` file in the root directory of your project
2. Add the following variables:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
FROM_EMAIL=Your Name <contact@resend.dev>
```

These variables are used by the contact form API route to:

- Authenticate with the Resend service
- Determine where to send contact form submissions
- Set the appropriate "From" address for emails

For security:

- Never commit `.env.local` to your repository (it should be in `.gitignore`)
- For production deployment on Vercel, add these environment variables in the Vercel project settings

If you're using the project template, you'll need to sign up for a [Resend](https://resend.com) account to get your own API key.

## Customization

### Content

To update the site content, edit the data files in the `lib/data` directory:

```typescript
// Example: Update home page content
export const homePageContent: HomePageContent = {
  hero: {
    description: "Your updated hero description",
  },
  // ...other content
}
```

### Styling

The project uses Tailwind CSS 4 with Next.js 15, which has a different configuration approach from older versions:

1. Edit theme colors and variables in `app/globals.css`
2. Modify Tailwind utility classes directly in component files
3. For theme customization, use the `@theme` directive in `globals.css`
4. The Tailwind configuration is handled through `@tailwindcss/postcss` in `postcss.config.mjs`

Tailwind 4 uses CSS variables by default, so you can customize colors and other properties in the `:root` and `.dark` selectors in your CSS file.

## Deployment

This project is deployed using Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

For production deployment:

```bash
vercel --prod
```

## Project Requirements Met

This project fulfills the requirements specified in the project description:

- Developed with React/Next.js
- Deployed on Vercel
- Responsive design for all device sizes
- Clear organization of code and components
- Comprehensive README documentation
- Optimized for performance and accessibility

## Future Enhancements

- Add blog functionality for tech articles and updates
- Implement dark/light mode toggle
- Add localization for multiple languages
- Create a downloadable resume PDF
- Add more interactive project demos
- Implement analytics for visitor tracking
- Create a CMS backend for easier content updates

## Acknowledgments

- Framer Motion for animation capabilities
- shadcn/ui for component inspiration
- TailwindCSS community for styling techniques
- Vercel for hosting and deployment
- React and Next.js documentation and community

## Contact

For questions or feedback about this project:

- Email: [antonio@frontender.se](mailto:antonio@frontender.se)
- GitHub: [herrgallardo](https://github.com/herrgallardo)
- LinkedIn: [Antonio Gallardo Girela](https://www.linkedin.com/in/antonio-gallardo-girela/)
