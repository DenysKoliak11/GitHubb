let count= document.getElementById('count');

function increment(){
document.getElementById('count').innerHTML=String(Number(count.innerHTML)+1);
}
function decrement (){
    document.getElementById('count').innerHTML=String(Number(count.innerHTML)-1);
}
console.log(count)

console.log('main')