---
layout: post
title: "Tableau Tutorial Visualization - CO2 World Dataset"
redirect_from:
  - /tableau-tutorial-visualization-co2-world-dataset.html
categories: [Data Analytics]
image: assets/images/11.jpg
tags: [tableau, data visualization, analytics]
---

A Tableau tutorial to build a visualization of emissions from a CO2 world dataset.

![Tableau Tutorial Visualization - Dashboard]({{ site.baseurl }}/assets/images/tableau-tutorial-visualization-dashboard.jpg)

This **Tableau tutorial** is based on Tableau Public Overview Video 1 as seen [here](https://public.tableau.com/en-us/s/resources)

Using Tableau 10.

## Connect to File > Excel

![Tableau Tutorial Visualization - Connect Excel File]({{ site.baseurl }}/assets/images/tableau-tutorial-connect-excel-file.jpg)

## Drag the sheet CO2 Data Cleaned

![Tableau Tutorial Visualization - Drag sheet]({{ site.baseurl }}/assets/images/tableau-tutorial-drag-sheet.jpg)

## Go to Worksheet.

Rename the sheet: `CO2 Per Capita`.

Drag Dimensions > Country Name to the middle of the canvas.

The measure, longitude is added to columns.

The measure, latitude is added to rows.

A world map is created with dots labeling each country from the dataset.

![Tableau Tutorial Visualization - World Map]({{ site.baseurl }}/assets/images/tableau-tutorial-world-map.jpg)

## Drag a Measure to the canvas

Drag Measure > CO2 Per Capita to the middle of the canvas.

Click on the USA dot. It shows this data:

* Country Name: United States
* CO2 per capita (metric tons): 1,004

On the popup click on View Data

![Tableau Tutorial Visualization - View Data]({{ site.baseurl }}/assets/images/tableau-tutorial-datapoint-view-data.jpg)

It has two tabs:

* Summary
* Full data

The summary shows longitude, latitude, and CO2 of 1,003.78. By default, Tableau calculates the `SUM` of all data points for this country.

Review Full Data:

* 52 rows
* From 1960 to 2011
* CO2 per capita is on average 19 metric tons.

## Drag a Dimension to Filters

Drag `Year` to Filters.

![Tableau Tutorial Visualization - Using Filters]({{ site.baseurl }}/assets/images/tableau-tutorial-drag-dimension-year.jpg)

On Filters > Year > Dropdown. Switch from Continuous to Discrete. A new popup shows this Dimension as checkboxes.

Click on the Year dropdown again and select `Show Filter`. The filter now appears on the right margin.

## Add Color and Size

Drag the Measure `CO2 per Capita` to the Marks > Color button.

The filter appears on the right margin.

Use the dropdown to `Edit Colors`.

On the Palette switch from Automatic to Red Black Diverging and select `Reversed`.

The most robust colors should be:

* Qatar
* UAE
* Luxembourg

Size was added as default when we previously dragged `CO2 Per Capita`.

## Filter by Year

Select the last year on the dataset: 2011.

The brightest colors are:

* Qatar: 44.02
* Kuwait: 28.10
* Trinidad and Tobago: 37.14
* Aruba: 23.92
* Brunei: 24.39

I wondered why. Here is what I found about Trinidad and Tobago:

* Most industrialized economy in the English-speaking Caribbean.
* Top Caribbean producer of oil and gas (40% of GDP, 80% of exports)
* Manufactures food products, beverages, cement.

In 2011, Trinidad and Tobago produced twice as much CO2 than the US. Isn't that insane?

TandT has a population of 1.3 million people, just the population of Dallas.

They pollute more than these countries:

* US and Canada combined
* Mexico, Central America and South America combined
* Six times China
* All Africa combined.
* 30 times India.

## CO2 Emissions over time

This dataset only goes up to 2011. Here is the visualization of CO2 emissions over time.

Create a new sheet. Rename to `CO2 Emissions Over Time`.

Drag CO2 Per Capita to Rows.

Add Year to Columns.

Drag Country Name to Marks > Detail.

Drag CO2 Per Capita to Marks > Color.

Edit the Color from Automatic to Red Black Diverging and select `Reversed`.

![Tableau Tutorial Visualization - Time Series]({{ site.baseurl }}/assets/images/tableau-tutorial-visualization-over-time.jpg)

Here are some interesting things:

* Qatar went from 3 to 99 metric tons in one year.
* Trinidad and Tobago went from 22 (2005) to 35.6 (2006).

Here is another one that is interesting:

* Brunei CO2 went from 4 mt (1969) to 63 (1970).
* 10 years later went down to 7 metric tons.
* In 2006 it produced 11 metric tons.
* In 2007 it went up to 24.

## Create a Dashboard

Go to the icon next to create a new worksheet.

Drag both sheets from the left window to the canvas.

On the right margin on the filters, right click on each window and click on Remove from Dashboard.

From the bottom left. Go to `Objects` and drag a Text to add a title.

![Tableau Tutorial Visualization - Dashboard]({{ site.baseurl }}/assets/images/tableau-tutorial-visualization-dashboard.jpg)