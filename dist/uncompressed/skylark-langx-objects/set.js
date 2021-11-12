define([
	"skylark-langx-types",
	"./objects",
	"./_cast_path",
	"./is-index",
	"./to-key"
],function(types,objects,castPath,isIndex,toKey) {
	/**
	 * The base implementation of `set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!types.isObject(object)) {
	    return object
	  }
	  path = castPath(path, object)

	  const length = path.length
	  const lastIndex = length - 1

	  let index = -1
	  let nested = object

	  while (nested != null && ++index < length) {
	    const key = toKey(path[index])
	    let newValue = value

	    if (index != lastIndex) {
	      const objValue = nested[key]
	      newValue = customizer ? customizer(objValue, key, nested) : undefined
	      if (newValue === undefined) {
	        newValue = types.isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {})
	      }
	    }
	    nested[key] = newValue; //  assignValues() lwf
	    nested = nested[key];
	  }
	  return object
	}

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @see has, hasIn, get, unset
	 * @example
	 *
	 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
	 *
	 * set(object, 'a[0].b.c', 4)
	 * console.log(object.a[0].b.c)
	 * // => 4
	 *
	 * set(object, ['x', '0', 'y', 'z'], 5)
	 * console.log(object.x[0].y.z)
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value)
	}


	return objects.set = set;

});