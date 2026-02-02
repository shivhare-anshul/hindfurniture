# GitHub Pages Setup Guide for Hindfurniture

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `hindfurniture` (or any name you prefer)
3. Description: "Hindfurniture - Premium Furniture E-Commerce Store"
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands:

```bash
cd /Users/anshul/Desktop/Website/FurnitureStore

# Add remote repository (replace with your actual repository URL)
git remote add origin https://github.com/shivhare-anshul/hindfurniture.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note**: When you push, GitHub will ask for authentication:
- **Username**: `shivhare-anshul`
- **Password**: Use a **Personal Access Token** (not your GitHub password)

### How to Create Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name it: "Hindfurniture Website"
4. Select scopes: Check **"repo"** (full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

## Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/shivhare-anshul/hindfurniture
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

## Step 4: Access Your Website

Your website will be available at:
**https://shivhare-anshul.github.io/hindfurniture/**

(It may take 1-2 minutes to go live after enabling Pages)

## Future Updates

To update your website after making changes:

```bash
cd /Users/anshul/Desktop/Website/FurnitureStore

# Add all changes
git add .

# Commit changes
git commit -m "Your update message"

# Push to GitHub
git push origin main
```

The website will automatically update within 1-2 minutes!

## Troubleshooting

- **404 Error**: Wait 2-3 minutes after enabling Pages
- **Images not showing**: Make sure image paths are relative (they are!)
- **Authentication failed**: Make sure you're using Personal Access Token, not password
