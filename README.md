## This theme has been archived in favour of  [letterpad/letterpad-client-2](https://github.com/letterpad/letterpad-client-2)

## Letterpad Client - Theme

Demo: https://demo.letterpad.app

Letterpad client is responsible to display data from the Letterpad API.

It is responsible for displaying the below content.

- Home Page (collection of posts or a page)
- Single Page
- Single Post
- Tag (collection of posts)
- Preview (preview of a published/unpublished page or post)

This is a react based client developed with nextjs.

> You may choose to develop the client with any language of your choice.

To minimise the boilerplate and making it highly performant, it does not use many libraries. Since the Letterpad API is graphql, it uses `graphql` and `graphql-tag`.

Letterpad Dashboard is a multi-author dashboard, meaning one installation of Letterpad and serve multiple authors. In order to fetch the data for the appropriate author, a `clientId` is requried to be set in the `Authorization` header for every request.

```
 Authorization: `Basic ${process.env.CLIENT_ID}`,
```

## Development

If you are familiar with react and would like to customise the theme, then continue reading this.

1. Register an <a href="https://letterpad.app/admin/register">account</a> with letterpad to get the client id. You will find it in Settings under Keys after logging in Letterpad.

2. Add the Client Id in `next.config.js`.

3. Clone this repo first and execute the below commands.

```
yarn install
yarn dev
```

4. Open http://localhost:3001

## Features

- Site Header Image
- Site Logo
- Site Name and description
- Site Menu
- Favicon
- Social icons
- Home page (collection of posts or single page)
- Tag page (collection of posts)
- Page (single page)
- SEO
- Server side rendering
- Comments
- Subscription
