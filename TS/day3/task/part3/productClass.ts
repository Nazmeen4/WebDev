import {statusOfPdt,categoriesOfPdt,typeWarranty} from './allEnum'
import { moreProperty } from './morePropertyInterface';
import { productWarranty } from './warrantyClass';
import {reviewOfProduct} from './reviewClass';
export class product extends productWarranty implements moreProperty{
    idOfProduct:number;
    nameOfProduct:string;
    descriptionOfProduct:string;
    priceOfProduct:number;
    statusOfProduct:statusOfPdt;
    categoriesOfProduct:categoriesOfPdt;
    review:reviewOfProduct[];
    color?: string[];
    size?: string[];
    constructor(id:number,name:string,des:string,price:number,status:statusOfPdt,category:categoriesOfPdt,duration:string,type:typeWarranty,review:reviewOfProduct[],color?: string[],size?: string[]){
        super(duration,type);
        this.idOfProduct=id;
        this.nameOfProduct=name;
        this.descriptionOfProduct=des;
        this.priceOfProduct=price;
        this.statusOfProduct=status;
        this.categoriesOfProduct=category;
        this.review=review;
        this.color=color;
        this.size=size;
    }
    display(){
        console.log("Product Id:",this.idOfProduct);
        console.log("Name of Product: ",this.nameOfProduct);
        console.log("Description of Product :",this.descriptionOfProduct);
        console.log("Price :",this.priceOfProduct);
        console.log("Status :",this.statusOfProduct);
        console.log("Category :",this.categoriesOfProduct);
        console.log("Review :",this.review);
        if(this.size){
            console.log("The Avaliable sizes are",this.size);
        }
        if(this.color){
            console.log("The available Colors are :",this.color);
        }
    }
    avgRating(){
        let sum:number=0;
        this.review.forEach((item)=>{
            sum+=item.rating;
        })
        sum=sum/this.review.length;
        console.log("Average Rating is: ",sum.toFixed(2));
    }
}