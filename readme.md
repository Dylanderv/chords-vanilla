# Deploy on gh-pages

On master branch type :
```bash
git add -f dist && git commit -m "Updating gh-pages"
git subtree push --prefix dist origin gh-pages
```