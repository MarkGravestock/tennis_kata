This is an implementation of the [Tennis Kata](http://agilekatas.co.uk/katas/Tennis-Kata) in javascript (using OO features)

Notes

Trying to use ES2015 modules & ES2019 private variables with Jest seems to cause a problem....

- Private Fields are part of ES2019, which Node/V8 engine supports locally, however jest doesn't seem to like ES Modules syntax (although node can support it)
- Options: 
    - Use idiomatic/by convention private field naming _variable. Just a convention.
    - Use closures 
    - Use babel - doesn't appear to support ES2019 - although there may be a switch stage-3
