var ObjectElement = require('object-element');
var ObjectDivElement = require('object-div-element');
var slice = Array.prototype.slice;

module.exports = ObjectDocument;

function ObjectDocument() {

}

/**
 * Wrap HTMLElement with ObjectElement
 * @param  {HTMLElement | ObjectElement element}
 * @return {ObjectElement}
 */
ObjectDocument.wrapElement = function (element) {
  return element.OBJECT_ELEMENT ? element : new ObjectElement(element);
}

/**
 * Loop through HTMLElements and wrap each of them with ObjectElement
 * @param  {Array elements}
 * @return {Array}
 */
ObjectDocument.wrapElements = function (elements) {
  elements = slice.call(elements);

  return elements.map(function (element, i) {
    return ObjectDocument.wrapElement(element);
  });
}

ObjectDocument.createElement = function (tag) {
  if (tag) {
    return this.wrapElement(document.createElement(tag));
  } else {
    return new ObjectDivElement;
  }
}
