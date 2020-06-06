// https://docs.cypress.io/api/introduction/api.html
const resetDatabase = (data) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('VUE_APP_BASE_API_URL')}/reset`,
    body: Object.assign(
      {},
      {
        students: [],
        exercises: [],
        studentScores: [],
      },
      data
    ),
  });
};

describe('Navigation', () => {
  beforeEach(() => {
    resetDatabase();
  });

  after(() => {
    resetDatabase();
  });

  describe('Header', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    describe('Logo', () => {
      it('navigates to /', () => {
        cy.get('.title-link').should('have.attr', 'href', '/');
      });

      it('redirects to the home page', () => {
        cy.url().should('be', '/exercises');
      });
    });

    describe('Navigation', () => {
      it('highlights the active page', () => {
        cy.visit('/exercises');
        cy.get('a[href="/exercises"]')
          .children('.nav-indicator')
          .should('be.visible');
      });

      it('only allows one navigation link to be active', () => {
        cy.visit('/exercises');
        cy.get('.router-link-exact-active').should('have.length', 1);
      });
    });
  });
});

describe('Exercises', () => {
  beforeEach(() => {
    resetDatabase();
  });

  after(() => {
    resetDatabase();
  });

  it('resets data for each test run', () => {
    cy.visit('/exercises');
    cy.get('.exercise').should('not.exist');
  });

  it('displays all of the exercises', () => {
    resetDatabase({
      exercises: [
        { id: 1, name: 'Make Dough by Baking Bread' },
        { id: 2, name: 'OOP for Fun and Profit' },
      ],
    });
    cy.visit('/exercises');

    cy.get('.exercise')
      .should('have.length', 2)
      .and('contain', 'Make Dough by Baking Bread')
      .and('contain', 'OOP for Fun and Profit');
  });
});
