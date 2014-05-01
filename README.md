Trampoline Dodgeball Stats Keeper
===========

A game stats keeper for Trampoline Dodgeball

1. Before the game starts, the stats keeper needs to enter the names of the teams who are playing, and the names of the players on the teams. To keep things simple, we'll make it so that this app can only be used for a single game at a time, at least to start (otherwise, we'd have to have a many-to-many relationship between teams and games). Hint: Read the Ember guides on relationships in models; a team has many players.

2. When a player throws a ball, the stats keeper needs to record who threw it and whether they got someone out or missed. For now, we'll treat all throws the same - don't worry about catches  Hint: Make a ThrowAttempt model.

3. For each player, display the total number of throws they attempted. Hint: Add a computed property to your Player model.

4. Add ability to record catches. Show who threw the ball and who caught the ball.


5. Also display the percentage of throws they made and the total number of people they got out as well as the percentage of catches and the total number of people they got out. Hint: Use Ember's aggregate data feature.

6. Now, make the page highlight the highest-scoring player for each team. Hint: Add a boolean highestScorer computed property to Player. Then, read about binding a class name to a boolean value, so that you can add a class to highlight the highest scorer.

7. Add an button to toggle between sorting the players by name or by the number of people they got out. Hint: Read about sorting in array controllers.

8. Build out a Rails API backend to your app. Switch from the Local Storage adapter to the Active Model adapter. Keep your Ember app separate from your Rails app; you don't need to use the ember-rails gem or anything like them. To get them to talk to each other, simply tell Ember where to find the Rails app:

9. Require your stats keepers to log in before tracking stats. Hint: Ember unfortunately doesn't have a standard way to handle authentication, but the most common is to use an auth token in your request headers. This most popular plugin for this approach is Ember.SimpleAuth. They have a nice version that is compatible with Devise, but it requires some modifications to Devise. The README is pretty incomplete, so I opened a pull request with a better walk-through; until it's merged, you can check it out on my fork.
