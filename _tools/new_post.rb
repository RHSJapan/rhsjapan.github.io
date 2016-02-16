# new_post.rb
def gatekeeper *values
    user_input = gets.chomp
    valid = false
    values.each {|element| valid = user_input == values}
    while !valid
        puts "I couldn't understand that, could you try that again?"
        user_input = gets.chomp
    end
    user_input
end
        
puts "Hello! This program is going to guide you through the creation of a
new post for RHS Japan Club. Please keep in mind not to add
any unnecessary quotation marks when using this software- just straightaway
tell me what to use. First, could you tell the author name to use?"
name = gets.chomp

puts "Excellent, #{name}. Now, what layout will this blog post be in? Hint: 
It's likely in 'post' format."
layout = gets.chomp

puts "#{layout} layout it is! Now what shall I title this post?"
title = gets.chomp

puts "Shall I make the data current time as of right now (#{Time.now}), or do 
    you want to have a different date? <now, new>"
# add more!