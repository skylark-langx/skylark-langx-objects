define([
	"skylark-langx-types",
	"./objects",
	"./is-key"
],function(types,objects,isKey) {
	const charCodeOfDot = '.'.charCodeAt(0)
	const reEscapeChar = /\\(\\)?/g
	const rePropName = RegExp(
	  // Match anything that isn't a dot or bracket.
	  '[^.[\\]]+' + '|' +
	  // Or match property names within brackets.
	  '\\[(?:' +
	    // Match a non-string expression.
	    '([^"\'][^[]*)' + '|' +
	    // Or match strings (supports escaping characters).
	    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
	  ')\\]'+ '|' +
	  // Or match "" as the space between consecutive dots or empty brackets.
	  '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
	  , 'g')

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	const stringToPath = ((string) => {
	  const result = []
	  if (string.charCodeAt(0) === charCodeOfDot) {
	    result.push('')
	  }
	  string.replace(rePropName, (match, expression, quote, subString) => {
	    let key = match
	    if (quote) {
	      key = subString.replace(reEscapeChar, '$1')
	    }
	    else if (expression) {
	      key = expression.trim()
	    }
	    result.push(key)
	  })
	  return result
	});

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (types.isArray(value)) {
	    return value
	  }
	  return isKey(value, object) ? [value] : stringToPath(value)
	}

	return castPath;
});