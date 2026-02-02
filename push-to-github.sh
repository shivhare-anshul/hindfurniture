#!/bin/bash

# Push Hindfurniture to GitHub
# Replace YOUR_PAT_TOKEN with your actual Personal Access Token

echo "🚀 Pushing Hindfurniture to GitHub..."
echo ""

# Get PAT token from user
read -sp "Enter your GitHub Personal Access Token: " PAT_TOKEN
echo ""

if [ -z "$PAT_TOKEN" ]; then
    echo "❌ PAT token is required!"
    exit 1
fi

# Update remote URL with token
git remote set-url origin https://${PAT_TOKEN}@github.com/shivhare-anshul/hindfurniture.git

# Push to GitHub
echo "⬆️  Pushing code to GitHub..."
git push -u origin main

# Reset remote URL (remove token for security)
git remote set-url origin https://github.com/shivhare-anshul/hindfurniture.git

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next steps:"
    echo "   1. Go to: https://github.com/shivhare-anshul/hindfurniture/settings/pages"
    echo "   2. Under 'Source', select:"
    echo "      - Branch: main"
    echo "      - Folder: / (root)"
    echo "   3. Click 'Save'"
    echo ""
    echo "📱 Your website will be live at:"
    echo "   https://shivhare-anshul.github.io/hindfurniture/"
else
    echo ""
    echo "❌ Push failed. Please check your PAT token and try again."
fi
