
const { Parser } = require('json2csv');
const fields = ['_source'];

const json2csvParser = new Parser({ fields });

const inputReadJson = createReadStream('input.json', { encoding: 'utf8' });

const csv = json2csvParser.parse(inputReadJson);

console.log(csv);
