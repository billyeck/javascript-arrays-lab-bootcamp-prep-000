var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(ele){
  kittens.push(ele)
  return kittens
}
function destructivelyPrependKitten(ele){
  kittens.shift(ele)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.unshift()
  return kittens
}
function prependKitten(name){
  ary=[name, ...kittens]
  return ary
}
function removeLastKiten(){
  return kittens.slice(0, kittens.length-1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
