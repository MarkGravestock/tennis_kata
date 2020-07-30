## Tennis Kata - Javascript

This is an implementation of the [Tennis Kata](http://agilekatas.co.uk/katas/Tennis-Kata) in javascript (using OO features), with a TDD approach.

### Notes

##### Private Fields

Trying to use ES2015 modules & ES2019 private variables with Jest seems to cause a problem....

- Private Fields are part of ES2019, which Node/V8 engine supports locally, however jest doesn't seem to like ES Modules syntax (although node can support it)
- Options: 
    - Use idiomatic/by convention private field naming _variable. Just a convention.
    - Use closures 
    - Use babel - doesn't appear to support ES2019 - although there may be a switch stage-3
    
###### Resolution

Have got babel and jest to play nicely, need to add ES proposal plugs to babel. Noted that presets for proposal stages have been dropped.

##### 'Unit' Testing

What is the scope of the Unit? In these tests I'm aiming to test via Tennis Game, really Player Score is an implementation detail. I have had to 'drop a gear'
to test a method on Player Score, which was OK as I've exported it. Need to review the value of the introduced test.

##### Responsibilities

Should more responsiblity be more to the player score. For example the winning detection could move onto it, although it would have to be provided the opponent score,
i'm not sure the level of coupling would change, maybe there is a smell of feature envy?

##### Overall Approach

I realised I didn't fully read the special rules section, which meant that I only used the example GWT scenarios in my implementation. It's nice
to know the abstract rules, but using an SbE approach would suggest moving to more concrete examples and distilling rules from there, which I did
internally, but the actual rules as state are not directly implemented. It'd be interesting next time to do it again with them in mind.

##### TODO

- A:A is invalid initial score - but it setting an initial score a feature or just a testing convenience really? You could play the game through (events?) to reach the desired initial state - see a couple of the early tests.
- Winning scores are probably not right, as the Game score is incremented when the game is won. 
