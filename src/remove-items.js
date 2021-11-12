define([
    "skylark-langx-types",
    "./objects"
],function(types,objects){
    function removeItem(items, item) {
        if (types.isArray(items)) {
            var idx = items.indexOf(item);
            if (idx != -1) {
                items.splice(idx, 1);
            }
        } else if (types.isPlainObject(items)) {
            for (var key in items) {
                if (items[key] == item) {
                    delete items[key];
                    break;
                }
            }
        }

        return this;
    }

    return objects.removeItem = removeItem;
});