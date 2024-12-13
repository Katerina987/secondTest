import ComputerPage from '../../support/ComputerPage';

describe('Computer Database Tests - Page Object Model', () => {
  const computerPage = new ComputerPage();

  it('Visits the page and verifies the title', () => {
    computerPage.visit(); 
    computerPage.verifyTitle('Computers database'); 
  });
});