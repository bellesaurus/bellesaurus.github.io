---
layout: post
title: HTB Write-Up | Flag Command
tags: [HTB, Write-Up]
# comments: true
# mathjax: true
author: Zahlia Hamer
---

As part of my commitment to continue learning after completing my degree, I am hoping to tackle much more Hack The Box and TryHackMe challenges and machines. The first one for this year was actually Spookifier which I'll write about later. 

This challenge I found quite easy and really only required some detective work in the website inspector. 

**1. Load up the game**
After loading up the instance and heading to the website, I had a bit of a play around with the game. Seemed simple enough and I figured wherever the flag was had to do with some kind of input issue.

**2. Now where's that JSON.....**
Opening up the inspector, I navigated to the network section where I found the fetch record "options". I decided to take a look inside and low and behold found where the option set was for the games commands. There was a secret command inside.
![Secret Command](/assets/img/HTB/flagcommand1.png)

**3. Here's the secret!!**
After inputting the secret command we came out with the flag!!
