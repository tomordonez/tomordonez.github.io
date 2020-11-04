---
layout: post
title: "Install Miniconda on Linux"
description: "This is a step by step tutorial to install Miniconda on Linux, including output of commands, a Miniconda cheat sheet, and resources for Miniconda on Windows"
redirect_from:
  - /install-miniconda-linux.html
categories: [Code]
image: assets/images/install-miniconda-linux.jpg
tags: [python, miniconda]
---

I loved `virtualenv` and then I found `Miniconda`. With Miniconda you can create a Python environment with a specific Python version and/or specific library versions.

Miniconda is a light version of Anaconda, a Python distribution from continuum. You can install Miniconda with an installer or use the command line.

![Install Miniconda on Linux]({{ site.baseurl }}/assets/images/install-miniconda-linux.jpg)

## Install Miniconda on Linux

Long story short:

* Create the conda directory in your home folder: `mkdir ~/.conda`
* Use the script to install Miniconda.
* Reopen the terminal and check conda was installed `conda --version`

See complete details below.

## Conda Cheat Sheet

* Conda version: `conda --version`
* List of conda environments: `conda info --envs` or `conda env list`
* Activate a conda: `conda activate name_of_env`
* Switch to default env: `conda activate`
* Create env with a yml file: `conda env create --file environment.yml`

## Installing Miniconda Step by Step

I tested this installing Miniconda on Ubuntu and Fedora.

If you already tried installing Miniconda and found issues, see troubleshooting at the end.

To avoid issues before installing Miniconda. Create the `.conda` directory in your home folder:

    $ mkdir ~/.conda

