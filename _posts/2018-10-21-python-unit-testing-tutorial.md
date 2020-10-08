---
layout: post
title: "Python Unit Testing Tutorial"
redirect_from:
  - /python-unit-testing-tutorial.html
categories: [Code]
image: assets/images/8.jpg
tags: [python, unittest, unit testing]
---

This is a tutorial about unit testing in Python.

Here are some great resources that helped me write this tutorial:

* <a href="https://docs.python.org/3/library/unittest.html" target="_blank">Official Docs</a>.
* <a href="https://www.youtube.com/watch?v=6tNS--WetLI" target="_blank">This Youtube video about unit testing</a>.

## Python Unit Testing

Unit testing files follow this convention:

* If the module name is `calculator.py`.
* Then the test file should be `test_calculator.py`.

Create a virtual environment.

Create the file `calculator.py`:

    class Calculator:

        def __init__(self):
	        pass
	
	    def add(self, x, y):
	        return(x + y)
	
	    def subtract(self, x, y):
	        return(x - y)

	    def multiply(self, x, y):
	        return(x * y)

	    def divide(self, x, y):
	        return(x / y)

You could run this from the Python shell:

    >>> from calculator import *
    >>> a = Calculator()
    >>> a.add(2, 3)
    5
    >>> a.subtract(2, 3)
    -1
    >>> a.multiply(2, 3)
    6
    >>> a.divide(2, 3)
    0.6666

## Create the test file

Create the test file `test_calculator.py`:

    import unittest
    from calculator import *

Create a test class that inherits from `unittest.TestCase`:

    class TestCalculator(unittest.TestCase):

Create methods following the same convention `test_`:

    class TestCalculator(unittest.TestCase):
        
	    def test_add(self):

## TestCase assert methods

The official docs show that `TestCase` provides many `assert` methods we can use.

They use the format `assertSomething(first, second, msg=None)`.

The methods can accept a `msg` as an argument to output an error message.

* `assertEqual(a, b)`
* `assertNotEqual(a, b)`
* `assertTrue(x)`
* `assertFalse(x)`
* `assertIs(a, b)`: a is b
* `assertIsNot(a, b)`
* `assertIsNone(x)`
* `assertIsNotNone(x)`
* `assertIn(a, b)`: a in b
* `assertNotIn(a, b)`
* `assertIsInstance(a, b)`
* `assertNotIsInstane(a, b)`
* `assertRaises(exception, callable, *args, **kwds)`

## Using the method `assertEqual`:

    def test_add(self):
        result = Calculator().add(1, 2)
	    self.assertEqual(result, 3)

## Running the test file

Run `unittest` as the main module:

    $ python -m unittest test_calculator.py

Or modify the test file:

    if __name__ == '__main__':
        unittest.main()

Then run the file like this:

    $ python test_calculator.py

This will show:

    .
    -------------------
    Ran 1 test in 0.00s

## This is what we have so far

This is what we have for `test_calculator.py`:

    import unittest
    from calculator import *

    class TestCalculator(unittest.TestCase):
        
	def test_add(self):
	    result = Calculator().add(1, 2)
	    self.assertEqual(result, 3)

    if __name__ == '__main__':
        unittest.main()

Then run the test file like this:

    $ python test_calculator.py

## Refactoring

Add the `result` variable into the `assert` statement:

    def test_add(self):
        self.assertEqual(Calculator().add(1, 2), 3)

## Check edge cases

Add more `assert` statements:

    def test_add(self):
        self.assertEqual(Calculator().add(1, 2), 3)
        self.assertEqual(Calculator().add(-1, 2), 1)
        self.assertEqual(Calculator().add(-1, -2), -3)
        self.assertEqual(Calculator().add(1, -2), -1)

## Using `assertRaises()`

This method uses this format:

    assertRaises(exception, callable, *args, **kwds)

Following the example of division by `0`.

