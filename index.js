var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}
function appendKitten(name){
  arr = [];
  kittens.push(name);
  kittens.slice();
  kittens.concat(arr);
  return arr

}
function prependKitten(name) {
  arr = [];
  kittens.unshift(name);
  
}
