"use strict"
{
    $ => {
        $.fn.name = function() {
            return this;    	
        };  
    }(jQuery);

    const sayHello = word => { console.log(word);}("hello");

    const foo = () => {
        const bar = () => {
            const buz = () => {
                console.log(this);
            }();
        }();
    }();

    const hoge = {
        func1(piyo) {
            piyo();
            console.log(this);
        }
    };

    hoge.func1(() => { console.log(this); });
}