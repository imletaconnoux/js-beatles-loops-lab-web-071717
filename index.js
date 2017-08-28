function theBeatlesPlay(musician_array, instrument_array) {
  let new_array = []
  for (let i = 0; i < musician_array.length; i++){
    new_array.push(`${musician_array[i]} plays ${instrument_array[i]}`)
  }
  return new_array
}

function johnLennonFacts(john_facts) {
  let array = []
  let i = 0
  while (i < john_facts.length){
    array.push(`${john_facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  let array = []
  do{
    array.push("I love the Beatles!")
    number++
  } while (number<15)
  return array
}
