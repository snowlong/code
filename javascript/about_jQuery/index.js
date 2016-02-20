(function($){
    $.fn.name =function(){
        return this;    	
    };  
})(jQuery);

var sayHello = function(word){ console.log(word);}("hello");

var foo = function() {
    var bar = function() {
        var buz = function() {
            console.log(this);
        }();
    }();
}();

var hoge = {
    func1 : function(piyo) {
        piyo();
        console.log(this);
    }
}

hoge.func1( function() { console.log(this); });