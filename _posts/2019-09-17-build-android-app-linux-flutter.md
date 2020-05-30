---
layout: post
title: "Build an Android App in Linux with Flutter"
redirect_from:
  - /build-android-app-linux-flutter.html
categories: [Mobile]
image: assets/images/3.jpg
tags: [mobile, app, android, linux, flutter]
---

I have been thinking of buildind an app:

* An app to help me study Machine Learning.
* An app related to mobile payments. I've been researching the evolution of online payments in Latin America.
* A stock market or finance advisor.
* An app about motivation.
* An app about research in recruiting.


I learned of the Flutter framework last year. Even though I could refresh my knowledge of Java and build a plain-old Java Android app. I wanted to try something new. This is a tutorial to setup the environment to build an Android app in Linux using the Flutter framework.

Setting up an environment is usually what causes the most frustration and where most people drop out from moving forward. I added the output of every command for reference.

## Tools

* Linux Fedora 30
* Nexus 5 phone

## Install Flutter

As seen here:
https://flutter.dev/docs/get-started/install/linux

Download the Flutter SDK tar file (490M).

I created a directory called `droidev`.

    $ cd ~/Documents/ && mkdir droidev && cd droidev

Tar the file

    $ tar xf ~/Downloads/flutter...tar.xz

It extracts a directory called `flutter`.

Update the `Path`

    $ vim ~/.bashrc

Add the Path:

    export PATH="$PATH:$HOME/Documents/droidev/flutter/bin"

Verify:

    $ source ~/.bashrc
    $ echo $PATH
    $ which flutter

Predownload binaries. I did this but it didn't seem to do anything:

    $ flutter precache

Disable Google Analytics crash reports:

    $ flutter config --no-analytics
    Analytics reporting disabled.

Check if there are dependencies missing:

    $ flutter doctor

