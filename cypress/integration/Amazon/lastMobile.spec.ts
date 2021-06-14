import { Dependencies, RobotHands, RobotEyes } from "../../robots/AmazonRobot/amazonRobot";

context('Landing Page Tests', ()=>{
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('test landing page and login', ()=>{
        beforeEach(()=> {
            dependencies.visitAmazonSite('https://www.amazon.in');
            // robotHands.clickFunctionalDomElement('#nav-link-accountList-nav-line-1');
            // robotEyes.checkTextResponse('.a-padding-extra-large > .a-spacing-small', 'Sign-In')
            // robotHands.typeTextonId('ap_email',"ayushman.chakravarty@zemosolabs.com{enter}");
            // robotHands.typeTextonId('ap_password','qwerty@12345{enter}');
            // robotEyes.checkTextResponse('#nav-link-accountList-nav-line-1','Hello, Ayush')

        })
        it('Getting last mobile deal', ()=> {

            // searching and getting last Mobile Result
            robotHands.typeIntoTextbox('twotabsearchtextbox',"Mobiles {enter}");
            
            cy.get('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(23) > div > span > div > div > div > div > div:nth-child(2) > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20 > div > div:nth-child(1) > h2 > a > span').invoke('text').debug();
            

        })
    })
})