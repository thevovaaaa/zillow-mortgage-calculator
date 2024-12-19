describe('Mortgage Calculator - Interest Rate Input. Acceptance tests', () => {
  beforeEach(() => {
    cy.visit('https://www.zillow.com/mortgage-calculator/');
  });

  it('TC-ACC-01: Verify the "Interest Rate" field accepts valid input', () => {
    const rateField = cy.get('#rate');
    rateField.clear().type('3.5');
    rateField.blur();
    rateField.should('have.value', '3.5');
  });
});