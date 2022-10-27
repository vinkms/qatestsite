import _ from "cypress/types/lodash";
import { Months } from "../enums/DateEnums";
import { DatePicker } from "../selectors/DatePicker";

export class DateInputHelper {

    static SelectDate(selector: string, month: number, day: number, year: number, isSelectorDataTestId: boolean = false) {
        cy.log(`🍇 Selecting Date: ${month}/${day}/${year} is Saved`);

        (isSelectorDataTestId ? cy.getByDataTestId(selector) : cy.get(selector)).as('selector');
        cy.get('@selector').parent().click();

        //select year
        cy.getByDataTestId(DatePicker.currentYearButton).click();
        cy.getByDataTestId(DatePicker.yearsListBoxContainer).findFirstThatContains('li', year.toString()).click();

        //select month
        cy.getByDataTestId(DatePicker.currentMonthContainer).invoke('prop', 'innerText').then((currentMonth) => {
            const index: number = Object.values(Months).indexOf(currentMonth) + 1;
            const monthDifference: number = month - index;

            if (monthDifference < 0) {
                Cypress._.range(Math.abs(monthDifference)).forEach(() => {
                    cy.getByDataTestId(DatePicker.prevMonthButton).click();
                })
            }
            else {
                Cypress._.range(Math.abs(monthDifference)).forEach(() => {
                    cy.getByDataTestId(DatePicker.nextMonthButton).click();
                })
            }
        })

        //select day
        cy.getByDataTestId(DatePicker.monthTable).findFirstThatContains('td', day.toString()).click();
    }
}