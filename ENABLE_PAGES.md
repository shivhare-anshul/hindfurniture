# Enable GitHub Pages - Step by Step Guide

## ✅ Verification: All Code is Pushed

Your repository has all the required files:
- ✅ index.html (Main website)
- ✅ style.css (Styles)
- ✅ script.js (JavaScript)
- ✅ Images/ (All product images)
- ✅ README.md

**Repository URL**: https://github.com/shivhare-anshul/hindfurniture

## 🔧 Enable GitHub Pages (Manual Steps)

### Step 1: Go to Repository Settings
1. Open: https://github.com/shivhare-anshul/hindfurniture
2. Click on the **"Settings"** tab (top right of the repository page)
   - If you don't see "Settings", make sure you're logged in and have admin access

### Step 2: Navigate to Pages Section
1. In the left sidebar, scroll down and click **"Pages"**
   - It's under the "Code and automation" section

### Step 3: Configure Source
1. Under **"Source"** section:
   - **Branch**: Select `main` from the dropdown
   - **Folder**: Select `/ (root)` from the dropdown
2. Click **"Save"** button

### Step 4: Wait for Deployment
- GitHub will show a yellow/orange indicator that deployment is in progress
- Wait 1-2 minutes
- The indicator will turn green when ready
- You'll see a message: "Your site is live at https://shivhare-anshul.github.io/hindfurniture/"

### Step 5: Verify Your Site
- Visit: https://shivhare-anshul.github.io/hindfurniture/
- Your website should now be live!

## 🔍 Troubleshooting

### If you still see 404 after enabling:
1. **Wait 2-3 minutes** - GitHub needs time to build
2. **Check the Pages tab** - Look for any error messages
3. **Verify branch name** - Make sure you selected `main` (not `master`)
4. **Clear browser cache** - Try incognito/private window
5. **Check repository is public** - GitHub Pages requires public repo for free accounts

### If Settings tab is not visible:
- Make sure you're logged into GitHub
- Verify you have admin access to the repository
- Check the repository URL is correct

### If you see "Build failed":
- Check the "Actions" tab for build logs
- Make sure `index.html` is in the root directory (it is ✅)
- Verify all file paths are correct

## 📸 Visual Guide

The Pages settings should look like this:

```
Source
┌─────────────────────────────────┐
│ Branch: [main ▼]                │
│ Folder: [/ (root) ▼]            │
│                                  │
│          [Save]                  │
└─────────────────────────────────┘
```

## ✅ Quick Checklist

- [ ] Repository is public
- [ ] All files are pushed to `main` branch
- [ ] Settings → Pages is configured
- [ ] Branch: `main`
- [ ] Folder: `/ (root)`
- [ ] Clicked "Save"
- [ ] Waited 1-2 minutes
- [ ] Checked the live URL

## 🚀 After Enabling

Once Pages is enabled, your site will automatically update whenever you push changes to the `main` branch!
