import { NavigationHelper } from "../../helper/NavigationHelper";
import { HomeApplicationForm } from "./shared/HomeApplicationForm";

context('Home - Application Form', () => {

    beforeEach(() => {
        NavigationHelper.GoToQATestSite();
    });

    describe('Check Submission Of Testing Form With Only Required Fields Filled Out', () => {

        it('should be able to successfully submit an application form with only required field filled out', () => {
            HomeApplicationForm.TypeText('Name', 'John Doe');
            HomeApplicationForm.TypeText('Email', 'johndoe@gmail.com');
            HomeApplicationForm.SelectDesiredPosition('SQAE');
            HomeApplicationForm.SelectDateOfAvailability(12, 12, 2023);
            HomeApplicationForm.SelectSkill('Manual Testing');
            HomeApplicationForm.SelectSkill('Automated Testing');
            HomeApplicationForm.CheckAnswersConfirmation();
            HomeApplicationForm.SubmitAndVerifyRequestStatus();
            HomeApplicationForm.VerifyIfSubmissionWasSuccessfulAndConfirmationAlertIsVisble();
        });
    });
});