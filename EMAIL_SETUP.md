# Email Configuration Guide

Your contact form is now functional! Follow these steps to configure email delivery.

## Gmail SMTP Setup (Recommended)

### Step 1: Create a Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already enabled)
3. Scroll down to **App passwords**: https://myaccount.google.com/apppasswords
4. Click **Select app** and choose **Mail**
5. Click **Select device** and choose **Other (Custom name)**
6. Enter "Logistics Website" or any name you prefer
7. Click **Generate**
8. **Copy the 16-character password** (you won't see it again!)

### Step 2: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values:

```env
EMAIL_USER=your-email@gmail.com          # Your Gmail address
EMAIL_PASS=xxxx xxxx xxxx xxxx           # The 16-character App Password from Step 1
EMAIL_TO=your-email@gmail.com            # Where you want to receive contact form submissions
```

### Step 3: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Testing the Contact Form

1. Navigate to `/contact` page
2. Fill out the form with test data
3. Click "Send Message"
4. You should see:
   - A loading state while sending
   - A success message after sending
   - Two emails:
     - One to your admin email (EMAIL_TO) with the submission details
     - One auto-reply to the customer confirming receipt

## Features Included

✅ **Form Validation**: Required fields are validated  
✅ **Loading States**: Visual feedback while sending  
✅ **Success/Error Messages**: Clear user feedback  
✅ **Auto-Reply**: Customers receive confirmation email  
✅ **Admin Notification**: You receive formatted submission details  
✅ **Form Reset**: Form clears automatically after successful submission  
✅ **Styled Emails**: Professional HTML email templates  
✅ **Security**: Credentials stored in environment variables  

## Troubleshooting

### "Invalid credentials" error
- Make sure you're using an **App Password**, not your regular Gmail password
- Verify EMAIL_USER and EMAIL_PASS are correctly set in `.env.local`
- Ensure 2-Step Verification is enabled on your Google Account

### Emails not arriving
- Check your spam folder
- Verify EMAIL_TO is set correctly
- Check server console for error messages

### "Failed to send email" error
- Restart your development server after changing `.env.local`
- Check your internet connection
- Verify Gmail SMTP is not blocked by your firewall

## Alternative Email Services

### Using a Custom SMTP Server

Replace the transporter configuration in `/app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.yourdomain.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Using SendGrid, Mailgun, or Other Services

These can be integrated by replacing the `nodemailer` configuration with their respective SDKs.

## Security Notes

⚠️ **Important**: 
- Never commit `.env.local` to version control (already in `.gitignore`)
- Use environment variables for all sensitive credentials
- For production, set these variables in your hosting platform's environment settings

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables in your hosting platform's dashboard
2. Go to your project settings → Environment Variables
3. Add:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_TO`

## Need Help?

If you encounter any issues:
1. Check the browser console for client-side errors
2. Check the server terminal for backend errors
3. Verify all environment variables are set correctly
4. Ensure your Gmail account has 2-Step Verification enabled