foods = {
	"avocados" => "fresh",
	"steak" => "meaty",
	"grass" => "fiber-filled",
	"whiskey" => "smooth",
	"muffins" => "sweet",
	"fish" => "mercury-tastic",
	"soap" => "disgusting"

}

foods['avocados'] = "fatty"

foods['muffins'] = "carbtastic"

foods.delete 'soap'

foods['fish'] = 'rotten'

foods.delete 'muffins'

foods.delete 'whiskey'

foods['raw carrot juice'] = 'wallet draining good'

foods['gluten free bread'] = 'flavorless'

puts foods