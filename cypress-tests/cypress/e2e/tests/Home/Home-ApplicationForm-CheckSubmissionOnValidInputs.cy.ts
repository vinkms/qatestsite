import { NavigationHelper } from "../../helper/NavigationHelper";
import { HomeApplicationForm } from "./shared/HomeApplicationForm";

context('Home - Application Form', () => {

    beforeEach(() => {
        NavigationHelper.GoToQATestSite();
    });

    describe('Check Submission Of Testing Form With Valid Inputs', () => {

        it('should be able to successfully submit an application form with valid inputs', () => {
            HomeApplicationForm.TypeText('Name', 'John Doe');
            HomeApplicationForm.TypeText('Email', 'johndoe@gmail.com');
            HomeApplicationForm.SelectDesiredPosition('SQAE');
            HomeApplicationForm.TypeText('Phone', '4467869');
            HomeApplicationForm.SelectDateOfAvailability(12, 12, 2023);
            HomeApplicationForm.TypeText('Expected Salary', '55000');
            HomeApplicationForm.SelectYearsOfExperience('> 5 Years');
            HomeApplicationForm.SelectSkill('Manual Testing');
            HomeApplicationForm.SelectSkill('Automated Testing');
            HomeApplicationForm.CheckAnswersConfirmation();
            HomeApplicationForm.SubmitAndVerifyRequestStatus();
            HomeApplicationForm.VerifyIfSubmissionWasSuccessfulAndConfirmationAlertIsVisble();
        });
    });
});