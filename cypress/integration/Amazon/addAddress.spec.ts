import { Dependencies, RobotHands, RobotEyes } from "../../robots/AmazonRobot/amazonRobot";

context('Landing Page Tests', () => {
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('test landing page and login', () => {
        beforeEach(() => {
            dependencies.visitAmazonSite('https://www.amazon.in/');

        })
        it('add payment option', () => {
            robotHands.clickFunctionalDomElement('#nav-link-accountList-nav-line-1');
            robotEyes.checkTextResponse('.a-padding-extra-large > .a-spacing-small', 'Sign-In')
            robotHands.typeTextonId('ap_email',"ayushman.chakravarty@zemosolabs.com{enter}");
            robotHands.typeTextonId('ap_password','qwerty@12345{enter}');
            robotEyes.checkTextResponse('#nav-link-accountList-nav-line-1','Hello, Ayush');
            
            robotHands.clickFunctionalDomElement('#nav-link-accountList');
            robotHands.clickFunctionalDomElement(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner');
            robotHands.clickFunctionalDomElement('.a-box-inner');

            robotHands.typeTextonId('address-ui-widgets-enterAddressFullName','AFull Name');
            robotHands.typeTextonId('address-ui-widgets-enterAddressPhoneNumber','9876543210');
            robotHands.typeTextonId('address-ui-widgets-enterAddressPostalCode','500001');
            robotHands.typeTextonId('address-ui-widgets-enterAddressLine1','1,Some building');
            robotHands.typeTextonId('address-ui-widgets-enterAddressLine2','some area');
            robotHands.typeTextonId('address-ui-widgets-landmark','a landmark');
            //robotHands.typeTextonId('address-ui-widgets-enterAddressCity','Telangana');
            robotHands.clickFunctionalDomElement('#address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text');
            robotHands.clickFunctionalDomElement('#dropdown1_1');
            robotHands.clickFunctionalDomElement('.a-button-input')
        })
    })
})