define([
    "./objects",
    "./mixin"
],function(objects,mixin) {

    function extend(target) {
        var deep, args = slice.call(arguments, 1);
        if (typeof target == 'boolean') {
            deep = target
            target = args.shift()
        }
        if (args.length == 0) {
            args = [target];
            target = this;
        }
        args.forEach(function(arg) {
            mixin(target, arg, deep);
        });
        return target;
    }

    return objects.extend = extend;
});