# Hexo Boilerplate Theme

[Hexo](https://hexo.io) boilerplate theme
for building static pages themed by
[Bulma](https://bulma.io) UI framework.

## Setup

After cloning this repo, run the following commands:

```
yarn install
yarn global add gulp hexo
```

To run hexo server:

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

## Static Files

To generate static files:

```
hexo generate
```

**NOTE:** Generated static files can be accessed in `static` folder.
