# Steps

## Container Component
On the route index.js make a container component called beer-container

``` bash
ember g component beer-container --gc
```

Use HTML Below. Add a modifier to the first div that calls an async function that gets list of beers.

``` html
<div class="flex flex-wrap -mx-1 overflow-hidden">
  <Input
    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="grid-zip" type="text" placeholder="Search" />
  <div class="flex-grid-thirds" id="grid">
    content
  </div>
</div>
```

``` javascript
const beers = await (await fetch('https://api.punkapi.com/v2/beers')).json();
```

Use this.isDestroyed & this.isDestroying as guard
Create a function to filter items

```javascript
  filterBeers(){
    if(!this.searchText || this.searchText.length === 0 ) return this.beers;
    return this.beers.filter(r => r.name.toLowerCase().includes(this.searchText.toLowerCase().trim()))
  }
```

Use getter called beerList() to call filterBeers. Yield this.beerList in #grid

## Presentation Component

Make the beer component

``` bash
ember g component beer
```

Add the component to beer.hbs route and pass the data down

``` handlebars
  {{#each beers as |beer|}}
    <Beer @beer={{beer}} class="max-w-sm w-full lg:flex"/>
  {{/each}}
```

Beer component html

```handlebars
<div>
  <div
    class="beer-pic border-l-2 border-t border-b border-l border-gray-400  lg:border-gray-400 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mmmmm beer">
  </div>
  <div
    class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        {{@beer.name}}
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">{{@title}}</div>
      <p class="text-gray-700 text-base">{{@beer.tagline}}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
        Details
      </button>
    </div>
  </div>
</div>
```

In the parent div call ...attributes to apply the classes.

Make a modifier to apply the background image

```handlebars
{{did-insert this.bgImage}}
```

```javascript
thisbgIMage = element => {}
```

## Detail Route

Make Beer detail component and put it in beer detail route

```bash
ember g component beer-detail --c
```

```handlebars
<div class="flex flex-wrap -mx-1 overflow-hidden" style="height:400px;" {{did-update this.scrollTop @model}}
  {{did-insert this.scrollTop @model}}>
  <div class="my-1 px-1 w-1/4 overflow-hidden">
    <img src="{{@model.image_url}}" alt="{{@model.name}}">
  </div>
  <div class="my-1 px-1 w-3/4 overflow-hidden">
    <h1>{{@model.name}}</h1>
    {{@model.description}}
  </div>
</div>
```

Use modifier lifecycle hooks (did-insert did-update) to scroll to the top of component

```javascript
window.scrollTo(0, 0);
```

# octane-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily   bgImage = el=>{
    el.setAttribute("style", `background-image: url('${this.args.beer.image_url}');`);
  }go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd octane-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
