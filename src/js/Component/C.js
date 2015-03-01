define(['Module/Abstract', 'Component/C.less'], function(ModuleAbstract) {

  module.exports = ModuleAbstract.extend({
    /**
     * @param {ModuleAbstract} component
     */
    sing: function(component) {
      console.log('Let\'s sing together!');
      component.say();
    }
  });

});
