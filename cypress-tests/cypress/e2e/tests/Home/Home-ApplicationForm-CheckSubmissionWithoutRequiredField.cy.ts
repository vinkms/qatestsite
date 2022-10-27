import { NavigationHelper } from "../../helper/NavigationHelper";
import { HomeApplicationForm } from "./shared/HomeApplicationForm";

context('Home - Application Form', () => {

    beforeEach(() => {
        NavigationHelper.GoToQATestSite();
    });

    describe('Check Submission Of Testing Form Without Required Fields Filled Out', () => {

        it('should not be able to submit an application form with required fields not filled out', () => {
            HomeApplicationForm.Submit();
            HomeApplicationForm.VerifyIfRequiredInputFieldsAreShowingAsInvalid();
        });
    });
});