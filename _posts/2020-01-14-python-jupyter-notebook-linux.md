---
layout: post
title: "Python Jupyter Notebook in Linux"
redirect_from:
  - /python-jupyter-notebook-linux.html
categories: [Code]
image: assets/images/6.jpg
tags: [python, jupyter, linux]
---


Update conda

    $ conda update conda

Create a `yml` file, use a name and dependencies. Example:

File: `env_py_3.7.6.yml`

Contents of this file:

    name: awesome_name
    dependencies:
    - python=3.7.6
    - jupyter

Create the environment using this file:

    $ conda env create --file env_py_3.7.6.yml
    $ conda activate awesome_name

Check Python version

    $ which python
    $ python -V

Run Jupyter Notebook:

    $ jupyter notebook

If this doesn't work. Try it like this:

    $ jupyter notebook --ip=127.0.0.1


## Cell timer for Jupyter notebook

As seen [here](https://stackoverflow.com/questions/32565829/simple-way-to-measure-cell-execution-time-in-ipython-notebook/50384459#50384459)

    $ pip install jupyter_contrib_nbextensions
    $ jupyter contrib nbextension install --user
    $ jupyter nbextension enable execute_time/ExecuteTime