var recipes = {
  flour: '2 cups',
  eggs: 3,
  butter: '1/2 stick'
}

function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, {[ key]: value })
}

 
function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
  // it's important that we merge everything into
  // a new object such as the empty {}. 
    // Otherwise, the object obj will be modified. 
    // Test what happens if this line was written as:
    // return Object.assign(obj, { [key]: value })
 
const recipe = { milk: 3 }
 
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup', 'flour', '2 cups', 'butter', '1/2 stick')
// returns `{ eggs: 3, chocolate: '1 cup' }`
 
recipe // { eggs: 3 }
