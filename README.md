ampersand-view-jquery-mixin
===========================

A mixin for extending ampersand-view with this.$ and this.$el known from Backbone views.
This makes migrating Backbone or HumanJS views to Ampersand a bit easier.
Includes a dependency to jQuery 2.

## install

```
npm install ampersand-view-jquery-mixin
```

## example

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

## license

MIT
