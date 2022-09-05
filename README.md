# Movies Frontend

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop the Movies App in Okteto.

The [Movies App](https://github.com/okteto/movies-multi-repo) is composed by the following components:

- A very simple Node.js API using [Express](https://expressjs.com). Deployed using a [Helm Chart](https://github.com/okteto/movies-api/tree/master/chart).
- A [MongoDB](https://www.mongodb.com) database.  Deployed using a public [Helm Chart](https://docs.bitnami.com/kubernetes/infrastructure/mongodb/get-started/install/)
- A frontend in React, defined in a different [Github Repository]((https://github.com/okteto/movies-frontend)).

## Develop

Execute the following command to activate your development container:

```command
$ okteto up
```

```
 ✓  Development container activated
 ✓  Files synchronized
    Namespace: cindy
    Name:      frontend

yarn run v1.22.19
$ yarn devel
$ webpack serve
ℹ ｢wds｣: Project is running at http://0.0.0.0:80/
ℹ ｢wds｣: webpack output is served from undefined
ℹ ｢wds｣: Content not from webpack is served from /src
ℹ ｢wdm｣: assets by info 1.72 MiB [immutable]
  asset app.fed4dbdea3fbf92b49a2.js 1.44 MiB [emitted] [immutable] (name: main)
  asset 6a651e406cc20da9645276d70ab7d728.jpg 181 KiB [emitted] [immutable] (auxiliary name: main)
  asset 0d01325a455e6f2344359a91f0434eb1.jpg 95.9 KiB [emitted] [immutable] (auxiliary name: main)
asset favicon.png 2.59 KiB [emitted]
asset index.html 353 bytes [emitted]
cached modules 1010 KiB [cached] 24 modules
runtime modules 25.8 KiB 14 modules
javascript modules 333 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 20.9 KiB 10 modules
  modules by path ./node_modules/webpack/hot/ 4.46 KiB 5 modules
  modules by path ./node_modules/html-entities/lib/*.js 57.9 KiB 4 modules
  modules by path ./node_modules/querystring/*.js 4.51 KiB
    ./node_modules/querystring/index.js 127 bytes [built] [code generated]
    ./node_modules/querystring/decode.js 2.34 KiB [built] [code generated]
    ./node_modules/querystring/encode.js 2.04 KiB [built] [code generated]
  modules by path ./node_modules/url/*.js 23.1 KiB
    ./node_modules/url/url.js 22.8 KiB [built] [code generated]
    ./node_modules/url/util.js 314 bytes [built] [code generated]
webpack 5.1.3 compiled successfully in 1520 ms
ℹ ｢wdm｣: Compiled successfully.
```
