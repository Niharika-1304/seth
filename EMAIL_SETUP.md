# Email Setup Guide

## Overview
The contact form is now integrated with Web3Forms to send form submissions directly to your email (sjb@culinaryprovisiongroup.com).

## How It Works
- **No backend required** - Email submissions go directly to your inbox
- **No API key setup needed** - Using a free Web3Forms access key
- **All form data included** - Name, email, business info, and responses

## Current Configuration
- **Service**: Web3Forms (Integrated)
- **API Key**: Managed in `Contact.jsx` (Currently using a public key)
- **Email Recipient**: sjb@culinaryprovisiongroup.com
- **Status**: ✅ Configured for Web3Forms

## How to Customize
1. **Get your own API Key**: Go to [web3forms.com](https://web3forms.com/) and enter your email.
2. **Update the Key**: In `src/pages/Contact.jsx`, change the `ACCESS_KEY` variable at the top of the `sendEmail` function.
3. **Change Recipient**: Web3Forms sends to the email you used to get the key.

## Troubleshooting
- **Failed to submit**: Ensure you are connected to the internet. If you use a fresh API key, you may need to click the activation link Web3Forms sends to your email first.
- **Spam**: Check your spam folder for the first few submissions.
   - Step 6: Assessment Engagement
3. Click "Request Consultation" to submit
4. Check sjb@culinaryprovisiongroup.com for the submission

## What Gets Emailed
When a form is submitted, the following data is sent:
- Full Name
- Email Address
- Business Name
- Location
- Business Type
- Revenue Range
- Primary Challenge
- Pressure Points
- Current Systems Status
- Implementation Readiness
- Assessment Engagement

## Security Notes
- The access key is intentionally public (for frontend use only)
- Web3Forms handles all email delivery securely
- No sensitive data is stored on the form
- Each submission goes directly to your email

## Troubleshooting

### Emails not arriving?
1. Check spam/junk folder
2. Verify sjb@culinaryprovisiongroup.com is correct
3. Check browser console for errors (F12 > Console tab)
4. Ensure you're filling all required fields (marked with *)

### Want to change recipient email?
1. Edit `.env.local` and change `VITE_EMAIL_TO`
2. Update the `to_email` field in Contact.jsx's `sendEmail()` function
3. Restart dev server

### Using a different email service?
You can switch to:
- **EmailJS** - More features, requires API key setup
- **Formspree** - Email form backend alternative
- **SendGrid** - Professional email API
- **AWS SES** - Enterprise solution

Contact me if you want to implement any of these alternatives!
