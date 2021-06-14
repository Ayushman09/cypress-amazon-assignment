import { Dependencies, RobotHands, RobotEyes } from "../../robots/AmazonRobot/amazonRobot";

context('Landing Page Tests', ()=>{
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('test landing page and login', ()=>{
        beforeEach(()=> {
            dependencies.visitAmazonSite('https://www.amazon.in');
        })
        it('Getting third from todays deals', ()=> {
            //clicking on hamburger menu

            robotHands.clickFunctionalDomElement('.hm-icon');
            robotHands.clickFunctionalDomElement(':nth-child(15) > .hmenu-item > div');
            
            //robotHands.clickOnClasswithButtonTagandIndex('.hmenu-content',8)
            cy.contains('All Mobile Phones').click();
            robotHands.clickFunctionalDomElement('#nav-logo');
        })
    })
})