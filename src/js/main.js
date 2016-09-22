   /** These are the places that will
                    be shown to the user.**/

                    var initialPoint = [
                    {
                      "name": "La Sagrada Familia",
                      "location": {"lat": 41.4036299, "lng": 2.1721671},
                      "fs_id": "4adcda50f964a520544121e3"
                    },
                    {
                      "name": "La Rambla",
                      "location": {"lat": 41.3806562, "lng": 2.1716642},
                      "fs_id": "4e04dda152b1cef647d55881"
                    },
                    {
                      "name": "Park Güell",
                      "location": {"lat": 41.4144948, "lng": 2.1505058},
                      "fs_id": "4b76bca2f964a520975b2ee3"
                    },
                    {
                      "name": "Parc de la Ciutadella",
                      "location": {"lat": 41.388123, "lng": 2.1838265},
                      "fs_id": "4adcda50f964a5203b4121e3"
                    },
                    {
                      "name": "Casa Batlló",
                      "location": {"lat": 41.3916408, "lng": 2.1626786},
                      "fs_id": "4adcda51f964a520aa4121e3"
                    },
                    {
                      "name": "Montjuïc",
                      "location": {"lat": 41.3639993, "lng": 2.1587383},
                      "fs_id": "5453c6cf498e75ddfe254ab2"
                    },
                    {
                      "name": "Camp Nou Stadium",
                      "location": {"lat": 41.380896, "lng": 2.1206311},
                      "fs_id": "507fe73fd63e93639fd2a84f"
                    },
                    {
                      "name": "Palau de la Música Catalana",
                      "location": {"lat": 41.3875752, "lng": 2.1731241},
                      "fs_id": "4af1b973f964a52083e221e3"
                    },
                    {
                      "name": "Museu Picasso de Barcelona",
                      "location": {"lat": 41.385216, "lng": 2.178704},
                      "fs_id": "4b55e65af964a52054f527e3"
                    },
                    {
                      "name": "CosmoCaixa Barcelona",
                      "location": {"lat": 41.412972, "lng": 2.1293623},
                      "fs_id": "4bb7834598c7ef3b0ae12f02"
                    },
                    {
                      "name": "Poble Espanyol",
                      "location": {"lat": 41.3688085, "lng": 2.1460845},
                      "fs_id": "4adcda5af964a520504421e3"
                    },
                    {
                      "name": "Columbus Monument, Barcelona",
                      "location": {"lat": 41.3757974, "lng": 2.1755696},
                      "fs_id": "4b9cfc34f964a5209c8636e3"
                    },
                    {
                      "name": "Casa Museu Gaudi",
                      "location": {"lat": 41.4044181, "lng": 2.158967},
                      "fs_id": "4adcda52f964a520d34121e3"
                    }
                    ]

                    // Foursquare API Url parameters in global scope
                    var BaseUrl = "https://api.foursquare.com/v2/venues/",
                        fsClient_id = "client_id=AT0ECWQZ2FSMLVFY0RMA4L05YDQGGYUFHRR1YRRRD0RLOLXC",
                        fsClient_secret = "&client_secret=JOJY3UZPPBNZQ1IPGC2MCODJLPBC2QLIZV2HE31ANCY4PUAT",
                        fsVersion = "&v=20161110";


                    // Create global variables to use in google maps
                    var map,
                      infowindow,
                      bounds;

                    //initmap() is called when page is loaded
                    function initMap() {
                      "use strict";

                      //Google map elements - set custom map marker
                      var image = {
                        "url": "img/star.ico",
                        // This marker is 32 pixels wide by 32 pixels high.
                        "size": new google.maps.Size(32, 32),
                        // The origin for this image is (0, 0).
                        "origin": new google.maps.Point(0, 0),
                        // The anchor for this image is the base of the flagpole at (0, 32).
                        "anchor": new google.maps.Point(0, 32)
                      };

                      //Google map elements - map style from https://snazzymaps.com/
                      var mapOptions = {
                        "center": {
                          "lat": 41.3910101,
                          "lng": 2.1535417,
                        },
                        zoom: 13,
                        styles: [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "saturation": 36
                        }, {
                            "color": "#000000"
                        }, {
                            "lightness": 40
                        }]
                    }, {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#000000"
                        }, {
                            "lightness": 16
                        }]
                    }, {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 20
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 17
                        }, {
                            "weight": 1.2
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "on"
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 20
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "saturation": "-100"
                        }, {
                            "lightness": "-54"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "lightness": "0"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 21
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "saturation": "-89"
                        }, {
                            "lightness": "-55"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 17
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 29
                        }, {
                            "weight": 0.2
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 18
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 16
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 19
                        }]
                    }, {
                        "featureType": "transit.station",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "saturation": "-100"
                        }, {
                            "lightness": "-51"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 17
                        }]
                    }],
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControl: false,
                        mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                        }
                      };
                      map = new google.maps.Map(document.getElementById("map"), mapOptions);
                      infowindow = new google.maps.InfoWindow({
                        maxWidth: 150,
                        content: "Barcelona"
                      });
                      bounds = new google.maps.LatLngBounds();

                      // Close infowindow when clicked elsewhere on the map
                      map.addListener("click", function(){
                        infowindow.close(infowindow);
                      });

                      // Center map upon window resize
                      window.onresize = function () {
                        map.fitBounds(bounds);
                      };


                      //Creating Point object
                      var Point = function (data, id, map) {
                        var self = this;
                        this.name = ko.observable(data.name);
                        this.location = data.location;
                        this.marker = "";
                        this.markerId = id;
                        this.fs_id = data.fs_id;
                        this.shortUrl = "";
                        this.photoUrl = "";
                      };

                      // Get content infowindows
                      function getContent(point) {
                        var contentString = "<h3>" + point.name +
                          "</h3><br><div style='width:100px;min-height:70px'><img src=" + '"' +
                          point.photoUrl + '"></div><div><a href="' + point.shortUrl +
                          '" target="_blank">More details on Foursquare</a><img src="img/Foursquare_150.png">';
                        var errorString = "Sorry, Foursquare content currently not available."
                        if (point.name.length > 0) {
                          return contentString;
                          } else {
                          return errorString;
                          }
                      }

                      // Bounce effect on marker
                      function toggleBounce(marker) {
                        if (marker.getAnimation() !== null) {
                          marker.setAnimation(null);
                        } else {
                          marker.setAnimation(google.maps.Animation.BOUNCE);
                          setTimeout(function() {
                            marker.setAnimation(null);
                          }, 700);
                        }
                      };

                     function ViewModel() {
                        var self = this;

                        // Nav button control
                        this.isNavClosed = ko.observable(false);
                        this.navClick = function () {
                          this.isNavClosed(!this.isNavClosed());
                        };

                        // Creating list elements from the pointList
                        this.pointList = ko.observableArray();
                        initialPoint.forEach(function(item){
                          self.pointList.push(new Point(item));
                        });

                        // Create a marker per point item
                        this.pointList().forEach(function(point) {
                          var marker = new google.maps.Marker({
                            map: map,
                            position: point.location,
                            icon: image,
                            animation: google.maps.Animation.DROP
                          });
                          point.marker = marker;
                          // Extend the boundaries of the map for each marker
                          bounds.extend(marker.position);
                          // Create an onclick event to open an infowindow and bounce the marker at each marker
                          marker.addListener("click", function(e) {
                            map.panTo(this.position);
                            //pan down infowindow by 200px to keep whole infowindow on screen
                            map.panBy(0, -200)
                            infowindow.setContent(getContent(point));
                            infowindow.open(map, marker);
                            toggleBounce(marker);
                        });
                      });

                        // Foursquare API request
                        self.getFoursquareData = ko.computed(function(){
                          self.pointList().forEach(function(point) {

                            // Set initail variables to build the correct URL for each point
                            var  venueId = point.fs_id + "/?";
                            var foursquareUrl = BaseUrl + venueId + fsClient_id + fsClient_secret + fsVersion;

                            // AJAX call to Foursquare
                            $.ajax({
                              type: "GET",
                              url: foursquareUrl,
                              dataType: "json",
                              cache: false,
                              success: function(data) {
                                var response = data.response ? data.response : "";
                                var venue = response.venue ? data.venue : "";
                                    point.name = response.venue["name"];
                                    point.shortUrl = response.venue["shortUrl"];
                                    point.photoUrl = response.venue.bestPhoto["prefix"] + "height150" +
                                    response.venue.bestPhoto["suffix"];
                              }
                            });
                            $.ajax({
                              type: "GET",
                              url: foursquareUrl,
                              dataType: "json",
                              cache: false
                              }).fail(function() {
                                alert('Foursquare has failed to load. Please reload and try again later.');
                              });
                          });
                        });

                        // Alert in case of error on page
                        $(document).ready(function(){
                            $(".close").click(function(){
                              $("#Alert").alert();
                            });
                          });

                        // Creating click for the list item
                        this.itemClick = function (point) {
                          var markerId = point.markerId;
                          google.maps.event.trigger(point.marker, "click");
                        }

                        // Filtering the Point list
                        self.filter = ko.observable("");

                        this.filteredPointList = ko.dependentObservable(function() {
                          var q = this.filter().toLowerCase();
                          //var self = this;
                          if (!q) {
                          // Return self.pointList() the original array;
                          return ko.utils.arrayFilter(self.pointList(), function(item) {
                            item.marker.setVisible(true);
                            return true;
                          });
                          } else {
                            return ko.utils.arrayFilter(this.pointList(), function(item) {
                              if (item.name.toLowerCase().indexOf(q) >= 0) {
                              return true;
                              } else {
                                item.marker.setVisible(false);
                              return false;
                              }
                            });
                          }
                        }, this);
                      };

                     // Activates knockout.js
                    ko.applyBindings(new ViewModel());
                    }