---
layout: post
title: "Python Socket Save Data To File"
description: "Using Python socket to save data to file. Send and receive data using Python sockets."
redirect_from:
  - /python-socket-save-data-to-file.html
categories: [Code]
image: assets/images/9.jpg
tags: [python, socket]
---

Send and receive data can be tested using 3 methods:

* telnet
* Chrome developer tools
* Python socket and save data to file

## Using Telnet

    $ telnet data.pr4e.org 80

The output should be something like:

    Trying 192.241.136.170...
    Connected to data.pr4e.org.
    Escape character is '^]'

Then enter the command:

    GET / HTTP/1.0

The output should be a response:

    HTTP/1.1 200 OK

And then the header of that page:

    Date: Fri, 06 Apr 2018 23:07:21 GMT
    Server: Apache/2.4.7 (Ubuntu)
    Last-Modified: Thu, 12 Nov 2015 19:12:19 GMT
    ETag: "2cf6-5245cb8c635cb"
    Accept-Ranges: bytes
    Content-Length: 11510
    Vary: Accept-Encoding
    Connection: close
    Content-Type: text/html

Then the output is the HTML page.

## Using Chrome developer tools

Open the page `data.pr4e.org`. Go to Developer tools. Network. Reload the page.

Under `Name`. Click on `data.pr4e.org`.

The `Headers` tab shows similar info:

    Request URL: http://data.pr4e.org/
    Request Method: GET
    Status Code: 200 OK
    Remote Address: 192.241.136.170:80
    Content-Length: 625
    Content-Type: text/html;charset=UTF-8
    Date: Fri, 06 Apr 2018 23:18:23 GMT
    Connection: keep-alive

## Using Python socket to save data to file

    import socket
    import re

    host = input('Enter the host: ')
    port = int(input('Enter the port number: '))
    mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    cmd = 'GET / HTTP/1.0\r\n\r\n'.encode()

    try:
        mysock.connect((host, port))
    except:
        print('Could not connect')

    print('Connected')

    try:
        mysock.send(cmd)
    except:
        print('Could not send data')

    print('Data sent')

    with open('data_stream.txt', 'w') as fhandle:
        while True:
            data = mysock.recv(512)
            if (len(data) < 1):
                break
            fhandle.write(data.decode())

    mysock.close()

    with open('data_stream.txt', 'r') as fhandle:
        for line in fhandle:
            match = re.match(r'Last-Modified: ([\w,: ]+)', line)
            if match:
                last_modified = match.group()
                print(last_modified)
            match2 = re.match(r'ETag: (["\w-]+)', line)
                etag = match.group()
                print(etag)