Inside `calculator.py`:

    def divide(self, x, y):
        if y == 0:
	        raise ValueError('Cannot divide by zero')
	    return(x / y)

Inside `test_calculator.py`:

    def test_divide(self):
        self.assertRaises(ValueError, Calculator().divide, 1, 0)

I don't really like this syntax. I don't understand why this cannot be done instead:

    self.assertRaises(ValueError, Calculator().divide(1, 0))

Following the video tutorial. The alternative is to do:

    with self.assertRaises(ValueError):
        Calculator().divide(1,0)

## Using `assertIsInstance()`

Try a different example to follow and unfollow users on Twitter. Do not mind the calculations. They don't make much sense :)

Given `user.py`:

    class User:

        follow_rate = 1.2

    	def __init__(self, name, following, followers):
    	    self.name = name
    	    self.following = following
    	    self.followers = followers

    	def screen_name(self):
    	    return('@{}'.format(self.name))

    	def auto_follow(self):
    	    if self.following < self.followers:
    	        self.following = self.followers * self.follow_rate
                return(self.following)
        
        def unfollow(self):
            if self.following > self.followers:
                self.following = (self.following - self.followers)\
                                  * self.follow_rate
                return(self.following)

And `test_user.py`:

    import unittest
    from user import User

    class TestUser(unittest.TestCase):

        def test_screen_name(self):
	        pass
	
	    def test_auto_follow(self):
	        pass
    
    if __name__ == '__main__':
        unittest.main()

The test is not doing anything right now. But it should pass:

    $ python test_user.py
    ..
    ------
    Ran 2 tests in 0.000s

Add some tests:

    def test_screen_name(self):
        
        user1 = User('homer', 50, 100)
	    user2 = User('bart', 20, 10)

	    self.assertIsInstance(user1.name, str)
	    self.assertIsInstance(user1.following, int)
	    self.assertIsInstance(user1.followers, int)
    
    def test_auto_follow(self):
        pass

Running:

    ..
    ----
    Ran 2 tests in 0.00s

## Using `assertEqual()`

Add the method to `test_screen_name`:

    def test_screen_name(self):
        
    	user1 = User('homer', 50, 100)

    	self.assertIsInstance(user1.name, str)
    	self.assertIsInstance(user1.following, int)
    	self.assertIsInstance(user1.followers, int)
    	self.assertEqual(self.screen_name, '@homer')

    def test_auto_follow(self):
        pass


Just to show what a failure looks like:

    $ python test_user.py
    .E
    ============
    ERROR: test_screen_name(__main__.TestUser)
    -------------
    Traceback (most recent call last):
      File "test_user.py", line 14, in test_screen_name
        self.assertEqual(self.screen_name, '@homer')
    AttributeError: 'TestUser' objet has no attribute
    'screen_name'
    ------------
    Ran 2 tests in 0.00s
    FAILED (errors=1)

To correct this. Replace:

    self.assertEqual(self.screen_name, '@homer')

With:

    self.assertEqual(user1.screen_name(), '@homer')

Running:

    ..
    ------
    Ran 2 tests in 0.00s

Add another test:

    def test_auto_follow(self):
        
    	user1 = User('homer', 50, 100)
    	user1.auto_follow()
    	self.assertEqual(user1.follow, 50*1.2)

Running:

    ..
    ------
    Ran 2 tests in 0.001s

## Using setUp() and tearDown()

This is what we have so far for `test_user.py`:

    import unittest
    from user import User

    class TestUser(unittest.TestCase):

        def test_screen_name(self):
            
            # User(name, following, followers)
            # screen_name returns @name

            user1 = User('homer', 50, 100)
            user2 = User('bart', 20, 10)

            self.assertIsInstance(user1.name, str)
            self.assertIsInstance(user1.following, int)
            self.assertIsInstance(user1.followers, int)
            self.assertEqual(user1.screen_name(), '@homer')

            self.assertEqual(user2.screen_name(), '@bart')

        def test_auto_follow(self):
            
            # if following < followers
            # self.follow = following * follow_rate
            # follow_rate = 1.2

            user1 = User('homer', 50, 100)
            user2 = User('bart', 20, 10)

            user1.auto_follow()
            self.assertEqual(user1.follow, 50*1.2)

            user2.auto_follow()
            self.assertEqual(user2.unfollow, (20-10)*1.2) 

    if __name__ == '__main__':
        unittest.main()

