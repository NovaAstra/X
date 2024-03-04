import { isNil } from '../isNil';

/**
 * Returns whether the object or its prototype chain has the specified property.
 *
 * @function
 * @memberof NA
 * @since v0.0.1
 * @category Object
 * @sig a -> {a: x} => Boolean
 * @param {Object} object The object to query.
 * @param {String} key The key to check.
 * @returns {Boolean} Returns `true` if `key` exists, else `false`.
 *
 * @see has
 * @example
 *
 * function Rectangle(width, height){
 *    this.width = width;
 *    this.height = height;
 * }
 *
 * Rectangle.prototype.area = function(){
 *    return this.width * this.height
 * }
 *
 * const square = new Rectangle(2, 2);
 * hasIn(square, 'width');
 * //=> true
 *
 * hasIn(square, 'area');
 * //=> true
 *
 */
export function hasIn<O extends object>(
  object: O,
  key: PropertyKey
): key is keyof O {
  if (isNil(object)) return false;

  return key in Object(object);
}
