define([
 	"./objects",
 	"./each"
],function(objects,each){

    function forEach (obj, fn) {
      if (obj.forEach) return arr.forEach(fn)
      return each(obj,fn,true);
    }

	return arrays.forEach = forEach;
});