---
layout: post
title: "Review of Programming for Everybody in Python from Coursera"
redirect_from:
  - /review-programming-for-everybody-coursera.html
categories: [Data Analytics]
image: assets/images/7.jpg
tags: [data science, coursera, python]
---

I have been on a data science quest on and off for about a year and a half.

About a month ago I decided to accelerate my progress and I signed up to Python for Everybody in Coursera.

I implemented some Python scripts in the past and this website uses Python. But I wanted to get some detailed foundations before moving on to using Python for data science.

The first course in the Python for Everybody path is called "Programming for Everybody (Getting Started with Python)".

It's the typical intro to programming.

They teach you basic syntax, types, conditionals and iterations.

They also teach you handling exceptions, which often is a more advanced topic but I am glad this was taught early on.

## Programming for Everybody in Python Curriculum

Here is the curriculum for programming for everybody in Python:

* Week 1: Why we program
* Week 2: Installing and using Python
* Week 3: Why we program (continued)
* Week 4: Variables and expressions
* Week 5: Conditional code
* Week 6: Functions
* Week 7: Loops and iteration

I completed this course in about a week. Spent around 3-4 hours per day for 7 days.

If you are familiar with C programming you can do this course in less than a week too.

If you know what this is, you will find this course very easy:

    for (i = 1; i <= 3; i++)

If you don't have previous knowledge of programming I suggest that you take each week and spend time to get the knowledge to sink in correctly in your brain :)

## Programming for Everybody in Python Example

Here is a Python example related to programming for everybody.

Let's write a silly program that asks for the prices of items and calculate the total, the lowest and highest price.

Also print an error when you don't enter a number and finish when you enter the word "batman".

    lowest = None
    highest = None
    count = 0
    total = 0

    while True:
        price = input('Enter price: ')
	if price == 'batman'
	    break
	try:
	    price = float(price)

	 except:
	    print('Master Bruce please enter a number!')
	    continue
        
	total = total + price
	count = count + 1

	if highest is None or price > highest
	    highest = price
	if lowest is None or price < lowest
	    lowest = price

    print('Total is:', total)
    print('Number of items:', count)
    print('Highest price:', highest)
    print('Lowest price:', lowest)

Running the program shows:

![Programming for Everybody in Python from Coursera example]({{ site.baseurl }}/assets/images/programming-everybody-python-coursera.jpg)

The example uses all the lessons from the course with the exception of the for loop:

* while
* try and except
* if conditional
* input