Output was:

    Doctor summary (to see all details, run flutter doctor -v):
	[✓] Flutter (Channel stable, v1.9.1+hotfix.2, on Linux, locale en_US.UTF-8)
	[✗] Android toolchain - develop for Android devices
	    ✗ Unable to locate Android SDK.
	  Install Android Studio from: https://developer.android.com/studio/index.html
	  On first launch it will assist you in installing the Android SDK components.
	  (or visit https://flutter.dev/setup/#android-setup for detailed instructions).
	  If the Android SDK has been installed to a custom location, set ANDROID_HOME to that location.
	  You may also want to add it to your PATH environment variable.

	[!] Android Studio (not installed)
	[!] Connected device
	    ! No devices available

	! Doctor found issues in 3 categories.

## Install Android Studio on Linux

As seen here:
https://developer.android.com/studio/install

If running on 64-bit:

    $ sudo dnf install zlib.i686 ncurses-libs.i686 bzip2-libs.i686

Output:

    Installing:
	 zlib    i686  1.2.11-18.fc30    updates  94 k
	 bzip2-libs  i686  1.0.6-29.fc30  fedora  38 k
	 ncurses-libs  i686  6.1-10.20180923.fc30  fedora  308 k
	Upgrading:
	 glibc   x86_64  2.29-22.fc30  updates  4.0 M
	 glibc-all-langpacks  x86_64  2.29-22.fc30  updates  25 M
	 glibc-common  x86_64  2.29-22.fc30  updates  838 k
	 glibc-devel    x86_64  2.29-22.fc30  updates  1.0 M
	 glibc-headers  x86_64  2.29-22.fc30  updates  473 k
	 glibc-langpack-en  x86_64  2.29-22.fc30  updates  818 k
	 libgcc  x86_64  9.2.1-1.fc30  updates  91 k
	Installing dependencies:
	 glibc   i686  2.29-22.fc30  updates  3.9 M
	 libgcc  i686  9.2.1-1.fc30  updates  98 k

Downloaded the `tar` file.

Unpack in `Downloads` and move to `/usr/local`

    $ sudo mv ~/Downloads/android-studio/ /usr/local/

Run Installation script

    $ cd /usr/local/android-studio/bin/
    $ ./studio.sh

A popup window says `Import Android Studio Settings From`.

I chose `Do not import settings`.

For `Data Sharing` I put `Don't send`.

It starts the `Setup Wizard`:

* Standard
* Select UI theme: Darcula

Current Settings output:

    Setup Type: Standard
	SDK Folder: /home/tom/Android/Sdk
	Total Download Size: 515 MB
	SDK Components to Download: 
	
	Android Emulator: 205 MB
	Android SDK Build-Tools 29.0.2: 39.7 MB
	Android SDK Platform 29: 74.6 MB
	Android SDK Platform-Tools: 8.33 MB
	Android SDK Tools: 147 MB
	SDK Patch Applier v4: 1.74 MB
	Sources for Android 29: 37.6 MB

Emulator Settings said:

`We have detected that your system can run the Android emulator in an accelerated performance mode...Linux-based systems support virtual machine acceleration through the KVM software package`.

## Configure Hardware Acceleration

As seen here:
https://bytefreaks.net/android/fedora-configure-hardware-acceleration-for-the-android-emulator

    $ egrep '^flags.*(vmx|svm)' /proc/cpuinfo;
    $ sudo dnf group install --with-optional virtualization;

The output is:

    Installing group/module packages:
	 guestfs-browser  x86_64  0.2.3-15.fc30  fedora   1.6 M
	 libguestfs-tools    noarch  1:1.40.2-4.fc30  fedora    33 k
	 python3-libguestfs  x86_64  1:1.40.2-4.fc30  fedora   211 k
	 virt-install  noarch  2.1.0-2.fc30   fedora    64 k
	 virt-manager  noarch  2.1.0-2.fc30   fedora   582 k
	 virt-top    x86_64  1.0.8-34.fc30  fedora   717 k
	 virt-viewer   x86_64  8.0-1.fc30  fedora   390 k
	Installing dependencies:
	 gnutls-dane   x86_64  3.6.8-1.fc30   updates   25 k
	 gnutls-utils  x86_64  3.6.8-1.fc30   updates  299 k
	 libvirt-bash-completion  x86_64  5.1.0-9.fc30   updates   12 k
	 libvirt-client   x86_64  5.1.0-9.fc30   updates  310 k
	 python3-libvirt  x86_64  5.1.0-2.fc30   updates  288 k
	 hexedit  x86_64  1.2.13-15.fc30   fedora    39 k
	 hivex    x86_64  1.3.18-4.fc30  fedora    98 k
	 libguestfs  x86_64  1:1.40.2-4.fc30  fedora   2.7 M
	 libguestfs-tools-c  x86_64  1:1.40.2-4.fc30  fedora   5.5 M
	 libldm   x86_64  0.2.4-4.fc30   fedora    53 k
	 lsscsi   x86_64  0.30-2.fc30    fedora    63 k
	 ocaml-camomile-data   x86_64  0.8.7-5.fc30   fedora   2.1 M
	 perl-Sys-Guestfs    x86_64  1:1.40.2-4.fc30  fedora   316 k
	 perl-Sys-Virt    x86_64  5.1.0-1.fc30   fedora   289 k
	 perl-hivex  x86_64  1.3.18-4.fc30  fedora    50 k
	 python3-argcomplete   noarch  1.9.5-1.fc30   fedora    57 k
	 scrub    x86_64  2.5.2-14.fc30  fedora    42 k
	 supermin    x86_64  5.1.20-3.fc30  fedora   446 k
	 virt-manager-common   noarch  2.1.0-2.fc30   fedora   1.1 M
	 zerofree    x86_64  1.1.1-3.fc30   fedora    27 k
	Installing weak dependencies:
	 libguestfs-xfs   x86_64  1:1.40.2-4.fc30  fedora    15 k
	Installing Groups:
	 Virtualization

Start the service and verify:

    $ sudo systemctl start libvirtd;
    $ sudo systemctl enable libvirtd;
    $ lsmod | grep kvm

Output is:

    kvm_intel  303104  0
	kvm  741376  1 kvm_intel
	irqbypass  16384  1 kvm

After all this for some reason my switch-windows shortcut `alt+tab` stopped working. So I ran this:

    $ killall nautilus


## Setup an Android device

Following the docs:
https://flutter.dev/docs/get-started/install/linux

I had this enabled already on this phone:

* Developer options
* USB debugging

Then connected the phone and entered:

    $ flutter devices

That didn't work. I got this:

    No devices detected.

	Run 'flutter emulators' to list and start
	any available device emulators.

	Or, if you expected your device to be detected, 
	please run "flutter doctor" to diagnose potential issues, 
	or visit https://flutter.dev/setup/ for troubleshooting tips.

I ran this again:

    $ flutter doctor

And got this:

    Doctor summary (to see all details, run flutter doctor -v):
	[✓] Flutter (Channel stable, v1.9.1+hotfix.2, on Linux, locale en_US.UTF-8)
	 
	[!] Android toolchain - develop for Android devices (Android SDK version 29.0.2)
	    ✗ Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses
	[!] Android Studio (version 3.5)
	    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
	    ✗ Dart plugin not installed; this adds Dart specific functionality.
	[!] Connected device
	    ! No devices available

	! Doctor found issues in 3 categories.

Entered the suggested command:

    $ flutter doctor --android-licenses

Got this and approved the 5 licenses:

    Warning: File /home/tom/.android/repositories.cfg could not be loaded.          
	5 of 5 SDK package licenses not accepted. 100% Computing updates...             
	Review licenses that have not been accepted (y/N)?

## Troubleshooting `No devices available`

Again:

    $ flutter doctor

Output:

    [✓] Flutter (Channel stable, v1.9.1+hotfix.2, on Linux, locale en_US.UTF-8)
	[✓] Android toolchain - develop for Android devices (Android SDK version 29.0.2)
	[!] Android Studio (version 3.5)
	    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
	    ✗ Dart plugin not installed; this adds Dart specific functionality.
	[!] Connected device
	    ! No devices available

Installed `libmtp`. As seen here:

https://wiki.archlinux.org/index.php/Media_Transfer_Protocol
http://libmtp.sourceforge.net/

    $ sudo dnf reinstall libmtp
    $ sudo dnf install libmtp-examples

**Solution**

Ran `flutter devices` but no luck. After a few hours I saw this:

https://askubuntu.com/questions/417323/my-mtp-capable-device-is-not-detected-what-can-i-do-about-that

The main answer starts with making sure you have the right cable and not just the one for charging the device. I had the USB cable I used to charge the doorbell. It's a small orange cable. I changed the cable to the one for the kindle. That was it.

Run again:

    $ flutter devices
    1 connected device:

	Nexus 5 • android-arm • Android 6.0.1 (API 23)

Run `flutter doctor`:

	Doctor summary (to see all details, run flutter doctor -v):
	[✓] Flutter (Channel stable, v1.9.1+hotfix.2, on Linux, locale en_US.UTF-8)
	[✓] Android toolchain - develop for Android devices (Android SDK version 29.0.2)
	[!] Android Studio (version 3.5)
	    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
	    ✗ Dart plugin not installed; this adds Dart specific functionality.
	[✓] Connected device (1 available)

## Setup the Android Emulator

As seen here:
https://flutter.dev/docs/get-started/install/linux

Enable VM acceleration. I did this already. See above `Configure Hardware Acceleration`

Launch Android Studio:

* Tools > AVD Manager
* Create Virtual Device
* Select hardware: Nexus 5 (choose your own)

Select system image. I selected `Q: Android 10` and clicked on `Download`. A pop up window says `Component Installer` (1GB).

	Installing Requested Components
	SDK Path: /home/tom/Android/Sdk

    Packages to install: 
	- Google Play Intel x86 Atom System Image (system-images;android-29;google_apis_playstore;x86)

	Preparing "Install Google Play Intel x86 Atom System Image (revision: 7)".
	Downloading https://dl.google.com/android/repository/sys-img/google_apis_playstore/x86-29_r07-linux.zip
	"Install Google Play Intel x86 Atom System Image (revision: 7)" ready.
	Installing Google Play Intel x86 Atom System Image in /home/tom/Android/Sdk/system-images/android-29/google_apis_playstore/x86
	"Install Google Play Intel x86 Atom System Image (revision: 7)" complete.
	"Install Google Play Intel x86 Atom System Image (revision: 7)" finished.

I also downloaded `Marshmallow x86_64 Android 6.0(Google APIs)`. I checked the phone and the Android version is `6.0.1` (600MB).

	Packages to install: 
	- Google APIs Intel x86 Atom_64 System Image (system-images;android-23;google_apis;x86_64)

	Preparing "Install Google APIs Intel x86 Atom_64 System Image (revision: 31)".
	Downloading https://dl.google.com/android/repository/sys-img/google_apis/x86_64-23_r31.zip

For future reference, this is the doc about managing `AVD` (Android Virtual Device):

https://developer.android.com/studio/run/managing-avds

Back in the `System Image` window. Make sure that `Q` is selected. The right side says:

* API level: 29
* Android: 10.0 Google Inc
* System image: x86
* Next...

A new window says `Android Virtual Device`:

* AVD Name: Nexus 5 API 29
* Nexus 5: 4.951080x1920 xxhdpi
* Q: Android 10.0 x86
* Startup orientation: Portrait
* Emulated performance: Graphics > Automated (The doc says `Hardware -GLES 2.0` but there is no option for this)
* Device Frame: Checked `Enable Device Frame`
* Finish...


## Run the Emulator

A new window says `Your Virtual Devices`. Click on the `play` button. You can also find this from the top menu bar `Tools > AVD Manager`.

A phone emulator opens. It takes some time to boot up.

On the actual phone an application says `My Application` with a `Hello world`. I think this is a sample application I created when I first started Android Studio.

Closed the emulator and `AVD Manager`.

## Install the Flutter and Dart Plugins

As seen here:
https://flutter.dev/docs/get-started/editor

Inside Android Studio:

* File > Settings > Plugins
* Find `Flutter` and install
* 3rd party plugin data privacy: `Accept`, the other choice is Cancel
* The plugin you want to install requires `Dart`: Yes.

Click on `Restart IDE`.

One last check on the terminal:

    $ flutter doctor

    Doctor summary (to see all details, run flutter doctor -v):
	[✓] Flutter (Channel stable, v1.9.1+hotfix.2, on Linux, locale en_US.UTF-8)
	[✓] Android toolchain - develop for Android devices (Android SDK version 29.0.2)
	[✓] Android Studio (version 3.5)
	[✓] Connected device (1 available)

	• No issues found!

## Test Drive Flutter

As seen here:
https://flutter.dev/docs/get-started/test-drive

1. Open Android Studio
2. Start a New Flutter project
3. Flutter application
4. Project name: `firstapp`. You can only use lowercase and underscore
5. Flutter SDK Path: This is where I unzipped `flutter` in `~/Documents/droidev/flutter`.
6. Project location: `~/AndroidStudioProjects`

For the `Create project offline` option see this. It says `In offline mode, it will need to have all dependencies already available in the pub cache to succeed.`:
https://github.com/flutter/flutter/issues/15199

The next window says `Set the package name`.

There is an important note about selecting your domain name before releasing the app. The default says `example.com`, and the package name is renamed as `com.example.firstapp`.

These options are checked for `Platform channel language`:

* Include Kotlin support for Android code
* Include Swift support for iOS code

The next thing I did was changing the font of the editor. It was microscopic.

## Run the app

Click on the `play` run button.

	Launching lib/main.dart on Nexus 5 in debug mode...
	Initializing gradle...
	Resolving dependencies...
	Running Gradle task 'assembleDebug'...
	Built build/app/outputs/apk/debug/app-debug.apk.
	Installing build/app/outputs/apk/app.apk...
	Syncing files to device Nexus 5...

On the phone an app says `Flutter Demo Home Page`.

Click on the `Stop` button when done.