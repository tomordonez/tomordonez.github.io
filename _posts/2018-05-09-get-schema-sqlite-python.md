---
layout: post
title: "Get Schema in SQLite with Python"
description: "Get the schema in SQLite with Python using the command line"
redirect_from:
  - /get-schema-sqlite-python.html
categories: [Code]
image: assets/images/4.jpg
tags: [python, schema, sqlite]
---

This is how to get the **schema in SQLite with Python**.

You can check if you already have SQLite installed:

    $ sqlite3

If the prompt doesn't change to `sqlite>` then try the download options from the official docs [here](https://www.sqlite.org/download.html).

## Create a SQLite database

Let's setup this tutorial by creating a SQLite database. I created a simple table and added one record:

    $ sqlite3
    sqlite> CREATE TABLE Users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT);
    sqlite> INSERT INTO Users(name, email) VALUES('homer', 'homer@simpson.com');
    sqlite> SELECT * FROM Users;
    1|homer|homer@simpson.com


You can also create a SQLite database and table using a Python script:

    import sqlite3
    conn = sqlite3.connect('users.sqlite')
    cur = conn.cursor()

    cur.execute('CREATE TABLE Users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT')
    cur.execute('INSERT INTO Users(name, email) VALUES(?, ?)', ('homer', 'homer@simpson.com'))
    conn.commit()
    cur.close()

## Get the SQLite schema with PRAGMA

Given that the table name is `Users`:

    PRAGMA table_info('Users')

`PRAGMA` is a `SQL` extension for `SQLite`.

* A `PRAGMA` can take `0` or `1` argument.
* The argument could be in parenthesis `()` or with an equal `=`
* The argument could be boolean: `1 yes true on`, `0 no false off`.
* The argument could be a string literal.
* There could be an optional `schema-name` before the `PRAGMA` name.
* The `schema-name` is the name of the attached database or `main` or `temp`.
* If the name is omitted, the defaul is `main`.
* In some pragmas the `schema-name` is ignored.

More details about PRAGMA on the official SQLite docs [here](https://www.sqlite.org/pragma.html#pragma_table_info)

## SQLite schema syntax

The syntax is:

    PRAGMA schema.table_info(table-name);

This one returns one row for each colum in the table.

Each row includes:

* column name
* data type
* whether or not the column can be `NULL`
* the default value for the column
* the primary key in the result set is `0` for columns that are not part of the primary key
* otherwise the primary key in the result set is the index of the column

## Get Schema in SQLite with Python

Get the SQLite schema:

    PRAGMA table_info('Users')

Let's add it here:

    $ sqlite3
    
    sqlite> CREATE TABLE Users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT);
    
    sqlite> INSERT INTO Users(name, email) VALUES('homer', 'homer@simpson.com');
    
    sqlite> SELECT * FROM Users;
    1|homer|homer@simpson.com

    sqlite> PRAGMA table_info('Users')
    0|id|INTEGER|0||1
    1|name|TEXT|0||0
    2|email|TEXT|0||0

Get the SQLite schema with Python: 

    cur.execute("PRAGMA table_info('Courses')").fetchall()

Using the Python shell:

    >>> import sqlite3
    >>> conn = sqlite3.connect('users.sqlite')
    >>> cur = conn.cursor()

    >>> cur.execute('CREATE TABLE Users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)')
    
    >>> cur.execute('INSERT INTO Users(name, email) VALUES(?, ?)', ('homer', 'homer@simpson.com'))
    
    >>> cur.execute("PRAGMA table_info('Users')")
    <sqlite3.Cursor object at 0x7f590a00cea0>

    >>> cur.execute("PRAGMA table_info('Users')").fetchall()
    [(0, 'id', 'INTEGER', 0, None, 1), (1, 'name', 'TEXT', 0, None, 0), (2, 'email', 'TEXT', 0, None, 0)]

    >>> for row in cur.execute("PRAGMA table_info('Users')").fetchall():
    ...    print(row)
    ...
    (0, 'id', 'INTEGER', 0, None, 1)
    (1, 'name', 'TEXT', 0, None, 0)
    (2, 'email', 'TEXT', 0, None, 0)

## SQLite cheat sheet

[SQLite cheat sheet for Python](../sqlite3-cheatsheet/)

## More SQLite resources

* [Aggregate functions in SQLite](https://sqlite.org/lang_aggfunc.html)
* [Date in SQLite](https://sqlite.org/lang_datefunc.html)
* [SQLite browser](https://github.com/sqlitebrowser/sqlitebrowser)
* [SQLitestudio SQLite manager](https://github.com/pawelsalawa/sqlitestudio)