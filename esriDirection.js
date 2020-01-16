      require([
        "esri/map", "esri/dijit/Directions", "dojo/parser",
        "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!"
      ], function(
        Map, Directions, parser
      ) {
        parser.parse();

		console.log("Map instantiated.");
        var map = new Map("map", {
          basemap: "streets",
          center:[-98.56,39.82],
          zoom: 4
        });

        // default will point to ArcGIS world routing service
        // here we use a service proxy to access that service without providing credentials
		// If you have credentials use below API and include clientID and clientSecretKey using "proxy"
		 /**
             * Esri Geocode service is required for: -
             * Geocoding (address to co-ordinates)
             * Reverse geocoding (co-ordinates to address) operations.
			 esriGeocodeServiceURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
         */
        var directions = new Directions({
          map: map,
          routeTaskUrl: "https://utility.arcgis.com/usrsvcs/appservices/srsKxBIxJZB0pTZ0/rest/services/World/Route/NAServer/Route_World"
        },"dir");
        directions.startup();
      });
