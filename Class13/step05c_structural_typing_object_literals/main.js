// English:
// structural_typing_object_literals:
// refers to using structural typing in TypeScript where object literals are compared based on their shape
// (properties and methods) rather than their specific type names.
;
;
let Ball = { diameter: 10 };
let Bat = { diameter: 20 };
Ball = Bat;
console.log(Ball);
Bat = Ball;
console.log(Bat);
export {};
// If we add in a type which structurally contains all of
// the members of Ball and bat, then it also can be
// set to be a ball or bat.
