/**
 * element-classlist
 * Element class list component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * classlist
 * 
 * @return {Element} this for chaining
 * @api public
 */

exports.classlist = function () {
  this.list = this.el.classList;
};

/**
 * add_class
 * Add class `name` if not already present.
 *
 * @param {String} name class name
 * @return {Element} this for chaining
 * @api public
 */

exports.add_class = function (name) {
  this.list.add(name);
  return this;
};

/**
 * remove_class
 * Remove class `name` when present
 *
 * @param {String} name class to remove
 * @return {Element} this for chaining
 * @api public
 */

exports.remove_class = function (name) {
  this.list.remove(name);
  return this;
};

/**
 * toggle_class
 * Toggle class `name`.
 *
 * @param {String} name class to toggle
 * @return {ClassList} this for chaining
 * @api public
 */

exports.toggle_class = function (name) {
  this.list.toggle(name);
  return this;
};

/**
 * class_array
 * Return an array of classes.
 *
 * @return {Array} array of classes
 * @api public
 */

exports.class_array = function () {
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
 * has_class|contain_class
 * Check if class `name` is present.
 *
 * @param {String} name class name to check
 * @return {Boolean} true if class `name` is present
 *   false otherwise
 * @api public
 */

exports.has_class =
exports.contains_class = function (name) {
  return this.list.contains(name);
};
