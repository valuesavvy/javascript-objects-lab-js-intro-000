var recipes = {
  flour: '2 cups',
  eggs: 3,
  butter: '1/2 stick'
}

function updateObjectWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, {[ key]: value })
}


