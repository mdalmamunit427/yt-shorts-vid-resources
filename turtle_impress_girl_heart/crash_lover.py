import turtle

turtle.speed(3)
turtle.bgcolor('black')
turtle.pensize(3)

def func():
    for i in range(200):
        turtle.right(1)
        turtle.forward(1)

# Set up the initial position and color
turtle.color('red', 'pink') 
turtle.begin_fill()

# Start drawing the shape
turtle.left(140)
turtle.forward(111.65)

# Call the function for the first curve of the heart
func()

turtle.left(120)

# Call the function for the second curve of the heart
func()

turtle.forward(111.65)

turtle.end_fill()
turtle.hideturtle()
turtle.done()