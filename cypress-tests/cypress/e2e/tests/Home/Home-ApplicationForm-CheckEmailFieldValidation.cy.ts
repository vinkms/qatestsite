import _ from "cypress/types/lodash";
import { NavigationHelper } from "../../helper/NavigationHelper";
import { HomeApplicationForm } from "./shared/HomeApplicationForm";

context('Home - Application Form', () => {

    beforeEach(() => {
        NavigationHelper.GoToQATestSite();
    });

    describe('Check Validations on Email Field Format', () => {

        it('should not be able to submit an application with invalid email format', () => {
            HomeApplicationForm.Submit();
            HomeApplicationForm.VerifyIfRequiredInputFieldsAreShowingAsInvalid();
            HomeApplicationForm.TypeText('Name', 'John Doe');
            HomeApplicationForm.SelectDesiredPosition('SQAE');
            HomeApplicationForm.SelectDateOfAvailability(12, 12, 2023);
            HomeApplicationForm.SelectSkill('Manual Testing');
            HomeApplicationForm.SelectSkill('Automated Testing');
            HomeApplicationForm.CheckAnswersConfirmation();
            HomeApplicationForm.TypeText('Email', 'johndoe@.com');
            HomeApplicationForm.Submit();
            HomeApplicationForm.VerifyIfEmailFieldIsShowingAsInvalid();
            HomeApplicationForm.TypeText('Email', 'johndoe.com');
            HomeApplicationForm.Submit();
            HomeApplicationForm.VerifyIfEmailFieldIsShowingAsInvalid();
            HomeApplicationForm.TypeText('Email', 'johndoe@gmail.');
            HomeApplicationForm.Submit();
            HomeApplicationForm.VerifyIfEmailFieldIsShowingAsInvalid();
            HomeApplicationForm.TypeText('Email', 'johndoe@gmail');
            HomeApplicationForm.Submit();
            HomeApplicationForm.VerifyIfEmailFieldIsShowingAsInvalid();
            HomeApplicationForm.TypeText('Email', 'johndoe@gmail.com');
            HomeApplicationForm.VerifyIfEmailFieldIsShowingAsValid();
        });
    });
});