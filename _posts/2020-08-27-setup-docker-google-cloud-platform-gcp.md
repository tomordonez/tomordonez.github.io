---
layout: post
title: "Setup Docker in Google Cloud Platform GCP"
author: tom
categories: [Google Cloud]
image: assets/images/1.jpg
tags: [docker, google cloud, GCP]
---

I am studying the Google Cloud Platform. I'd like to take the Associate Cloud Engineer certificate in a few months.

I heard about Docker for a while but never used it. Long story short. Goodbye Virtualbox.

## Create a VM instance

* Open a GCP account. Free trial has $300 credit to be used in 90 days
* Create a project `awesome-proj` (top left, next to GCP logo)
* Switch to this project (if your default project is something else)
* Add a VM instance (Search type `VM`. Click `Add a VM instance`)
* Instance Name: `awesome-vm`
* Right sidebar says "You have $300 free trial credits. $24.67 monthly estimate"
* Labels: (nothing)
* Region: leave default
* Machine configuration Series: `N1` (default)
* Machine configuration Machine type: Change to `n1-standard-2: 2vCPU, 7.5GB memory` if you wish to run big data tutorials (the recommended/default option was `n1-standard-1: 1vCPU, 3.75GB memory`)
* Sidebar price changed from $24.67 monthly estimate to $48.95
* Container (checkbox): (nothing)
* Boot disk: `Debian GNU/Linux 9` (default)
* Leave everything else default
* Click Create
* Check that the instance is created (green check mark)

## Connect to the instance

(using ssh on browser)

* Go to Google Cloud Platform logo. This shows the Project dashboard
* Go to Resources. Click on Compute Engine > 1 instance
* The VM instance is listed. Click on SSH
* A popup says `Connecting. Transferring SSH keys to the VM.`
* It opens SSH on browser
* Use the top right icons to customize the shell, upload/download files, customize copy/paste

**Update the instance**

	$ sudo apt-get update

## Install Docker

Docker install details [here](https://docs.docker.com/engine/install/debian/)

	$ sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
	$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
	$ sudo apt-key fingerprint 0EBFCD88
	$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
	$ sudo apt-get update
	$ sudo apt-get install docker-ce docker-ce-cli containerd.io

**Check the install**
(Need to use sudo to run docker commands)

	$ sudo service docker status
	$ sudo docker run hello-world
	$ sudo docker images

## Sunlab Docker

This is an example of a container setup for Big Data.

	$ sudo docker run -it --privileged=true --cap-add=SYS_ADMIN -m 6144m -h bootcamp.local --name bigbox -p 2222:22 -p 9530:9530 -p 8888:8888 -v /:/mnt/host sunlab/bigbox:latest /bin/bash


## Playing with Docker

The terminal prompt now is root:

	[root@bootcamp /]# whoami
	root

	[root@bootcamp /]# ls
	anaconda-post.log  bigdata-bootcamp  bin  data  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  scripts  srv  sys  tini  tmp  usr  var

Detach the instance (keyboard shortcut one after the other fast)

	ctrl + p, ctrl + q

Reattach the instance...

Why can't I find the shell? mmm right. It's SSH on the browser.

	$ sudo docker ps -a

Attach the instance:

	$ sudo docker attach bigbox

	[root@bootcamp /]# ls
	anaconda-post.log  bigdata-bootcamp  bin  data  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  scripts  srv  sys  tini  tmp  usr  var

**Start Services**

	[root@bootcamp /]# /scripts/start-services.sh

Some of the output:

	Starting zookeeper ... STARTED
	Started Hadoop proxyserver
	Started Hadoop namenode
	Started Hadoop datanode (hadoop-hdfs-datanode)
	Started Hadoop resourcemanager
	Started Hadoop historyserver
	Started Hadoop nodemanager
	Starting Spark worker (spark-worker)
	Starting Spark master (spark-master)
	Started HBase master daemon (hbase-master)
	Started HBase thrift daemon (hbase-thrift)

## Editing files

I read that you don't have to install an editor in the Docker container. Here are two options:
* Edit the file locally, copy to VM instance, copy from host to Docker container
* Edit the file in the VM instance with Vim, copy from host to Docker container.

Edit file locally

* Edit your file: awesome-file
* Detach the instance (if attached): `ctrl+p, ctrl+q`
* Copy to VM instance using SSH on browser, top right wheel icon, Upload file
* Copy file from host to container: `sudo docker cp awesome-file bigbox:/bigdata-bootcamp/sample/hadoop/`

Edit file in the VM instance
* Edit your file with Vim (if you dare to)
* Follow same process to copy from host to docker.