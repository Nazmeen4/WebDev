import { typeWarranty } from "./allEnum";
export class productWarranty {
    protected duration:string;
    protected typeOfProduct:typeWarranty;
    private extraDetails:string="This is private";
    constructor(duration:string,type:typeWarranty){
        this.duration=duration;
        this.typeOfProduct=type;
    }
}