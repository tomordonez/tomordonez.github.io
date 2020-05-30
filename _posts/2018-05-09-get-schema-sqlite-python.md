---
layout: post
title: "Get Schema in SQLite with Python"
redirect_from:
  - /get-schema-sqlite-python.html
categories: [Code]
image: assets/images/4.jpg
tags: [coding, linux, python]
---

This is how to get the **schema in SQLite with Python**.

Let's say you have a SQLite database:

    $ sqlite3
    sqlite> CREATE TABLE Users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT);
    sqlite> INSERT INTO Users(name, email) VALUES('homer', 'homer@simpson.com');
    sqlite> SELECT * FROM Users;
    1|homer|homer@simpson.com

I just created a simple table and added one record.

Or you could do this in a Python script:

    import sqlite3
    conn = sqlite3.connect('users.sqlite')
    cur = conn.cursor()

    cur.execute('CREATE TABLE Users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT')
    cur.execute('INSERT INTO Users(name, email) VALUES(?, ?)', ('homer', 'homer@simpson.com'))
    conn.commit()
    cur.close()

As seen <a href="https://stackoverflow.com/questions/11996394/is-there-a-way-to-get-a-schema-of-a-database-from-within-python" target="_blank">here</a>. There is a way to get the `schema` from a `SQLite` database.

Given that the table name is `Users`:

    PRAGMA table_info('Users')

<a href="https://www.sqlite.org/pragma.html#pragma_table_info" target="_blank">Here</a> is more info about `PRAGMA`.

It says that `PRAGMA` is a `SQL` extension for `SQLite`.

* A `PRAGMA` can take `0` or `1` argument.
* The argument could be in parenthesis `()` or with an equal `=`
* The argument could be boolean: `1 yes true on`, `0 no false off`.
* The argument could be a string literal.
* There could be an optional `schema-name` before the `PRAGMA` name.
* The `schema-name` is the name of the attached database or `main` or `temp`.
* If the name is omitted, the defaul is `main`.
* In some pragmas the `schema-name` is ignored.

## PRAGMA table_info

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

Keep in mind `PRAGMA` has nothing to do with `PHASMA`. Although you could try to remember the word `pragmatic`.

In `SQLite`:

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

In `Python`:

    cur.execute("PRAGMA table_info('Courses')").fetchall()

Let's add it here:

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

