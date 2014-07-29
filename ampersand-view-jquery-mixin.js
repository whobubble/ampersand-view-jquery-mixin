var jQuery = require('jquery');


module.exports = {
    derived: {
        '$el': {
            deps: ['el'],
            fn: function () {
                if (this.el) return jQuery(this.el);
            }
        },
    },
    $: function(selector) {
      return this.$el.find(selector);
    }
};