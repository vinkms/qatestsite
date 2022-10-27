context('Pokemon API', () => {

    describe('Check GET Response Value from Pokemon API', () => {

        it('should be equal to the expected response', () => {
            cy.fixture('pokeapi-get-pokemon-pikachu.json').then((res) => {
                cy.request({
                    method: 'GET',
                    url: 'https://pokeapi.co/api/v2/pokemon/pikachu/',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).its('body').should('deep.equal', res);
            });
        });
    })
})
