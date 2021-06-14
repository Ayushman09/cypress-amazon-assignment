import { Dependencies, RobotHands, RobotEyes } from "../../robots/AmazonRobot/amazonRobot";

context('Landing Page Tests', ()=>{
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('test landing page and login', ()=>{
        beforeEach(()=> {
            dependencies.visitAmazonSite('https://www.amazon.com');
        })

        it('Exception: Wrong email',()=>{
            robotHands.clickFunctionalDomElement('#nav-link-accountList-nav-line-1');
            robotHands.typeTextonId('ap_email',"ayushman@zemosolabs.com{enter}");
            robotEyes.checkTextResponse('.a-alert-heading','There was a problem');
        })
        it('Exception: Wrong Password',()=>{
            robotHands.clickFunctionalDomElement('#nav-link-accountList-nav-line-1');
            robotEyes.checkTextResponse('.a-padding-extra-large > .a-spacing-small', 'Sign-In')
            robotHands.typeTextonId('ap_email',"ayushman.chakravarty@zemosolabs.com{enter}");
            robotHands.typeTextonId('ap_password','qwerty@12{enter}');
            robotEyes.checkTextResponse('.a-alert-heading','There was a problem');

        })

        it('Happy login',()=>{
            robotHands.clickFunctionalDomElement('#nav-link-accountList-nav-line-1');
            robotEyes.checkTextResponse('.a-padding-extra-large > .a-spacing-small', 'Sign-In')
            robotHands.typeTextonId('ap_email',"ayushman.chakravarty@zemosolabs.com{enter}");
            robotHands.typeTextonId('ap_password','qwerty@12345{enter}');
            robotEyes.checkTextResponse('#nav-link-accountList-nav-line-1','Hello, Ayush')
        })
        
    })

})
