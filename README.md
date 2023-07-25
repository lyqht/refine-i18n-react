## refine-i18n-react

This project adds [deepl-translate-github-action](https://github.com/lyqht/deepl-translate-github-action) for automated translations on top of the generated project based off this command

```bash
npm create refine-app@latest -- --example i18n-react
```

This project has also been modified in the [header component](src/components/header/index.tsx) for users to select different languages aside from the default EN and DE languages.
## How to add more languages?

To add a new language to your app,
1. go to `src/i18n.ts` and add to `fallbackLng` and `supportedLngs` arrays.
2. add your language to country code map in `simpleLangToCountryMap` at the [header component](src/components/header/index.tsx)
3. add the corresponding country image to `public/images/flags/{country_code}.svg`. You can find the entire list of possible country flag images [here](https://flaglog.com/country-codes).
4. then in the deepl-translate-github-action workflow `translate.yml`, add to `target_languages`
