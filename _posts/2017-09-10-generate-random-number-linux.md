---
layout: post
title: "Generate a Random Number with Linux and Bash"
redirect_from:
  - /generate-random-number-linux.html
categories: [Linux]
image: assets/images/3.jpg
tags: [linux, bash, random number]
---

Follow this tutorial to generate a random number with Linux and Bash.


This is what I was doing to give you some context.

I wanted to automate loading images into a funnel to get them auto-published on a social media channel.

Pictures of vintage cars.

Each car had 4-5 images. Front, back, side, inside, etc.

## Source

I didn't want the images to be published sequentially like this:

    car1-image1.jpg
    car1-image2.jpg
    car1-image3.jpg
    car2-image1.jpg
    car2-image2.jpg
    car2-image3.jpg

I loaded the images in a different order such as:

    car2-image2.jpg
    car1-image3.jpg

But the tool wouldn't publish the images like that. It would publish them in alphabetical order.



## Solution 1

Rename 600 images manually to a random number such as:

Rename `car1-image1.jpg` to `image20.jpg`
Rename `car1-image2.jpg` to `image5.jpg`

...and so on.

Estimated time: 4 hours.

## Solution 2

Creating a bash script that can batch-rename files in Linux.

Estimated time: 10 seconds.

## Batch Rename Files in Linux

This is the script I wrote. I will follow with more details.

    #!/bin/bash

    for file in *.jpg; do
      number="$((($RANDOM % 10) + 1))"
      filetype=".jpg"
      mv "$file" "$number$filetype"
    done

## The Random function in Linux

    $RANDOM is a shell variable that gives you a random number between 0 and 32768.

This is some of the source code as seen <a href="http://www.bashcookbook.com/bashinfo/source/bash-4.0/variables.c" target="_blank">here</a>:

    /* Returns a pseudo-random number between 0 and 32767. */
    static int
    brand ()
    {
    #if 0
      rseed = rseed * 1103515245 + 12345;
      return ((unsigned int)((rseed >> 16) & 32767)); /* was % 32768 */
    #else
      /* From "Random number generators: good ones are hard to find",
         Park and Miller, Communications of the ACM, vol. 31, no. 10,
         October 1988, p. 1195. filtered through FreeBSD */
      long h, l;
    
      if (rseed == 0)
        seedrand ();
      h = rseed / 127773;
      l = rseed % 127773;
      rseed = 16807 * l - 2836 * h;
    #if 0
      if (rseed < 0)
        rseed += 0x7fffffff;
    #endif
      return ((unsigned int)(rseed & 32767)); /* was % 32768 */
    #endif
    }

## Limit The Random Number To A Range

To limit the random number you need to use the `modulo` operator aka `%`
Such as:

    number="$((($RANDOM % 10) + 1))"

Try this from the inside out so you understand what works and what doesn't.

Run this:

    echo $RANDOM

I got this `29811`

    $RANDOM

This will give you something like this: `21422: command not found`. It will give you a random number but it will complain.

If you do this:

    RANDOM

It will say `RANDOM: command not found`

So we know we cannot use `RANDOM` without the dollar sign.

    $RANDOM + 1

This will give you something like: `24349: command not found`. It looks like is doing the math but it complains.

Although the proper way to print something to output is with `echo`.

## Doing math on the shell

The proper geek name for this is <a href="http://www.tldp.org/LDP/abs/html/arithexp.html" target="_blank">arithmetic expansion</a>.

To do math on the shell you have to enclose the operation in double parenthesis.

Such as:

    echo "$((2+2))"

This will result in `4`

If you do this:

    echo 2+2

You will get: `2+2`

If you do this:

    echo (2+2)

You will get: `-bash:syntax error near unexpected token '2+2'`

If you do this:

    echo ((2+2))

You will get: `-bash:syntax error near unexpected token '('`

If you do this:

    echo $((2+2))

You will get: `4`

But the proper syntax for naming variables is `"$"`. A dollar sign inside double quotes.

