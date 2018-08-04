# Node.js Notes CLI

Simple node.js CLI application for managing notes

### Prerequisites

-   `node`
-   `npm`

## Getting Started

Clone this repository and install dependencies with `npm install`.
You can run the app with `node app.js` command, and you will get the list of available options. You can always run `node app.js [command] --help` if you need help with any command.

## Commands

-   `add` Adds new note, requires `--title` and `--body` arguments.
-   `read` Returns a note with specified title in `--title` argument.
-   `remove` Removes note by specified title in `--title` argument.
-   `list` Returns the list of all available notes.

## Built With

-   [Node](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
-   [Yargs](https://github.com/yargs/yargs) - Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

-   **Darko Tasevski** - _Initial work_ - [Puritanic](https://github.com/Puritanic)

See also the list of [contributors](CONTRIBUTORS.md) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

-   Hat tip to anyone whose code was used
