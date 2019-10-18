# Hugo DocBook Theme

This theme mainly based on [original book theme](https://github.com/alex-shpak/hugo-book).  
Original theme is cool, but does not fit my requirements.

Differences:

* Use all file system as pages (not only `/docs` and `/posts`)
* Use more space for content
* Print current page content button (or save as PDF)
* [Fira Code](https://github.com/tonsky/FiraCode) font in code snippets
* Copy to clipboard code snippets
* [Graphviz](https://graphviz.org) graphs support

[![Hugo](https://img.shields.io/badge/hugo-0.55-blue.svg)](https://gohugo.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

### [Hugo](https://gohugo.io) documentation theme as simple as plain book. Extended version

![Screenshot](https://github.com/vetcher/hugo-book/blob/master/images/screenshot-full.png)

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)

## Requirements

- Hugo 0.55 or higher
- Hugo extended version, read more [here](https://gohugo.io/news/0.48-relnotes/)

## Installation

Navigate to your hugo project root and run:

```
git submodule add https://github.com/vetcher/hugo-book themes/docbook
```

Then run hugo (or set `theme = "book"`/`theme: book` in configuration file)

```
hugo server --minify --theme book
```

### Creating site from scratch

Below is example how to create new site from scratch

```sh
hugo new site mydocs; cd mydocs
git init
git submodule add https://github.com/vetcher/hugo-book themes/docbook
cp -R themes/docbook/exampleSite/content .
```

```sh
hugo server --minify --theme book
```

## Configuration

### Site Configuration

There are few configuration options you can add to your `config.toml` file.  

```toml
# (Optional) Set this to true if you use capital letters in file names
disablePathToLower = true

# (Optional) Theme is intended for documentation use, therefore it doesn't render taxonomy.
# You can remove related files with config below
disableKinds = ['taxonomy', 'taxonomyTerm']
```

### Page Configuration

You can specify additional params per page in front matter

```toml
# Set type to 'docs' if you want to render page outside of configured section or if you render section other than 'docs'
type = 'docs'

# Set page weight to re-arrange items in file-tree menu (if BookMenuBundle not set)
weight = 10
```

### Partials

There are few empty partials you can override in `layouts/partials/`

| Partial                                         | Placement                              |
| ----------------------------------------------- | -------------------------------------- |
| `layouts/partials/custom-head.html`             | Before closing `<head>` tag            |
| `layouts/partials/custom-footer.html`           | Before closing `<body>` tag            |

### Extra Customisation

| File                     | Description                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `static/favicon.png`     | Override default favicon                                                              |
| `assets/_custom.scss`    | Customise or override scss styles                                                     |
| `assets/_variables.scss` | Override default SCSS variables                                                       |
| `assets/_fonts.scss`     | Replace default font with custom fonts (e.g. local files or remote like google fonts) |
