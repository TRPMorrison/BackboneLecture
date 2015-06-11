var Student = Backbone.Model.extend({

  initialize: function () {
    this.logName();
    this.logLocal();
  },

  idAttribute: '_id',

  defaults: {
    name: '',
    location: 'Colorado'
  },

  logName: function () {
    console.log(this.get('name'));
  },

  logLocal: function () {
    console.log(this.get('location'));
  },

  changeLocation: function (newLocation) {
    this.set('location', newLocation);
    console.log(this.get('name') + ' has a new location of ' + this.get('location'));
  }

});
