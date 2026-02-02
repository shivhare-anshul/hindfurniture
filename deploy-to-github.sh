#!/bin/bash

# GitHub Pages Deployment Script for Hindfurniture
# This script helps you push your website to GitHub

echo "🚀 Hindfurniture - GitHub Pages Deployment"
echo "=========================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Initializing..."
    git init
fi

# Check if remote is set
if ! git remote | grep -q "origin"; then
    echo ""
    echo "📝 Setting up remote repository..."
    echo "Please enter your GitHub repository URL:"
    echo "Example: https://github.com/shivhare-anshul/hindfurniture.git"
    read -p "Repository URL: " repo_url
    
    if [ -z "$repo_url" ]; then
        echo "❌ Repository URL is required!"
        exit 1
    fi
    
    git remote add origin "$repo_url"
    echo "✅ Remote added: $repo_url"
fi

# Add all files
echo ""
echo "📦 Adding files to git..."
git add .

# Commit changes
echo ""
echo "💾 Committing changes..."
git commit -m "Update Hindfurniture website - $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
echo ""
echo "⬆️  Pushing to GitHub..."
echo "⚠️  When prompted for password, use your Personal Access Token (not GitHub password)"
echo ""
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Your website will be available at:"
    echo "   https://shivhare-anshul.github.io/hindfurniture/"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Go to: https://github.com/shivhare-anshul/hindfurniture/settings/pages"
    echo "   2. Select branch: main"
    echo "   3. Select folder: / (root)"
    echo "   4. Click Save"
    echo "   5. Wait 1-2 minutes for the site to go live!"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "   - Your repository URL is correct"
    echo "   - You're using a Personal Access Token (not password)"
    echo "   - Your repository exists on GitHub"
fi