Then use the script to install Miniconda. Find your install file from [Conda docs](
https://docs.conda.io/en/latest/miniconda.html)

**Minconda for Linux**

    $ wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
    $ bash Miniconda3-latest-Linux-x86_64.sh

<details>
    <summary>Click to see Output</summary>
    <pre>
        
    Welcome to Miniconda3 4.7.10
    In order to continue the installation process, please review the license agreement.
    Please, press ENTER to continue

    ===================================
    Miniconda End User License Agreement

    ...
    Cryptography Notice

    This distribution includes cryptographic software. The country in which you currently reside may have restrictions on the import, possession, use, and/or re-export to anothe
    r country, of encryption software. BEFORE using any encryption software, please check your country's laws, regulations and policies concerning the import, possession, or use
    , and re-export of encryption software, to see if this is permitted. See the Wassenaar Arrangement http://www.wassenaar.org/ for more information.
    Anaconda, Inc. has self-classified this software as Export Commodity Control Number (ECCN) 5D992b, which includes mass market information security software using or performi
    ng cryptographic functions with asymmetric algorithms. No license is required for export of this software to non-embargoed countries. In addition, the Intel(TM) Math Kernel
    Library contained in Anaconda, Inc.'s software is classified by Intel(TM) as ECCN 5D992b with no license required for export to non-embargoed countries.
    The following packages are included in this distribution that relate to cryptography:

    `openssl`
        The OpenSSL Project is a collaborative effort to develop a robust, commercial-grade, full-featured, and Open Source toolkit implementing the Transport Layer Security (TL
    S) and Secure Sockets Layer (SSL) protocols as well as a full-strength general purpose cryptography library.

    `pycrypto`
        A collection of both secure hash functions (such as SHA256 and RIPEMD160), and various encryption algorithms (AES, DES, RSA, ElGamal, etc.).

    `pyopenssl`
        A thin Python wrapper around (a subset of) the OpenSSL library.

    `kerberos` (krb5, non-Windows platforms)
        A network authentication protocol designed to provide strong authentication for client/server applications by using secret-key cryptography.

    `cryptography`
        A Python library which exposes cryptographic recipes and primitives.

    </pre>

</details>

Accept the license terms.

    Do you accept the license terms?
    
    [no] >>> yes

Review the default installation location.

    Miniconda3 will now be installed into a default location.
    Press `Enter` or change to your custom location:

	/home/tom/miniconda3
	  - Press ENTER to confirm the location
	  - Press CTRL-C to abort the installation
	  - Or specify a different location below

Press `ENTER` if you want the default location.

    [/home/tom/miniconda3] >>>

<details>
    <summary>Click to see Output</summary>
    <pre>
        
    PREFIX=/home/tom/miniconda3
    Unpacking payload ...
    Collecting package metadata (current_repodata.json): done
    Solving environment: done

    environment location: /home/tom/miniconda3

    added / updated specs:

    - _libgcc_mutex==0.1=main
    - asn1crypto==0.24.0=py37_0
    - bzip2==1.0.8=h7b6447c_0
    - ca-certificates==2019.5.15=0
    - certifi==2019.6.16=py37_0
    - cffi==1.12.3=py37h2e261b9_0
    - chardet==3.0.4=py37_1
    - conda-package-handling==1.3.11=py37_0
    - conda==4.7.10=py37_0
    - cryptography==2.7=py37h1ba5d50_0
    - idna==2.8=py37_0
    - idna==2.8=py37_0
    - libarchive==3.3.3=h5d8350f_5
    - libedit==3.1.20181209=hc058e9b_0
    - libffi==3.2.1=hd88cf55_4
    - libgcc-ng==9.1.0=hdf63c60_0
    - libstdcxx-ng==9.1.0=hdf63c60_0
    - libxml2==2.9.9=hea5a465_1
    - lz4-c==1.8.1.2=h14c3975_0
    - lzo==2.10=h49e0be7_2
    - ncurses==6.1=he6710b0_1
    - openssl==1.1.1c=h7b6447c_1
    - pip==19.1.1=py37_0
    - pycosat==0.6.3=py37h14c3975_0
    - pycparser==2.19=py37_0
    - pyopenssl==19.0.0=py37_0
    - pysocks==1.7.0=py37_0
    - python-libarchive-c==2.8=py37_11
    - python==3.7.3=h0371630_0
    - readline==7.0=h7b6447c_5
    - requests==2.22.0=py37_0
    - ruamel_yaml==0.15.46=py37h14c3975_0
    - setuptools==41.0.1=py37_0
    - six==1.12.0=py37_0
    - sqlite==3.29.0=h7b6447c_0
    - tk==8.6.8=hbc83047_0
    - tqdm==4.32.1=py_0
    - urllib3==1.24.2=py37_0
    - wheel==0.33.4=py37_0
    - xz==5.2.4=h14c3975_4
    - yaml==0.1.7=had09818_2
    - zlib==1.2.11=h7b6447c_3
    - zstd==1.3.7=h0b5b093_0

    The following NEW packages will be INSTALLED:

    _libgcc_mutex      pkgs/main/linux-64::_libgcc_mutex-0.1-main
    asn1crypto         pkgs/main/linux-64::asn1crypto-0.24.0-py37_0
    bzip2              pkgs/main/linux-64::bzip2-1.0.8-h7b6447c_0
    ca-certificates    pkgs/main/linux-64::ca-certificates-2019.5.15-0
    certifi            pkgs/main/linux-64::certifi-2019.6.16-py37_0
    cffi               pkgs/main/linux-64::cffi-1.12.3-py37h2e261b9_0
    chardet            pkgs/main/linux-64::chardet-3.0.4-py37_1
    conda              pkgs/main/linux-64::conda-4.7.10-py37_0
    conda-package-han~ pkgs/main/linux-64::conda-package-handling-1.3.11-py37_0
    cryptography       pkgs/main/linux-64::cryptography-2.7-py37h1ba5d50_0
    idna               pkgs/main/linux-64::idna-2.8-py37_0
    libarchive         pkgs/main/linux-64::libarchive-3.3.3-h5d8350f_5
    libedit            pkgs/main/linux-64::libedit-3.1.20181209-hc058e9b_0
    libffi             pkgs/main/linux-64::libffi-3.2.1-hd88cf55_4
    libgcc-ng          pkgs/main/linux-64::libgcc-ng-9.1.0-hdf63c60_0
    libstdcxx-ng       pkgs/main/linux-64::libstdcxx-ng-9.1.0-hdf63c60_0
    libxml2            pkgs/main/linux-64::libxml2-2.9.9-hea5a465_1
    lz4-c              pkgs/main/linux-64::lz4-c-1.8.1.2-h14c3975_0
    lzo                pkgs/main/linux-64::lzo-2.10-h49e0be7_2
    ncurses            pkgs/main/linux-64::ncurses-6.1-he6710b0_1
    openssl            pkgs/main/linux-64::openssl-1.1.1c-h7b6447c_1
    pip                pkgs/main/linux-64::pip-19.1.1-py37_0
    pycosat            pkgs/main/linux-64::pycosat-0.6.3-py37h14c3975_0
    pycparser          pkgs/main/linux-64::pycparser-2.19-py37_0
    pyopenssl          pkgs/main/linux-64::pyopenssl-19.0.0-py37_0
    pysocks            pkgs/main/linux-64::pysocks-1.7.0-py37_0
    python             pkgs/main/linux-64::python-3.7.3-h0371630_0
    python-libarchive~ pkgs/main/linux-64::python-libarchive-c-2.8-py37_11
    readline           pkgs/main/linux-64::readline-7.0-h7b6447c_5
    requests           pkgs/main/linux-64::requests-2.22.0-py37_0
    ruamel_yaml        pkgs/main/linux-64::ruamel_yaml-0.15.46-py37h14c3975_0
    setuptools         pkgs/main/linux-64::setuptools-41.0.1-py37_0
    six                pkgs/main/linux-64::six-1.12.0-py37_0
    sqlite             pkgs/main/linux-64::sqlite-3.29.0-h7b6447c_0
    tk                 pkgs/main/linux-64::tk-8.6.8-hbc83047_0
    tqdm               pkgs/main/noarch::tqdm-4.32.1-py_0
    urllib3            pkgs/main/linux-64::urllib3-1.24.2-py37_0
    wheel              pkgs/main/linux-64::wheel-0.33.4-py37_0
    xz                 pkgs/main/linux-64::xz-5.2.4-h14c3975_4
    yaml               pkgs/main/linux-64::yaml-0.1.7-had09818_2
    zlib               pkgs/main/linux-64::zlib-1.2.11-h7b6447c_3
    zstd               pkgs/main/linux-64::zstd-1.3.7-h0b5b093_0

    Preparing transaction: done

    Executing transaction: done

    installation finished.

    </pre>

</details>

Answer the question "initialize Miniconda3 by running conda init?"

    Do you wish the installer to initialize Miniconda3 by running conda init?

    [no] >>> yes

<details>
    <summary>Click to see Output</summary>
    <pre>
        
    no change     /home/tom/miniconda3/condabin/conda
    no change     /home/tom/miniconda3/bin/conda
    no change     /home/tom/miniconda3/bin/conda-env
    no change     /home/tom/miniconda3/bin/activate
    no change     /home/tom/miniconda3/bin/deactivate
    no change     /home/tom/miniconda3/etc/profile.d/conda.sh
    no change     /home/tom/miniconda3/etc/fish/conf.d/conda.fish
    no change     /home/tom/miniconda3/shell/condabin/Conda.psm1
    no change     /home/tom/miniconda3/shell/condabin/conda-hook.ps1
    no change     /home/tom/miniconda3/lib/python3.7/site-packages/xontrib/conda.xsh
    no change     /home/tom/miniconda3/etc/profile.d/conda.csh
    modified      /home/tom/.bashrc

    </pre>

</details>

Final Output:

	==> For changes to take effect, close and re-open your current shell. <==

    If you'd prefer that conda's base environment not be activated on startup, set the `auto_activate_base` parameter to false:
    
    conda config --set auto_activate_base false

    Thank you for installing Miniconda3!

## Reopen Terminal

Then try:

    $ conda --version
    conda 4.7.10

After reopening the Terminal, the prompt changes to this:

    (base) $

This shows that your current conda environment is `base`. If you don't wish to see this in your Terminal. For instance, if you write in other languages. You can disable this:

    conda config --set auto_activate_base false

## Update conda

Use this:

    $ conda update conda

Output:

    Collecting package metadata (current_repodata.json): done
    Solving environment: done

    environment location: /home/tom/miniconda3
    added / updated specs:
    - conda


The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    ca-certificates-2019.5.15  |                1         134 KB
    certifi-2019.6.16          |           py37_1         156 KB
    chardet-3.0.4              |        py37_1003         173 KB
    conda-4.7.11               |           py37_0         3.0 MB
    pip-19.2.2                 |           py37_0         1.9 MB
    python-libarchive-c-2.8    |          py37_13          23 KB
    ------------------------------------------------------------
                                           Total:         5.4 MB

The following packages will be UPDATED:

    ca-certificates    2019.5.15-0 --> 2019.5.15-1
    certifi            2019.6.16-py37_0 --> 2019.6.16-py37_1
    chardet            3.0.4-py37_1 --> 3.0.4-py37_1003
    conda              4.7.10-py37_0 --> 4.7.11-py37_0
    pip                19.1.1-py37_0 --> 19.2.2-py37_0
    python-libarchive~ 2.8-py37_11 --> 2.8-py37_13

## Create a conda environment

As seen on the official Conda docs.

You could try this:

    $ conda create --name snowflakes pandas

It will show an output with these headers:

* The following packages will be downloaded
* The following NEW packages will be INSTALLED

Activate the conda environment:

    $ conda activate snowflakes

Go back to `base`:

    $ conda activate

## Create a conda environment with a yml file

This is a `yml` file for a class I was taking:

    name: ml4t
    dependencies:
    - python=3.6
    - cycler=0.10.0
    - kiwisolver=1.1.0
    - matplotlib=3.0.3
    - numpy=1.16.3
    - pandas=0.24.2
    - pyparsing=2.4.0
    - python-dateutil=2.8.0
    - pytz=2019.1
    - scipy=1.2.1
    - seaborn=0.9.0
    - six=1.12.0
    - joblib=0.13.2
    - pytest=5.0
    - future=0.17.1
    - pip
    - pip:
      - pprofile==2.0.2
      - jsons==0.8.8

Save the file as `environment.yml`.

Run like this:

    $ conda env create --file environment.yml

Then activate:

    $ conda activate ml4t

Check where python is located and the version to confirm that this is set correctly:

    $ which python
    $ python --version

To deactivate and go back to `base`:

    $ conda activate

## conda env list

Or use `conda info --envs` to list your conda environments.

## conda help

Run this:

    $ conda help

Output:

    usage: conda [-h] [-V] command ...

    conda is a tool for managing and deploying applications, environments and packages.

<details>
    <summary>Click to see Output</summary>
    <pre>
        
    Options:

    positional arguments:
      command
        clean        Remove unused packages and caches.
        config       Modify configuration values in .condarc. This is modeled
                     after the git config command. Writes to the user .condarc
                     file (/home/tom/.condarc) by default.
        create       Create a new conda environment from a list of specified
                     packages.
        help         Displays a list of available conda commands and their help
                     strings.
        info         Display information about current conda install.
        init         Initialize conda for shell interaction. [Experimental]
        install      Installs a list of packages into a specified conda
                     environment.
        list         List linked packages in a conda environment.
        package      Low-level conda package utility. (EXPERIMENTAL)
        remove       Remove a list of packages from a specified conda environment.
        uninstall    Alias for conda remove.
        run          Run an executable in a conda environment. [Experimental]
        search       Search for packages and display associated information. The
                     input is a MatchSpec, a query language for conda packages.
                     See examples below.
        update       Updates conda packages to the latest compatible version.
        upgrade      Alias for conda update.

    optional arguments:
      -h, --help     Show this help message and exit.
      -V, --version  Show the conda version number and exit.

    conda commands available from other packages:
      env

    </pre>

</details>

## Troubleshooting installation

Executing transaction:

    WARNING conda.core.envs_manager:register_env(46): Unable to register environment.
      Path not writable or missing.
    
    environment location: /home/tom/miniconda3
    registry file: /home/tom/.conda/environments.txt

As seen [here](https://github.com/ContinuumIO/anaconda-issues/issues/11148)

If you see this error try this:

* Remove your miniconda folder such as: `rm -rf miniconda3`
* Remove what the install added to your `bashrc`
* Create the `.conda` directory.
* Reinstall

## Miniconda on Windows

Here are some resources to install Miniconda on Windows:

* [Conda Docs installing Miniconda on Windows](https://docs.conda.io/projects/conda/en/latest/user-guide/install/windows.html)
* [Setup Python on Windows with Miniconda](https://katiekodes.com/setup-python-windows-miniconda/)

[![Ask me anything on Linkedin]({{ site.baseurl }}/assets/images/ama-linkedin-tomordonez.png)](https://www.linkedin.com/in/tomordonez/)