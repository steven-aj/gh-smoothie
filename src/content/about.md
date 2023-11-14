---
title: About Smoothie
author: Steven Johnson
date: 11/9/2023
description: A hackable GitHub blogging framework for developers
keywords:
  - about
  - gh-smoothie
  - github-smoothie
  - smothie
  - github
  - blogging
  - blog
  - framework
  - obsidian
---
# About Smoothie

Smoothie is a SvelteKit app built as <a target="_blank" href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll">an unofficial alternative to Jekyll</a>.

It's a *hackable GitHub blogging framework* **for developers** and comes with a starter <a target="_blank" href="https://help.obsidian.md/Files+and+folders/How+Obsidian+stores+data">Obsidian Vault</a> including 3 front matter templates:

- `site-meta`
- `page`
- `post-single`

Pages and their meta-data are managed by adding content (*as you would with a document editor*) and modifying the markdown's front matter.

For convenience, the vault comes with the community-built <a target="_blank" href="https://github.com/polyipseity/obsidian-terminal/releases/tag/3.14.0">Obsidian Terminal</a> so you can commit and push changes from within [Obsidian](https://obsidian.md) itself.

The repo also features deployment configurations for GitHub Pages. To deploy the app or post new articles, push your changes into `main` and GitHub will do the rest.

Feel free to fork this repo to your own collection & hack it as much as you want.

## Front Matter Examples

In its default configuration, Smoothie's front matter is used to generate meta data across the site. 

The `posts` library also pulls from this to render article cards on the front-end.

### Site-Meta Template

```
---
title: 
author: 
description: 
keywords:
---
```

### Page Template

```
---
title: 
author: 
date: 
description: 
cover: 
keywords:
---
```

### Post-Single Template

```
---
status: draft | published
title: 
date: 
author: 
excerpt: 
cover: 
tags:
---
```