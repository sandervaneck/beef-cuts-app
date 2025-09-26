# Beef Cuts App

An interactive, multilingual reference application that showcases the primary cuts of beef.
Users can hover over the illustrated map to explore individual cuts, read localized
information about each piece, and review a steak doneness guide. The experience is
personalized through a language selector that updates the interface and can be deep-linked
through a `lang` query parameter.

## Features

- **Interactive map:** Hover over the beef diagram to highlight individual cuts and view
  details in the side panel.
- **Multilingual support:** Switch between English, French, Italian, Spanish, German,
  Dutch, and Portuguese via the built-in language picker. The current language is reflected
  in the page URL so you can bookmark or share it.
- **Steak doneness reference:** A quick table that outlines common doneness levels
  translated into the selected language.
- **Referral & contact information:** Links to partner services and the creator's contact
  details are available directly in the app footer.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later is recommended)
- npm (bundled with Node.js)

### Installation

```bash
npm install
```

### Local development

Run the development server and open [http://localhost:3000](http://localhost:3000) in your
browser. The app will reload automatically when you edit source files.

```bash
npm start
```

### Running tests

Launch the interactive test runner. Press `a` to run all tests or `q` to quit the watcher.

```bash
npm test
```

### Production build

Create an optimized production build in the `build` directory.

```bash
npm run build
```

## Project Structure

```
src/
  App.tsx            # Top-level layout, language selection, and routing of components
  components/        # Interactive map, cut information panel, translations, and tables
  assets/            # Images and static resources for the beef cuts diagram
  beefcuts.ts        # Data describing each cut shown in the map and info panel
```

## Customization Tips

- **Adding a new language:** Update the translation utilities in `src/components/Translator`
  and extend any data files that provide localized strings.
- **Changing the map or cut data:** Modify the SVG assets in `src/assets/` and adjust the
  metadata in `src/beefcuts.ts` to keep the map labels and descriptions in sync.
- **Sharing localized views:** Append `?lang=<language>` (e.g., `?lang=spanish`) to the app
  URL to load the interface in a specific language by default.

## License

This project was bootstrapped with Create React App. Consult the repository owner for
licensing and usage terms before distributing or deploying the application.
