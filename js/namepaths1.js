//http://usejsdoc.org/about-namepaths.html
//Use a documentation tag to describe your code.
/** @constructor */
Person1 = function() {
    this.say = function() {
        return "I'm an instance.";
    }
    
    function say() {
        return "I'm inner.";
    }
}
Person1.say = function() {
    return "I'm static.";
}

var p = new Person1();
p.say();      // I'm an instance.
Person1.say(); // I'm static.
// there is no way to directly access the inner function from here
