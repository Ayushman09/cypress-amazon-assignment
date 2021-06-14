import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class Dependencies extends BaseDependencies{
    visitAmazonSite(text:string){
        this.accessUrl(text);
    }
}

export class RobotEyes extends BaseEyes{
    checkTextResponse(domObject:string,text:string){
        this.seesDomContainText(domObject,text);
    }
    getContents(object:string){
        let x = cy.get(object);
    }
}

export class RobotHands extends BaseHands{
    clickFunctionalDomElement(text:string){
        this.clickOnDomElement(text);
    }
    clickOnClasswithButtonTagandIndex(domClass: string, index: number){
        cy.get(domClass)
          .eq(index)
          .click();
        return this;
      }
      typeIntoTextbox(id:string,text:string) {
        this.typeTextonId(id,text);
    }
    clickonDomusingLocator(locatorName: string, locatorValue: string,) {
        cy.get(`[${locatorName}="${locatorValue}"]`).click({multiple:true})
        return this;
      }
}