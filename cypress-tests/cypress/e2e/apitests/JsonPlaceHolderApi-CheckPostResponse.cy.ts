context('JsonPlaceHolder API', () => {

    describe('Check POST Response from JsonPlaceHolder API', () => {

        it('should be able to successfully create a post', () => {
            cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    userId: 1212,
                    title: "Vin's First Post",
                    body: "Hi! This is my first post."
                }
            }).its('status').should('eq', 201);
        });

        it('should have a response with the correct values supplied in the request', () => {
            cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    userId: 1212,
                    title: "Vin's First Post",
                    body: "Hi! This is my first post."
                }
            }).then(({ body }) => {
                expect(body.userId).to.eq(1212);
                expect(body.title).to.eq("Vin's First Post");
                expect(body.body).to.eq("Hi! This is my first post.");
            });
        });
    })
})
