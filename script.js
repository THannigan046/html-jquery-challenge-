$(document).ready(onReady);

function onReady() {
    console.log('on ready');

$('body').append(`
<h1>I appended something</h1>
<h5>Shrek is my one true lord and savior</h5>
`);

let h5Text = $('h5').text();
console.log('h5text is', h5Text);

let append = h5Text.split("").reverse().join("");
console.log('hehe', append);
$('h5Text').text(append);

//assigning first child call to a variable and logging it , accessing the header
let traversal = $("#text__paragraphs").children("header");
console.log(traversal);
//assigning second child call to a variable and logging it, accesing the h2
let traversal2 = traversal.children("h2");
console.log(traversal2);


};