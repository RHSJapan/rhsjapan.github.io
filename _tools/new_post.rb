# new_post.rb

# made a method for easier expansion of additional security against inconsistency
# later down the line.
def gatekeeper *values
    user_input = gets.chomp
    valid = false
    values.each {|element| valid = user_input == element}
    while !valid
        puts "I couldn't understand that, could you try that again?"
        user_input = gets.chomp
        values.each {|element| valid = user_input == element}
    end
    user_input
end

print "Hello! This program is going to guide you through the creation of a
new post for RHS Japan Club. Please keep in mind not to add
any unnecessary quotation marks when using this software- just straightaway
tell me what to use. First, could you tell the author name to use?: "
author = gets.chomp

print "Excellent, #{author}. Now, what layout will this blog post be in? Hint:
It's likely in 'post' format.: "
layout = gets.chomp

print "#{layout} layout it is! Now what shall I title this post?: "
title = gets.chomp

print "Finally, what category is this under?: ru"
category = gets.chomp

puts "Awesome! Right now, you currently are saying that the layout is #{layout},
the title is \"#{title}\", the date will be #{Time.new.getlocal}, the author is
#{author}, and the category is #{category}. If this is not correct, then please
hit Control and C simultaneously, and then hit up arrow, and then enter to restart
this program. Otherwise, type 'confirm' to create the file!"
response = gatekeeper 'confirm'
t = Time.new.getlocal
Dir.chdir '../_posts'
file = File.new "#{t.year}-#{t.month}-#{t.day}-#{title.gsub(' ', '-')}.markdown", 'w+'
file.write "---
layout: #{layout}
title: \"#{title}\"
date: #{t}
authors: [#{author}]
categories: #{category}
---"
file.close
puts "Congrats, the post skeleton has been made! Please proceed to the _posts folders to view and edit your post, adding the actual contents of the said post.

Once you finish the post, you should push the new post to your forked repository and make a pull request. Another Japan Club officer will review the post and make changes to it as necessary until it is ready to be pushed to the master repository."
