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

### 1. Plugins and Promises

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
However, the impression that non-technical WordPress users are left with is that
open source software can be extended indefinitely and with little friction.
With access to these free plugins and no licensing headaches, site owners clear
a lot of obstacles via WordPress! Those easily cleared obstacles become frames
of reference for more sophisticated development projects. Expectations are
anchored by the enthusiasm of the marketing copy, and developers arrive to
projects with very rosy premises already in play.

Most developers have heard some variation on this: "*We simply need you to add
feature X to plugin Y that we've sourced for you. Most the code is already
there.*" There's a mismatch between what WordPress communicates about itself and
its plugins and the reality of extending of those plugins. Some developers see
avoiding WordPress as a way to filter out these types of scenarios and the
uphill battles that come with them.


### 2. Spaghetti Code Forever

(Health outcomes are not part of the analogy that follows.)

Well-designed code can be imagined as a microwave dinner with each ingredient
tucked neatly into its own slot in the tray. The opposite of this is
**spaghetti**: ingredients twisted around one another, mixed amongst themselves
&mdash; messy by nature!

WordPress is a heaping plate of [spaghetti code][spaghetti-code]. During the
execution of a single WordPress function you might see it output HTML, query the
database, and add variables to the global scope. Each of these actions *should*
be handled by separate, well-defined functions. When a project does so, it
adheres to the [single-responsibility] principal. Code written this way is
easier to test, maintain, and understand. Spaghetti coding sacrifices these
benefits for reasons that are not always apparent. From
[wikipedia][single-responsibility]:

> The single responsibility principle is a computer programming principle that
  states that every module or class should have responsibility over a single
  part of the functionality provided by the software, and that responsibility
  should be entirely encapsulated by the class.

To hedge against a large project turning into spaghetti, use the programming
language it's written in to draw boundaries between different feature-level
responsibilities. WordPress's programming language, PHP, has something that
can help with this: [namespacing][namespacing]. However, PHP only added
namespaces in version 5.3, which was released in 2009 - a full 5 years after the
initial release of WordPress.

This is a theme: some foundational improvement is made to the language WordPress
is written in (or the larger ecosystem of code & tools that it occupies) but it
can't be applied to the existing code without a substantial re-write. And so,
the spaghetti code stays[^2]. Who wants to work in such a messy environment?
Some developers will always prefer a more modern tool for these reasons.


### 3. Worst Practices

WordPress is a web application. Coincidentally, there is a well respected and
widely applied methodology for building web apps. It's called "[The 12 Factor
App][12-factor]". Natively, WordPress implements precisely zero of these. Nor
does it conform to any of the [PHP Standard Recommendations][psrs] meant to
help developers write robust & readable code!

This is no format war, like Blu-ray vs. HD-DVD. There is no WordPress equivalent
to any of the *12 Factors* or *PSRs*. Very little about the WordPress project
encourages modern development practices like testing environments or systematic
deployments. An improved analogy is made by comparing Old 480p DVDs to a 1080p
Blu-ray. WordPress is at a *generational disadvantage* where best practices are
concerned.

Two quick consequences/observations that follow the above criticisms:

<ul style="list-style-type: lower-roman;">

<li>First: [cowboy coding][cowboy] is still very much the norm in the WordPress
consulting scene. It's found in places that you may expect it: freelancers on
UpWork or Fiverr. However, the white-collar, professional-seeming WordPress
agencies also do this with startling frequency!</li>

<li> Secondly: emblematic of this generational disadvantage is how WordPress' core
files don't pass [their own code standards checks][wp-coding-standards]! [^4]
(They came into being 13 years after WP did; that's a lot of code to
update)</li>

</ul>


## When are the Trade-offs Worthwhile?

If you're just starting out your development career or don't have experience
with WordPress, use it on a small to mid-sized project. Getting familiarized
with such a popular framework gives you an idea &mdash; broadly speaking &mdash;
of what many of your developer colleagues work with on the daily.

Depending on your priorities &mdash; you might reconsider developing WordPress
themes or plugins on the basis of their [booming premium theme/plugin
marketplaces][wp-marketplaces]. As a developer, you may have gripes about how
WordPress is set up, about how messy and bogged down the sites get in most
people's hands. That said, the Gordon Gecko in you could probably be made to see
the appeal in such a large, captive market.


## Alternatives

If you can to jump ship or carve off a develop part of a project independent
of WordPress, here are a few reccomendations:

[Symfony][symfony] or [Laravel][laravel] are PHP frameworks. They should be
considered if you're developing functionality beyond simple *content
management*. Both have their idiosyncracies, but you'll find that they're more
or less in step with *12 factors*. They're also mature, open source projects
with vibrant communities and contributors.

If you're regularly working with WordPress, some projects require you only to
style some content. Content isn't always updated frequently! If you or your team
can handle the infrequent updates, a [static][jekyll] [site][next]
[generator][hugo][^3] is a wonderful way to go. Such a project sidesteps many
other maintenance, performance and security concerns!

Sometimes [costs are sunk][sunk-costs], and there's no convincing your agency,
client, or stakeholders to head for greener pastures. Maybe you can content
yourself by grafting some modern development practices to the project with the
tooling over at [roots.io](https://roots.io). Further, there's nothing
preventing you from writing quality plugins and implementing testing and
continuous integration within *your* corner of a WordPress project.

## Conclusion (tl;dr)

WordPress has lots of problems, but it's still very popular. Developers often
have good reason for being skeptical about adopting it. It's worthwhile
exploring alternatives where you can convince stakeholders to do so.


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

[^1]: To say nothing of premium themes and plugins, and their feature lists.
      Think War & Peace.

[^2]: Stains?

[^3]: I acknowledge that this criticism loses some of its edge when you consider
      that these rules were created 6 years into the WordPress project. (Also
      consider that it was another *7* years before a WP core contributor really
      bring it into the fold.) Retroactively updating decades-old functions to
      comport with new standards is no small task. But this is precisely the
      point!

[^4]: A very cool seeming, quixotic take: https://wp2static.com/
