# Georepublic's basic Hugo theme

## Requirements

Tested with Hugo `v0.83.0` or higher.

## Installation

Install dependencies with npm:

```
cd path/to/theme
npm i
npm run build
```

Other commands:

```
npm run clean
```

## Development

Define custom theme parameters in `data/default.yaml` and use the following pattern to make them customizable as site parameters:

```
{{ .Site.Params.color | default .Site.Data.default.color }}
```

## Version History

See [all releases](https://github.com/georepublic/hugo-theme-georepublic/releases) with release notes.

## Authors

- [Daniel Kastl](https://github.com/dkastl)
- ... [and others](https://github.com/georepublic/hugo-theme-georepublic/graphs/contributors)

## LICENSE

This program is free software. See [LICENSE](LICENSE) for more information.
