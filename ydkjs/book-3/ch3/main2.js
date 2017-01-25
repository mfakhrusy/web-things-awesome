//computed property object name
var prefix = "foo";

var myObject = {
  [prefix + "bar"]: "hellow",
  [prefix + "baz"]: "wold"
}

console.log(myObject["foobar"] + " " + myObject.foobaz);

//many function reference
function foo_funct() {
  console.log("foo functionsszzz");
};

var someFoo = foo_funct;

var myObject2 = {
  someFoo: foo_funct
}

foo_funct();
someFoo();
myObject2.someFoo();
