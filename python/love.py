import turtle;# Set up the turtle screenscreen = turtle.Screen()screen.bgcolor("black")# Create the turtle objectpen = turtle.Turtle()pen.speed(2)pen.color("white")pen.width(3)# Define a function to draw the "Don't Give Up" messagedef draw_message():    pen.up()    pen.goto(-100, 0)    pen.down()    pen.write("Don't", align="center", font=("Arial", 40, "bold"))    pen.up()    pen.goto(100, 0)    pen.down()    pen.write("Give Up", align="center", font=("Arial", 40, "bold"))# Move the turtle to the starting positionpen.up()pen.goto(0, -100)pen.down()# Draw a circle around the messagepen.circle(150)# Draw the "Don't Give Up" messagedraw_message()# Hide the turtlepen.hideturtle()# Exit the program when the screen is clickedscreen.exitonclick()