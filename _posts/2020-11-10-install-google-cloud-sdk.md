---
layout: post
title: "Install Google Cloud SDK"
description: "Step by step installing Google Cloud SDK"
author: tom
image: assets/images/1.jpg
tags: [Google Cloud, GCP]
---

Step by step installing Google Cloud SDK in Linux:

	$ curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-315.0.0-linux-x86_64.tar.gz

Tar:

	$ tar -xvf google-cloud-sdk-315.0.0-linux-x86_64.tar.gz

Install the script:

	$ ./google-cloud-sdk/install.sh


<details>
	<summary>Click to see output</summary>
	<pre>

	Welcome to the Google Cloud SDK!
	To help improve the quality of this product, we collect anonymized usage data and anonymized stacktraces when crashes are encountered; additional information is available at <https://cloud.google.com/sdk/usage-statistics>. This data is 
	handled in accordance with our privacy policy
	<https://policies.google.com/privacy>. You may choose to opt in this collection now (by choosing 'Y' at the below prompt), or at any time in the future by running the following command: 
	gcloud config set disable_usage_reporting false
	Do you want to help improve the Google Cloud SDK (y/N)? n

	Your current Cloud SDK version is: 315.0.0
	The latest available version is: 315.0.0

	├───────────────┬──────────────────────────────────────────────────────┬──────────────────────────┬──────────┤
	│     Status    │                         Name                         │            ID            │   Size   │
	├───────────────┼──────────────────────────────────────────────────────┼──────────────────────────┼──────────┤
	│ Not Installed │ App Engine Go Extensions                             │ app-engine-go            │  4.9 MiB │
	│ Not Installed │ Appctl                                               │ appctl                   │ 21.0 MiB │
	│ Not Installed │ Cloud Bigtable Command Line Tool                     │ cbt                      │  7.7 MiB │
	│ Not Installed │ Cloud Bigtable Emulator                              │ bigtable                 │  6.6 MiB │
	│ Not Installed │ Cloud Datalab Command Line Tool                      │ datalab                  │  < 1 MiB │
	│ Not Installed │ Cloud Datastore Emulator                             │ cloud-datastore-emulator │ 18.4 MiB │
	│ Not Installed │ Cloud Firestore Emulator                             │ cloud-firestore-emulator │ 42.1 MiB │
	│ Not Installed │ Cloud Pub/Sub Emulator                               │ pubsub-emulator          │ 56.3 MiB │
	│ Not Installed │ Cloud SQL Proxy                                      │ cloud_sql_proxy          │  7.5 MiB │
	│ Not Installed │ Cloud Spanner Emulator                               │ cloud-spanner-emulator   │ 21.5 MiB │
	│ Not Installed │ Emulator Reverse Proxy                               │ emulator-reverse-proxy   │ 14.5 MiB │
	│ Not Installed │ Google Cloud Build Local Builder                     │ cloud-build-local        │  6.3 MiB │
	│ Not Installed │ Google Container Registry's Docker credential helper │ docker-credential-gcr    │  1.8 MiB │
	│ Not Installed │ Kind                                                 │ kind                     │  4.5 MiB │
	│ Not Installed │ Kustomize                                            │ kustomize                │ 25.9 MiB │
	│ Not Installed │ Minikube                                             │ minikube                 │ 24.1 MiB │
	│ Not Installed │ Nomos CLI                                            │ nomos                    │ 17.8 MiB │
	│ Not Installed │ Skaffold                                             │ skaffold                 │ 14.5 MiB │
	│ Not Installed │ anthos-auth                                          │ anthos-auth              │ 16.3 MiB │
	│ Not Installed │ gcloud Alpha Commands                                │ alpha                    │  < 1 MiB │
	│ Not Installed │ gcloud Beta Commands                                 │ beta                     │  < 1 MiB │
	│ Not Installed │ gcloud app Java Extensions                           │ app-engine-java          │ 59.5 MiB │
	│ Not Installed │ gcloud app Python Extensions                         │ app-engine-python        │  6.1 MiB │
	│ Not Installed │ gcloud app Python Extensions (Extra Libraries)       │ app-engine-python-extras │ 27.1 MiB │
	│ Not Installed │ kpt                                                  │ kpt                      │ 11.1 MiB │
	│ Not Installed │ kubectl                                              │ kubectl                  │  < 1 MiB │
	│ Not Installed │ pkg                                                  │ pkg                      │          │
	│ Installed     │ BigQuery Command Line Tool                           │ bq                       │  < 1 MiB │
	│ Installed     │ Cloud SDK Core Libraries                             │ core                     │ 15.4 MiB │
	│ Installed     │ Cloud Storage Command Line Tool                      │ gsutil                   │  3.5 MiB │
	</pre>

