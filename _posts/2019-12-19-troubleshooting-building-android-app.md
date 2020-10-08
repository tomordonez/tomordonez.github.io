---
layout: post
title: "Troubleshooting Building an Android App"
redirect_from:
  - /troubleshooting-building-android-app.html
categories: [Mobile]
image: assets/images/10.jpg
tags: [android, mobile dev, mobile, mobile design, app]
---

Using `Android Studio 3.5`, I had to load a project that was built in another version.

## ERROR: failed to find target with hash string 'android-22'

When building the app it got stuck on this error:

    ERROR: failed to find target with hash string 'android-22' in: /home/tom/Android/Sdk
    Install missing platform(s) and sync project

I clicked on `Install missing platform(s)`

	Packages to install: 
	- Android SDK Platform 22 (platforms;android-22)

	Preparing "Install Android SDK Platform 22 (revision: 2)".
	Downloading https://dl.google.com/android/repository/android-22_r02.zip
	"Install Android SDK Platform 22 (revision: 2)" ready.
	Installing Android SDK Platform 22 in /home/tom/Android/Sdk/platforms/android-22
	"Install Android SDK Platform 22 (revision: 2)" complete.
	"Install Android SDK Platform 22 (revision: 2)" finished.

## ERROR: failed to find Build Tools revision 23.0.2

Then I got this error

    ERROR: failed to find Build Tools revision 23.0.2
    Install Build Tools 23.0.2 and sync project
	Upgrade plugin to version 3.5.0 and sync project

I clicked on `Install Build Tools 23.0.2`

	Packages to install: 
	- Android SDK Build-Tools 23.0.2 (build-tools;23.0.2)

	Preparing "Install Android SDK Build-Tools 23.0.2 (revision: 23.0.2)".
	Downloading https://dl.google.com/android/repository/build-tools_r23.0.2-linux.zip
	"Install Android SDK Build-Tools 23.0.2 (revision: 23.0.2)" ready.
	Installing Android SDK Build-Tools 23.0.2 in /home/tom/Android/Sdk/build-tools/23.0.2
	"Install Android SDK Build-Tools 23.0.2 (revision: 23.0.2)" complete.
	"Install Android SDK Build-Tools 23.0.2 (revision: 23.0.2)" finished.

## ERROR: Failed to resolve: com.android.support:appcompat-v7:22.2.1

Then I got these errors

    ERROR: Failed to resolve: com.android.support:appcompat-v7:22.2.1
	Add Google Maven repository and sync project
	Show in Project Structure dialog
	Affected Modules: app


	ERROR: Failed to resolve: com.android.support:design:22.2.1
	Add Google Maven repository and sync project
	Show in Project Structure dialog
	Affected Modules: app

I clicked on `Add Google Maven repository and sync project`.

This opened a tab `Refactoring preview` and pointed to a file `build.gradle`.

Here are two great resources:

