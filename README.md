# @textlint/get-config-base-dir

Context#getConfigBaseDir ponyfill for textlint ^8.x.x

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @textlint/get-config-base-dir

## Usage

```js
import { getConfigBaseDir } from "@textlint/get-config-base-dir"
const report = (context) => {
    const textlintRcDir = getConfigBaseDir(context);
}
```


## Changelog

See [Releases page](https://github.com/textlint/get-config-base-dir/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/textlint/get-config-base-dir/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
