import 'normalize.css'
import './style.css';

import Wiiiiish from './wiiiiish';

document.addEventListener("DOMContentLoaded", function() {
  new Wiiiiish({
    itemsSelector: '#w-list',
    targetSelector: '#w-container',
    triggerSelector: '#w-trigger'
  });
});
