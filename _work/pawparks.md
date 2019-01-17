---
title:       Power the API & Web-App of a Geolocation App For Pets
short_title: Pet Geolocation API for Web + Mobile Apps
short_meta:  for Slobbr
screenshot:  /assets/images/paw-homescreen-thumb.jpg
graphic:     /assets/images/paw-iphone.png
slug:        slobbr
tags:        [REST, api, symfony, php, ui-design, front-end, back-end, data-scraping]
cta_text:    Do you or your animal need first class web expertise?
---

[Slobbr][product-hunt] is "A Foursquare for dogs".

To help pitch investors, we collaborated with [app founder Jon
Lagasse][netcapital]. Together, we created the minimum viable product originally
called Paw Parks.

<small>(Click the thumbnails below for videos of the app in action.)</small>

{% include gallery.html pics="paw-login-thumb.jpg~PawParks Login Screen~paw-login-thumb.jpg
paw-homescreen-video.mp4~Homescreen~paw-homescreen-thumb.jpg
paw-search-video.mp4~The Teacher's Grading Screens~paw-search-thumb.jpg" %}

{% capture quote-body %}
Cameron and his team were quick to build and iterate on the ideas that we needed
in order to prove our concept. I'd be excited to work with them again.
{% endcapture %}

{% include quote.html
  body=quote-body
  person="Jonathan Lagasse" position="Founder"
  company="Slobbr" %}


Adding a [REST API][rest] to the web application was the next step. We did this
in order support a native mobile app, too. Coordinating with an external iOS
team, we defined API endpoints to power these web and iOS features
simultaneously:

<div class="uk-grid uk-grid-width-medium-1-2" data-uk-grid-margin data-uk-grid-match>
  <div>{% include card.html text="Geolocate-detected Check-Ins."
    img="/assets/images/map-marker-outline.svg" %}</div>

  <div>{% include card.html text="Paw-Pals: Add A Friend Feature"
    img="/assets/images/dog-shout.svg" %}</div>

  <div>{%include card.html text="Dog Park Searches filtered by distance from you, dogs present, friend-dogs present."
    img="/assets/images/search.svg" %}</div>

  <div>{% include card.html text="Profile Management"
    img="/assets/images/gear.svg" %}</div>
</div>

A clip of the basic user registration and onboarding process from an early
iteration of the app:

<video autoplay controls class="uk-margin-large uk-align-center">
   <source src="/assets/images/paw-app-main.webm" type="video/webm">
   <source src="/assets/images/paw-app-main.mp4" type="video/mp4">
</video>

More features: Setting a "home park", looking at the "STAy" score, and doing the
actual "checking in". STAy score being a shorthand for Size, Temperament and
Activity Level. Parks STAy scores were tabulated based on the dogs who recently
checked in.

<video autoplay controls class="uk-margin-large uk-align-center">
   <source src="/assets/images/paw-app-check-in.webm" type="video/webm">
   <source src="/assets/images/paw-app-check-in.mp4" type="video/mp4">
</video>

In it's heydey, the app had a a philanthropic angle, too. This meant that a
local shelter was gifted some kibble each time a user checked in. While the app
is no longer available, PawParks a.k.a. Slobbr lives on in our hearts. (And our
development portfolio pages.)


[product-hunt]: https://www.producthunt.com/posts/slobbr
[netcapital]: https://netcapital.com/companies/slobbr
[rest]: https://stackoverflow.com/questions/671118/what-exactly-is-restful-programming
