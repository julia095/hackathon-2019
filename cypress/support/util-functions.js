export async function StoreTableDataInArray(array = []) {
  return new Cypress.Promise(resolve => {
    cy.get('table>tbody>tr')
      .each(($el, index) => {
        const amount1 = $el
          .find('td')
          .eq(4)
          .text()
          .trim()
          .replace('USD', '')
          .replace(/\s+/g, '')
          .replace(',', '');
        array[index] = {
          status: $el
            .find('td')
            .eq(0)
            .text()
            .trim(),
          date: $el
            .find('td')
            .eq(1)
            .text()
            .trim(),
          description: $el
            .find('td')
            .eq(2)
            .text()
            .trim(),
          category: $el
            .find('td')
            .eq(3)
            .text()
            .trim(),
          amount: parseFloat(amount1),
        };
      })
      .then(() => resolve(array));
  });
};
