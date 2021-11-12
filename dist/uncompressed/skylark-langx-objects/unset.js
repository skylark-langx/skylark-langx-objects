define([
	"skylark-langx-types",
	"./objects",
	"./set"
],function(types,objects,set) {

	/**
	 * Removes the property at `path` of `object`.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to unset.
	 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	 * @see get, has, set
	 * @example
	 *
	 * const object = { 'a': [{ 'b': { 'c': 7 } }] }
	 * unset(object, 'a[0].b.c')
	 * // => true
	 *
	 * console.log(object)
	 * // => { 'a': [{ 'b': {} }] }
	 *
	 * unset(object, ['a', '0', 'b', 'c'])
	 * // => true
	 *
	 * console.log(object)
	 * // => { 'a': [{ 'b': {} }] }
	 */
	function unset(object, path) {
	  return object == null ? true : set(object, path,undefined)
	}

	return objects.unset = unset;
});