The test cases `user1` and `user2` are repeated for both tests.

Instead use this:

    class TestUser(unittest.TestCase):

        def setUp(self):
            pass

        def tearDown(self):
            pass

Create the users in `setUp()`:

    class TestUser(unittest.TestCase):

        def setUp(self):
            self.user1 = User('homer', 50, 100)
            self.user2 = User('bart', 20, 10)


The other methods need to be changed to instance attributes:

From this:

    self.assertEqual(user1.screen_name(), '@homer')
    self.assertEqual(user2.screen_name(), '@bart')

To this:

    self.assertEqual(self.user1.screen_name(), '@homer')
    self.assertEqual(self.user2.screen_name(), '@bart')

## Isolated tests

Here is something interesting. If you add print statements after each method. You can see that `setUp` and `tearDown` run after each test such as:

    setUp
    test_screen_name
    tearDown

    setUp
    test_auto_follow
    tearDown

Also, the tests might not run in order.

## Using `tearDown()`

Use case could be when setting up a database.

Use `setUp()` to create the database and use `tearDown()` to delete it.

## Using `setUpClass()` and `tearDownClass()`

Since `setUp` runs before each test and `tearDown` after each test. There is a way to run a different kind of setup before all tests (`setUpClass`) and a kind of teardown after all tests (`tearDownClass`).

    class TestUser(unittest.TestCase):

        @classmethod
        def setUpClass(cls):
            pass

        @classmethod
        def tearDownClass(cls):
            pass

You can also add print statements to these methods to see where they run.

As seen <a href="https://stackoverflow.com/questions/12179271/meaning-of-classmethod-and-staticmethod-for-beginner" target="_blank">here</a>. With `@classmethod`, the class is passed as the first argument, instead of the instance of the class. You can use the class and properties inside that method.

The `setUpClass(cls)` could be used to populate a database. So that this is not done for each separate test. The tests can read from the database. Then use the `tearDownClass(cls)`.

## Python Mocking

The use case is connecting to a website. We want the test to fail only if there is something wrong with the code but not when the server is down.

Install `requests` inside your virtual environment:

    env$ pip install requests

To test that `requests` was installed:

    env$ python
    >>> import requests
    >>> response = requests.get('https://github.com/tomordonez')

The variable `response` is a `requests Response` object:

    >>> type(response)
    <class 'requests.models.Response'>

You can review its methods using:

    >>> dir(response)

These are some of the methods

* `response.headers`: Returns a dictionary
* `response.encoding`: 'utf-8'
* `response.status_code`: 200
* `response.ok`: True
* `response.text`: Returns the content of the page

Adding the method to `user.py`:

    import requests

    class User:

        follow_rate = 1.2

        def __init__(self, name, following, followers):
            self.name = name
            self.following = following
            self.followers = followers

        def get_user(self):
            self.response = requests.get('https://twitter.com/{}'\
                                         .format(self.name))
            if self.response.ok:
                return(self.response.headers)
            else:
                return('Bad Response')

        def screen_name(self):
            return('@{}'.format(self.name))

        def auto_follow(self):
            if self.following < self.followers:
                self.following = self.followers * self.follow_rate
                return(self.following)
        
        def unfollow(self):
            if self.following > self.followers:
                self.following = (self.following - self.followers)\
                                  * self.follow_rate
                return(self.following)


To read the source code for `mock` go <a href="https://github.com/python/cpython/blob/3.7/Lib/unittest/mock.py" target="_blank">here</a>.

