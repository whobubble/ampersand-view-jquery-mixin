ampersand-view-jquery-mixin
===========================

A mixin for extending ampersand-view with this.$ and this.$el known from Backbone views.
This makes migrating Backbone or HumanJS views to Ampersand a bit easier.
Includes a dependency to jQuery 2.

## install

```
npm install ampersand-view-jquery-mixin
```

## usage

This will load jQuery via require()

```javascript
var View = require('ampersand-view');
var jqueryMixin = require('ampersand-view-jquery-mixin');


module.exports = View.extend(jqueryMixin, {
    sampleMethod: function () {
        // now we've got jQuery helpers
        this.$( ... );
        this.$el[0];
        // ...
    }
});
```

## usage when jQuery is already available as window.$

This will use an existing window.$ so that not another copy of jQuery is loaded.

```javascript
var View = require('ampersand-view');
var jqueryMixin = require('ampersand-view-jquery-mixin/no-bundled-jquery');


module.exports = View.extend(jqueryMixin, {
   // ...
});
```

## license

MIT
