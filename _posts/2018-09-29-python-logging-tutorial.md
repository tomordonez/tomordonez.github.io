---
layout: post
title: "Python Logging Tutorial"
redirect_from:
  - /python-logging-tutorial.html
categories: [Code]
image: assets/images/5.jpg
tags: [python, logging, log file]
---

This is a short tutorial about logging in Python.

Follow the official documentation about [logging](https://docs.python.org/3/library/logging.html)

This tutorial by Fang-Pen Lin has been really helpful as well. More [here](https://fangpenlin.com/posts/2012/08/26/good-logging-practice-in-python/)

## Add logging to Python:

    from datetime import datetime
	import logging

	logger = logging.getLogger(__name__)
	logger.setLevel(logging.DEBUG)
	fh = logging.FileHandler('output.log')
	fh.setLevel(logging.DEBUG)
	formatter = logging.Formatter('%(asctime)s 
      - %(name)s - %(levelname)s - %(message)s')
	fh.setFormatter(formatter)
	logger.addHandler(fh)

Replace a `print` statement with a `logger.info`.

    if len(x) == 1 and len(y) == 1:
      logger.info('%s and %s are same length. 
        Return %s * %s',x,y,x,y)

Don't use `format` for string concatenation. The docs for `Python3` say "This is for backwards compatibility: the logging package pre-dates newer formatting options such as str.format()"

## Logging errors:

Follow this example:

    try:
        logger.info('Compute ac = product(%s, %s)',a,c)
        ac = product(a, c)
        logger.info('Product(a,c): %s, %s = %s',a,c,ac)

    except(SystemExit, KeyboardInterrupt):
        raise
    except Exception:
        logger.error('Cannot compute ac', exc_info=True)

## More info aka The Details

From the official docs. These are the logging objects:

* `Loggers`: create log records.
* `Handlers`: send the log records to an output.
* `Filters`: specify which log records to output.
* `Formatters`: specify layout of log records.

An `event` is a descriptive message that can contain variable data.

## Loggers: create log records

The class is `logging.Logger`.

Loggers are not instantiated directly. Don't use: `logger = logging.Logger()`. Instead use the module-level function:

    logger = logging.getLogger(__name__)

Returns a logger with specified name `__name__`.

### logger.setLevel()  

Use like this:

    logger.setLevel(logging.DEBUG)

This is the list of `logging` levels:

* `CRITICAL`: The program might stop running.
* `ERROR`: The program might not run some function.
* `WARNING`: The program might have problems in the future.
* `INFO`: Program is working as expected.
* `DEBUG`: Detailed information.
* `NOTSET`.

The default is set to `WARNING`. Only events of this level and above are tracked.

If you have this:

    logging.warning('homer')
    logging.info('bart')

It will ONLY print: `WARNING:root:homer`. Because the default is set to `WARNING` and events below this level such as `INFO` are ignored.

For this reason I am using this to track events at `DEBUG` level and above:

    logger.setLevel(logging.DEBUG)

### logger.debug()

Logs a message with level `debug`.

    debug(msg, *args, **kwargs)

Use the string formatting operator to concatenate `msg` and `args`.

It has 3 keword arguments:

* exc_info
* stack_info
* extra

If `exc_info=True` then exception information is added to the logger.

Other logging level methods:

* logger.info()
* logger.error()

### logger.addHandler()

Adds a specific handler to this logger:

    logger.addHandler(fh)

## Handlers: send the log records to an output

The class is `logging.Handler`. Not instantiated directly.

    fh.setLevel(logging.DEBUG)
    fh.setFormatter(formatter)

## Filters: specify which log records to output

TBA. I haven't used this before. Please comment with an example.

## Formatters: specify layout of log records

Such as:

    formatter = logging.Formatter('%(asctime)s 
      - %(name)s - %(levelname)s - %(message)s')

## When to use logging

As seen on the official docs basic tutorial <a href="https://docs.python.org/3/howto/logging.html#logging-basic-tutorial" target="_blank">here</a>.

Use `print()` to display console output for ordinary usage.

    print('Welcome to my awesome program')

Use `logging.info()` to report normal operation of the program.

Use `logging.warning()` to issue a warning about a runtime event.

Use `logging.error()` for error handling. Report supression of an error without raising an exception.

## Logging with many modules

Inside `main`:

	import logging
	import my_module

	logger = logging.getLogger()
	logger.setLevel(logging.DEBUG)
	fh = logging.FileHandler('output.log')
	fh.setLevel(logging.DEBUG)
	formatter = logging.Formatter('%(asctime)s 
      - %(name)s - %(levelname)s - %(message)s')
	fh.setFormatter(formatter)
	logger.addHandler(fh)

Then use: `logger.info()` or `logger.error()` or the level that applies to the situtation.

Inside `my_module`:

    import logging
    logger = logging.getLogger(__name__)

Used in the same way `logger.info`...etc.

## Logging and Classes

Similar way as shown above:

Inside `main`:

    import logging
    from my_module import Awesome

    def main()
        iam = Awesome()
        iam.nerd()

    if __name__ == "__main__":
        logger = logging.getLogger()
        logger.setLevel(logging.DEBUG)
        fh = logging.FileHandler('output.log')
        fh.setLevel(logging.DEBUG)
        formatter = logging.Formatter('%(asctime)s 
          - %(name)s - %(levelname)s - %(message)s')
        fh.setFormatter(formatter)
        logger.addHandler(fh)

        main()

Inside `my_module`:

    import logging

    class Awesome():
        def __init__(self):
            self.logger = logging.getLogger(__name__)

        def nerd(self):
            self.logger.info('I am awesome')

## Logging to STDOUT

If you wish to also log to STDOUT. Then create a new handler.

Modifying the `main` file above. It should look like this:

    import sys

    if __name__ == "__main__":
        logger = logging.getLogger()
        logger.setLevel(logging.DEBUG)
        formatter = logging.Formatter('%(asctime)s 
          - %(name)s - %(levelname)s - %(message)s')

        fh = logging.FileHandler('output.log')
        fh.setLevel(logging.DEBUG)
        fh.setFormatter(formatter)
        logger.addHandler(fh)

        sh = logging.StreamHandler(sys.stdout)
        sh.setLevel(logging.ERROR)
        sh.setFormatter(formatter)
        logger.addHandler(sh)

You can add a handler called `StreamHandler` and send this to `sys.stdout`. And set the level to `ERROR`. You also have to `import sys`.

## Closing handlers

At the end of your program. You can close the handlers like this:

    for handler in logger.handlers:
        handler.close()
        logger.removeHandler(handler)

`logger.handlers` contains a list of handler objects.
    
## Config files

This <a href="https://stackoverflow.com/questions/23386290/logging-in-multiple-classes-with-module-name-in-log" target="_blank">answer</a> on StackOverflow says that it's recommended to use config files for logging.