const XLSX = require('xlsx');

const readExcelDoc = ({ fileName, sheetName }) => {
  const workbook = XLSX.readFile(fileName);
  return workbook.Sheets[sheetName];
};

module.exports = { readExcelDoc };
