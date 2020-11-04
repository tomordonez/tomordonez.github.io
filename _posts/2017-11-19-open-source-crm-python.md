---
layout: post
title: "Open Source CRM Python Tutorial"
description: "Install an open source CRM with Python and PostgreSQL"
redirect_from:
  - /open-source-python-crm-tutorial.html
categories: [Code]
image: assets/images/12.jpg
tags: [open source, python, crm]
---

In this tutorial I will show you how to install an **open source CRM** that uses Python.

![Open Source CRM in Python]({{ site.baseurl }}/assets/images/open-source-crm-python.gif)

## Install PostgreSQL on Fedora

	$ sudo dnf install -y postgresql-server

    Installing:
      postgresql-server (9.6.5-1.fc26)
    Installing dependencies:
      postgresql

## Install PostgreSQL on Ubuntu

Similar process but in Ubuntu.

    $ sudo apt-get -y install postgresql

See docs for PostgreSQL on Ubuntu [here](https://www.postgresql.org/download/linux/ubuntu/) and PostgreSQL on Windows [here](https://www.postgresql.org/download/windows/).

## Initialize PostgreSQL

	$ sudo postgresql-setup initdb

    WARNING: using obsoleted argument syntax, try --help
    WARNING: arguments transformed to: postgresql-setup --initdb --unit postgresql
    * Initializing database in '/var/lib/pgsql/data'
    * Initialized, logs are in /var/lib/pgsql/initdb_postgresql.log

## Open source CRM preview

![Open Source CRM in Python]({{ site.baseurl }}/assets/images/open-source-crm-python-linux.gif)

## Start PostgreSQL

	$ sudo systemctl enable postgresql

    Created symlink /etc/systemd/system/multi-user.target.wants/postgresql.service → /usr/lib/systemd/system/postgresql.service.

	$ sudo systemctl start postgresql

    No output

## Install yum-utils

	$ sudo dnf install yum-utils

    Last metadata expiration check: 0:55:00 ago on Sun 19 Nov 2017 05:55:48 PM EST.
    Package yum-utils-1.1.31-512.fc26.noarch is already installed, skipping.
    Dependencies resolved.
    Nothing to do.
    Complete!

## Add the repository of the open source CRM

	$ sudo dnf config-manager --add-repo=https://nightly.odoo.com/11.0/nightly/rpm/odoo.repo

    Adding repo from: https://nightly.odoo.com/11.0/nightly/rpm/odoo.repo

## Look at this preview

![Open Source CRM in Python]({{ site.baseurl }}/assets/images/open-source-crm-python-tutorial.gif)

## Install Python CRM

	$ sudo dnf install -y odoo

<details>
    <summary>Click to see Output</summary>
    <pre>
        
    Installing:
     odoo   11.0.post20171119-1odoo-nightly 96 M
    Installing dependencies:
     babel   2.3.4-5.fc26
     graphviz   2.40.1-4.fc26
     gts   0.7.6-30.20121130.fc26
     lasi   1.1.2-7.fc26
     libxslt-python   1.1.29-1.fc26
     netpbm   10.80.00-2.fc26
     nodejs-less   2.7.2-2.fc26
     pychartnoarch          1.39-22.fc26
     pyparsing   2.1.10-3.fc26
     python-libxml2   2.9.4-2.fc26
     python2-pyparsing   2.1.10-3.fc26
     python3-PyPDF2   1.25.1-15.fc26
     python3-PyYAML   3.12-3.fc26
     python3-babel   2.3.4-5.fc26
     python3-dateutil   1:2.6.0-3.fc26
     python3-docutils   0.13.1-4.fc26
     python3-feedparser   5.2.1-1.fc26
     python3-funcsigs   1.0.2-5.fc26
     python3-gevent   1.1.2-3.fc26
     python3-greenlet   0.4.11-2.fc26
     python3-html2text   2016.9.19-2.fc26
     python3-jinja2   2.9.6-1.fc26
     python3-mock   2.0.0-4.fc26
     python3-num2words   0.5.4-2.fc26
     python3-ofxparse   0.16-2.fc26
     python3-passlib   1.7.0-4.fc26
    python3-pbr   1.10.0-4.fc26
     python3-psutil   5.0.1-2.fc26
     python3-psycopg2   2.6.2-4.fc26
     python3-pyasn1-modules   0.2.3-1.fc26
     python3-pydot   1.0.28-15.fc26
     python3-pyldap   2.4.35.1-2.fc26
     python3-pyserial   3.1.1-3.fc26
     python3-pyusb   1.0.0-4.fc26
     python3-qrcode   5.1-6.fc26
     python3-qrcode-core   5.1-6.fc26
     python3-reportlab   3.3.0-4.fc26
     python3-stdnum   1.3-4.fc26
     python3-suds   0.7-0.4.94664ddd46a6.fc26
     python3-vatnumber   1.2-5.fc26
     python3-vobject   0.9.4.1-2.fc26
     python3-werkzeug   0.11.10-5.fc26
     python3-xlrd   1.0.0-6.fc26
     python3-xlwt   1.1.2-2.fc26
     xorg-x11-fonts-ISO8859-1-100dpi 7.5-17.fc26
    
    Install  46 Packages
    
    Total download size: 113 M
    Installed size: 477 M

    Running transaction
    
    Preparing:
    Installing: python3-suds-0.7-0.4.94664ddd46a6.fc26.noarch
    Installing: python3-greenlet-0.4.11-2.fc26.x86_64
    Installing: python3-dateutil-1:2.6.0-3.fc26.noarch
    Installing: python3-babel-2.3.4-5.fc26.noarch
    Installing: babel-2.3.4-5.fc26.noarch
    Installing: python3-vobject-0.9.4.1-2.fc26.noarch
    Installing: python3-gevent-1.1.2-3.fc26.x86_64
    Installing: python3-vatnumber-1.2-5.fc26.noarch
    Installing: netpbm-10.80.00-2.fc26.x86_64
    Running scriptlet: netpbm-10.80.00-2.fc26.x86_64
    Installing: gts-0.7.6-30.20121130.fc26.x86_64
    Running scriptlet: gts-0.7.6-30.20121130.fc26.x86_64
    Installing: python3-xlrd-1.0.0-6.fc26.noarch
    Installing: xorg-x11-fonts-ISO8859-1-100dpi-7.5-17.fc26.noarch
    Running scriptlet: xorg-x11-fonts-ISO8859-1-100dpi-7.5-17.fc26.noarch
    Installing: lasi-1.1.2-7.fc26.x86_64
    Running scriptlet: lasi-1.1.2-7.fc26.x86_64
    Installing: graphviz-2.40.1-4.fc26.x86_64
    Running scriptlet: graphviz-2.40.1-4.fc26.x86_64
    Installing: python3-pydot-1.0.28-15.fc26.noarch
    Installing: python3-qrcode-core-5.1-6.fc26.noarch
    Installing: python3-qrcode-5.1-6.fc26.noarch
    Installing: python3-pyasn1-modules-0.2.3-1.fc26.noarch
    Installing: python3-pyldap-2.4.35.1-2.fc26.x86_64
    Installing: python3-pbr-1.10.0-4.fc26.noarch
    Installing: python3-funcsigs-1.0.2-5.fc26.noarch
    Installing: python3-mock-2.0.0-4.fc26.noarch
    Installing: python2-pyparsing-2.1.10-3.fc26.noarch
    Installing: python2-pyparsing-2.1.10-3.fc26.noarch
    Installing: pyparsing-2.1.10-3.fc26.noarch
    Installing: python-libxml2-2.9.4-2.fc26.x86_64
    Installing: libxslt-python-1.1.29-1.fc26.x86_64
    Installing: python3-xlwt-1.1.2-2.fc26.noarch
    Installing: python3-werkzeug-0.11.10-5.fc26.noarch
    Installing: python3-stdnum-1.3-4.fc26.noarch
    Installing: python3-reportlab-3.3.0-4.fc26.x86_64
    Installing: python3-pyusb-1.0.0-4.fc26.noarch
    Installing: python3-pyserial-3.1.1-3.fc26.noarch
    Installing: python3-psycopg2-2.6.2-4.fc26.x86_64
    Installing: python3-psutil-5.0.1-2.fc26.x86_64
    Installing: python3-passlib-1.7.0-4.fc26.noarch
    Installing: python3-ofxparse-0.16-2.fc26.noarch
    Installing: python3-num2words-0.5.4-2.fc26.noarch
    Installing: python3-jinja2-2.9.6-1.fc26.noarch
    Installing: python3-html2text-2016.9.19-2.fc26.noarch
    Installing: python3-feedparser-5.2.1-1.fc26.noarch
    Installing: python3-docutils-0.13.1-4.fc26.noarch
    Installing: python3-PyYAML-3.12-3.fc26.x86_64
    Installing: python3-PyPDF2-1.25.1-15.fc26.noarch
    Installing: pychart-1.39-22.fc26.noarch
    Installing: nodejs-less-2.7.2-2.fc26.noarch
    Installing: odoo-11.0.post20171119-1.noarch
    Running scriptlet: odoo-11.0.post20171119-1.noarch
    
    Installed:
    
    odoo.noarch 11.0.post20171119-1
    babel.noarch 2.3.4-5.fc26
    graphviz.x86_64 2.40.1-4.fc26
    gts.x86_64 0.7.6-30.20121130.fc26
    lasi.x86_64 1.1.2-7.fc26
    libxslt-python.x86_64 1.1.29-1.fc26
    netpbm.x86_64 10.80.00-2.fc26
    nodejs-less.noarch 2.7.2-2.fc26
    pychart.noarch 1.39-22.fc26
    pyparsing.noarch 2.1.10-3.fc26
    python-libxml2.x86_64 2.9.4-2.fc26
    python2-pyparsing.noarch 2.1.10-3.fc26
    python3-PyPDF2.noarch 1.25.1-15.fc26
    python3-PyYAML.x86_64 3.12-3.fc26
    python3-babel.noarch 2.3.4-5.fc26
    python3-dateutil.noarch 1:2.6.0-3.fc26
    python3-docutils.noarch 0.13.1-4.fc26
    python3-feedparser.noarch 5.2.1-1.fc26
    python3-funcsigs.noarch 1.0.2-5.fc26
    python3-gevent.x86_64 1.1.2-3.fc26
    python3-greenlet.x86_64 0.4.11-2.fc26
    python3-html2text.noarch 2016.9.19-2.fc26
    python3-jinja2.noarch 2.9.6-1.fc26
    python3-mock.noarch 2.0.0-4.fc26
    python3-num2words.noarch 0.5.4-2.fc26
    python3-ofxparse.noarch 0.16-2.fc26
    python3-passlib.noarch 1.7.0-4.fc26
    python3-pbr.noarch 1.10.0-4.fc26
    python3-psutil.x86_64 5.0.1-2.fc26
    python3-psycopg2.x86_64 2.6.2-4.fc26
    python3-pyasn1-modules.noarch 0.2.3-1.fc26
    python3-pydot.noarch 1.0.28-15.fc26
    python3-pyldap.x86_64 2.4.35.1-2.fc26
    python3-pyserial.noarch 3.1.1-3.fc26
    python3-pyusb.noarch 1.0.0-4.fc26
    python3-qrcode.noarch 5.1-6.fc26
    python3-qrcode-core.noarch 5.1-6.fc26
    python3-reportlab.x86_64 3.3.0-4.fc26
    python3-stdnum.noarch 1.3-4.fc26
    python3-suds.noarch 0.7-0.4.94664ddd46a6.fc26
    python3-vatnumber.noarch 1.2-5.fc26
    python3-vobject.noarch 0.9.4.1-2.fc26
    python3-werkzeug.noarch 0.11.10-5.fc26
    python3-xlrd.noarch 1.0.0-6.fc26
    python3-xlwt.noarch 1.1.2-2.fc26
    xorg-x11-fonts-ISO8859-1-100dpi.noarch 7.5-17.fc26

    </pre>

</details>

    
## Start the open source CRM

	$ sudo systemctl enable odoo

    Created symlink /etc/systemd/system/multi-user.target.wants/odoo.service → /usr/lib/systemd/system/odoo.service.

	$ sudo systemctl start odoo

## Running the CRM

Browse to:

    localhost:8069

The first screen you will see has this URL:

    localhost:8069/web/database/selector

It will show you this screen to setup the database:

![Open Source CRM in Python Setup Database]({{ site.baseurl }}/assets/images/open-source-crm-python-database.jpg)

You will have the option to `Load demonstration data`.

## Open source CRM demo data

If you choose the option to load demonstration data, it will send you to the `Apps` screen.

![Open Source CRM in Python Setup Apps]({{ site.baseurl }}/assets/images/crm-python-open-source-apps.jpg)

Go to `CRM` and click `install`. The next screen will be the `Inbox`.

![Open Source CRM in Python Inbox]({{ site.baseurl }}/assets/images/crm-python-open-source-inbox.jpg)

From here you can navigate the top menu:

* Discuss
* Calendar
* Contacts
* CRM
* Apps
* Settings

Once you review all demo data, you might be inclined to delete all demo data and start with your own data.

## Create a new database

You can create a new database.

Use this URL to select databases

    http://localhost:8069/web/database/selector

Use this URL to manage databases:

    http://localhost:8069/web/database/manager

![Open Source CRM in Python manage database]({{ site.baseurl }}/assets/images/crm-python-open-source-manage-db.jpg)

In my example. When I created the database with the demo data, I named it `crm`.

If you hit delete. You will get this screen:

![Open Source CRM in Python delete database]({{ site.baseurl }}/assets/images/crm-python-open-source-delete-db.jpg)

When you confirm deletion. You will go back to this screen:

![Open Source CRM in Python new database]({{ site.baseurl }}/assets/images/crm-python-open-source-new-db.jpg)

Once the database is created. It will go back to `Apps` where you can install the CRM module.

You will now have a clean install of the CRM.

![Open Source CRM in Python no data]({{ site.baseurl }}/assets/images/crm-python-open-source-no-data.jpg)

## Open source CRM documentation

Follow the official documentation for Odoo open source CRM [here](https://www.odoo.com)

## Other open source CRM

* [Django-CRM](https://github.com/MicroPyramid/Django-CRM)
* [React Redux CRM](https://github.com/harryho/react-crm)
* [FatFreeCRM Ruby](http://www.fatfreecrm.com/)
* [openCRX Java](https://www.opencrx.org/)
* [CiviCRM Spark](https://civicrm.org/spark)