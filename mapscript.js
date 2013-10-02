function initialize() 
{

	var mapOptions = 
	{
		center: new google.maps.LatLng(51.5171, -0.1062),
		zoom: 7,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var aMap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	var mapStyle = 
	[
		{
			featureType: "everything",
			stylers:
			[
				{visibility: "off"}
			]
		},
		{
			featureType: "road",
			stylers:
			[
				{hue: "#000000"},
				{lightness: -20},
				{visibility: "on"}
			]
		},
		{
			featureType: "road",
			elementType: "labels",
			stylers:
			[
				{visibility: "off"}
			]
		}	
	];

	aMap.setOptions({styles: mapStyle});

}

google.maps.event.addDomListener(window, 'load', initialize);
