/**
 * element-classlist
 * Element class list component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `classlist`
 */

module.exports = classlist;

/**
 * classlist
 */

function classlist (element) {
  
  /**
   * Utils
   */
   
  var array = [];
  var slice = array.slice;
  
  /**
   * add_class
   * Add class `name` if not already present.
   *
   * @param {String} name class name
   * @return {Element} this for chaining
   * @api public
   */
  
  element.prototype.add_class = function (name) {
    this.el.classList.add(name);
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
  
  element.prototype.remove_class = function (name) {
    this.el.classList.remove(name);
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
  
  element.prototype.toggle_class = function (name) {
    this.el.classList.toggle(name);
    return this;
  };
  
  /**
   * classes
   * Return an array of classes.
   *
   * @return {Array} array of classes
   * @api public
   */
  
  element.prototype.classes = function () {
    return slice.call(this.el.classList);
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
  
  element.prototype.has_class =
  element.prototype.contains_class = function (name) {
    return this.list.contains(name);
  };

  return element;
}
