---
layout: default
title: "Why Should Developers Still Bother With WordPress?"
---

WordPress, in the opinion of many developers and designers, is a headache. [It
powers at least a quarter of websites][wp-usage] though, so to dismiss it out of
hand seems unfair!

Why would some developers turn their noses up at such a widely-adopted piece of
software? We'll summarize a few reasons below. Then, a brief discussion about
when WordPress is still worth it. Finally, for cases where WP is not the answer,
we'll evaluate a few alternatives.

## Critiques

<h3 class="margin-numeral" data-margin-num="1.">Plugins and Promises</h3>

WordPress has a *lot* of free[^1] plugins. Here's [how they frame
it][wp-plugins-copy]:

> ...there are literally thousands of plugins that extend what WordPress does,
  so the actual functionality is nearly limitless.

You'll likely find plugins to provide most requirements outside the core
WordPress features. What if they fall short of your ideal solution? Not to
worry, this is Open Source Software &mdash; you can extend it to meet your
needs! Continuing from the quote above:

> You are also free to do whatever you like with the WordPress code, extend it
  or modify in any way or use it for commercial projects without any licensing
  fees. That is the beauty of free software, free refers not only to price but
  also the freedom to have complete control over it.

I understand and applaud such strong commitment to [Open Source][open-source]!
But this language oversells it to non-technical users. In theory, one can extend
open source software indefinitely, but not without friction. Downloading
plugins, a WordPress site owner avoids development obstacles. (In the process,
they gain a lot of functionality for their site.) Those obstacles in their
rear-view become frames of reference for sophisticated development projects. The
enthusiasm of the marketing copy anchors expectations. Consequently, developers
often arrive to project meetings with rosy premises in play.

Most developers have heard some variation on the following. "*We need you to add
Feature X to Plugin Y that we've already sourced for you. Most the code is
already there.*" So, some developers avoid WordPress altogether. They do this as
a way to filter out scenarios where they'd be battling uphill for understanding.
If it's not yet clear why extending freely-available plugins can be
time-consuming and inefficient, read on...


<h3 class="margin-numeral" data-margin-num="2.">Spaghetti Code Forever</h3>

(Health outcomes are not part of the analogy that follows.)

Well-designed code can be imagined as a microwave dinner. Each ingredient tucked
neatly into its own slot in the tray. The opposite of this is **spaghetti**.
Ingredients twisted around one another, mixed amongst themselves &mdash; messy
by nature!

WordPress is a heaping plate of [spaghetti code][spaghetti-code]. Consider the
execution of a single WordPress function. You might see it output HTML, query
the database, and add variables to the global scope. A separate, well-defined
function should handle each of these actions. When a project does that, it
adheres to the [single-responsibility] principal. Code written this way is
easier to test, maintain, and understand. Spaghetti coding sacrifices these
benefits for reasons that are not always obvious. From
[wikipedia][single-responsibility]:

> The single responsibility principle is a computer programming principle that
states that every module or class should have responsibility over a single part
of the functionality provided by the software, and that responsibility should be
entirely encapsulated by the class.

How can one hedge against a large project turning into spaghetti? One answer is
to use the programming language to draw boundaries. WordPress's programming
language, PHP, has something that can help with this:
[namespacing][namespacing]. Sadly, PHP only added namespaces in version 5.3,
which came out in 2009. That's a full 5 years after the initial release of
WordPress!

This is a recurring theme. Upstream from WordPress, PHP and the greater software
development community make structural improvements. WordPress can't apply them
to the existing code without a substantial re-write. And so, the spaghetti code
stays[^2]. And who wants to work with outmoded practices and tools?


<h3 class="margin-numeral" data-margin-num="3.">Worst Practices</h3>


WordPress is a web application. There are well respected and oft-applied
guidelines for building web apps. "[The 12 Factor App][12-factor]" details some
of those gold standards. WordPress flouts all 12 factors. Neither does it
conform to any of the [PHP Standard Recommendations][psrs]. (The PSRs are sets
of rules to help developers write robust & readable code.)

