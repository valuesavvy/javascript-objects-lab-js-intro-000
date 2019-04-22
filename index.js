var recipes = {
  flour: '2 cups',
  eggs: 3,
  butter: '1/2 stick'
}

function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, {[ key]: value })
}



 
updateObjectWithKeyAndValue(recipe, 'flour', '2 cups'); {
  recipes.milk = '2 cups'
}

