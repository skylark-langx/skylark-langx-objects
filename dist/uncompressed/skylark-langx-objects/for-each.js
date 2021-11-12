define([
 	"./objects",
 	"./each"
],function(objects,each){

    function forEach (obj, fn) {
      if (obj.forEach) return obj.forEach(fn)
      return each(obj,fn,true);
    }

	return objects.forEach = forEach;
});