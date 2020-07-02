context('iframes', () => {
  it('Tests that you can touch the data in the iframe', () => {
    cy.visit('http://www.teoh.ca/iframe.html');
    cy.get('iframe')
      .should(iframe => expect(iframe.contents().find('body')).to.exist)
  });
})
