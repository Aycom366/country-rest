# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

[image](https://user-images.githubusercontent.com/42998943/134149887-e0113e7e-77c6-4fbe-ac58-7bcbe947bb64.png)
)


### Links

- Solution URL: [solution URL](https://github.com/Aycom366/country-rest)
- Live Site URL: [live site URL](https://country-rest.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- [React](https://reactjs.org/) - JS library
- [AOS](https://michalsnik.github.io/aos/) - Animate on scroll
- [Axios](https://github.com/axios/axios) - fetching data
- [Rest country API](https://restcountries.eu/rest/v2/all) - For data


### What I learned

I finally had the time to use object lookup funny smh, when I learnt about Lookup, I was thinking what scenario or what project will this lookup be implemented to but fortunately I understand lookup more deeply now.
My first Time using Tail wind css. The docs is interesting and easily to understand. They really put a nice time writing this documentation. Kudoz to them

```
@layers utilities {
  .scrollbehavior: {
    scroll-behavior: smooth;
  }
}
```
the code above makes you add custom utilities in css not found in tailwind css. I wanted to the ```smooth-behavior:smooth ``` in tailwind but I think it not available so  I made this utilites to make it work in tail wind and by calling it like this ``` <div className='scrollbehavior'></div>```


I also Tried using one of the React hooks which is useReducer along side with context API. eversince I learnt redux I made a vow to myself to start using useReducer for small projects like this, following the redux structure and using it is quite interesting.


### Continued development

There is nothing actually to add to this project except to add more details about county's detailed info later on


### Useful resources

- [Example resource 1](https://stackoverflow.com/questions/69261305/get-full-country-name-from-country-abbreviations-in-javascript/69261355?noredirect=1#comment122417976_69261355) - This helped me for getting abbreviated borders into their real name. I really liked this pattern and will use it going forward.


## Author

- Website - [Temitayo](https://temitayo-portfolio.vercel.app/)
- Frontend Mentor - [@aycom366](https://www.frontendmentor.io/profile/aycom366)
- Twitter - [@bamigboyeayomi5](https://twitter.com/bamigboyeayomi5)

