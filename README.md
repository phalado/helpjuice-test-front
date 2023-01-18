# Helpjuice Test

This web app is a search for articles, required by [Helpjuice][helpjuice]

## Table of contents

- [Helpjuice Test](#helpjuice-test)
  - [Table of contents](#table-of-contents)
  - [About](#about)
  - [The project](#the-project)
  - [Future works](#future-works)
  - [Technologies used](#technologies-used)
  - [Contact](#contact)


## About

Link to the live version [here][live-version].

Repository: https://github.com/phalado/helpjuice-test-front

Backend: https://github.com/phalado/helpjuice-test-api

Please, star the projects. It makes me happy.


## The project

The requirement was to:

- Create a search bar to search names of articles that work in real-time
- Record the search in the database
- Present the most searched terms

I decided to divide the project in two:

- A backend in Ruby on Rails, using Elasticsearch (most specifically, Searchkick) to help in the article and terms searches.
- A frontend in React using Material UI to create each component.

The frontend was deployed on Netlify and the backend on Heroku.

You can use it online or run it locally using docker and the Makefile's commands.

A simple `make build` should do the trick.

## Future works

One point that I wasn't able to implement is the use of debounce. Right now, each char typed in the search bar triggers a request to the API.

My idea was to use debounce to make only one request each second or 2 seconds but I will need more time to do so.

## Technologies used

To create this project I used:

- React
- TypeScript
- Material UI
- HTML + CSS
- Netlify

## Contact

Author: Raphael Cordeiro

Follow me on [Twitter][rapha-twitter], visit my [Github portfolio][rapha-github], my [Linkedin][rapha-linkedin], or my [personal portfolio][rapha-personal].

<!-- Links -->

[live-version]: https://helpjuice-test.netlify.app/
[backend]: https://github.com/phalado/helpjuice-test-api
[frontend]: https://github.com/phalado/helpjuice-test-front
[helpjuice]: https://helpjuice.com/
[rapha-github]: https://github.com/phalado
[rapha-twitter]: https://twitter.com/phalado
[rapha-linkedin]: https://www.linkedin.com/in/raphael-cordeiro/
[rapha-personal]: https://www.phalado.tech/