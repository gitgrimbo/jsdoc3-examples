//http://usejsdoc.org/about-namepaths.html
//Use a documentation tag to describe your code.
/** @constructor */
Person2 = function() {
    /** @constructor */
    this.Idea = function() {
        this.consider = function(){
            return "hmmm";
        }
    }
}

var p = new Person2();
var i = new p.Idea();
i.consider();
