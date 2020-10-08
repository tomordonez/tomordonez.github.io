---
layout: post
title: "SQLite3 CheatSheet for Python"
redirect_from:
  - /sqlite3-cheatsheet.html
categories: [Code]
image: assets/images/4.jpg
tags: [python, sqlite]
---

This is an ongoing SQLite3 cheatsheet for Python.

SQLite3 comes with Python and you can launch it with:

    $ sqlite3

If you launch it without an argument, it will say `Connected to a transient in-memory database`.

The prompt changes to:

    sqlite> 

The `.help` is a good idea.

    sqlite> .help

To exit do `.exit`.

    sqlite> .exit

## Create a SQLite database

I find it better to launch `SQLite` passing the name of the database as an argument.

    $ sqlite3 sql1

Now it says `SQLite version...Enter .help for usage hints`.

## Create a SQLite table

This is just your standard SQL. You can use uppercase or lowercase. But I prefer to follow the standard.

    sqlite> CREATE TABLE Users (
       ...> name VARCHAR(128),
       ...> email VARCHAR(128)
       ...> );

I often forget the semicolon `;`. It will give you an error if you forget.

Check that a `TABLE` was created:

    sqlite> .tables
    Users

You can also check the `schema`:

    sqlite> .schema
    CREATE TABLE Users (
    name VARCHAR(128),
    email VARCHAR(128)
    );

## Add values to the SQLite table

Add some data to the table:

    sqlite> INSERT INTO Users VALUES('homer', 'homer@simpson.com');
    sqlite> INSERT INTO Users VALUES('marge', 'marge@simpson.com');
    sqlite> INSERT INTO Users VALUES('lisa', 'lisa@simpson.com');
    sqlite> INSERT INTO Users VALUES('bart', 'bart@simpson.com');
    sqlite> INSERT INTO Users VALUES('maggie', 'maggie@simpson.com');

## Read data from SQLite table

This doesn't work:

    sqlite> Users;

I wish that `SQL` was more user friendly with a variety of human-friendly options:

    Show me users
    Give me users
    What's in Users

Instead do:

    sqlite> SELECT * FROM Users;
    homer|homer@simpson.com
    marge|marge@simpson.com
    lisa|lisa@simpson.com
    bart|bart@simpson.com
    maggie|maggie@simpson.com
    sqlite>

Exit:

    sqlite> .exit

Open again:

    $ sqlite3
    Connected to a transient in-memory database.

Ooops forgot to open the right database.

    sqlite> .open sql1
    sqlite>
    sqlite> .schema
    CREATE TABLE Users(
    name VARCHAR(128),
    email VARCHAR(128)
    );

Looks like the right place.

## Export SQLite database table to CSV

I can't always remember how to do this:

    sqlite> .mode list
    sqlite> .separator ","
    sqlite> .output test_sql1.csv
    sqlite> SELECT * FROM Users;
    sqlite> .exit

Although a good way to remember is to understand the workflow:

* Convert to a list
* Separate with a comma
* Output to file name
* SQL statement
* Exit sqlite3

    $ cat test_sql1.csv
    homer,homer@simpson.com
    marge,marge@simpson.com
    lisa,lisa@simpson.com
    bart,bart@simpson.com
    maggie,maggie@simpson.com

## Import CSV to SQLite database table

Let's say we have a `CSV` called `springfield.csv` with some `name, email` values:

    apu,apu@springfield.com
    mrburns,mrburns@springfield.com
    milhouse,milhouse@springfield.com
    ned,ned@springfield.com
    moe,moe@springfield.com

Open `SQLite` and import:

    $ sqlite3 sql1
    sqlite> .tables
    Users

Workflow:

* mode CSV
* import file into table

    sqlite> .mode csv
    sqlite> .import springfield.csv Users
    sqlite> SELECT * FROM Users;
    homer,homer@simpson.com
    marge,marge@simpson.com
    lisa,lisa@simpson.com
    bart,bart@simpson.com
    maggie,maggie@simpson.com
    apu,apu@springfield.com
    mrburns,mrburns@springfield.com
    milhouse,milhouse@springfield.com
    ned,ned@springfield.com
    moe,moe@springfield.com

