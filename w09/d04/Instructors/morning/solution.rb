require 'pry'  


  def valid?(number)
    # creates array of digits (as strings) and reverses them for easier traversal via index
    digits_reversed = number.to_s.reverse.split('')
    # creates array of strings, every other of which is doubled
    result_of_doubling_every_other = digits_reversed.map.with_index do |digit, index|
      #now we use map_with_index, which gives us both an element in an array and its index
      binding.pry
      #we can call .odd? on numbers in ruby to return a boolean
      if index.odd?
        #if it's odd, double it, and change it's data type back to a string 
        (digit.to_i * 2).to_s
      else
        #if even (not odd), then just change the datatype back to a string
        (digit.to_i).to_s
      end
    end
    # joins all the array values into a single string, and splits them back up into digits
    # to account for cases that created double digit numbers like 10, because
    # we want to sum the DIGITS 1 and 0 rather than add 10 outright.
    # then we turn the values into an array of Fixnums and sum them up via #reduce(:+)
    sum = result_of_doubling_every_other.join.split('').map(&:to_i).reduce(:+)
    sum % 10 == 0
  end

valid?(1234567890123456)
array = [1,2,3]

doubled = array.map { |number| number * 2}