Now for sure we know this will work:

    echo "$((4-2))"

## Modulo operator

Wikipedia is an expert at explaining things in <a href="https://en.wikipedia.org/wiki/Modulo_operation" target="_blank">common terms</a>. Check this out:

<blockquote>Given two positive numbers, a (the dividend) and n (the divisor), a modulo n (abbreviated as a mod n) is the remainder of the Euclidean division of a by n</blockquote>

Got it right?

They make it up to you with 2 simple examples:


* "5 mod 2" would evaluate to 1 because 5 divided by 2 leaves a quotient of 2 and a remainder of 1.
* "9 mod 3" would evaluate to 0 because the division of 9 by 3 has a quotient of 3 and leaves a remainder of 0.

The modulo operator results in the remainder of the operation.

Do this:

    echo "$((4 % 2))".

This will result in `0`.

4 divided by 2 results in 2 and a remainder of 0.

Now do this:

    echo "$((2 % 4))".

This will result in `2`.

2 divided by 4 results in 0 and a remainder of 2.

If the number on the left is smaller than the number on the right. The remainder will always be the number on the left.

    echo "$((1 % 10))"</code>. Will result in <code>1, because 1 divided by 10 is 0 with a remainder of 1.

Here is a good video about <a href="https://www.khanacademy.org/math/arithmetic-home/multiply-divide/remainders/v/long-division-with-remainder-example" target="_blank">long division</a> because as simple as this math may seem, it can easily get you all confused.

## Generate a Random number within a range

So...

How does this work?

    "$((($RANDOM % 10) + 1))"

This generates a random number from 1 to 10.

Let's take it from the inside out:

    echo "$(($RANDOM % 10))"

If `$RANDOM` gives you this number: `22064`. Then the result is `4`.

Let's do some long division.

22064 divided by 10. We know the answer is 2206.4 and the remainder is 4. But sometimes this computation is not so easy. For instance 22064 divided by 24.

## Long Division of Random Number 22064 by 10

       _______
    10 | 22064

Does 10 fit into 2? No.

         0
       _______
    10 | 22064

Does 10 fit into 22? Yes. 10 times 2 is 20. Subtract 20 from 22. Remainder is 2.

         02
       _______
    10 | 22064
        -20
        ---
          2

Does 10 fit into 2? No. So bring down the 0. Does 10 fit into 20? Yes. 10 times 2 is 20. Subtract 20 from 20. Remainder is 0.

         022
       _______
    10 | 22064
        -20
        ---
          20
         -20
         ---
           0

Does 10 fit into 0? No. Bring down the 6. Does 10 fit into 6? No. Bring down the 4. Does 10 fit into 64? Yes.

10 times 6 is 60. Subtract 60 from 64.

         02206
       _______
    10 | 22064
        -20
        ---
          20
         -20
         ---
           064
           -60
           ---
             4

The remainder is 4.

This operation will result in `4`

    echo "$((22064 % 10))"

Therefore this operation will result in `64`

    echo "$((22064 % 100))"

We can conclude that to generate a random number from 0 to 10. We have to put a `10` on the right side of the modulo. Or to generate a random number from 0 to 100. We have to put a `100`.

Going back to this example:

    echo "$(($RANDOM % 10))"

What if we don't want a `0`. Which would be the case if the number ($RANDOM) on the left (dividend) is a multiple of 10 (divisor)

If `$RANDOM` is 10 or 20 or 50 or 100. Then the operation above will result in a remainder of zero.

We can just add a one `1` to the result of the operation. Such as:

    "$((($RANDOM % 10) + 1))"

This will result in 1:

    echo "$(((50 % 10) + 1))".

## Why are there 3 parenthesis?

This is the 1st parenthesis:

    (50 % 10)

This is the 2nd parenthesis:

    ((50 % 10) + 1)

The 3rd parenthesis is used for the `arithmetic expansion`

    (((50 % 10) + 1))
