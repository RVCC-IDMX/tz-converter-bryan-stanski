const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

const form = 'dddd, MMMM Do YYYY, h: mm:ss a';

const yargs = require('yargs');

let targetTimezone;

if (yargs.argv.format === true) {
  targetTimezone = yargs.argv._[0];
  console.log(
    `It is currently ${moment
      .tz(targetTimezone)
      .format(form)} in ${targetTimezone}`
  );
} else if (yargs.argv.time === true) {
  targetTimezone = yargs.argv._[0];
  console.log(
    `It is currently ${moment.tz(targetTimezone)} in ${targetTimezone}`
  );
} else {
  console.log('Usage: node <script-file> <timezone> <--time or --format>');
  process.exit[1];
}
