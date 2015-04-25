var assert = require('assert');

module.exports = {
    
    count: function() { 
        var result,
            x;

        function* count() {
            for (var x = 0; true; x++) {
                if (x < 10) {
                    yield x;
                }
                else {
                    assert (x === 10);
                    return x;
                }
            }
        }

        result = count();
        console.log(result.next());
        console.log(result.next());
        console.log(result.next());

        for (x of count()) {
          console.log(x);
        }
    },
    
    reject: function() {
        var sentinel = new Error('foo');

        function* demo() {
            try {
                yield 10;
            } catch (ex) {
                assert(ex === sentinel);
            }
        }

        var d = demo();
        console.log(d.next());
        console.log(d.throw(sentinel));
    }

};
