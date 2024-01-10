export const verifyIfDownloadsFolderIsCleaned = () => {
  cy.task('verifyDownloadsFolder', 'cypress/downloads').then((isExist) => {
    const existsSync = (folderExist) => {
      if (folderExist) {
        verifyIfDownloadsFolderIsCleaned();
      } else {
        cy.log('Downloads folder is empty');
      }
    };
    setTimeout(existsSync(isExist), twoSeconds);
  });
};

export const dynamicallyWaitForDownloadsFolder = () => {
  cy.task('verifyDownloadsFolder', 'cypress/downloads').then((isExist) => {
    const downloadsFolderSync = (folderExist) => {
      if (!folderExist) {
        dynamicallyWaitForDownloadsFolder();
      } else {
        cy.log('Downloads folder exist');
      }
    };
    setTimeout(downloadsFolderSync(isExist), twoSeconds);
  });
};
