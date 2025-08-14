---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3

toc:
  sidebar: right

bottom_image:
  image: Seattle2018-1.jpg
  caption: Twice Told Stories, Seattle, WA, 8/24/2018
---

<!-- _pages/publications.md -->

You can view my Google scholar profile [here](https://scholar.google.com/citations?user=GjpdpusAAAAJ&hl=en){:target="\_blank"}

If you are unable to access any of the files below, please [email me](mailto:{{ site.email }})!
{: .notice--info}

## published articles

<div class="publications">
{% bibliography -q @*[pubtype=article] %}
</div>

<br>

## manuscripts submitted or in preparation

<div class="publications">
{% bibliography -q @*[pubtype=submitted] %}
</div>

<br>

## book chapters

<div class="publications">
{% bibliography -q @*[pubtype=chapter] %}
</div>

<br>

## conference presentations

### talks

<div class="publications">
{% bibliography -q @*[pubtype=conftalk] %}
</div>

<br>

### posters

<div class="publications">
{% bibliography -q @*[pubtype=confposter] %}
</div>