## Export SQLite Table to CSV...another way

    sqlite> .headers on
    sqlite> .mode csv
    sqlite> .once test2_sql1.csv
    sqlite> SELECT * FROM Users;

Workflow:

* Add the header
* Set mode to `CSV`
* Output to static
* SQL command

If you look at the `.help` you fill find what `.once` means:

"Output for the next `SQL` command only to `FILENAME`". Used like this:

    .once FILENAME

## Open the CSV without closing SQLite

If you are in Linux or maybe Mac(not sure):

    sqlite> .system xdg-open test2_sql1.csv

This will open the `CSV` file in the default editor for `CSV`.

## Insert rows into SQLite table

Open the database:

    $ sqlite3 sql1
    sqlite> .tables
    Users
    sqlite> .schema
    CREATE TABLE Users (
    name VARCHAR(128),
    email VARCHAR(128)
    );

I find it useful to see what the `tables` and `schema` are.

This is the same as before:

    sqlite> INSERT INTO Users VALUES('bob', 'bob@springfield.com');

Although this syntax is optional:

    sqlite> INSERT INTO Users(name, email) VALUES('bob', 'bob@springfield.com');

That one shows a comma-separated list of columns. Perhaps is a reminder of the data that you are inserting. I think is a good idea.

## Delete data from a SQLite table

In our example database we have `name` and `email`. Let's delete the last row that has `bob`.

    sqlite> DELETE FROM Users WHERE email='bob@springfield.com';

## Update a field from a SQLite table

Let's update `moe` and change his email to `moe@moestavern.com`.

    sqlite> UPDATE Users SET email='moe@moestavern.com' WHERE email='moe@springfield.com';

## Get records from a SQLite table

We already tried this too many times:

    sqlite> SELECT * FROM Users;

What about this one:

    sqlite> SELECT * FROM Users WHERE name='bart';
    bart|bart@simpson.com

## Get records and sorting from a SQLite table

Use `ORDER BY`:

    sqlite> SELECT * FROM Users ORDER BY name;
    sqlite> SELECT * FROM Users ORDER BY email;

## Create a SQLite connection in Python

    import sqlite3
    conn = sqlite3.connect('phantom.sqlite')
    cur = conn.cursor()
    ...
    do something here
    cur.close()

## SQLite in Python

Let's write a simple program called `contacts.py` that asks for names and emails:

    import sqlite3

    conn = sqlite3.connect('contacts.sqlite')
    cur = conn.cursor()

    cur.execute('DROP TABLE IF EXISTS Users')
    cur.execute('CREATE TABLE Users(name TEXT, email TEXT)')
    while True:
        name = input('Enter name: ')
        email = input('Enter email: ')
        cur.execute('INSERT INTO Users(name, email) VALUES(?, ?)', (name, email))
        conn.commit()

        try:
            more_values = input('Add more? (y/n): ')
            if more_values == 'y':
                continue
            elif more_values == 'n':
                break
        except (KeyboardInterrupt, SystemExit):
            raise
    cur.close()

This line `DROP TABLE IF EXISTS Users` is used to drop table everytime we run the program.

Running the program:

    $ python3 contacts.py
    Enter name: homer
    Enter email: homer@simpson.com
    Add more? y/n: y
    Enter name: bart
    Enter email: bart@simpson.com
    Add more? y/n: n
    $ ls
    contacts.py contacts.sqlite

Let's open the `contacts.sqlite`:

    $ sqlite3 contacts.sqlite
    sqlite> .tables
    Users
    sqlite> SELECT * FROM Users;
    homer|homer@simpson.com
    bart|bart@simpson.com

Let's export to `CSV`:

    sqlite> .headers on
    sqlite> .mode csv
    sqlite> .once contacts.csv
    sqlite> SELECT * FROM Users;
    sqlite> .system xdg-open contacts.csv

Launches my text editor `Sublime Text`:

    name,email
    homer,homer@simpson.com
    bart,bart@simpson.com

