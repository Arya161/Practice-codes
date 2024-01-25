const XLSX = require('xlsx');

const workbook = XLSX.readFile('example.xls');

const sheet = workbook.Sheets[workbook.SheetNames[0]];

const cellValue = sheet['A1'].v;
console.log('Cell B3:', cellValue);
