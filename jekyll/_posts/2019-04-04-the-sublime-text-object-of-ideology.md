---
layout: default
title: The Sublime Text Object Of Ideology
---

The tools we use shape not only our work *output*, but our relationship **to** work. For programmers, a text editor is often one of these influential tools. After all, it is the bridge between coder and code. How is one's view of work shaped by something as mundane as text editor choice? Features, usage, config, defaults... they reflect [ideologies][zizek-trash] present in our tools whether or not we see them.

In this post, we'll look at some user/tool interactions with well known text editors, and analyze the ways these programs might influence us. We'll concentrate on **configuration** and **user-composed actions** within the editor.

<!-- * Where you buy your editor from (and indeed - if you *can* buy it!) -->

__Quick side-note on the term *ideology*.__ I'm using the term to mean something like: "all the beliefs and assumptions a person has (conscious or not) which colour their experience of the world". In [that famous "this is water" speech][dfw], water is ideology.

> There are these two young fish swimming along and they happen to meet an older fish swimming the other way, who nods at them and says "Morning, boys. How's the water?" And the two young fish swim on for a bit, and then eventually one of them looks over at the other and goes "What the hell is water"?

To establish a framework for analyzing how these text editors influence us, I'll need *another* little digression (sorry) to summarize a useful concept from Robert M. Pirsig's most famous novel.

## Zen and The Art of `~/.dotfile` Maintenance

The narrator of *Zen and the Art of Motorcycle Maintenance* observes the difference in how he and his friend experience the world over the course of a long road trip. He explains it primarily through their relationships with the motorcycles they're riding.

In the early chapters of *Zen*, we're introduced to [the difference between the *classic* and *romantic* worldviews][zen]. The explanation given by the narrator hinges on **attitude towards underlying form**. He describes how he and his friend approach their bikes: the friend owns a luxury brand so he doesn't have to worry about breakdowns or upkeep (This is a *romantic* focus on "the whole" bike). The friend is happy not to have to look under the proverbial hood. The narrator is both aware of, and prefers to, tune each component of his bike. At pitstops, he's pre-emptively troubleshooting and isolating problems to specific parts. He even went one level beyond understanding the bike's parts to build a custom tool for tuning those parts; he is the epitome of a *classicist*.

Let's apply the romantic/classic lenses to text editors. What can we see?

## Configurability

Some editors expose a configuration to the user that appeals to (and/or cultivates) the *classic* worldview. Take Vim or Emacs. On *day one* of using these programs, the underlying form (partly expressed in Vimscript & Lisp, respectively) is not just *legible* to the user - it must be *written* by them in order to make good use of the editor. 

For users who adopt these editors, this is seen as welcoming. Users of these editors often publish handcrafted config files in code repositories called [dotfiles][dotfiles]. Their worldviews might have led them to these text editors, but maybe the software succeeded in cultivating an affinity for writing and deeply understanding config files (and by extension, the tool). In *Zen*, [pitstops][sharpen-knife] are analogous to small tweaks to dotfiles for those *classically inclined* riders.

The so-called [IKEA effect][ikea-effect] (we love what we build because we built it) is a handy example of this two-way street. By requiring the user to write the configuration code, the editor cultivates an appreciation for how the editor is constructed.

Conversely, VS Code and the Jetbrains series of editors have lux menus and start screens. They make initial configuration optional, and so flatter the *romantic* worldview. They win converts by helping them imagine themselves in states of creative flow - by presenting users with a harmony of features that they need not take pains assembling. 

How does this impact the relationship one has to work? It's easy to suppose that in many cases, one chooses (or one's employer chooses[!]) an editor because it expresses some aspects of a worldview already held. That expression can be found in config files, which in some cases become a user's dotfiles. 

<!-- (It might also be located somewhere in the `LICENSE.md` file. :p) --> 


## Composability

An editor's "composability" can be seen as a [superset][superset] of the human-to-text-editor interface. (In mode and key combinations). For example, with [vim][vim], you have at your fingertips all manner of *motions* and *actions*. Once you [grok][grok-vim] that, you gain a reliable intuition about how these motions and actions *combine* in the course of work.

Intuition becomes a fluency that reflects spoken language: thought & speech (or thought & text-action) feel simultaneous. More than just an improvement in speed, more than removing tedium, it adds a sense of creativity and playfulness.

A similar romantic / classical split between different editors exists in this way. To assemble an action in the language of a modal text editor is to understand its underlying form. 

In Vim, `ct)new<C-]>` is a terse way of saying: replace the text between my cursor and the close parenthesis with the word “new”, and re-enter “normal” mode. Internalizing these keypresses and their contextual meanings can’t be done without a fascination with the pieces of the greater whole.

The "romantic" editors mentioned above are not without composability. The underlying forms are just abstracted into a "whole". What does that look like in practice? Where those classical editors would explicitly name insert-mode, command-mode, etc., a romantic editor might put "search and replace" mode into a menu item with it's own *modal* window & buttons, rather than expect the user to know or care about the individual actions it's taking.

## Different Keystrokes for Different Folks

> I suppose it is tempting if the only tool you have is a hammer, to treat everything as if it were a nail

– Abraham Maslow

It sure would be silly to disassemble and re-assemble your hammer into abstractions like "motive force", and "dense material" and "handle" if you just needed to hit nails and assemble something *today*. Who knows what kind of [yak-shaving][yak] the worst classicists get up to...

The same sentiment applies in reverse. A caricatured romantic might hope to improve their skills by procuring a new tool, when simply examining the way of their current works one would have be enough.

To go back to that fish-in-water metaphor: you might not know what you're swimming in, and what that means for you. So if you can, just try and poke your little fishy head out above the waves for just a few moments!


[yak]: http://www.catb.org/~esr/jargon/html/Y/yak-shaving.html
[free-vs-open]: http://www.gnu.org/philosophy/open-source-misses-the-point.html
[cooking-as-a-service]: https://danco.substack.com/p/cooking-as-a-service
[vernacular]: http://preservenet.com/theory/Illich/Vernacular.html
[vim]: https://www.vim.org
[grok-vim]: https://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118#1220118
[felsenstein]: https://en.wikipedia.org/wiki/Lee_Felsenstein
[zizek-trash]: https://www.youtube.com/watch?v=TVwKjGbz60k
[dfw]: https://fs.blog/2012/04/david-foster-wallace-this-is-water/
[zen]: http://morethaneyecandy.nl/two-ways-of-looking-at-the-world-classic-vs-romantic-understanding/
[dotfiles]: https://dotfiles.github.io/
[sharpen-knife]: https://www.kieranbamforth.me/blog/one-thousand-dotfile-commits.html
[ikea-effect]: https://onlinelibrary.wiley.com/doi/abs/10.1016/j.jcps.2011.08.002
[superset]: https://en.wikipedia.org/wiki/Superset