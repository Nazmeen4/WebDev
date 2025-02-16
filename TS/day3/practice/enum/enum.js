//enums
//const enums..
//in this type the values are by default assign to it. start from 0
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right"; //3
})(direction || (direction = {}));
var up = direction.up;
console.log(up);
//up=23; //if we try to assign any value it throws the error. asthe enums are constant.
console.log(direction.up);
//string enums
var promiseState;
(function (promiseState) {
    promiseState["pending"] = "Pending";
    promiseState["resolve"] = "Fulfill";
    promiseState["reject"] = "Error";
})(promiseState || (promiseState = {}));
console.log(promiseState.resolve);
//hybrid enums
var orderStatus;
(function (orderStatus) {
    orderStatus["pending"] = "Pending";
    orderStatus["done"] = "Done";
    orderStatus["inProgress"] = "In progress";
    orderStatus[orderStatus["delay"] = 10] = "delay";
})(orderStatus || (orderStatus = {}));
console.log(orderStatus.pending);
console.log(typeof (orderStatus.delay)); //number
console.log(typeof (orderStatus.done)); //string
console.log(typeof (orderStatus)); //Object
//numeric enums
var signal;
(function (signal) {
    signal[signal["red"] = 1] = "red";
    signal[signal["yellow"] = 2] = "yellow";
    signal[signal["green"] = 3] = "green";
})(signal || (signal = {}));
console.log(signal.red);
var status1;
(function (status1) {
    status1[status1["statusNotFound"] = 200] = "statusNotFound";
    status1[status1["pageNotFound"] = 201] = "pageNotFound";
    status1[status1["errorAtLoading"] = 202] = "errorAtLoading";
})(status1 || (status1 = {}));
console.log(status1);
