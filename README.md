# Contentful JavaScript Cookbook Starter

Create a JavaScript cookbook powered by [Contentful](https://www.contentful.com/).

## Features

- Simple content model and structure. Easy to adjust to your needs.
- Uses the [Contentful JavaScript SDK](https://www.npmjs.com/package/contentful) to fetch the content.
- Uses the [rich-text-html-renderer](https://www.npmjs.com/package/@contentful/rich-text-html-renderer) to render Rich Text.

## Getting started

### 1. Get the source code and install dependencies

```sh
git clone https://github.com/contentful/starter-javascript-cookbook.git
npm install
```

### 2. Set up the content model

The project comes with a Contentful set up command that imports the required content model and adds sample content to your space. 

The command asks you for a [Space ID](https://www.contentful.com/help/find-space-id/), [Content Management API](https://www.contentful.com/developers/docs/references/content-management-api/) Access Token, and the [Conetnt Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) Access Token.

Run the following command to set up the content model.

```sh
npm run setup
```

### 3. Run it locally

```sh
npm run dev
```

Navigate to `localhost:3000` to view the Cookbook app.