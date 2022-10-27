context('Cat Fact Ninja API', () => {

    describe('Check GET Response Value from Cat Fact Ninja API', () => {

        it('should be able to successfully get a response from the API', () => {
            cy.request({
                method: 'GET',
                url: 'https://catfact.ninja/fact',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        })

        it('should be able to validate if the length property value is equal to the fact property character length', () => {
            cy.request({
                method: 'GET',
                url: 'https://catfact.ninja/fact',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(({ body }) => {
                expect((body.fact).length).to.eq(body.length);
            });
        })
    })
});
