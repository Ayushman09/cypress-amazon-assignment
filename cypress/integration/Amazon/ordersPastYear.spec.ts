import { Dependencies, RobotHands, RobotEyes } from "../../robots/AmazonRobot/amazonRobot";

context('Landing Page Tests', () => {
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('test landing page and login', () => {
        beforeEach(() => {
            dependencies.visitAmazonSite('https://www.amazon.in/');

        })
        it('Add items and verify quantity', () => {
            robotHands.clickFunctionalDomElement('#nav-orders');
            //robotHands.clickFunctionalDomElement('#nav-link-accountList-nav-line-1');
            robotEyes.checkTextResponse('.a-padding-extra-large > .a-spacing-small', 'Sign-In')
            robotHands.typeTextonId('ap_email',"ayushman.chakravarty@zemosolabs.com{enter}");
            robotHands.typeTextonId('ap_password','qwerty@12345{enter}');
            robotEyes.checkTextResponse('#nav-link-accountList-nav-line-1','Hello, Ayush');
            
            // cy.get('#a-autoid-1-announce').contains('2021')
            //     .then(element => {
            //         var text = element.text();
            //         cy.get('#a-autoid-1-announce').select(text);
            //})
            robotHands.clickFunctionalDomElement('#a-autoid-1-announce');
            robotHands.clickFunctionalDomElement('#orderFilter_2');

        })
    })
})