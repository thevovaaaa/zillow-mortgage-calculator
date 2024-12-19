describe('Mortgage Calculator E2E Test', () => {
    it('TC-E2E-01 Verify the Interest Rate input updates the calculated monthly payment ', () => {
      cy.visit('https://www.zillow.com/mortgage-calculator/'); 
      cy.get('#homePrice').clear().type('100000'); 
      cy.get('#form-2_downPayment').clear().type('30000'); 
      cy.get('#form-2_term').select('ARM5');    
      cy.get('#rate').clear();
      cy.get('#rate').type('6.042');      
      cy.get('#rate').blur();

      cy.contains("text[y='20']", '627');
    });
  });
  