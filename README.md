# PhxInertiaVite

To start your Phoenix server:

- Install dependencies with `mix deps.get`
- Install Node.js dependencies with `npm install` inside the `assets` directory
- Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

# Notes

For some reason NPM must be used as the package manager. Something about how they arrange `node_modules` seems to be depended on by ESBuild/Vite and other PMs cause errors when serving files.
