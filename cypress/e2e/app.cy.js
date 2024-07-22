describe('App', () => {
    beforeEach(() => {
        cy.fixture('reservations').then((reservations) => {

        cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
          statusCode: 200,
          body: reservations
        })

        cy.intercept("POST", "http://localhost:3001/api/v1/reservations", {
            statusCode: 201, 
            body: {
                id: 4, 
                name: 'Kim',
                date: '09/16',
                time: '1:00',
                number: '2',
            }
        })
    })
    cy.visit('http://localhost:3000')
    })

    it('should land on a home page with a header, a form with four inputs, and three reservation cards', () => {
      cy.get('.app-title').contains('Turing Cafe Reservation')
      cy.get('#name').should('exist')
      cy.get('#date').should('exist')
      cy.get('#time').should('exist')
      cy.get('#number').should('exist')
      cy.get('.make-reservation-button').contains('MAKE RESERVATION')
      cy.get('.reservations-container > :nth-child(1)').should('exist')
      cy.get('.reservations-container > :nth-child(2)').should('exist')
      cy.get('.reservations-container > :nth-child(3)').should('exist')
    })

    it('should see a reservation card with a name, date, time, number of guests, and cancellation button', () => {
      cy.get(':nth-child(1) > h3').contains('Christie')
      cy.get('.reservations-container > :nth-child(1) > :nth-child(2)').contains("12/29")
      cy.get('.reservations-container > :nth-child(1) > :nth-child(3)').contains("7:00")
      cy.get('.reservations-container > :nth-child(1) > :nth-child(4)').contains("Number of guests: 12")
      cy.get(':nth-child(1) > .cancel-button').contains('CANCEL')
    })

    it('should be able to make a reservation if all form inputs are complete', () => {
      cy.get('#name').type('Kim').should('have.value', 'Kim')
      cy.get('#date').type('09/16').should('have.value', '09/16')
      cy.get('#time').type('1:00').should('have.value', '1:00')
      cy.get('#number').type('2').should('have.value', '2')
      cy.get('.make-reservation-button').click()
      cy.get('.reservations-container > :nth-child(4)').should('exist')
      cy.get(':nth-child(4) > h3').contains('Kim')
      cy.get(':nth-child(4) > :nth-child(2)').contains('09/16')
      cy.get(':nth-child(4) > :nth-child(3)').contains('1:00')
      cy.get(':nth-child(4) > :nth-child(4)').contains('Number of guests: 2')
    })        
})