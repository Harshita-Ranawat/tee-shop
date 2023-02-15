const btn = document.querySelector(".btn");

btn.addEventListener('click', function () {
    console.log("clicked");
    const modal = document.querySelector('.modal')
    modal.style.display = 'flex';
});

var a = document.getElementById("login");
var b = document.getElementById("Register");
var c = document.getElementById("btn2");
//const click = document.querySelector("");
//click.addEventListener("click", Register());
function Register() {
    a.style.left = "-450px";
    b.style.left = "20px";
    c.style.left = "110px";
}
function login() {
    a.style.left = "20px";
    b.style.left = "450px";
    c.style.left = "0px";
};
const close = document.querySelector('.close');
close.addEventListener('click', function () {
    console.log("clicked");
    const modal = document.querySelector('.modal');
    modal.style.display = "none";
});
const login1 = document.querySelector('.login1')
console.log(login1)
5
const profile = document.querySelector(".profile")
console.log(profile);

login1.addEventListener('click', function (e) {
    console.log('hello world')
    profile.style.display = 'flex';
    btn.style.display = 'none';
    const modal = document.querySelector('.modal');
    modal.style.display = 'none'
});
const register = document.querySelector('.register')
console.log(register);

console.log(profile);

register.addEventListener('click', function (e) {
    console.log('hello world')
    profile.style.display = 'flex';
    btn.style.display = 'none';
    const modal = document.querySelector('.modal');
    modal.style.display = 'none'
});

// const design = document.getElementById("navbar");
// const a = design.childNodes[1].childNodes[4];
// console.log(a);

// a.addEventListener('click', () => {
//     console.log('clicked');
// })