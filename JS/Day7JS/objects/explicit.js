function ask(question){
    console.log(this.teacher,question);
}
var school={
    teacher:"Kyle",
}
var school1={
    //teacher:"Suzy", even if we remove comment this will give output as nazmeen only.
    teacher:"Nazmeen",
}
ask.call(school,"Why?");
ask.call(school1,"Explict is used to bind the function to the object? ");