* [Could not find com.android.tools.build:gradle:3.0.0](https://stackoverflow.com/questions/44071080/could-not-find-com-android-tools-buildgradle3-0-0-alpha1-in-circle-ci)
* [Why does the Google maven repository exist and when should I use it?
](https://stackoverflow.com/questions/46145846/why-does-the-google-maven-repository-exist-and-when-should-i-use-it)

As explained in the above resources, there are many repositories when building an Android app:

* `jcenter()`
* `google()`
* The Android repository installed by the SDK Manager
* Other repositories

`jcenter()` is used for open source libraries, like the Android plugin for gradle. `google()` is used for support libraries. More about this one at [Google's Maven Repository](https://maven.google.com/web/index.html). There are `gradle` libraries listed inside `com.android.tools.build`.

One of the resources also said that for Android Studio 3.0 and higher, `google()` should already be added.

## Comparing with an app that compiled correctly

I read somewhere on StackOverflow that a good way for troubleshooting was looking at the differences between an app that compiled correctly with the one that didn't.

I checked a project I previously created and compiled correctly.

This is what `build.gradle` looked like:

    build.gradle(Project: Test App)

	// Top-level build file where you can add
	configuration options common to all sub-projects/modules.

	buildscript {
	    repositories {
	        google()
	        jcenter()     
	    }
	    dependencies {
	        classpath 'com.android.tools.build:gradle:3.5.0'
	        
	        // NOTE: Do not place your application dependencies here; they belong
	        // in the individual module build.gradle files
	    }
	}
	allprojects {
	    repositories {
	        google()
	        jcenter()
	    }
	}
	task clean(type: Delete) {
	    delete rootProject.buildDir
	}

Back to the project that was not compiling correctly. I opened the `build.gradle` file:

	buildscript {
	    repositories {
	        jcenter()
	    }
	    dependencies {
	        classpath 'com.android.tools.build:gradle:1.5.0'

	        // NOTE: Do not place your application dependencies here; they belong
	        // in the individual module build.gradle files
	    }
	}

	allprojects {
	    repositories {
	        jcenter()
	    }
	}

I can clearly see that two things are different:

* `google()` is missing.
* Replaced this `classpath 'com.android.tools.build:gradle:1.5.0'` with `3.5.0`.

I added `google()` to both `buildscript` and `allprojects`. Then towards the top right on the blue warning `Try Again`.

## ERROR: Could not find method google() for arguments [] on repository container

Then I got this error:

    ERROR: Could not find method google() for arguments [] on repository container.

Here is another resource:

* [gradle could not find method](https://stackoverflow.com/questions/27470443/could-not-find-method-jcenter-for-arguments-on-repository-container/52039526#52039526)

It has these instructions:

* Go to the Android Project tab
* Gradle Scripts
* Open the file `gradle-wrapper.properties`

It had the following:

    distributionUrl=https\://services.gradle.org/distributions/gradle-2.8-all.zip

Comparing the Android app that built correctly. The same file had this:

	distributionUrl=https\://services.gradle.org/distributions/gradle-5.4.1-all.zip

Saved the file and clicked on `Try Again`

Now it built the App without errors.

## Gradle Sync Issues

There are still a few warnings after compiling the app.

* Configuration 'compile' is obsolete and has been replaced with 'implementation' and 'api'
* Configuration 'testCompile' is obsolete and has been replaced with 'testImplementation'
* The specified Android SDK Build Tools version (23.0.2) is ignored, as it is below the minimum supported version (28.0.3) for Android Gradle Plugin 3.5.0


Reviewing the `build.gradle(Module: app)` files for the app that compiled correctly with the one that didn't.

The App that compiled correctly shows this:

	apply plugin: 'com.android.application'

	android {
	    compileSdkVersion 29
	    buildToolsVersion "29.0.2"
	    defaultConfig {
	        applicationId "com.example.myapplicationforexample"
	        minSdkVersion 23
	        targetSdkVersion 29
	        versionCode 1
	        versionName "1.0"
	        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
	    }
	    buildTypes {
	        release {
	            minifyEnabled false
	            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
	        }
	    }
	}

	dependencies {
	    implementation fileTree(dir: 'libs', include: ['*.jar'])
	    implementation 'androidx.appcompat:appcompat:1.0.2'
	    implementation 'androidx.constraintlayout:constraintlayout:1.1.3'
	    testImplementation 'junit:junit:4.12'
	    androidTestImplementation 'androidx.test:runner:1.1.1'
	    androidTestImplementation 'androidx.test.espresso:espresso-core:3.1.1'
	}

Compared to the App that didn't compile

	apply plugin: 'com.android.application'

	android {
	    compileSdkVersion 22
	    buildToolsVersion "23.0.2"

	    defaultConfig {
	        applicationId "mooc.vandy.java4android.shapes"
	        minSdkVersion 22
	        targetSdkVersion 22
	        versionCode 1
	        versionName "1.0"
	        multiDexEnabled true
	    }
	    buildTypes {
	        release {
	            minifyEnabled false
	            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
	        }
	    }
	    compileOptions {
	        sourceCompatibility JavaVersion.VERSION_1_7
	        targetCompatibility JavaVersion.VERSION_1_7
	    }
	    testOptions {
	        unitTests.returnDefaultValues = true
	        unitTests.all{
	            ignoreFailures = true
	            maxHeapSize = "1024m"
	        }
	    }
	    packagingOptions {
	        exclude 'META-INF/LICENSE.txt'
	        exclude 'META-INF/NOTICE.txt'
	    }
	}

	dependencies {
	    compile fileTree(dir: 'libs', include: ['*.jar'])
	    testCompile 'junit:junit:4.12'
	    compile 'com.android.support:appcompat-v7:22.2.1'
	    compile 'com.android.support:design:22.2.1'

	    compile ("org.apache.commons:commons-lang3:3.3.2")
	    compile ("com.google.guava:guava:17.0")
	}

A few things are different.

App that compiled:

    compileSdkVersion 29
    buildToolsVersion "29.0.2"
    minSdkVersion 23
    targetSdkVersion 29
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    testImplementation 'junit:junit:4.12'

App that didn't compile:

    compileSdkVersion 22
    buildToolsVersion "23.0.2"
    minSdkVersion 22
    targetSdkVersion 22
    compile fileTree(dir: 'libs', include: ['*.jar'])
    testCompile 'junit:junit:4.12'
    compile 'com.android.support:appcompat-v7:22.2.1'
    compile 'com.android.support:design:22.2.1'
    // compile is deprecated use implementation

I made the changes and compiled again.

## Configuration 'compile' is obsolete

Only one issue remains:

* Configuration 'compile' is obsolete and has been replaced with 'implementation' and 'api'

For this section. I replaced `compile` with `implementation` and `testCompile` with `testImplementation`.

	dependencies {
		    compile fileTree(dir: 'libs', include: ['*.jar'])
		    testCompile 'junit:junit:4.12'
		    compile 'com.android.support:appcompat-v7:22.2.1'
		    compile 'com.android.support:design:22.2.1'

		    compile ("org.apache.commons:commons-lang3:3.3.2")
		    compile ("com.google.guava:guava:17.0")
		}

## GradleCompatible error in `build.gradle(Module: app)`

After making this change, yet another error showed up, underlined red on these two lines:

    compile 'com.android.support:appcompat-v7:22.2.1'
    compile 'com.android.support:design:22.2.1'

The error says:

    Issue id: GradleCompatible
    Version 28 (intended for Android Pie and below) is the last version of the legacy support library, so we recommend that you migrate to AndroidX libraries when using Android Q and moving forward. The IDE can help with this: Refactor > Migrate to AndroidX.
    Inspection info: There are some combinations of libraries, or tools and libraries, that are incompatible, or can lead to bugs. One such incompatibility is compiling with a version of the Android support libraries that is not the latest version (or in particular, a version lower that your targetSdkVersion)

As seen [here](https://developer.android.com/jetpack/androidx) it says that `AndroidX is a major improvement to the original Android Support Library, which is no longer maintained`.

And this one about [migrating to AndroidX](https://developer.android.com/jetpack/androidx/migrate), which basically follows the same warning above to use `Refactor > Migrate to AndroidX`.

The `Refactoring Preview` shows `References to be changed`:

Usage in import in `MainActivity.java`

    import android.support.v7.app.AppCompatActivity;

Usage in Gradle build script in `build.gradle(Module:app)`

	implementation 'com.android.support:appcompat-v7:22.2.1'
    implementation 'com.android.support:design:22.2.1'

Clicked on `Do Refactor`.

It made these changes:

In `MainActivity.java`:

    import androidx.appcompat.app.AppCompatActivity;

In `build.gradle(Module:app)`:

	implementation 'androidx.appcompat:appcompat:1.0.0'
    implementation 'com.google.android.material:material:1.0.0'

No more errors.