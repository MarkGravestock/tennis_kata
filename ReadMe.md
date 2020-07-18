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



