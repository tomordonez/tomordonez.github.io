---
layout: post
title: "Data Wrangling with OpenRefine on Linux"
redirect_from:
  - /data-wrangling-openrefine-linux.html
categories: [Data Analytics]
image: assets/images/9.jpg
tags: [data wrangling, openrefine, analytics, linux]
---

OpenRefine is an open source desktop application for data wrangling.

Source:

* [Download](https://openrefine.org/download.html)
* [Install](https://github.com/OpenRefine/OpenRefine/wiki/Installation-Instructions)

## OpenRefine on Windows

* Download the file
* Unzip and run the executable
* To stop the web server, on the command line do `Ctrl C`.

## OpenRefine on Linux

* Download the tar file. Size is about `100 MB`
* Tar the file. For example: `tar xzf openrefine-linux-3.2.tar.gz`
* Open the directory: `cd openrefine-3.2`
* Start: `./refine`

(Shut down the webserver with `Ctrl C`)

Upon start the terminal shows:

	WARNING: OpenRefine is not tested and not recommended for use with Java versions greater than 12.
	You have 7653M of free memory.
	Your current configuration is set to use 1400M of memory.
	OpenRefine can run better when given more memory. Read our FAQ on how to allocate more memory here:
	https://github.com/OpenRefine/OpenRefine/wiki/FAQ:-Allocate-More-Memory
	Starting OpenRefine at 'http://127.0.0.1:3333/'

	10:40:59.487 [refine_server] Starting Server bound to '127.0.0.1:3333' (0ms)
	10:40:59.488 [refine_server] refine.memory size: 1400M JVM Max heap: 1468006400 (1ms)
	10:40:59.499 [refine_server] Initializing context: '/' from '/home/tom/Documents/projects/openrefine-3.2/webapp' (11ms)
	10:41:01.007 [refine_server] Creating new workspace directory /home/tom/.local/share/openrefine (1508ms)
	SLF4J: Class path contains multiple SLF4J bindings.
	SLF4J: Found binding in [jar:file:/home/tom/Documents/projects/openrefine-3.2/server/target/lib/slf4j-log4j12-1.7.18.jar!/org/slf4j/impl/StaticLoggerBinder.class]
	SLF4J: Found binding in [jar:file:/home/tom/Documents/projects/openrefine-3.2/webapp/WEB-INF/lib/slf4j-log4j12-1.7.18.jar!/org/slf4j/impl/StaticLoggerBinder.class]
	SLF4J: See http://www.slf4j.org/codes.html#multiple_bindings for an explanation.
	SLF4J: Actual binding is of type [org.slf4j.impl.Log4jLoggerFactory]
	10:41:01.390 [refine] Starting OpenRefine 3.2 [55c921b]... (383ms)
	10:41:01.390 [refine] initializing FileProjectManager with dir (0ms)
	10:41:01.390 [refine] /home/tom/.local/share/openrefine (0ms)
	10:41:01.417 [FileProjectManager] Failed to load workspace from any attempted alternatives. (27ms)
	WARNING: An illegal reflective access operation has occurred
	WARNING: Illegal reflective access by org.python.core.PySystemState (file:/home/tom/Documents/projects/openrefine-3.2/webapp/extensions/jython/module/MOD-INF/lib/jython-standalone-2.7.1.jar) to method java.io.Console.encoding()
	WARNING: Please consider reporting this to the maintainers of org.python.core.PySystemState
	WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
	WARNING: All illegal access operations will be denied in a future release
	Fontconfig warning: "/usr/share/fontconfig/conf.avail/05-reset-dirs-sample.conf", line 6: unknown element "reset-dirs"
	Opening in existing browser session.
	10:41:19.486 [refine] POST /command/core/load-language (18069ms)
	10:41:19.578 [refine] GET /command/core/get-preference (92ms)
	10:41:19.624 [refine] POST /command/core/load-language (46ms)
	10:41:19.641 [refine] POST /command/core/load-language (17ms)
	10:41:19.833 [refine] POST /command/core/get-importing-configuration (192ms)
	10:41:19.885 [refine] GET /command/core/get-all-project-tags (52ms)
	10:41:19.975 [refine] GET /command/core/get-all-project-metadata (90ms)
	10:41:20.077 [refine] GET /command/core/get-languages (102ms)
	10:41:20.342 [refine] GET /command/core/get-version (265ms)
	10:41:20.566 [refine] GET /command/database/saved-connection (224ms)
	10:41:20.632 [refine] POST /command/core/set-preference (66ms)
	10:41:20.664 [refine] POST /command/core/set-preference (32ms)

On the browser OpenRefine opens on:

	http://127.0.0.1:3333/


## Uploading data to OpenRefine

Get data from:

* This computer
* Web Addresses
* Clipboard
* Database
* Google data

Getting data from your computer:

* Use `upload`
* This creates a preview with some options.
* On the top right corner `Create Project`


## Text Facet to Group data

Go to a column drop down.

* Go to `Facet`
* Then `Text Facet`

On the left side, it groups together identical cells for that column, including the number of cells for each group.

As seen on [this](https://www.youtube.com/watch?time_continue=13&v=B70J_H_zAWM&feature=emb_title) Youtube video. Selecting `Text Facet` for one of the columns to review all the data related `FFP`.

For example, selecting one of the groups that has `FFP` and a count of `512`, filters the data on the right view.

The next group is also called `FFP` with a count of `1`. Click on `edit` for that group to see why. It has an empty trailing whitespace at the end of the word `FFP_`. Remove the blank space and click `apply`. The groups then will merge. Now the `FFP` group has `513` rows and a total of `814` groups.


## Remove leading and trailing whitespace

Go to a column drop down.

* Go to `Edit cells`
* Then `Common transforms`
* Then `Trim leading and trailing whitespace`

Following the same video. After removing leading and trailing whitespace. The group count changed from `814` to `785`.

The column is renamed from `FFP` to `Firm Fixed Price` and then `apply`.


## Sort the Facets

On the left view, sort the facets by `name` or by `count` to see the largest groups.

The video shows that there are all sorts of combinations of the word `Firm Fixed Price` which can be changed to group all the data better.


## Cluster Facets

After sorting by `count`, next to it there is a `Cluster` button. This feature tries to group the groups based on `Keying Functions`.

The `Keying Functions` show a drop down with:

* fingerprint
* ngram-fingerprint
* double-metaphone

Select the groups that you want to merge. There is a `checkbox `for each group. Next to the checkbox there is a field `New Cell Value` if you want to change the name of the cell.

If you feel wild, you can `Select All` on the bottom left and click on `Merge Selected & Close` on the bottom right.


## Correcting Mistakes

On the left view, there is a tab `Undo/Redo`.

Then select one of the rows that made a previous change. Then click `Apply`.


## Create a Numeric Facet

On the video, one of the columns says `Total value`.

* Drop down
* Facet
* Numeric Facet

On the left view, it shows a range of the values, going from `0.0` to `20,000,000.00`.

It also shows a mini visualization of the distribution. In this case the distribution only shows a rectangle on the leftmost side.

On the top right of this visualization, click on `change`.

A popup window says `Edit Facet's Expression based on Column Total value`.

There is a field called `Expression`

Type `value.log()`.

It shows a preview of the change...then click `OK`.

It now shows a normal distribution. It has some options below:

* Numeric `5173` (checked)
* Non-numeric `0` (not checked)
* Blank `0` (not checked)
* Error `27` (checked)

Select only the `Error` rows. Which shows all the values as zero.

When calculating `value.log()` of `0`, the result is negative infinity. In the video she asks, why is there a zero value for total value?

You can drag the margins of the distribution visualization to preview data on the right view.


## Getting data from a Wikipedia list

This [video](https://www.youtube.com/watch?v=cO8NVCs_Ba0&feature=emb_title) blew my mind. I didn't know you could do this:

Go to [this](https://en.wikipedia.org/wiki/Filmfare_Award_for_Best_Actress) page that shows awards about movies.

Scroll down to the section that says `Winners and nominees`.

Click on the `edit` to the right of this title.

It now shows some code as seen here:

	==Winners and nominees==

	{| class="wikitable"
	|+ Table key
	|-
	!scope="row" style="text-align:center;" style="background:#FAEB86; height:20px; width:20px"
	| Indicates the winner
	|}
	===1950s===

	{| class="wikitable sortable" rowspan=2 style="text-align: left;" border="2" cellpadding="5"
	|-
	!scope="col" style="width:3%; text-align:center;"| Year
	!scope="col" style="width:3%;text-align:center;"| Photos of winners
	!scope="col" style="width:15%;text-align:center;"| Actor
	!scope="col" style="width:15%;text-align:center;"| Role(s)
	!scope="col" style="width:15%;text-align:center;"| Film
	|-
	! scope="row" rowspan=2 style="text-align:center" | 1954 <br /><small>[[1st Filmfare Awards|(1st)]] </small>
	|rowspan=2 style="text-align:center"|
	| style="background:#FAEB86;" |
	| style="background:#FAEB86;" |
	| style="background:#FAEB86;" | '''''[[Baiju Bawra (film)|Baiju Bawra]]'''''


Copy all the code that appears on that window and save it into a `txt` file.

Import this file into OpenRefine.

For the option `When parsing text files` uncheck `Split into columns`.

For `Header lines` change to `0`.

Then `Create Project`.


## Cleaning Wikipedia data code

Remove the rows that show years such as this:

	===1950s===

On the column drop down, select `Text filter`.

On the left view that has a field titled `Column`. Type `===`, which filters the table on the right to all rows that contain these characters.

On this filtered view go to drop down:

* Edit rows
* Remove all matching rows
* Then clear the text filter on the left view (close the `Column` window)

On the video, she explains the strategy for using OpenRefine as:

* Isolating all the rows you want to change using filters and facets
* Change them all at the same time.

Remove all the characters that describe a bolded text. In the code, bold text is enclosed within three single quotes such as this:

	'''{{sort|Gauri|Gauri}}'''

Go to:

* Drop down
* Edit cells
* Transform

It opens a popup window `Custom text transform on column Column`.

Inside `Expression` field, type `value.replace("'''", "")`, which means to replace three single quotes `"'''"` with empty `""`. Click `OK` to apply.


## Create another column from existing column

The current code is a bit different than the one shown on the video.

On the video, it shows that each winner is on a bullet point, and the nominees on an indented sub bullet point.

On the code, the idented rows start with two stars `**`.

Create a column that describes if the row corresponds to a winner or a nominee.

* Drop down
* Edit column
* Add column based on this column
* New column name: `Is Winner`
* Expression: `not(value.startsWith("**"))`
* Click `OK`

On the new column `Is Winner`

* Drop down
* Facet
* Text facet
* On the left view, select `True` to view the winner rows.

Extract the years

* Column drop down
* Edit column
* Add column based on this column
* New column name: `Year`
* Expression: `value[1,5]`

Remove the years from the original column

* Column drop down
* Edit cells
* Transform
* Expression: `value.substring(6)`
* This means send to `value` the substring starting from character `6`.

Remove the `Is Winner` facet to view the new columns created with respective rows.

The nominees are missing the year, however they appear right after a winner of the same year.

* Year (column) drop down
* Edit cells
* Fill down
* This copies each year into the blank cells below

Separate the first column into the columns `Actress`, `Film`, `Character`.

* Column drop down
* Edit column
* Split into several columns
* By separator: ` - ` (space dash space)
* Split into `2` columns at most
* A `Column 2` is created.

Separate the data from `Column 2`

* Column2 drop down
* Edit column
* Split into several columns
* Separator ` as ` (space as space)
* Split into `2` columns at most

Then rename the columns. Drop down, edit column, `Rename this column`

* Column 1: Actress
* Column 2: Film
* Column 3: Character

Export the data into Wiki syntax

* Top right
* Export
* The default is `JSON`
* Follow the video to see how to setup the Wiki syntax


## Extract operations

The `Undo/Redo` allows the extract the operations done to a dataset.

* Click on `Extract`
* Popup window `Extract Operation History`
* Operations selected on the left are encoded as `JSON` (preview on the right)
* Copy the `JSON` code
* Switch back to another project you want to clean
* Go to `Undo/Redo`
* Click `Apply`
* Paste the `JSON` code on that window
* Click on `Perform Operations`


## Get latitude and longitude for address rows from an external source

This [video](https://www.youtube.com/watch?v=5tsyz3ibYzk&feature=emb_title) shows a dataset with a column `Headquarter` that has the addresses for each `Company` column.

She wants to get the latitude and longitude for each address using the API from `nominatim.openstreetmap.org`

* Headquarters column
* Drop down
* Edit column
* Add column by fetching URLs
* Expression: `'http://nominatim.openstreetmap.org/search?format=json&email=somemail@gmail.com%app=google-refine&q=' + escape(value, 'url')`
* Throttle delay: `1500`
* New column name: `json`
* Then it takes some time to load the data.

A new column `json` appears on the right view with values for each row.

* json column
* Drop down
* Edit column
* Add column based on this column
* Expression: `with(value.parseJson()[0], pair, pair.lat + ',' + pair.lon)`
* New column name: `lat/lon`


## Translate rows from an external source

If the dataset has rows in different languages in a column called `text`. Follow the API requirements to construct the URL.

* Drop down
* Edit column
* Add column by fetching URLs
* Expression: `"http://ajax.googleapis.com/ajax/services/language/detect?..." + escape(value.substring(0, 128), "url")`
* New column name: `json`
* Throttle delay: `100`

A new column `json` is loaded

* json column
* Drop down
* Edit column
* Add column based on this column
* Expression: `value.parseJson().responseData.language`
* New column name: `language`

## Reconcile data with external sources

The video also shows a way to reconcile your data with external sources.

This dataset has two columns `film` and `rating`

* film column
* Drop down
* Reconcile
* Start reconciling
* `Freebase` reconciliation service
* It loads a list of types
* Select the type that matches this `film` column
* Select the type `Film`
* Click on `Start Reconciling`

Fetch more data from Freebase

* film column
* drop down
* edit column
* Add columns from Freebase
* Options appear for `Suggested Properties`
* Select `Directed by` and `Netflix ID`
* Click `OK`

## OpenRefine Docs

Please follow these resources:

* [OpenRefine wiki](https://github.com/OpenRefine/OpenRefine/wiki)
* [Screencasts](https://github.com/OpenRefine/OpenRefine/wiki/Screencasts)