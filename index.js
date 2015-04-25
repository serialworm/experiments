var commander = require('commander'),
    generators = require('./generators'),
    pkg = require('./package.json');

commander
    .version(pkg.version)
    .option('-c, --count', 'Run an example generator counter')
    .option('-r, --reject', 'Run an example generator rejection');

commander.parse(process.argv);


if (commander.count === true) {
    generators.count();
}
if (commander.reject === true) {
    generators.reject();
}
