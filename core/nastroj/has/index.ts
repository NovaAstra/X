import { isNil } from '../isNil';

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Does the object contain the given key?
 * It provides the same functionality as object.hasOwnProperty(key),
 * but uses a secure reference to the hasOwnProperty function,
 * in case it's been overridden accidentally.
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
 * @see hasIn
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 *
 * has(object, 'a');
 * //=> true
 *
 * has({ }, 'a');
 * //=> false
 *
 */
export function has<O extends object>(
  object: O,
  key: PropertyKey
): key is keyof O {
  if (isNil(object)) return false;

  return hasOwnProperty.call(object, key);
}