These are some of the classes:

* `class Mock(CallableMixin, NonCallableMock)`
* `class CallableMixin(Base)`
* `class NonCallableMock(Base)`
* `class Base(object)`
* `class MagicMock(MagicMixin, Mock)`
* `class MagicMixin(object)`

The Mock Class:

* Mocks are callable and create attributes.
* `MagicMock` is a subclass of `Mock` with implementations of most of the magic methods.
* Python magic methods are special methods that you can define to add magic to your classes. Always enclosed in double underscore. For example: `__init__`. More details <a href="https://rszalski.github.io/magicmethods/" target="_blank">here</a>.
* The `patch()` decorator is used to replace classes in a module with a `Mock` object. It will create a `MagicMock`.
* `return_value` is a `Mock` argument. It's the value returned when the mock is called.

I guess this is why we are using `patch` here:

    from unittest.mock import patch

Since `patch()` creates a `MagicMock` and this one is a subclass of `Mock`. Get all the `Mock` details from the official docs <a href="https://docs.python.org/3/library/unittest.mock.html" target="_blank">here</a>.

Add the test to `test_user.py`:

* `mocked_get` is a `Mock` object.
* `mocked_get.return_value` is the return value when `mocked_get` is called.
* `mocked_get.assert_called_with` is `Mock` method.

Test a good response:

    def test_get_user(self):
        with patch('user.requests.get') as mocked_get:
            mocked_get.return_value.ok = True
            mocked_get.return_value.headers = "Success"

            response = self.user1.get_user()
            mocked_get.assert_called_with('https://twitter.com/{}'\
                                           .format(self.user1.name))
            self.assertEqual(response, "Success")

Test a bad response:

    def test_get_user(self):
        with patch('user.requests.get') as mocked_get:
            mocked_get.return_value.ok = True
            mocked_get.return_value.headers = "Success"

            response = self.user1.get_user()
            mocked_get.assert_called_with('https://twitter.com/{}'\
                                           .format(self.user1.name))
            self.assertEqual(response, "Success")

            mocked_get.return_value.ok = False

            response = self.user1.get_user()
            mocked_get.assert_called_with('https://twitter.com/{}'\
                                           .format(self.user1.name))
            self.assertEqual(response, "Bad response")


Review all the code for `test_user.py`:

    import unittest
    from unittest.mock import patch
    from user import User

    class TestUser(unittest.TestCase):

        def setUp(self):
            self.user1 = User('homer', 100, 200)

        def tearDown(self):
            pass

        def test_get_user(self):
            with patch('user.requests.get') as mocked_get:
                mocked_get.return_value.ok = True
                mocked_get.return_value.headers = "Success"

                response = self.user1.get_user()
                mocked_get.assert_called_with('https://twitter.com/{}'\
                                               .format(self.user1.name))
                self.assertEqual(response, "Success")

                mocked_get.return_value.ok = False

                response = self.user1.get_user()
                mocked_get.assert_called_with('https://twitter.com/{}'\
                                               .format(self.user1.name))
                self.assertEqual(response, "Bad response")

        def test_screen_name(self):

            self.assertIsInstance(self.user1.name, str)
            self.assertIsInstance(self.user1.following, int)
            self.assertIsInstance(self.user1.followers, int)
            self.assertEqual(self.user1.screen_name(), '@homer')

        def test_auto_follow(self):

            self.assertEqual(self.user1.auto_follow(), self.user1.followers\
                             * self.user1.follow_rate)

        def test_unfollow(self):

            self.assertEqual(self.user1.unfollow(), (self.user1.followers\
                             - self.user1.following) * self.user1.follow_rate) 

    if __name__ == '__main__':
        unittest.main()

I don't fully understand `Mock` but here are more resources:

* Get all the `Mock` details from the official docs <a href="https://docs.python.org/3/library/unittest.mock.html" target="_blank">here</a>.