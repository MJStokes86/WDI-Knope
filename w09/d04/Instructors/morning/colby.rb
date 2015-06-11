def valid?(number)
  arr = number.to_s.split('').reverse
  arr = arr.each_with_index.map{|n, i| i % 2 == 0 ? n.to_i : (n.to_i * 2).to_s.split('').inject(0){|sum, n| sum + n.to_i}}
  sum = arr.inject(0){|sum,n| sum + n}
  sum % 10 == 0 ? true : false
end




cat = "brown"

cat == "brown" ? puts "yeah brown cat" : puts "not a brown cat nope"

if cat == "brown"
  puts "Yeab rown cat"
else
  puts "not a brown cat nope"
end