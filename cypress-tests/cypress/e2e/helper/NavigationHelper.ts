import { FrogWixRoutes } from "../routes/FrogWixRoutes";
import { StaticParaStorageRoutes } from "../routes/StaticParaStorageRoutes";

export class NavigationHelper {

    static GoToQATestSite() {
        cy.intercept('GET', Cypress.config('baseUrl')!).as('getQATestSite');
        cy.intercept('GET', StaticParaStorageRoutes.getDatePickerCalendar).as('getDatePickerCalendar');
        cy.intercept('POST', FrogWixRoutes.postBoltPerformance).as('postBoltPerformance');
        cy.visit('/');
        cy.wait('@getQATestSite').wait('@getDatePickerCalendar').wait('@postBoltPerformance');
        cy.wait(2000);
    }
}