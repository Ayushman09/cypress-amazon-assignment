import { Dependencies, RobotHands, RobotEyes } from "../../robots/AmazonRobot/amazonRobot";

context('Landing Page Tests', () => {
    const dependencies = new Dependencies();
    const robotHands = new RobotHands();
    const robotEyes = new RobotEyes();

    describe('test landing page and login', () => {
        beforeEach(() => {
            dependencies.visitAmazonSite('https://www.amazon.in/255-Bluetooth-Wireless-Earphone-Immersive/dp/B07C2VJXP4/ref=sr_1_1?_encoding=UTF8&dchild=1&m=A14CZOWI0VEHLG&pf_rd_i=desktop&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=ea67b664-f039-4e4c-a77d-940673f52e0a&pf_rd_r=6XVCM02V401BG8Q0JN8Y&pf_rd_t=36701&qid=1623650009&refinements=p_89%3ABoat%2Cp_6%3AA14CZOWI0VEHLG&rnid=1318474031&s=electronics&smid=A14CZOWI0VEHLG&sr=1-1');

        })
        it('Add items and verify quantity', () => {
            let addedValue
            // get quantity while adding
            cy.get('#quantity').then((qty) => {
                addedValue = qty.text()
            })
            robotHands.clickFunctionalDomElement('#add-to-cart-button');
            //cy.get('[type="image"]').click()
            robotHands.clickFunctionalDomElement('#nav-cart');

            //compare it to the cart value
            robotEyes.seesTextWithId('a-autoid-0-announce > span.a-dropdown-prompt','1');


        })
    })
})