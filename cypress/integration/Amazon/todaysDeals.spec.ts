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
            robotHands.clickFunctionalDomElement('#nav-xshop > a:nth-child(12)');
            //robotHands.clickonDomusingLocator("data-testid","grid-deals-container")
            robotHands.clickFunctionalDomElement(':nth-child(3) > .DealItem-module__dealItemContent_SGFPcLDYb5e-vSMK5SDH > [data-testid=deal-card] > :nth-child(1) > .a-link-normal > .a-image-container')
        })
    })
})