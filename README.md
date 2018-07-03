# Hexo Boilerplate Theme

[Hexo](https://hexo.io) boilerplate theme
for building static pages themed by
[Bulma](https://bulma.io) UI framework.

## Setup

To install Hexo and other dependencies:

```
bin/install
```

To create project files:

```
bin/init
```

**NOTE:** When creating project files, the sample boilerplate files,
`_config.yml`, and `package.json` files are removed. When the
`theme/boilerplate` folder name is renamed,
the `.gitignore`, `_config.yml`, and `gulpfile.js`
should be updated. Replace _boilerplate_ with the name of the new theme.
Lastly, add the remote origin for the project repository.
Commit your changes then push your first Hexo theme project.

## Static Files

To generate static files:

```
bin/build
```

**NOTE:** Generated static files can be accessed in `static` folder.

## Local Server

```
hexo server -p 7777
```

## Home Page

Open `themes/boilerplate/layout/_pages/_home.ejs` to layout the home page.

## New Parent Page

To add new parent page:

```
hexo new page parent-page-name
```

**NOTE:** The `parent-page-name` is the same path used in URL to access the page.
Example: `http://localhost:7777/parent-page-name`.
Open the `source/parent-page-name/index.md` then update the `title`
and add the `ejs_path` key.

```
---
layout: page
ejs_path: parent_page_name
title: Parent Page Name
---
```

**NOTE:** The `ejs_path` shall be used to map the respective `index.ejs`. Open the
`themes/layout/_pages/` and create a new folder following the `ejs_path` value
then create an `index.ejs` file. The expected EJS file path should be
`themes/layout/_pages/parent_page_name/index.ejs`.

## New Child Page

To add a new child page:

```
hexo new page sub-page --path parent-page-name/child-page-name/index
```

**NOTE:** Always add `index` at the end of the path when generating a new child page.
Open the `source/parent-page-name/child-page-name/index.md` then update the `title`
and add the `ejs_path` key.

```
---
layout: page
ejs_path: parent_page_name/child_page_name
title: Child Page Name | Parent Page Name
---
```

**NOTE:** Following the notes for `parent-page-name`, the expected EJS file path for child
page should be `themes/layout/_pages/parent_page_name/child_page_name/index.ejs`.

## Gulp Tasks

To watch the changes in `.scss` and `.js` files:

```
gulp watch
```

Check the [gulpfile.js](https://github.com/rickyhurtado/hexo-boilerplate-theme/blob/master/gulpfile.js)
for other available gulp tasks.
