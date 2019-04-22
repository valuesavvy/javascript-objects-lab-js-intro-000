var recipes = {
  flour: '2 cups',
  eggs: 3,
  //butter: '1/2 stick'
}

function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, {[ key]: value })
}


var recipe = { milk: ' cups' }
 
updateObjectWithKeyAndValue(recipe, 'flour', '2 cups')

