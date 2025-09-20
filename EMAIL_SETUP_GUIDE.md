# EmailJS Auto-Reply Setup Guide

## Current Status ✅
- Your contact form now works without errors
- Basic email sending is functional
- Auto-reply is temporarily disabled

## Step-by-Step Setup for Auto-Reply

### Step 1: Test Current Form
1. Go to your portfolio website
2. Fill out the contact form and submit
3. You should see "Message Sent!" without any errors
4. Check your email (ayushchavan1980@gmail.com) - you should receive the message

### Step 2: Create Auto-Reply Template in EmailJS

1. **Login to EmailJS Dashboard**
   - Go to: https://www.emailjs.com/
   - Login with your account credentials

2. **Create New Template**
   - Click "Email Templates" in the sidebar
   - Click "Create New Template" button
   - Template Name: `Auto Reply Template`
   - Template ID: `template_auto_reply` (EXACTLY this - very important!)

3. **Template Configuration**
   ```
   To Email: {{to_email}}
   From Name: Ayush Chavan  
   From Email: ayushchavan1980@gmail.com
   Subject: {{reply_subject}}
   ```

4. **Email Body Template**
   ```
   Hi {{to_name}},

   Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible, usually within 24-48 hours.

   In the meantime, feel free to:
   • Check out my other projects on my portfolio
   • Connect with me on LinkedIn: https://linkedin.com/in/ayush-chavan-b2557335b
   • View my GitHub: https://github.com/Aayu126

   Best regards,
   Ayush Chavan
   Full Stack Developer
   ayushchavan1980@gmail.com
   +91 8421663088
   ```

5. **Save Template**
   - Click "Save" to create the template
   - Make sure the Template ID is exactly: `template_auto_reply`

### Step 3: Enable Auto-Reply in Code

After creating the template, uncomment the auto-reply code in your Contact.tsx file:

1. Open `src/components/Contact.tsx`
2. Find the commented section (lines 44-61)
3. Remove the `/*` and `*/` comment markers
4. Save the file

### Step 4: Test Auto-Reply

1. Submit another test message through your contact form
2. Check both:
   - Your inbox (you should receive the inquiry)
   - The sender's inbox (they should receive the auto-reply)

## Troubleshooting

### If Auto-Reply Doesn't Work:
1. Check Template ID is exactly `template_auto_reply`
2. Verify the template has correct variable names: `{{to_name}}`, `{{to_email}}`, `{{reply_subject}}`
3. Check browser console for error messages
4. Make sure your EmailJS service is active

### Variables Used:
- `{{to_name}}` - Person's name who sent the message
- `{{to_email}}` - Person's email (used in "To" field)  
- `{{reply_subject}}` - Dynamic subject line

### Test Checklist:
- [ ] Form submits without errors
- [ ] You receive the inquiry email
- [ ] User receives auto-reply email
- [ ] Auto-reply has correct information
- [ ] Both emails have proper formatting

## Need Help?
If you encounter any issues, check:
1. EmailJS dashboard for template configuration
2. Browser console for JavaScript errors
3. Email spam folders
4. EmailJS service status

## Final Code Location
Your updated Contact.tsx is located at:
`C:\Users\ayush\Ayush-Portfolio\src\components\Contact.tsx`