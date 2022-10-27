import { DateInputHelper } from "../../../helper/DateInputHelper";
import { FrogWixRoutes } from "../../../routes/FrogWixRoutes";
import { WixFormRoutes } from "../../../routes/WixFormRoutes";
import { Home } from "../../../selectors/Home";

export class HomeApplicationForm {

    //▶️ACTIONS▶️
    static TypeText(fieldName: string, value: string) {
        switch (fieldName) {
            case 'Name':
                cy.get(Home.nameInput).typeText(value);
                break;
            case 'Email':
                cy.get(Home.emailInput).typeText(value);
                break;
            case 'Phone':
                cy.get(Home.phoneInput).typeText(value);
                break;
            case 'Expected Salary':
                cy.get(Home.expectedSalaryInput).typeText(value);
                break;
            default:
                break;
        }
    }

    static SelectDateOfAvailability(month: number, day: number, year: number) {
        DateInputHelper.SelectDate(Home.dateOfAvailabilityInput, month, day, year, false);
    }

    static SelectDesiredPosition(desiredPosition: string) {
        cy.get(Home.desiredPositionDropdown).select(desiredPosition);
    }

    static SelectYearsOfExperience(option: string) {
        cy.get(Home.yearsOfExperienceRadioButtonsContainer)
        .findFirstThatContains('label', option)
        .click();
    }

    static SelectSkill(skillName: string) {
        cy.get(Home.skillsCheckboxContainer)
            .findFirstThatContains('label', skillName)
            .click();
    }

    static CheckAnswersConfirmation() {
        cy.get(Home.answerConfirmationCheckboxLabel).click();
    }

    static SubmitAndVerifyRequestStatus() {
        cy.intercept('POST', WixFormRoutes.postSubmitForm).as('postSubmitForm');
        cy.intercept('POST', FrogWixRoutes.postFormBuilder).as('postFormBuilder');
        cy.get(Home.submitButton).click();
        cy.wait('@postFormBuilder').its('response.statusCode').should('eq', 204)
        .wait('@postSubmitForm').its('response.statusCode').should('eq', 200);
    }

    static Submit() {
        cy.get(Home.submitButton).click();
    }

    //✅ASSERTIONS✅
    static VerifyIfSubmissionWasSuccessfulAndConfirmationAlertIsVisble() {
        cy.get(Home.alertContainer).should('be.visible')
        .findFirst('span').should('have.text', 'Thanks for submitting!');
    }

    static VerifyIfRequiredInputFieldsAreShowingAsInvalid() {
        cy.get(Home.nameInput).should('have.css', 'background-color', 'rgba(255, 64, 64, 0.1)');
        cy.get(Home.emailInput).should('have.css', 'background-color', 'rgba(255, 64, 64, 0.1)');
        cy.get(Home.desiredPositionDropdown).should('have.css', 'background-color', 'rgba(255, 64, 64, 0.1)');
        cy.get(Home.dateOfAvailabilityInput).parent().should('have.css', 'background-color', 'rgba(255, 64, 64, 0.1)');
    }

    static VerifyIfEmailFieldIsShowingAsInvalid() {
        cy.get(Home.emailInput).should('have.css', 'background-color', 'rgba(255, 64, 64, 0.1)');
    }

    static VerifyIfEmailFieldIsShowingAsValid() {
        cy.get(Home.emailInput).should('not.have.css', 'background-color', 'rgba(255, 64, 64, 0.1)');
    }
}