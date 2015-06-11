names = ['andy', 'neel', 'jeff']
big_names = []


new_array = names.map do |name|
    name.upcase
end

puts new_array.class
