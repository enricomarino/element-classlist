
/**
 * element-classlist
 * Element class list component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `ClassList`.
 */

/**
 * ClassList
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api public
 */

function ClassList (el) {
  this.el = el;
  this.list = el.classList;
}

/**
 * add
 * Add class `name` if not already present.
 *
 * @param {String} name class name
 * @return {ClassList} this for chaining
 * @api public
 */

ClassList.prototype.add = function (name) {
  this.list.add(name);
  return this;
};

/**
 * remove
 * Remove class `name` when present
 *
 * @param {String} name class to remove
 * @return {ClassList} this for chaining
 * @api public
 */

ClassList.prototype.remove = function (name) {
  this.list.remove(name);
  return this;
};

/**
 * toggle
 * Toggle class `name`.
 *
 * @param {String} name class to toggle
 * @return {ClassList} this for chaining
 * @api public
 */

ClassList.prototype.toggle = function(name){
  this.list.toggle(name);
  return this;
};

/**
 * array
 * Return an array of classes.
 *
 * @return {Array} array of classes
 * @api public
 */

ClassList.prototype.array = function () {
  var list = this.list;
  var len = list.length;
  var array = new Array(len);
  var i;

  for (i = 0; i < len; i += 1) {
    array[i] = list[i];
  }

  return array;
};

/**
 * has
 * Check if class `name` is present.
 *
 * @param {String} name class name to check
 * @return {Boolean} true if class `name` is present
 *   false otherwise
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function (name) {
  return this.list.contains(name);
};
