var teacher="Kyle";
function ask(question){
    console.log(this.teacher,question); //this gives output undefine. If we remove will get output as Kyle
}
function call(){
    let teacher="Suzy";
    ask("Why?");
}
call();