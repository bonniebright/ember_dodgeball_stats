Dodgeball.Router.map(function() {
  this.resource('teams', { path: '/'}, function(){
    this.resource('new_team', { path: '/teams/new'});
    this.resource('players', { path: '/players'});
    this.resource('team'), { path: '/teams/:id'}, function() {
      this.resource('new_player', { path: 'players/new'});
    };
  });
});

Dodgeball.TeamsRoute = Ember.route.extend({
  model: function() {
    return this.store.find('team');
  },
});

Dodgeball.TeamRoute = Ember.route.extend({
  model: function(params) {
    return this.store.find('team', params.id);
  },
});

Dodgeball.TeamsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('team');
  }
});

