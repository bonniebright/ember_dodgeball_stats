Dodgeball.TeamController = Ember.ObjectController.extend({
  // intentionally empty
});

Dodgeball.TeamsController = Ember.ArrayController.extend({

});


Dodgeball.new_team_controller = Ember.ObjectController.extend({
  actions: {
    createTeam: function() {
      var name = this.get('teamName');
      if (!name.trim()) { return; }

      var team = this.store.createRecord('team', {
        name: name,
      });

      this.set('teamName', '');
      team.save();
      return team;
    }
  }
});

Dodgeball.new_player_controller = Ember.ObjectController.extend({
  actions: {
    createPlayer: function() {
      var name = this.get('playerName');
      if (!name.trim()) { return; }

      var player = this.store.createRecord('player', {
        name: name,
      });

      this.set('playerName', '');
      player.save();
      return player;
    }
  }
});
