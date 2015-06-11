require 'minitest'



def valid?(card_number)
numbers = card_number.reverse.to_s.split('')


numbers.each do |n, i|
number = n.to_i

if  i % 2 == 0
	(number * 2).to_s
else 
	(number).to_s
end


sum = sum += number
sum % 10 == 0? true:false


end
end

valid?("4207670067541733")
