# Syncano Socket for storing Company type of data

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-company/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-company/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-company/master.svg)](https://codecov.io/github/eyedea-io/syncano-socket-company/)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/company.svg)](https://www.npmjs.com/package/@eyedea-sockets/company)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-company.svg)

Main Socket features:

* **company/add** — add Company object
* **company/update** — update Company object
* **company/delete** — delete Company object

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/company --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano(<instaneName>)

// Company params
const params = {
  legalName: 'Eyedea AS'
}
const suggestions = await s.get('company/add', params)

```
