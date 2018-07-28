---
title:     Code a Dependable Learning Management System for The Academy of Culinary Nutrition
slug:      meijin
tags:      [wordpress, lms, qa, ecommerce, plugin, interoperativity]
asciinema: true
---

The [Academy of Culinary Nutrition][acn] administers the prestigious Culinary Nutrition
Expert course and grants the certification of the same name.

ACN is committed to WordPress, but dissatisfied with the selection of Learning
Management plugins for the platform. Together, we boiled down critiques of what
was available: "Too general", "Hard to customize", "Confusing admin screens",
"Lack of features", and "Breaks during upgrades".

Before going full green-field, we proposed modifying an off-the-shelf solution,
a comprehensive maintenance/admin package for their old LMS, and even bridging
their current site to an external service. While each solution had it's own
appeal, the only way to "have it all" would be to build from scratch!

{% capture image-caption %}
<p>Meijin's dashboard as it appears on culinarynutrition.com – this is what a student sees upon accessing their course accounts.</p>
<p>This example is sort of "meta"; a glimpse of the plugin being used to to train the teaching assistants before they go on to help with the main course!</p>
{% endcapture %}

{% capture image-src %}{{ '/assets/images/meijin-dashboard.png' | asset_url }}{% endcapture %}

{% include image_aside_macbook.html image=image-src caption=image-caption %}

{% capture quote-body %}
We were looking for a very specific LMS that needed to satisfy our students, our
coaches, and ourselves. Cameron and Adventurous Web Design came through for us
and helped craft an education experience that's had a positive impacts on
hundreds of people! We've served up X seasons of courses and counting, and it's
been a joy.
{% endcapture %}

{% include quote.html
  body=quote-body avatar="/assets/images/meghan-telpner.jpg"
  person="Meghan Telpner" position="Founder"
  company="The Academy of Culinary Nutrition"
%}

We started translating the standard LMS user flows into prototypes. Extending
beyond the basic LMS feature set to cover the ACN's specific needs. Meghan and
her team already had a well-worn map of their students' and experts'
pain-points.

{% include gallery.html pics="placeholder.png~My Pic|placeholder.png~My Next Pic|placeholder.png" %}

Serving the goal of reliability, we designed our code in a way that's commonly
out of scope/budget/left-field for WordPress projects. The configuration and
plugin ecosystems are not hospitipal to checking stability between the various
pieces. We constructed development and QA environments, and built automated
test-suites that could vouch for each addition and subtraction to our codebase.

{% include terminal.html title="<strong>Meijin LMS</strong> &mdash; Test Suite Sample" asset="/assets/lms" poster="npt:0:4" %}

The new LMS plugin (codename: 名人 Meijin) was meant to serve not just the ACN site,
but another web property - meghantelpner.com. To that end, the templating system
was built to be extenadable by any WordPress theme that ran alongside it.

Parallel to the development of the project was documentation. A rich
feature-set like this one required unambiguous terms and admin & user-facing
"how-to" material. The documentation was written and published in PDF, and HTML
format with chapters and built-in search.

### Feature Highlights

<div class="uk-grid uk-grid-width-medium-1-2" data-uk-grid-margin data-uk-grid-match>
  <div>{% include card.html text="Dropbox integration; helped to seamlessly deliver submissions for Teaching Assistants." img="/assets/images/dropbox.svg" %}</div>
  <div>{% include card.html text="Template inheritance. No matter the WordPress theme, customization is a cinch." img="/assets/images/layout.svg" %}</div>
  <div>{% include card.html text="Automated test suite. Each release is checked to ensure that previous features aren't broken!" img="/assets/images/terminal.svg" %}</div>
  <div>{% include card.html text="Incubated, and delivered with loving attention & care. Meghan is a long-time client upon whom we wish even more success!" img="/assets/images/chicken.svg" %}</div>
</div>

[acn]: https://culinarynutrition.com
