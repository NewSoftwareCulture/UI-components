# UI-components with storybook

> Use node v15.8.0

### Install storybook

1. `npx storybook init`
2. `npm run storybook`

### Deploy storybook to Github Pages

1. Edit build-storybook script in package.json

```json
{
  "build-storybook": "build-storybook -o docs -s ./src/stories/assets",
}
```

2. Add ssh url

```bash
git remote add origin REPOSITORY_URL
```

3. Add files to commit

```bash
git add .
```

4. Commit changes

```bash
git commit -m "init"
```

5. Push changes

```bash
git push origin master
```

6. Set `/docs` source in `Repository/Settings/Pages/Source`

7. Check your React App in https://NAME_ACCOUNT.github.io/REPOSITORY_NAME