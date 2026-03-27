# Frontend

This directory contains the React JS code that implements the frontend for the XBlocks.

## Project Structure

The frontend tooling is based on Vite 8 running in the `lib` mode. The components are compiled into static JS and CSS files and stored in the `public` directory of the XBlock. The code is organized as:

* `src` - contains all the source files
* `src/<XBlock>` - contains files specific to an XBlock
* `src/<XBlock>/student-ui` - React app that will render UI in the LMS
* `src/<XBlock>/studio-ui` - React app that will provide the authoring experience in the CMS.

## Development

Developing the UI is done using the XBlock Workbench.

* Run `make dev` from the parent directory to start the workbench server.
* Run `npm run build:watch` - This will compile the code on change and update the files in the `public` directory of the XBlock

**NOTE:** Reload the workbench page on the browser for the changes to take effect. Live-reloading is not supported for static files.

### Adding New Libs

1. Create necessary folders for the XBlock in the `src` directory following the project conventions.
2. Add an new entry in `const libs`, mapping the entry points and the output directory in `vite.config.ts`.
3. Prefix your build commands with the name of the XBlock using the `XBLOCK` envvar.

For example, with the following config run `XBLOCK=my-new-block npm run build:watch`

```js
const libs = {
   //... existing content 
   "my-new-block": {
     entry: {
       "myNewBlockStudent": resolve(import.meta.dirname, "src/my-new-block/student-ui/main.tsx")
     },
     outDir: resolve(".../src/exemplar-blocks/my_new_block/public")
   }
}
```

This will output the bundled files in the `public` directory of `my-new-block`, which can then be injected into the XBlock's Fragments.
Refer to the `card-carousel` XBlock for an example.
