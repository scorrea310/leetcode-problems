# https://leetcode.com/problems/remove-vowels-from-a-string/
# @param {String} s
# @return {String}
def remove_vowels(s)
    vowels = {'a'=> 1, 'e'=> 1, 'i'=> 1, 'o'=> 1, 'u'=> 1}
    arr = []
    s.each_char do |char|
        if !vowels.has_key?(char)
            arr.push(char) 
        end       
    end
    arr.join("")
end