---
layout: post
title: "How To Setup a VPN in Linux Fedora"
redirect_from:
  - /how-to-setup-vpn-linux-fedora.html
categories: [Linux]
image: assets/images/10.jpg
tags: [vpn, linux, fedora, openvpn]
---

This is a short tutorial to **setup a VPN in Linux** Fedora. Although the same process applies to Ubuntu.


## Open an account with Hide.me VPN

Get the Plus plan

## Download the OpenVPN Configuration

Once logged in to the members dashboard. Go to the left menu and click on Servers.

<p>&nbsp;</p>

![Setup a VPN in Linux]({{ site.baseurl }}/assets/images/how-to-setup-vpn-linux.gif)

<p>&nbsp;</p>

It will show a Location and Internet Address.

Chose the Location you want and click on More Details.

Go to OpenVPN Configuration. Click on Linux. This will download a zip file.

<p>&nbsp;</p>

![OpenVPN Configuration]({{ site.baseurl }}/assets/images/openvpn-configuration.gif)

<p>&nbsp;</p>

## Install OpenVPN in the Terminal

    sudo dnf -y install openvpn

## Unzip the OpenVPN Configuration file

Let's say the file is called `Location.zip`

    sudo unzip ~/Downloads/Location.zip -d /etc/openvpn/

## Save your login credentials

If you want to auto login with your user and password.

Create this file:

    sudo touch /etc/openvpn/credentials

Open this file with your favorite editor using `sudo`

    sudo vim /etc/openvpn/credentials

Enter your hideme login and password in 2 separate lines:

    your-user
    your-password

Setup openvpn to use this credentials file. Previously unzipping the file `Location.zip` into `/etc/openvp/`, created a file called `Location.ovpn`. Change the `Location` name with the specific file you downloaded.

    sudo sed -i 's/auth-user-pass/auth-user-pass \/etc\/openvpn\/credentials/g' /etc/openvpn/Location.ovpn

## Start the VPN

    sudo openvpn --config /etc/openvpn/Location.ovpn

![OpenVPN Start]({{ site.baseurl }}/assets/images/start-openvpn.gif)

## Test if VPN is working

Go to `https://hide.me/en/check`.

It should show the IP number of the Location you downloaded.

But then google this "what is my IP".

If the IP shows your current location and not the one from the VPN then you have an IPv6 issue. Read below.

## Close the VPN

Use `Ctrl+C`.

If there is a prompt then type:

    sudo killall openvpn

![OpenVPN Stop]({{ site.baseurl }}/assets/images/stop-openvpn.gif)

## Alternative Way of Adding the VPN

Both Linux Ubuntu and Fedora have a user interface to add the VPN. That way you don't need to have the VPN running from the shell. And you can select easier from a list of VPNs if you want to configure many of them.

If you go to Settings > Network.

There should be an option for VPN.

* Add VPN
* Import from file
* Find the `.ovpn` file.
* Enter your account user and pwd
* Disable IPv6
* Enable the VPN
* Test your IP

## IPv6 Issues

In the US. Comcast has IPv6 enabled and this can be an issue.

The best solution is to login to your router. Disable IPv6 and enable IPv4.

If this is not possible. You can try to disable IPv6 from the command line. But if your router doesn't have IPv4 enabled this will not work:

To disable IPv6 from terminal:

    sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1

To re-enable IPv6:

    sudo sysctl -w net.ipv6.conf.all.disable_ipv6=0

Or edit the file directly with:

    sudo vim /etc/sysctl.conf

You can also disable IPv6 from your laptop Wifi Settings.

If you disable IPv6 and you lose internet. Try restarting your laptop Wifi or Wifi card.

## Verify your IP

Always check your IP with `https://hide.me/en/check` to review if IPv6 has been disabled. And check the new IP number.

## IPv6 alternative solution

Use your phone hotspot connecting via USB.

Disable the phone Wifi.

Connect to the VPN

    sudo openvpn --config /etc/openvpn/Location.ovpn

Go to `https://hide.me/en/check`.

It should show the IP number of the Location you downloaded.

Then google "what is my IP". It should also show the VPN IP number.