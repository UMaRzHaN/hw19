function randomNumber(min, max){
    let r = Math.random()*(max-min +1) + min;
    b = Math.floor(r);
    console.log(b);
}
randomNumber(10, 50);
let a = b*0.1;
let years;
function bidon(years){
  let m = years*12;
c=a*m;
console.log('All time:',Math.ceil(c));
console.log('Per month:',Math.ceil(a));
}
bidon(prompt(years));