This is no format war. It isn't like Blu-ray vs. HD-DVD. WordPress has no
analogues to any of the *12 Factors* or *PSRs*. When writing WordPress, the
authors couldn't foresee future development practices. Testing environments,
dependency managers, and automated deployments weren't common in the PHP world.
One makes an improved analogy by comparing Old 480p DVDs to a 1080p Blu-ray. On
best practices, WordPress is at a *generational disadvantage*.

Two quick consequences/observations that follow the above criticisms:

* [Cowboy coding][cowboy] is still very much the norm in the WordPress
  consulting scene. It's found in places that you may expect it: freelancers on
  UpWork or Fiverr. Yet, the white-collar, professional-seeming WordPress
  agencies also do this with startling frequency!

* WordPress' core files don't pass [their own code standards
  checks][wp-coding-standards]! [^4] This is emblematic of the generational
  disadvantage the codebase suffers from. (The standards came into being 13
  years after WP did.)


## When are the Trade-offs Worthwhile?

If you're new to web development, or lack experience with WordPress, use it on a
small to mid-sized project. Familiarizing yourself such a popular framework
gives you a new perspective. This software is what many web developers use on
the daily.

You might also consider developing WordPress themes or plugins. Take a look at
their [booming premium theme/plugin marketplaces][wp-marketplaces]. You may have
gripes about how WordPress is set up, how messy and bogged down the sites get in
many hands. But, the Gordon Gecko might see the appeal in such a large, captive
market.


## Alternatives

If you can jump ship, or make part of a project independent of WordPress, here
are a few recommendations:

[Symfony][symfony] or [Laravel][laravel] are PHP frameworks. They should be
considered if you're developing functionality beyond simple content management.
Both have their idiosyncrasies, but you'll find that they're more or less in
step with *12 factors*. They're also mature, open source projects with vibrant
communities and contributors.

Some projects require only content styling. Content isn't always updated
frequently! If you or your team can handle those updates, a [static][jekyll]
[site][next] [generator][hugo][^3] is a wonderful choice. Such a tool sidesteps
most maintenance, performance and security concerns!

Sometimes [costs are sunk][sunk-costs], and there's no convincing your agency,
client, or stakeholders. You can graft some modern development practices to the
project with the tooling over at [roots.io](https://roots.io). And take heart!
Nothing stops you from writing quality code within your corner of a WordPress
project..


## Conclusion (tl;dr)

WordPress has lots of problems, but it's still very popular. Developers often
have good reason for being skeptical about adopting it. It's worthwhile
exploring alternatives where you can convince stakeholders to do so.

---

[^1]: To say nothing of premium themes and plugins, and their feature lists.
      (Think War & Peace.)

[^2]: Stains?

[^3]: I acknowledge that this criticism loses some of its edge when you consider
      that these rules were created 6 years into the WordPress project. (Also
      consider that it was another *7* years before a WP core contributor really
      bring it into the fold.) Retroactively updating decades-old functions to
      comport with new standards is no small task. But this is precisely the
      point!

[^4]: A very cool seeming, quixotic take: https://wp2static.com/


[12-factor]: https://12factor.net/
[wp-usage]: https://www.codeinwp.com/blog/wordpress-statistics/#popularity
[wp-coding-standards]: https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/blob/develop/README.md#project-history
[open-source]: https://en.wikipedia.org/wiki/Open-source_software
[cowboy]: https://en.wikipedia.org/wiki/Cowboy_coding
[wp-plugins-copy]: https://wordpress.org/about/features/
[single-responsibility]: https://en.wikipedia.org/wiki/Single_responsibility_principle
[spaghetti-code]: https://en.wikipedia.org/wiki/Spaghetti_code
[psrs]: https://www.php-fig.org/psr/
[sunk-costs]: https://link.springer.com/chapter/10.1007%2F978-3-642-30350-0_11
[wp-marketplaces]: https://kinsta.com/blog/themeforest-pros-cons/
[symfony]: https://symfony.com/
[laravel]: https://laravel.com/
[jekyll]: https://jekyllrb.com/
[next]: https://nextjs.org/learn/
[hugo]: https://gohugo.io/
[namespacing]: http://php.net/manual/en/language.namespaces.rationale.php
