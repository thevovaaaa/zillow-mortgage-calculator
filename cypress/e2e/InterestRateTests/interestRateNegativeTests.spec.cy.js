describe('Mortgage Calculator - Interest Rate Input. Negative tests', () => {
    beforeEach(() => {
      cy.visit('https://www.zillow.com/mortgage-calculator/');
    });
  
    it('TC-NEG-01: Verify invalid characters are not accepted ', () => {
      const rateField = cy.get('#rate');
      rateField.clear().type('abc@#'); 
      rateField.blur();

      const errorToottip = cy.contains('is not a valid number');
      errorToottip.should('be.visible');
    });
  });
