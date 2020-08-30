# Wiiiiish

Useless plugin for random happy new year wishes


## Usage

**Wiiiiish** is expecting the following HTML structure to work but does not rely on classnames. Those 3 IDs shown below must not be changed unless you pass custom options when instantiating.

```html
<h1 class="w-title">
  <span>We wish you </span>
  <span class="w-wish" id="w-container">
    <span>a happy new year!</span>
  </span>
</h1>
<ul class="w-hidden-list" id="w-list">
  <li>the best</li>
  <li>to join the Billionaire Boys Club</li>
  <li>to enjoy 2018</li>
</ul>
<button class="w-trigger" id="w-trigger" type="button">
  ✨ Make a wish ✨
</button>
```


```html
<script src="wiiiiish.js"></script>
<script>
  var myWish = new Wiiiiish(/* options */);
</script>
```

### Module support

```js
import Wiiiiish from './wiiiiish'
const myWish = new Wiiiiish(/* options */)
```


## Configuration

Each option can be customized via the options object

* `itemsSelector`: selector of the list of wishes | default: `#w-list`
* `targetSelector`: selector of the element where wishes will be updated | default: `#w-container`
* `triggerSelector`: selector of the element that triggers wishes update | default: `#w-trigger`
* `removalDelay`: pause between trigger click and text removal | default: 300
* `addDuration`: pause between text removal and text addition | default: 700
* `pause`: delay between two character additions | default: 100


## Methods

Available after creation:

```js
var myWish = new Wiiiiish();
```

### Add a random wish (with animations and deletion)

```js
myWish.updateText();
```

### Add a random wish (without deletion)

```js
myWish.addText();
```

### Clear/stop pending animations

```js
myWish.clear();
```

### Remove wish

```js
myWish.removeText();
```

### Select wish visually

```js
myWish.selectText();
```


## Development

### Requirements

* Node.js
* NPM or Yarn

### Starting server

```sh
$ yarn start // npm start
```

### Build/Release

```sh
$ yarn build // npm run build
```
