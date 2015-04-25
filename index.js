var commander = require('commander'),
    generators = require('./generators'),
    pkg = require('./package.json');

commander
    .version(pkg.version)
    .option('-c, --count', 'Run an example generator count');

commander.parse(process.argv);


if (commander.count === true) {

    function* count() {
        for (var x = 0; true; x++) {
            yield x;
        }
    }
    for (var x of generators.count()) {
      console.log(x);
    }

}
