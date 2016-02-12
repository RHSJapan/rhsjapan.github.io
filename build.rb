x = ""
z = []

z += Dir.glob("_libs/*.min.js")
z.each {|y| x += File.read(y) + "\n" }

File.write("js/libs.js", x)
