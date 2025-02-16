/*
Create an enum to represent the status of a product with the values: "In Stock" and "Out of Stock".
Create an enum to represent product categories with the values: "Electronics", "Clothing", and "Books".
Define a class for the basic properties of a product, including id, name, description, price, status, and category.
Define a class for warranty details including duration and type, where type can be either "Limited" or "Unlimited".
Define an interface for optional properties such as color options and size options.
Define a class for product reviews, including user, rating, and comment.
 Create a Product class that inherits from the previously defined classes/interfaces and includes additional properties such as warranty, rating, reviews, color options, and size options.
 Use access modifiers (public, private, protected) to encapsulate data where necessary.
 Implement methods within the Product class to:
Display product details
Calculate the average rating from reviews
*/

enum statusOfPdt{
    available="In Stock",
    notAvailable="Out of stock",
}

enum categoriesOfPdt{
    electronic="Electronic",
    clothing="Clothing",
    books="Books",
}

enum typeWarranty{
    limit="Limited",
    unlimited="UnLimited",
}
class productWarranty {
    protected duration:string;
    protected typeOfProduct:typeWarranty;
    private extraDetails:string="This is private";
    constructor(duration:string,type:typeWarranty){
        this.duration=duration;
        this.typeOfProduct=type;
    }
}
class reviewOfProduct {
    user:string;
    rating:number;
    //comment:string;
    constructor(user:string,rating:number,/*comment:string*/){
        this.user=user;
        this.rating=rating;
        //this.comment=comment;
    }
}

interface moreProperty{
    color?:string[],
    size?:string[],
}

class product extends productWarranty implements moreProperty{
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
let allProducts:product[]=[];
let arrReview1:reviewOfProduct[]=[];
let review1=new reviewOfProduct("John",5);
let review2=new reviewOfProduct("Jack",4);
let review3=new reviewOfProduct("James",5);
arrReview1.push(review1);
arrReview1.push(review2);
arrReview1.push(review3);
let color:string[]=['red','gray','black'];
let product1=new product(1,"Oven","Its an electronic device",200000,statusOfPdt.available,categoriesOfPdt.electronic,"2 years",typeWarranty.limit,arrReview1,color);
product1.display();
product1.avgRating();
allProducts.push(product1);

let arrReview2: reviewOfProduct[]=[];
let reviewBook1=new reviewOfProduct("Amulya",5);
let reviewBook2=new reviewOfProduct("Ashwanth",4);
let reviewBook3=new reviewOfProduct("Niharaka",4);
arrReview2.push(reviewBook1);
arrReview2.push(reviewBook2);
arrReview2.push(reviewBook3);
let product2= new product(2,"IKIGAI","Its a The book about the lifestyle of a japanice guys",30000,statusOfPdt.notAvailable,categoriesOfPdt.books,"-",typeWarranty.unlimited,arrReview2);
product2.display();
product2.avgRating();
allProducts.push(product2);

// console.log("---------------------");
// console.log(allProducts);