</details>


To install or remove components at your current SDK version [315.0.0], run:

	$ gcloud components install COMPONENT_ID
	$ gcloud components remove COMPONENT_ID

To update your SDK installation to the latest version [315.0.0], run:

	$ gcloud components update

Modify profile to update your $PATH and enable shell command completion?

	Do you want to continue (Y/n)?  y

The Google Cloud SDK installer will now prompt you to update an rc file to bring the Google Cloud CLIs into your environment. Enter a path to an rc file to update, or leave blank to use:

	[/home/tom/.bashrc]:

Backing up [/home/tom/.bashrc] to [/home/tom/.bashrc.backup].

	[/home/tom/.bashrc] has been updated.

==> Start a new shell for the changes to take effect.

For more information on how to get started, please visit: https://cloud.google.com/sdk/docs/quickstarts

Initialize

	$ ./google-cloud-sdk/bin/gcloud init

Welcome! This command will take you through the configuration of gcloud.

Your current configuration has been set to: `[default]`

You can skip diagnostics next time by using the following flag:

	gcloud init --skip-diagnostics

	Network diagnostic detects and fixes local network connection issues.
	Checking network connection...done.
	Reachability Check passed.
	Network diagnostic passed (1/1 checks passed).

You must log in to continue. Would you like to log in (Y/n)?

Your browser has been opened to visit:

	https://accounts.google.com/o/oauth2/auth...

Login or choose an account. Then this page shows: https://cloud.google.com/sdk/auth_success

Back on the terminal...

You are logged in as: [your username shows here]

	Pick cloud project to use: 
	 [1] some-awesome-project
	 [2] Create a new project

Please enter numeric choice or text value (must exactly match list item):

	1

Your current project has been set to:

	[some-awesome-project].

<details>
	<summary>More output</summary>
	<pre>

	Not setting default zone/region (this feature makes it easier to use
	[gcloud compute] by setting an appropriate default value for the
	--zone and --region flag).
	See https://cloud.google.com/compute/docs/gcloud-compute section on how to set
	default compute region and zone manually. If you would like [gcloud init] to be
	able to do this for you the next time you run it, make sure the
	Compute Engine API is enabled for your project on the
	https://console.developers.google.com/apis page.

	Created a default .boto configuration file at [/home/tom/.boto]. See this file and
	[https://cloud.google.com/storage/docs/gsutil/commands/config] for more
	information about configuring Google Cloud Storage.
	Your Google Cloud SDK is configured and ready to use!

	* Commands that require authentication will use `your-user-name` by default
	* Commands will reference project `some-awesome-project` by default
	Run `gcloud help config` to learn how to change individual settings

	This gcloud configuration is called [default]. You can create additional configurations if you work with multiple accounts and/or projects.
	Run `gcloud topic configurations` to learn more.
	</pre>

</details>

Some things to try next:

* Run `gcloud --help` to see the Cloud Platform services you can interact with. And run `gcloud help COMMAND` to get help on any gcloud command.
* Run `gcloud topic --help` to learn about advanced features of the SDK like arg files and output formatting.

[![Ask me anything on Linkedin]({{ site.baseurl }}/assets/images/ama-linkedin-tomordonez.png)](https://www.linkedin.com/in/tomordonez/)