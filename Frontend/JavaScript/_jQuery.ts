/**
 * In Vanilla JavaScript, the way to set styles on an element would be as follows:

const buttonEl = document.querySelector('button');
buttonEl.style.color = 'red';
buttonEl.style.backgroundColor = 'tomato';
buttonEl.style.fontSize = '16px';
jQuery is a library that simplifies DOM manipulation (among other things). With jQuery (using the $ alias function), the above can be simplified into:

const buttonEl = $('button');
buttonEl.css('color', 'red');
buttonEl.css('backgroundColor', 'tomato');
buttonEl.css('fontSize', '16px');
 */

/**
 * @param {string} selector
 * @return {{css: Function}}
 */
export default function $(selector) {
  return new jQuery(selector);
}

class jQuery {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  css(prop, value) {
    // getter <button style="color: red"> $('button').css('color') -> red
    if (value === undefined) {
      if (this.element == null) return undefined;

      const current = this.element.style[prop];
      return current === "" ? undefined : current;
    }

    // setting $('button').css('color', 'red')
    if (this.element) this.element.style[prop] = value;
    return this;
  }
}
