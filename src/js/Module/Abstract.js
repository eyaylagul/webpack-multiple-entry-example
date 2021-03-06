define(['backbone', 'Module/Abstract.less'], function(backbone) {

  /**
   * @class ModuleAbstract
   * @extends Backbone.View
   */
  module.exports = backbone.View.extend({
    say: function() {
      console.log(this.greetings);
    }
  });
});
