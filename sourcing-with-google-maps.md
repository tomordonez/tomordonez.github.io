---
layout: page
title: "Sourcing with Google Maps API"
permalink: "/sourcing-with-google-maps.html"
comments: false
---

Google has a cornucopia of data services. Someone said I should have more powerful words in my vocabulary, so there you go Grammarly. I yet have to find a way to use "rubric" in a sentence. I prefer the term Rubik as in Rubik's cube. Google API is a Rubik's cube.

This year I took a 3-mo Bootcamp in big data and data visualization. It had Java, Python, Scala, JavaScript, Tableau, Hadoop, Spark, AWS, and Azure. It wasn't a programming class. I was supposed to know already these technologies to be able to do the assignments. I spent countless hours every week of my free time reading, studying, and practicing.

Then during the summer, I learned Power BI, GCP, and became a Certified ScrumMaster. Now that I bragged about my insatiable desire for learning, here is a hint.

You don't have to learn all these technologies.


## Examples

I love it when tutorials start with examples. Let's skip the setup for now, so I don't lose you.

I am using the Google Maps API to find some data.

Just to test a response. Let's search the `id` that corresponds to an address and store the result in a variable:

	>>> place = gmaps.find_place(input="1600 Amphitheatre
	 Parkway, Mountain View, CA", input_type="textquery")
	

Now let's see what's stored in this variable:

	>>> place
	{'candidates': [{'place_id': 'ChIJtYuu0V25j4ARwu5e4wwRYgE'}], 
	'status': 'OK'}

It returns the ID that corresponds to this address.

Not impressed, right?

Let's search for a steakhouse within 2000 meters of Google’s HQ office.

This is the command:

	>>> place = gmaps.find_place(input="steakhouse", input_type="textquery", 
	fields=["name", "formatted_address", "business_status", "geometry", 
	"photos", "types"], location_bias="circle:2000@37.4222339,-122.0854804", 
	language="en")

It returns the following:

	>>> place
	{'candidates': [{'business_status': 'CLOSED_TEMPORARILY', 
	'formatted_address': 	'545 San Antonio Rd Suite 31, 
	Mountain View, CA 94040, United States', 'geometry': 
	{'location': {'lat': 37.4032079, 'lng': -122.1118804}, 
	'viewport': {'northeast': 	{'lat': 37.40471237989271, 
	'lng': -122.1105114701073}, 'southwest': 
	{'lat': 37.40201272010727, 'lng': -12.1132111298927}}}, 
	'name': "Paul Martin's America Mountain View", 'photos': 
	[{'height': 4048, 'html_attributions': 
	['<a href="https://maps.google.com/maps/
	contrib/11203600442766896285">Casey DuBose</a>'], 
	'photo_reference': 'CmRaAAAAit6MjPA4tMxwkAx61ZquIzBYndTl5zAcCV-
	bjUPhl0dm0S3giXjEANdqAvxvxsJvCehIChMcOCPVJwxIzHAQWW9Igv01P_R-
	gilhmU52I0MSRgBgWXh4g5N7wRQDPQKEhC2y0uoOD03_XFjS6o7xi0UGhTiLFI
	Hq8rbIF68PRZaCoEjumKy_Q', 'width': 3036}], 'types': ['restaurant', 
	'food', 'point_of_interest', 'establishment']}], 'status': 'OK'}

It found a place called "Paul Martin's America Mountain View." Let's confirm and google this place. On Google maps, the result shows:

* Temporarily closed
* 545 San Antonio Rd Suite 31, Mountain View, CA 94040


## Ideas

Now let's think of ideas and use cases. These are the API services available:

* Places
* Directions
* Geocoding
* Geolocation
* Roads

If you use "Places",  you can send these types of requests:

* Find Place
* Nearby search
* Text search

With "Find Place" requests, you can use a query parameter like name, address, or phone number.


Think of the possibilities.

You could try a request like:

Find anything near anywhere to visualize the data on a map.


With "Nearby Search" requests, you can search by keyword near a latitude and longitude.

I tried this:

	>>> place = gmaps.places_nearby(location=(37.4222339,-122.0854804), 
	radius=5000, keyword="startup", language="en")


After some Python code to extract the data, the result is this:

	['BootUp Ventures: Startup Ecosystem Co-Working, Office Suites & Event Space', 
	'Startup Capital Ventures', 'Startup Rabbit', 'Cab Startup', 
	'Startup Launchpad, Inc', 'BootUpWorld', 'Startup Realty', 
	'Plug and Play Tech Center', 'Mercury', 'Palo-Alto Startup House', 
	'Bay Area Startups Services, Inc', 'Nuro', 'The Hive', 
	'Starship Technologies', EquityBee', 'Fyde', 'HelloStartups', 
	'sFoundation Inc.', 'Y Combinator', 
	'Osaka Innovation Hub Silicon Valley Office']

These are the results for requesting anything with the keyword "startup" within 5000 meters of Google's HQ.


## Dig a hole

I looked up "BootUpWorld," and it seems like a hybrid Bootcamp/coworking space. The website has interesting directory pages with Linkedin profiles.

This one is cool. "Palo-Alto Startup House." It looks just like the house from the Silicon Valley show. Always blue, always blue, always blue.

Here is another one, "Plug and Play Tech Center." Mmm interesting. It has a Wikipedia page, and it says they were early investors in Google, Paypal, Dropbox, etc.


## Geocoding data

If you love maps as I do. You can convert an address to latitude and longitude. It's pretty easy to do one at a time by looking up the lat/long directly into Google Maps. However, what if you want to get the data from hundreds of addresses.

Try this command:

	>>> place = gmaps_geo.geocode(address="1600 
	Amphitheatre Parkway, Mountain View, CA")

Here is what some of the result shows

	>>> place
	...'location': {'latitude': 37.4213102, 'longitude': -122.0852443}

With an additional effort in Python you can requests streams of data and export them to CSV files. You can then use this data for insights, or to dig more holes to find treasures.

If you found sourcing with Google Maps interesting or if you have questions about how to set this up. Feel free to message me on [Linkedin](https://www.linkedin.com/in/tomordonez/)