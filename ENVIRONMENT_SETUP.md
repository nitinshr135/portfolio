# Environment Variables Setup

## EmailJS Configuration

This project uses EmailJS for the contact form functionality. You need to set up the following environment variables:

### Local Development (.env.local)

Create a `.env.local` file in the root directory with:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Vercel Deployment

Add these environment variables in your Vercel project settings:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the following variables:

| Variable Name | Value |
|---------------|-------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Your EmailJS Service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Your EmailJS Template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Your EmailJS Public Key |

### How to Get EmailJS Credentials

1. **Sign up** at [emailjs.com](https://www.emailjs.com/)
2. **Create a service** (Gmail, Outlook, etc.)
3. **Create an email template** with variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. **Copy your credentials** from the EmailJS dashboard

### Template Example

Your EmailJS template should look something like this:

```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}
```

### Security Notes

- These are public keys (safe to expose in frontend)
- The `NEXT_PUBLIC_` prefix makes them available in the browser
- EmailJS handles spam protection and rate limiting 