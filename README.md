# Georepublic's basic Hugo theme

## Requirements

Tested with Hugo `v0.109.0` or higher.

## Installation

Add as Git submodule to a Hugo project directory:

```sh
git submodule add git@github.com:Georepublic/hugo-theme-georepublic.git path/to/theme
```

Update and initialize available submodules with:

```sh
git submodule update --init --recursive
```

Install dependencies with npm:

```sh
cd path/to/theme
npm i
npm run build
```

Other commands:

```sh
npm run clean
```

## Development

Define custom theme parameters in `data/default.yaml` and use the following pattern to make them customizable as site parameters:

```sh
{{ .Site.Params.color | default .Site.Data.default.color }}
```

## Version History

See [all releases](https://github.com/georepublic/hugo-theme-georepublic/releases) with release notes.

## Authors

- [Daniel Kastl](https://github.com/dkastl)
- ... [and others](https://github.com/georepublic/hugo-theme-georepublic/graphs/contributors)

## LICENSE

This program is free software. See [LICENSE](LICENSE) for more information.
