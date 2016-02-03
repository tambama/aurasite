var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: -17.782296,
				lng: 31.117628
			  });
			  
			  var marker = map.addMarker({
			      lat: -17.782296,
			      lng: 31.117628,
	            title: 'Aura Group, Inc.'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat: -17.782296,
		        lng: 31.117628
		      });
		    });
		}        

    };
}();