# gatsby-starter-typescript-eslint

Simple gatsby starter that can use TypeScript and ESLint.

## Features

- TypeScript support
- Linting and Formatting with ESLint (Not dependent on Prettier)
- Alias import
- SEO (react-helmet)
- CSS in JS (emotion)
- modern-css-reset:muscle:
- Using npm:octocat:

## Usage

```sh
$ gatsby new <project-name> https://github.com/tetsugi/gatsby-starter-typescript-eslint/
```

## Note

You need to give the GraphQL query a unique name.
(Because generating a type definition requires it)

```ts
export const query = `
  query UniqueName {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```
