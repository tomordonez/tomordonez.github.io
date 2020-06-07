---
layout: post
title: "Google Maps API with Python"
author: tom
categories: [Data Analytics]
image: assets/images/3.jpg
tags: [analytics, API, Python, Google Maps]
---

(This blog post being revised)

This is a tutorial to extract data from the Google Maps API using Python.

## Get a Google Maps API key

As shown in [get API key](https://developers.google.com/places/web-service/get-api-key).

Go to GCP (Google Cloud Platform) > APIs & Services > Credentials.

Click on `Create Credentials` then `API key`.


## Enable a Google Maps API service

* Go to the Menu
* Scroll down to Google Maps
* Then APIs
* Click `Places API`
* Click `Enable`

These are all available API services:

	Places API
	Maps SDK for Android
	Directions API
	Distance Matrix API
	Maps Elevation API
	Maps Embed API
	Geocoding API
	Geolocation API
	Maps JavaScript API
	Roads API
	Maps SDK for iOS
	Time Zone API
	Maps Static API
	Street View Static API

## API Key > Settings > Application Restrictions

Without restrictions the API key created has a warning icon.

Edit the Settings for the API key.

Edit the `name`. For example: `Google Maps Places API Key`

Then `Application Restrictions` controls which websites or IP addresses or applications can use the API key. You can only choose one of:

* `None`: for testing purposes only.
* `HTTP websites`:for API clients that run on a web browser. These types of applications expose the API publicly. Use a service account as shown [here](https://cloud.google.com/docs/authentication/getting-started).
* `IP addresses`: web servers, cron jobs, etc.
* Android apps
* iOS apps

More about this in [API key best practices](https://developers.google.com/maps/api-key-best-practices), [more best practices](https://developers.google.com/maps/api-key-best-practices#api_key_table), and [API key restrictions](https://cloud.google.com/docs/authentication/api-keys#api_key_restrictions)

One of the best practices says this:

You may use an unrestricted API with the Google Maps API. However, it is recommended to restrict the API keys in the following scenarios:

* The test environment is public
* The applications that uses the API key is ready to be used in production.

Not sure if this is recommended. I am only going to pull data from a local test environment. I could set it to `None`. For now I set it to `IP addresses` and entered my public IP address.


## API Key > Settings > API restrictions

As shown in [API restrictions](https://cloud.google.com/docs/authentication/api-keys#api_restrictions), it says that all API keys used in production should use API restrictions.

The `API restrictions` specify the enabled APIs that can be called:

* Don't restrict the key
* Restrict the key

First I am going to test finding a place.


Select `Restrict the key` and from the drop down choose

* Places API.

Then click `Save`.

The API key now has a green check mark.


These are all the `API restrictions` options:

	BigQuery API
	BigQuery Storage API
	Cloud Datastore API
	Cloud Debugger API
	Cloud Logging API
	Cloud Monitoring API
	Cloud SQL
	Cloud Storage
	Cloud Trace API
	Google Cloud APIs
	Google Cloud Storage JSON API
	Places API
	Service Management API
	Service Usage API


## Google Maps Places API

More about the Places API [here](https://developers.google.com/places/web-service/intro)

Each service uses an `HTTP` request and returns `JSON`. The services use a `place_id` to uniquely identify a place. This is important to review duplicates later.

Find the Place ID of a place [here](https://developers.google.com/places/web-service/place-id)


## Place Search

Resources:

* [Google Maps Docs](https://developers.google.com/places/web-service/search)

As shown on the docs, `Places API` lets you search for place information using categories, establishments, points of interest, and geographic locations. Search by proximity or by string. It returns a list of places along with summary information.

**Types of Requests**

* Find Place
* Nearby Search
* Text Search


## Find Place requests

Input is a text. Output is a place. Input can be a name, address, or phone number. It cannot be a lat/long number. The request must be a string. The `URL` has this form:

	https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters


**Required parameters**

* `key`: Your API key
* `input`: A string that can be a name, address, or phone number.
* `inputtype`: Use `textquery` or `phonenumber`.


Example, using Google Maps Python client library. I will explain the setup later:

	>>> place = gmaps.find_place(input="1600 Amphitheatre Parkway, Mountain View, CA", input_type="textquery")
	>>> place
	{'candidates': [{'place_id': 'ChIJtYuu0V25j4ARwu5e4wwRYgE'}], 'status': 'OK'}


**Other parameters**

* `language`: For example English `language="en"`. 
* `locationbias`: Find a specific area by using a `radius` and `lat/long`. If this is not used, the API uses IP address.
* `fields`: Types of data to return.


### Language

[Language codes](https://developers.google.com/maps/faq#languagesupport).


### locationbias

Use like this:

	circle:radius@lat,lng


For example. Search for `steakhouse` within 2000 meters of Google's HQ office.

	https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=steakhouse&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@37.4222339,-122.0854804&key=YOUR_API_KEY


### Fields

More in the [official docs](https://developers.google.com/places/web-service/search#Fields)

This is where it gets interesting...Billing.

Types of Fields:

* `Basic`: business_status, formatted_address, geometry, icon,name, permanently_closed, photos, place_id, plus_code, types
* `Contact`: opening_hours
* `Atmosphere`: price_level, rating, user_ratings_total

Some services don't allow to specify a type of field and different billing charges apply if one of them is triggered.

A way to test this is looking at the response and see if it contains a field for one of these types.


Example using Google Maps API Python client library:

	>>> place = gmaps.find_place(input="stakehouse", input_type="textquery", location_bias="circle:2000@37.4222339,-122.0854804", language="en")

	>>> place
	{'candidates': [{'place_id': 'ChIJsUEYn56wj4ARMg1qK1EVHyw'}], 'status': 'OK'}

It doesn't return much. Let's use `Basic fields`

	>>> place = gmaps.find_place(input="stakehouse", input_type="textquery", fields=["name", "formatted_address", "business_status", "geometry", "photos", "types"], location_bias="circle:2000@37.4222339,-122.0854804", language="en")

	>>> place
	{'candidates': [{'business_status': 'CLOSED_TEMPORARILY', 'formatted_address': '545 San Antonio Rd Suite 31, Mountain View, CA 94040, United States', 'geometry': {'location': {'lat': 37.4032079, 'lng': -122.1118804}, 'viewport': {'northeast': {'lat': 37.40471237989271, 'lng': -122.1105114701073}, 'southwest': {'lat': 37.40201272010727, 'lng': -12.1132111298927}}}, 'name': "Paul Martin's America Mountain View", 'photos': [{'height': 4048, 'html_attributions': ['<a href="https://maps.google.com/maps/contrib/11203600442766896285">Casey DuBose</a>'], 'photo_reference': 'CmRaAAAAit6MjPA4tMxwkAx61ZquIzBYndTl5zAcCV-bjUPhl0dm0S3giXjEANdqAvxvxsJvCehIChMcOCPVJwxIzHAQWW9Igv01P_R-gilhmU52I0MSRgBgWXh4g5N7wRQDPQKEhC2y0uoOD03_XFjS6o7xi0UGhTiLFIHq8rbIF68PRZaCoEjumKy_Q', 'width': 3036}], 'types': ['restaurant', 'food', 'point_of_interest', 'establishment']}], 'status': 'OK'}


Let's confirm by searching for `Paul Martin's America Mountain View`:

* Restaurant
* Temporarily closed
* 545 San Antonio Rd Suite 31, Mountain View, CA 94040
* 10 min drive, 3.1 miles from Google's office.
* 4.2 stars (628 reviews)
* $$$

Let's use the `Contact` (opening_hours) and `Atmosphere` (price_level, rating, user_ratings_total) fields to see if we get the same data:

	>>> place = gmaps.find_place(input="stakehouse", input_type="textquery", fields=["name", "formatted_address", "business_status", "geometry", "photos", "types", "opening_hours", "price_level", "rating", "user_ratings_total"], location_bias="circle:2000@37.4222339,-122.0854804", language="en")

	>>> place
	{'candidates': [{'business_status': 'CLOSED_TEMPORARILY', 'formatted_address': '545 San Antonio Rd Suite 31, Mountain View, CA 94040, United States', 'geometry': {'location' {'lat': 37.4032079, 'lng': -122.1118804}, 'viewport': {'northeast': {'lat': 37.40471237989271, 'lng': -122.1105114701073}, 'southwest': {'lat': 37.40201272010727, 'lng': -12.1132111298927}}}, 'name': "Paul Martin's America Mountain View", 'photos': [{'height': 4048, 'html_attributions': ['<a href="https://maps.google.com/maps/contrib/11203600442766896285">Casey DuBose</a>'], 'photo_reference': 'CmRaAAAAAUrcGJCnapLA_JhEgpZqkZy4f_B7a_jCCGESU-WWMBi50Q8ILEV818OWisSjzvBzfHA_WtdDn_45BLmrtZV5KSsrPNpxpH6mb47NSp56qzeazy9TSUje4I6ZMT4A7BIEhCJ2IM68_GY0kwK4w1IttDpGhRU3BWNHXrsBJnv2oPseqsUAyElUA', 'width': 3036}], 'price_level': 3, 'rating': 4.2, 'types': ['restaurant', 'food', 'point_of_interest' 'establishment'], 'user_ratings_total': 628}], 'status': 'OK'}


## Nearby Search Requests

Search within a specific area. Details in [Google Maps Docs](https://developers.google.com/places/web-service/search#PlaceSearchRequests).

**The warning on the Doc says**

* It returns all available data fields
* You will be billed if it triggers types of fields (basic, contact, atmosphere)
* You can't constraint to return only specific fields
* To keep from paying data you don't need. Then use `Find Place Requests`

I used this service and it triggers all types of fields. You will be billed for every SKU. More about billing later.

The `URL` has this form:

	https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters


**Required Parameters**
* `key`
* `location`: Specified as `latitude,longitude`
* `radius`: Defined in `meters` with a max of `50,000` (31 miles)

**Optional Parameters**
* `keyword`: Matching all content that Google indexed for this place (name, address, type, customer reviews)
* `language`: Same as before. See [Language codes](https://developers.google.com/maps/faq#languagesupport).
* `rankyby`: Use `distance` and one or more of `keyword` or `language`, to rank in ascending order from specified `location`
* `type`: See [location type](https://developers.google.com/places/web-service/supported_types)
* `pagetoken`: Returns up to 20 results from a previous search


Example, using Google Maps Python client library:

	{% raw %}
	>>> place = gmaps.places_nearby(location=(37.4222339,-122.0854804), radius=5000, keyword="startup", language="en")

	>>> place
	{'html_attributions': [], 'results': [], 'status': 'ZERO_RESULTS'}

	>>> place = gmaps.places_nearby(location=(37.4222339,-122.0854804), radius=10000, keyword="startup", language="en")

	>>> place
	{'html_attributions': [], 'next_page_token': 'CqQCGQEAALespF2ND-o3SI0I5SZR267A4XxtZ4LDBCBCG8SJ_IRp9ttbncIziuYJtpUNuP3pPan80VgualTqejpOwMQyHVIIKNv7MKqdJTBwVpbb6SOoSjskx6yDgaB
	d5WGiKBfi7TkrCtxe5yOvJYbU6t5KH2jLrqHMLg_4woyq0_TuZTICEpU1veSLv49pLfltDXPg0bKjZSwXejRSUrwFmSfEfRlopfUhBPZNFgGhl1_Qg2XG8R9aHhrPDNhYUoZWQ3HejWw3xVeMpS5_4w_43Qy0wRemnVCPSw7FHz3o
	AoCfFDFtGp66i3LlQlwQ2Vdraen-NyxoMOLKonL4YfSYst-6kyFzzCIy_Cr-w6VKCCoGJmPxLR07fjZoiE-c6pCfqepxIQC67lM0MvZV-sSAKkgp8eQRoUnTTz_OZwMEsZqsG7PzWFuQffv7Y', 'results': [{'business_st
	tus': 'OPERATIONAL', 'geometry': {'location': {'lat': 37.4522222, 'lng': -122.1661111}, 'viewport': {'northeast': {'lat': 37.45368197989271, 'lng': -122.1650791201073}, 'sou
	hwest': {'lat': 37.45098232010727, 'lng': -122.1677787798927}}}, 'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png', 'id': '83aa3dba2f9f4aeb
	b49ed92f74abe010398f16a', 'name': 'BootUp Ventures: Startup Ecosystem Co-Working, Office Suites & Event Space', 'opening_hours': {'open_now': False}, 'photos': [{'height': 1
	24, 'html_attributions': ['<a href="https://maps.google.com/maps/contrib/109071310568073474532">Boost Ventures</a>'], 'photo_reference': 'CmRaAAAAVHi9Mc5N4rwtg7oSunQr545R18P
	sgHgh92ODUQ4pL_Sc_s6nhBkk4_xK027AdctQEofpwVFlpTTkM2Bs-URTUqISKYOZqWBFgupe7NDTUSb68oC32Y8AV5x5iUbh65OEhAO71DTWNwWYDK2X04iPiaMGhTPZrlZvJcTN38b7lcMAXhOMevL5g', 'width': 2152}],
	'place_id': 'ChIJS7Ac0Qu7j4ARkgnXFqygEM8', 'plus_code': {'compound_code': 'FR2M+VH Menlo Park, California', 'global_code': '849VFR2M+VH'}, 'rating': 4.8, 'reference': 'ChIJS
	Ac0Qu7j4ARkgnXFqygEM8', 'scope': 'GOOGLE', 'types': ['point_of_interest', 'establishment'], 'user_ratings_total': 63, 'vicinity': '68 Willow Rd, Menlo Park'}, {'business_sta
	us': 'OPERATIONAL', 'geometry': {'location': {'lat': 37.458447, 'lng': -122.1729745}, 'viewport': {'northeast': {'lat': 37.45983937989272, 'lng': -122.1715244701073}, 'south
	est': {'lat': 37.45713972010728, 'lng': -122.1742241298927}}}, 'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png', 'id': '1a4337e0ce2b385bb9
	05778fbc45fb6a0daba2c', 'name': 'Startup Capital Ventures', '

	>>> [item['name'] for item in place['results']]
	['BootUp Ventures: Startup Ecosystem Co-Working, Office Suites & Event Space', 'Startup Capital Ventures', 'Startup Rabbit', 'Cab Startup', 'Startup Launchpad, Inc', 'BootUpWorld', 'Startup Realty', 'Plug and Play Tech Center', 'Mercury', 'Palo-Alto Startup House', 'Bay Area Startups Services, Inc', 'Nuro', 'The Hive', 'Starship Technologies', EquityBee', 'Fyde', 'HelloStartups', 'sFoundation Inc.', 'Y Combinator', 'Osaka Innovation Hub Silicon Valley Office']
	{% endraw %}

## Text Search Requests

Returns information for a set of places based on a string. Details in [Google Maps Docs](https://developers.google.com/places/web-service/search#TextSearchRequests). For example `startups in Mountain View`. The service is used for ambiguous address queries. More in [Geocoding addresses best practices](https://developers.google.com/maps/documentation/geocoding/best-practices).

Other examples:
* Incomplete addresses
* Poorly formatted addresses
* Non-address components like business names

**The warning on the Doc says**

* It returns all available data fields
* You will be billed if it triggers types of fields (basic, contact, atmosphere)
* You can't constraint to return only specific fields
* To keep from paying data you don't need. Then use `Find Place Requests`


The `URL` has this form:

	https://maps.googleapis.com/maps/api/place/textsearch/output?parameters


**Required Parameters**
* `key`
* `query`: Search string. This parameter becomes optional when you use `type`

**Optional Parameters**
* `region`: Country code top level domain. [Wikipedia](https://en.wikipedia.org/wiki/CcTLD)
* `location`: A `latitude,longitude`. You must use `radius`
* `radius`: Distance in meters, `50,000` max (31 miles)
* `language` For example `language="en"`
* `pagetoken`: Used to fetch the next page.
* `type`: Restrict to a type of place as seen in [supported types](https://developers.google.com/places/web-service/supported_types)


## Geocoding Request

You can use these two services:

* `Geocoding` to convert an address to `latitude,longitude`.
* `Reverse Geocoding` to find the address from `lat/long` or from `place_id`

More details in the [Geocoding API](https://developers.google.com/maps/documentation/geocoding/start?_ga=2.123719563.1220042606.1591276309-1631786869.1590631794)

Here is the `URL` example:

	https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY


Using the Google Maps API Python client library:

	>>> place = gmaps.geocode(address="1600 Amphitheatre Parkway, Mountain View, CA")

	googlemaps.exceptions.ApiError: REQUEST_DENIED (This API project is not authorized to use this API.)

Mmm. What happened? I didn't enable the Geocode API or create a Key for this service.


### Enable Geocoding API

* Go to GCP
* Menu > Google Maps > APIs
* Click `Geocoding API` (Billing: $5/1K requests 0-100K req/mo)
* Click `Enable`


### Create a Geocoding API Key

Create a different API key for this service as seen on [API key best practices](https://developers.google.com/maps/api-key-best-practices)

* Go to GCP
* Menu > APIs & Services > Credentials
* Create Credentials > API key
* A message says `API key created`
* Click on `Restrict Key`
* Change name to `Google Maps Geocoding API key`
* Choose an `Application Restriction`
* For `API restrictions` change to `Restrict key` and select `Geocoding API`
* Click `Save`

Try again. I will explain the setup later:

	>>> place = gmaps_geo.geocode(address="1600 Amphitheatre Parkway, Mountain View, CA")
	
	>>> place
	[{'access_points': [{'access_point_type': 'TYPE_SEGMENT', 'location': {'latitude': 37.4213102, 'longitude': -122.0852443}, 'location_on_segment': {'latitude': 37.4212816, 'lngitude': -122.0852472}, 'place_id': 'ChIJpdYZQgK6j4ARnmfrthhmnZ8', 'segment_position': 0.5404474139213562, 'unsuitable_travel_modes': []}], 'address_components': [{'long_nae': '1600', 'short_name': '1600', 'types': ['street_number']}, {'long_name': 'Amphitheatre Parkway', 'short_name': 'Amphitheatre Pkwy', 'types': ['route']}, {'long_name': 'Muntain View', 'short_name': 'Mountain View', 'types': ['locality', 'political']}, {'long_name': 'Santa Clara County', 'short_name': 'Santa Clara County', 'types': ['administative_area_level_2', 'political']}, {'long_name': 'California', 'short_name': 'CA', 'types': ['administrative_area_level_1', 'political']}, {'long_name': 'United States', 'sort_name': 'US', 'types': ['country', 'political']}, {'long_name': '94043', 'short_name': '94043', 'types': ['postal_code']}], 'formatted_address': '1600 Amphitheatre Pkwy, ountain View, CA 94043, USA', 'geometry': {'location': {'lat': 37.4223105, 'lng': -122.0846329}, 'location_type': 'ROOFTOP', 'viewport': {'northeast': {'lat': 37.423659480295, 'lng': -122.0832839197085}, 'southwest': {'lat': 37.42096151970851, 'lng': -122.0859818802915}}}, 'place_id': 'ChIJtYuu0V25j4ARwu5e4wwRYgE', 'plus_code': {'compound_code' 'CWC8+W4 Mountain View, CA, United States', 'global_code': '849VCWC8+W4'}, 'types': ['street_address']}]


## Python client library or http.client or requests

You can use any of these options:

* Google Maps has a Python client library. [Github](https://github.com/googlemaps/google-maps-services-python)
* `http.client` is a Python native library, part of the `urllib.request` module. [Python docs](https://docs.python.org/3/library/urllib.request.html)
* `requests` is a Python external library. [Readthedocs](https://requests.readthedocs.io/en/master/)

A quick search of `requests vs http.client` shows `Why is Python 3 http.client so much faster than python-requests?`. An answer says that `http.client` is at a lower level on the stack, while `requests` can be slower because it adds other features. [Stackoverflow](https://stackoverflow.com/questions/39435443/why-is-python-3-http-client-so-much-faster-than-python-requests).

Another more popular query was `requests vs urllib`, which shows [this](https://stackoverflow.com/questions/2018026/what-are-the-differences-between-the-urllib-urllib2-urllib3-and-requests-modul) question: `What are the differences between the urllib, urllib2, urllib3 and requests module?`. The answer with the most votes recommends to use `requests` for its simplicity and added features.

The Google Maps Python client library requires `requests` upon installation. I think that this library might be just a wrapper for requests.


## Google Maps API with Google Maps Python client library

Resources:

* [Github](https://github.com/googlemaps/google-maps-services-python)
* [Tests](https://github.com/googlemaps/google-maps-services-python/tree/master/tests)
* [Docs](https://googlemaps.github.io/google-maps-services-python/docs/index.html)

Install:

	$ pip install -U googlemaps --user

Output of installation was:

	Downloading https://files.pythonhosted.org/packages/cb/87/5cbe65cd19defe67472db7afd84963a77fbbbe4a764320a67d4a64282b61/googlemaps-4.4.1.tar.gz
	Requirement already satisfied, skipping upgrade: requests<3.0,>=2.20.0 in /usr/lib/python3.7/site-packages (from googlemaps) (2.22.0)
	Requirement already satisfied, skipping upgrade: chardet<3.1.0,>=3.0.2 in /usr/lib/python3.7/site-packages (from requests<3.0,>=2.20.0->googlemaps) (3.0.4)
	Requirement already satisfied, skipping upgrade: idna<2.9,>=2.5 in /usr/lib/python3.7/site-packages (from requests<3.0,>=2.20.0->googlemaps) (2.8)
	Requirement already satisfied, skipping upgrade: urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1 in /usr/lib/python3.7/site-packages (from requests<3.0,>=2.20.0->googlemaps) (1.25.7)
	Installing collected packages: googlemaps
	 Running setup.py install for googlemaps ... done
	Successfully installed googlemaps-4.4.1

Docs on the Python shell:

	>>> help(googlemaps)


Setup code:

	>>> import googlemaps
	>>> gmaps = googlemaps.Client(key='YOUR KEY')


Search for a stakehouse near Google's office:

	>>> place = gmaps.find_place(input="stakehouse", input_type="textquery", location_bias="circle:2000@37.4222339,-122.0854804", language="en")

	>>> place
	{'candidates': [{'place_id': 'ChIJsUEYn56wj4ARMg1qK1EVHyw'}], 'status': 'OK'}

It doesn't return much. Let's use `Basic fields`

	>>> place = gmaps.find_place(input="stakehouse", input_type="textquery", fields=["name", "formatted_address", "business_status", "geometry", "photos", "types"], location_bias="circle:2000@37.4222339,-122.0854804", language="en")

	>>> place
	{'candidates': [{'business_status': 'CLOSED_TEMPORARILY', 'formatted_address': '545 San Antonio Rd Suite 31, Mountain View, CA 94040, United States', 'geometry': {'location': {'lat': 37.4032079, 'lng': -122.1118804}, 'viewport': {'northeast': {'lat': 37.40471237989271, 'lng': -122.1105114701073}, 'southwest': {'lat': 37.40201272010727, 'lng': -12.1132111298927}}}, 'name': "Paul Martin's America Mountain View", 'photos': [{'height': 4048, 'html_attributions': ['<a href="https://maps.google.com/maps/contrib/11203600442766896285">Casey DuBose</a>'], 'photo_reference': 'CmRaAAAAit6MjPA4tMxwkAx61ZquIzBYndTl5zAcCV-bjUPhl0dm0S3giXjEANdqAvxvxsJvCehIChMcOCPVJwxIzHAQWW9Igv01P_R-gilhmU52I0MSRgBgWXh4g5N7wRQDPQKEhC2y0uoOD03_XFjS6o7xi0UGhTiLFIHq8rbIF68PRZaCoEjumKy_Q', 'width': 3036}], 'types': ['restaurant', 'food', 'point_of_interest', 'establishment']}], 'status': 'OK'}

Search for anything that contains `startup` near Google's office within `5,000 meters`:

	>>> place = gmaps.places_nearby(location=(37.4222339,-122.0854804), radius=5000, keyword="startup", language="en")

	>>> place
	{'html_attributions': [], 'results': [], 'status': 'ZERO_RESULTS'}

No results. Let's try again within `10,000 meters` (Max is 50,000)

	>>> place = gmaps.places_nearby(location=(37.4222339,-122.0854804), radius=10000, keyword="startup", language="en")

	>>> place
	{'html_attributions': [], 'next_page_token': 'CqQCGQEAALespF2ND-o3SI0I5SZR267A4XxtZ4LDBCBCG8SJ_IRp9ttbncIziuYJtpUNuP3pPan80VgualTqejpOwMQyHVIIKNv7MKqdJTBwVpbb6SOoSjskx6yDgaB
	d5WGiKBfi7TkrCtxe5yOvJYbU6t5KH2jLrqHMLg_4woyq0_TuZTICEpU1veSLv49pLfltDXPg0bKjZSwXejRSUrwFmSfEfRlopfUhBPZNFgGhl1_Qg2XG8R9aHhrPDNhYUoZWQ3HejWw3xVeMpS5_4w_43Qy0wRemnVCPSw7FHz3o
	AoCfFDFtGp66i3LlQlwQ2Vdraen-NyxoMOLKonL4YfSYst-6kyFzzCIy_Cr-w6VKCCoGJmPxLR07fjZoiE-c6pCfqepxIQC67lM0MvZV-sSAKkgp8eQRoUnTTz_OZwMEsZqsG7PzWFuQffv7Y', 'results': [{'business_st
	tus': 'OPERATIONAL', 'geometry': {'location': {'lat': 37.4522222, 'lng': -122.1661111}, 'viewport': {'northeast': {'lat': 37.45368197989271, 'lng': -122.1650791201073}, 'sou
	hwest': {'lat': 37.45098232010727, 'lng': -122.1677787798927}}}, 'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png', 'id': '83aa3dba2f9f4aeb
	b49ed92f74abe010398f16a', 'name': 'BootUp Ventures: Startup Ecosystem Co-Working, Office Suites & Event Space', 'opening_hours': {'open_now': False}, 'photos': [{'height': 1
	24, 'html_attributions': ['<a href="https://maps.google.com/maps/contrib/109071310568073474532">Boost Ventures</a>'], 'photo_reference': 'CmRaAAAAVHi9Mc5N4rwtg7oSunQr545R18P
	sgHgh92ODUQ4pL_Sc_s6nhBkk4_xK027AdctQEofpwVFlpTTkM2Bs-URTUqISKYOZqWBFgupe7NDTUSb68oC32Y8AV5x5iUbh65OEhAO71DTWNwWYDK2X04iPiaMGhTPZrlZvJcTN38b7lcMAXhOMevL5g', 'width': 2152}],
	'place_id': 'ChIJS7Ac0Qu7j4ARkgnXFqygEM8', 'plus_code': {'compound_code': 'FR2M+VH Menlo Park, California', 'global_code': '849VFR2M+VH'}, 'rating': 4.8, 'reference': 'ChIJS
	Ac0Qu7j4ARkgnXFqygEM8', 'scope': 'GOOGLE', 'types': ['point_of_interest', 'establishment'], 'user_ratings_total': 63, 'vicinity': '68 Willow Rd, Menlo Park'}, {'business_sta
	us': 'OPERATIONAL', 'geometry': {'location': {'lat': 37.458447, 'lng': -122.1729745}, 'viewport': {'northeast': {'lat': 37.45983937989272, 'lng': -122.1715244701073}, 'south
	est': {'lat': 37.45713972010728, 'lng': -122.1742241298927}}}, 'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png', 'id': '1a4337e0ce2b385bb9
	05778fbc45fb6a0daba2c', 'name': 'Startup Capital Ventures', '

	>>> [item['name'] for item in place['results']]
	['BootUp Ventures: Startup Ecosystem Co-Working, Office Suites & Event Space', 'Startup Capital Ventures', 'Startup Rabbit', 'Cab Startup', 'Startup Launchpad, Inc', 'BootUpWorld', 'Startup Realty', 'Plug and Play Tech Center', 'Mercury', 'Palo-Alto Startup House', 'Bay Area Startups Services, Inc', 'Nuro', 'The Hive', 'Starship Technologies', EquityBee', 'Fyde', 'HelloStartups', 'sFoundation Inc.', 'Y Combinator', 'Osaka Innovation Hub Silicon Valley Office']

Find the lat,long of Google's office:

	>>> gmaps_geo = googlemaps.Client(key='YOUR GEOCODING KEY')
	>>> place = gmaps_geo.geocode(address="1600 Amphitheatre Parkway, Mountain View, CA")
	
	>>> place
	[{'access_points': [{'access_point_type': 'TYPE_SEGMENT', 'location': {'latitude': 37.4213102, 'longitude': -122.0852443}, 'location_on_segment': {'latitude': 37.4212816, 'lngitude': -122.0852472}, 'place_id': 'ChIJpdYZQgK6j4ARnmfrthhmnZ8', 'segment_position': 0.5404474139213562, 'unsuitable_travel_modes': []}], 'address_components': [{'long_nae': '1600', 'short_name': '1600', 'types': ['street_number']}, {'long_name': 'Amphitheatre Parkway', 'short_name': 'Amphitheatre Pkwy', 'types': ['route']}, {'long_name': 'Muntain View', 'short_name': 'Mountain View', 'types': ['locality', 'political']}, {'long_name': 'Santa Clara County', 'short_name': 'Santa Clara County', 'types': ['administative_area_level_2', 'political']}, {'long_name': 'California', 'short_name': 'CA', 'types': ['administrative_area_level_1', 'political']}, {'long_name': 'United States', 'sort_name': 'US', 'types': ['country', 'political']}, {'long_name': '94043', 'short_name': '94043', 'types': ['postal_code']}], 'formatted_address': '1600 Amphitheatre Pkwy, ountain View, CA 94043, USA', 'geometry': {'location': {'lat': 37.4223105, 'lng': -122.0846329}, 'location_type': 'ROOFTOP', 'viewport': {'northeast': {'lat': 37.423659480295, 'lng': -122.0832839197085}, 'southwest': {'lat': 37.42096151970851, 'lng': -122.0859818802915}}}, 'place_id': 'ChIJtYuu0V25j4ARwu5e4wwRYgE', 'plus_code': {'compound_code' 'CWC8+W4 Mountain View, CA, United States', 'global_code': '849VCWC8+W4'}, 'types': ['street_address']}]


Pulling the 2nd page and next pages:

**TODO**

## Google Maps API with Python Requests

This is how you use `requests`:

	import requests

	userdata = {"firstname": "Homer", "lastname": "Simpson", "password": "beer123"}
	resp = requests.post('http://www.springfield.com/user', data=userdata)
	resp.json()


**TODO**

## Google Maps API with Python http.client

In comparison to `http.client`:

	import http.client

	conn = http.client.HTTPSConnection("springfield.com)
	key = api_key
	auth_token = {'Authorization': 'key '+key}
	payload = "{}"
	headers = auth_token
	params = '/api/v3/?page_size='+str(quantity)
  
    conn.request("GET", params, payload, headers=headers)

    # Get the response, decode the bytes response
    response = conn.getresponse()
    string = response.read().decode()

    # Load the string into JSON
    json_data = json.loads(string)

**TODO**

## Google Maps API Billing

**TODO**