# Shortest-Path-Distance-Using-ESRI
**Find the Shortest Path/Distance between destinations using ESRI API and Plugins**

In this repository I discussed about to find the shortest path and direction between one location to another using ESRI 
 
<ul>
<li> Enter the Source and Destination address 
<li> Options to add stops between address
<li> Options to select speed units
	<ul>
		<li> KM
		<li> MI
	</ul>
<li> Options to different type  travel selection 
	<ul>
		<li> Driving Distance/Time
		<li> Rural Driving Distance/Time
		<li> Trucking Distance/Time
		<li> Walking Distance/Time
	</ul>
<li> Options to select travel options now or later
	<ul>
		<li> Leave now
		<li> Depart at
		<li> Time Unspecified
	</ul>
</ul>

Select the address in option 1 and option 2 (Note: If you would like to add more destinations click ADD to add destination address)

Code description - **(doji/javascript)**

- Initialize map object using **"esri/map"** class and setup the base attributes based on the requirement.
<pre> 
var map = new Map("map", {
          basemap: "streets",
          center:[-98.56,39.82],
          zoom: 4
        });
</pre> 
- Initialize direction object using **"esri/dijit/Directions"** class and add the routeTaskUrl
<pre> 
  var directions = new Directions({
          var directions = new Directions({
          map: map,
          routeTaskUrl: "https://utility.arcgis.com/usrsvcs/appservices/srsKxBIxJZB0pTZ0/rest/services/World/Route/NAServer/Route_World"
        },"dir");
        directions.startup();
      });
      </pre> 
- Initiate direction by 
<pre>directions.startup();</pre> 

Add the proxy handler to handle communications with the Routind and Direction Service 
- I build this application using .Net Framework so used **"proxy.ashx"** refer the Service Proxy - https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/working-with-proxies/
