---
title:  Code a Dependable Learning Management System for The Academy of Culinary Nutrition
slug:   meijin
tags:   [wordpress, lms, qa, ecommerce, plugin, interoperativity]
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

We started translating the standard LMS user flows into prototypes. Extending
beyond the basic LMS feature set to cover the ACN's specific needs. Meghan and
her team already had a well-worn map of their students' and experts'
pain-points.

Serving the goal of reliability, we designed our code in a way that's commonly
out of scope/budget/left-field for WordPress projects. The configuration and
plugin ecosystems are not hospitipal to checking stability between the various
pieces. We constructed development and QA environments, and built automated
test-suites that could vouch for each addition and subtraction to our codebase.

The new LMS plugin (codename: meijin) was meant to serve not just the ACN site,
but another web property - meghantelpner.com. To that end, the templating system
was built to be extenadable by any WordPress theme that ran alongside it.

Parallel to the development of the project was documentation. A rich
feature-set like this one required unambiguous terms and admin & user-facing
"how-to" material. The documentation was written and published in PDF, and HTML
format with chapters and built-in search.

[acn]: https://culinarynutrition.com
