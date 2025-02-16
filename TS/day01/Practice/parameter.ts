//required parameter

function cal(a: number , b:number) : number {
    return a+b;
}
console.log(cal(67,23));

//default parameter

function ask(a: string , b:string ="Hello") : string{
    return a+b;
}
console.log(ask("Bob"));
console.log(ask("Alice","Good Morning"));


//optional parameter
function address(street : string , city ?: string): string{
    if(city){
        return street + city;
    }else{
        return street;
    }
}
console.log(address("Banjara hills ","Hyderabad"));
console.log(address("Gachibowli"));

//rest parameter

function sum( first:number,second:number,...rest : number[]): number{
    if(rest){
        let re:number= first + second;
        rest.forEach((itm)=> re+=itm);
        return re;
    }else{
        return first+second;
    }
}
console.log(sum(12,121));
console.log(sum(12,13,14,15,16,17,18));