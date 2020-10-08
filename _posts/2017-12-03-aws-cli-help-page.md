---
layout: post
title: "AWS CLI Help Pages"
redirect_from:
  - /aws-cli-help-page.html
categories: [Code]
image: assets/images/6.jpg
tags: [aws, CLI]
---

How to open the AWS man page or AWS help page through CLI

When you SSH to an AWS EC2 and you try this:

    man aws
    man ec2

It shows `No manual entry for aws`.

As seen <a href="https://stackoverflow.com/questions/47623054/does-aws-have-man-pages/" target="_blank">here</a>. The way to open the man page or the help page is with this:

    aws help
    aws ec2 help
    aws ec2 run-instances help

![AWS CLI Man Pages]({{ site.baseurl }}/assets/images/aws-cli-help-page.gif)
