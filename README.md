# tiny-spin

## A tiny, zero-dependency CLI spinner

[Try it out](https://repl.it/@ascorbic/tiny-spin-demo)

When you want a CLI spinner in just a few bytes. Installation:

```shell
npm i tiny-spin
```

or

```shell
yarn add tiny-spin
```

Usage:

```js
// CommonJS
const { spin } = require("tiny-spin");

const stop = spin("Doing stuff");

// Do stuff

stop();
```

```js
// ESM

import { spin } from "tiny-spin";

const stop = spin("Doing stuff");

// Do stuff

stop();
```

## API

### `spin(message, frames, interval)`

- `message`: the message displayed after the spinner. Default empty
- `frames`: an array of strings that are the frames displayed by the spinner. Default `["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]`
- `interval`: the interval between frames. Default 80ms.

Returns a function that you call to stop the spinner.

Author: [Matt Kane](https://github.com/ascorbic). MIT licence.
