# Movies Frontend

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop the Movies App in Okteto.

The [Movies App](https://github.com/okteto/movies-multi-repo) is composed by the following components:

- A very simple Node.js API using [Express](https://expressjs.com). Deployed using a [Helm Chart](https://github.com/okteto/movies-api/tree/master/chart).
- A [MongoDB](https://www.mongodb.com) database, defined in a different [GitHub repository](https://github.com/okteto/mongodb).
- A React frontend, built with [Vite](https://vite.dev) and served by NGINX. Deployed using a [Helm Chart](https://github.com/okteto/movies-frontend/tree/main/chart).

## Deploy

Deploy the Movies App from the [movies-multi-repo](https://github.com/okteto/movies-multi-repo) repository. Its Okteto Manifest deploys this repository as a dependency.

## Develop

Execute the following command to activate your development container:

```command
$ okteto up
```

The development container runs the Vite development server with `npm start`, which updates the page in your browser when you change a file of `src`.
