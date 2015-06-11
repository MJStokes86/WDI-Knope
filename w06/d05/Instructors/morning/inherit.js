var first = {a:1, b:2}

var second = Object.create(first)

var third = Object.create(second)

var fourth = Object.create(third)

//to best understand this concept, change the properties on 
//the objects and see what 'trickles down'