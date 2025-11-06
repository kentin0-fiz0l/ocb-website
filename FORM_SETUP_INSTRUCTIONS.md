# Web3Forms Setup Instructions

Your order form is now configured to work with Web3Forms! Follow these simple steps to activate it:

## Step 1: Get Your Free API Key

1. Go to **https://web3forms.com**
2. Enter your email: **jkino.ji@gmail.com**
3. Click "Get Access Key"
4. Check your email inbox for the API key (should arrive instantly)

## Step 2: Add the API Key to Your Website

1. Open the file: `src/pages/order.astro`
2. Find line 32 which says:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual API key from the email
4. Save the file

Example:
```html
<input type="hidden" name="access_key" value="abc123-your-actual-key-xyz789" />
```

## Step 3: Deploy to GitHub

```bash
cd ~/OCB/website
git add src/pages/order.astro
git commit -m "Add Web3Forms API key"
git push origin main
```

## Step 4: Test It!

1. Wait ~1 minute for GitHub Pages to build
2. Go to: https://kentin0-fiz0l.github.io/ocb-website/order
3. Fill out the test order form
4. Check your email at **jkino.ji@gmail.com** for the order notification

## ✅ Features Now Active

- ✓ Order notifications sent to jkino.ji@gmail.com
- ✓ Loading state on submit button
- ✓ Success/error messages
- ✓ Automatic form reset after submission
- ✓ Date picker enforces 48-hour minimum lead time
- ✓ Form validation for required fields
- ✓ Unlimited free submissions

## Troubleshooting

**Not receiving emails?**
- Check your spam/junk folder
- Verify the API key is correct (no extra spaces)
- Log in to https://web3forms.com with your email to check submission logs

**Form not submitting?**
- Open browser console (F12) to check for errors
- Ensure you replaced YOUR_ACCESS_KEY_HERE with your actual key
- Clear browser cache and try again

## Email Format

Each order will arrive in your inbox with:
- Subject: "New Order from OCB Website"
- Customer name, phone, and email
- Order details (product, quantity, occasion)
- Delivery method (pickup/local delivery/shipping)
- Preferred date
- Special requests/dietary restrictions

---

**Questions?** The form is fully configured and ready to go once you add your API key!
