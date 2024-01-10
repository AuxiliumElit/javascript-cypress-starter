const { readExcelDoc } = require('./readExcel');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);
  return fse.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  on('task', {
    readExcelDoc,
    verifyDownloadsFolder: (downloadsPath) => {
      return fs.existsSync(downloadsPath);
    },
  });

  const file = config.env.configFile;
  if (file === 'qa1' || file === 'qa2') {
    return getConfigurationByFile(file);
  } else {
    console.log('Please look for environment variables configuration');
  }
};
