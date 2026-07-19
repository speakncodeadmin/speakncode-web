# SpeakNCode Business Website

A professional business website for SpeakNCode built with Angular 21 using standalone components, featuring comprehensive IT services including software development, production support, interview panel services, and IT consultancy.

## Features

- **Home Page**: Hero section, services overview, client benefits, testimonials, technologies, and contact CTA
- **About Us**: Company story, experience, mission & vision, team expertise, and certifications
- **Services Page**: Detailed sections for all 4 service offerings
- **Portfolio/Case Studies**: Project summaries with challenges and results
- **Blog Section**: Blog listing and detail pages for SEO and industry authority
- **Contact Page**: Contact form, WhatsApp integration, Calendly booking, and Google Maps placeholder

## Prerequisites

Before running this project, you need to have:

- **Node.js** (v20 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)

## Installation

1. Install Node.js if not already installed:
   - Download from [nodejs.org](https://nodejs.org/)
   - Follow the installation instructions for your operating system

2. Navigate to the project directory:
   ```bash
   cd d:\speakncode\project\speakncode-web
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Development Server

Run the development server:

```bash
npm start
```

Or using Angular CLI directly:

```bash
ng serve
```

The application will be available at `http://localhost:4200/`

## Build for Production

Build the project for production:

```bash
npm run build
```

Or using Angular CLI:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
speakncode-web/
├── src/
│   ├── app/
│   │   ├── about/              # About Us page (standalone)
│   │   ├── blog/               # Blog listing and detail pages (standalone)
│   │   ├── contact/            # Contact page with integrations (standalone)
│   │   ├── footer/             # Footer component (standalone)
│   │   ├── home/               # Home page (standalone)
│   │   ├── navbar/             # Navigation component (standalone)
│   │   ├── portfolio/          # Portfolio/Case Studies page (standalone)
│   │   ├── services/           # Services page (standalone)
│   │   ├── app.component.ts    # Root component (standalone)
│   │   ├── app.config.ts       # App configuration (standalone)
│   │   └── app.routes.ts       # Routing configuration (standalone)
│   ├── assets/                 # Static assets
│   ├── index.html              # Main HTML file
│   ├── main.ts                 # Application entry point (standalone bootstrap)
│   └── styles.css              # Global styles
├── angular.json                # Angular configuration
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## Angular 21 Standalone Components

This project uses Angular 21's standalone component architecture:

- **No NgModules**: All components are standalone with their own imports
- **Functional Routing**: Routes defined in `app.routes.ts` with `provideRouter`
- **Application Config**: Configuration in `app.config.ts` instead of `app.module.ts`
- **Modern Bootstrap**: Uses `bootstrapApplication` instead of `platformBrowserDynamic().bootstrapModule`

### Key Files

- `src/app/app.config.ts` - Application configuration with providers
- `src/app/app.routes.ts` - Route definitions
- `src/main.ts` - Standalone bootstrap entry point

## Services Offered

1. **Software Development**
   - Web applications
   - APIs
   - Cloud-native systems
   - Enterprise solutions
   - Full-stack development

2. **Production Support**
   - 24/7 monitoring
   - Incident management
   - L2/L3 support
   - Root cause analysis
   - SLA support

3. **Interview Panel Services**
   - Technical interviews
   - Hiring support
   - Candidate evaluation
   - Coding assessments
   - Architecture interviews

4. **IT Consultancy**
   - Architecture consulting
   - DevOps consulting
   - Cloud migration
   - System optimization
   - Security consultation

## Customization

### Contact Information

Update contact details in:
- `src/app/footer/footer.component.html`
- `src/app/contact/contact.component.html`

### Calendly Integration

Replace the Calendly link in:
- `src/app/contact/contact.component.html`

### WhatsApp Integration

Update the WhatsApp number in:
- `src/app/contact/contact.component.html`

### Google Maps

Add your Google Maps embed code in:
- `src/app/contact/contact.component.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile Responsiveness

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## Technologies Used

- **Angular 21** - Frontend framework with standalone components
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Styling with CSS variables
- **RxJS** - Reactive programming

## Future Enhancements

- Backend API integration for contact form
- Dynamic blog content from CMS
- Real-time chat integration
- Multi-language support
- Client portal for SaaS offerings

## License

This project is proprietary software for SpeakNCode.

## Support

For support, contact:
- Email: contact@speakncode.com
- Phone: +1 (234) 567-890
