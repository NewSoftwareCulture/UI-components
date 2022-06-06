echo "release started!"
npm run build-storybook
git add .
git commit -m "chore: release"
git push origin master
echo "release completed!"