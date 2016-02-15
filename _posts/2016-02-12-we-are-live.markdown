---
layout: post
title:  "And We're Live!"
date:   2016-02-12 09:28:54 -0500
authors: [donovan_glover]
categories: news
---

Testing, testing, 1, 2, 3. Oh, looks like we're live!

Our luxurious webmaster [Donovan Glover](/officers/#donovan) has finally solved the SSL issue. We are now live at [rhsjapan.com](https://rhsjapan.com/)! Shoutout to [Namecheap Support](https://www.namecheap.com/) for helping us pinpoint the issue.

### Nomenclature

I guess I should formally introduce the website. This is the official website for the Roswell High School Japan Club. That's a mouthful, so we'll condense it down a bit. It's much easier to say:

> RHS Japan (Club)

Or even:

> Roswell Japan (Club)

The club part is optional. It depends on the context, really. Anyway, a warm welcome to our website! As you can tell, I'm running out of ideas to put for the first post of this website (do people even read the first post!?).

### Server-Side Architecture

Are there any developers out there? If so, keep reading, because the way this website is being served is pretty cool!

#### Jekyll Love

<img alt="GitHub and Jekyll." src="{{ site.cdn }}/images/blog/octojekyll.png" style="width:20rem;">

This is my first time using the [Jekyll](http://jekyllrb.com/) scaffold and editing the site live through a terminal. With some modifications to my software, I was able to run `jekyll serve` directly from the computer and parse the local server directly at `127.0.0.1`! Much better than the traditional `jekyll build`, I must say!

<img alt="Sass." src="{{ site.cdn }}/images/blog/sass.svg" style="width:20rem;">

What's more, I've always known the power of [Sass](http://sass-lang.com/), but I didn't realize how easily extensible it is compared to pure CSS until I started designing this website. Since Jekyll auto-compiles Sassy CSS while running on localhost, it's a huge plus to use for web development. Why use [Gulp](http://gulpjs.com/) when Jekyll already does it for you? :)

#### The Importance of Version Control

<img alt="Git." src="{{ site.cdn }}/images/blog/git.png" style="width:20rem;">

For office members and other contributors, if you wish to add something to this website, then please open an issue or submit a pull request to the [GitHub repository](https://github.com/RHSJapan/rhsjapan.github.io). Version control is quite important, and using [Git](https://git-scm.com/) on [GitHub](https://github.com/) allows us to ensure that we can undo bad changes.

#### GitHub Pages &amp; Cloudflare

<img alt="Cloudflare." src="{{ site.cdn }}/images/blog/cloudflare.png" style="width:20rem;">

Did I mention that this site runs on [GitHub Pages](https://pages.github.com/)? Well, it does, and by using GitHub Pages, we can ensure that the website will be available most (if not all) of the time. As an additional layer of protection, we've integrated the [Cloudflare](https://www.cloudflare.com/) infrastructure with our website, allowing us to not only increase the security of the website overall, but also monitor certain events.

### Client-Side Architecture

#### JavaScript Libraries

It was my decision to not use [jQuery](https://jquery.com/) as I do not feel it is needed for modern web development. Instead, we're using a combination of custom JavaScript code specifically tailored for this project. Originally, I wrote a `build.rb` file to automatically compile what little micro-libraries we would use for the project, although it's questionable as to when (if ever) we'll need to use such libraries. We may just end up removing them altogether.

#### CSS Libraries

For our styles, we're using [Skeleton](http://getskeleton.com/) as the base, which comes with [Normalize.css](http://necolas.github.io/normalize.css/) built-in. I wanted a simple framework that allowed for extensibility but also core classes. The Skeleton boilerplate provides (almost) everything a developer needs out of the box and is overall fun to code with. Who doesn't like writing `five columns` in their CSS? It's a huge break from other frameworks like [Semantic UI](http://semantic-ui.com/) and even [Gridiculous](http://gridiculo.us/).

On top of Skeleton, we're using [Animate.css](http://daneden.github.io/animate.css/) for some animations. Combine that with the native `@extend` support of Sass and you truly separate the layout from the design. Of course, we also make use of native animations, such as the navigation bar, but Animate.css allows us to consider animations that are pre-defined and much more complex.

#### Graphics &amp; Iconography

<img alt="Gimp." src="{{ site.cdn }}/images/blog/gimp.png" style="width:20rem;">

I'm no professional at graphic design (yet), but the work I did manage to produce is a result of using the [GIMP](https://www.gimp.org/) editing software. The original stock photos were graciously provided by [Pexels](https://www.pexels.com/), [Unsplash](https://unsplash.com/), and [Life Of Pix](http://www.lifeofpix.com/) and were then modified by me in GIMP. I'm not sure how good these edits are, but they should be good enough for the time being. We should really get some more custom photography!

Iconography is provided by [Flaticon](http://www.flaticon.com/). You can't go wrong with these guys. Their archive of icons can't be beat! For more details about the icons used on this website, please see the [`LICENSE.md`](https://github.com/RHSJapan/rhsjapan.github.io/blob/master/LICENSE.md) file in the GitHub Repository.

### And...

By now, the search engine must think this site is weird. "It's supposedly about Japanese culture, but then the first post spams a bunch of links for developers!" it must be thinking. Well, there's some truth to that, and I guess I reached a decent length for the first post, so I'll stop now.

### What's Next?

The future posts of this website will most certainly tie in much more with Japanese culture. As Japan Club officers, we need to focus on "capturing" more content for the website. From there, I'll focus on changing the blog layout as needed. Maybe Previous Post / Next Post previews at the bottom, or on the left and right side of the screen respectively. Let's see what happens!
