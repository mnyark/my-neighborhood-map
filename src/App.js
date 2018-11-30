import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './map.js'
import InfoWindow from './InfoWindow'
import { render } from 'react-dom';
import { GoogleApiWrapper } from 'google-maps-react';
import DBHelper from './dbhelper.js'
import LocationList from './location_info.js'




class App extends Component {
   

  



  render() {
    return (
	
	
	
      <Map
        id="myMap"
        options={{
          center: { lat: 40.7831, lng: -73.9712 },
          zoom: 13
        }}
		

        onMapLoad={map => {
          new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7831, lng: -73.9712},
          zoom: 13,
         
        	});
      
          var locations = [
  			{title: "American Musuem of Natural History", photograph: "amnh.jpg", location:{ lat: 40.7813, lng: -73.9740}}, 
  			{title: "The Metropolitan Musuem of Art", photograph: "the-met.jpg", location:{ lat: 40.7794, lng: -73.9632}}, 
  			{title: "Central Park", photograph: "Central-Park.jpg",location:{lat: 40.7829,lng: -73.9654}}, 
  			{title: "Hells Kitchen", photograph: "hells-kitchen.jpg",location: {lat: 40.7638,lng: -73.9918}}, 
  			{title: "Times Square",photograph: "Times-square.jpg",location: {lat: 40.758896, lng: -73.985130}}, 
  			{title: "Central Park Zoo", photograph: "zoo.jpg",location: {lat: 40.7678,lng: -73.9718}}, 
  			{title: "Rockefeller Center",photograph: "rockefeller.jpg",location: {lat: 40.7587,lng: -73.9787}}, 
  			{title: "Empire State Building",photograph: "empire.jpg",location: {lat: 40.7484,lng: -73.9857}}
			];
    
    		var largeInfowindow = new window.google.maps.InfoWindow();
        	// Style the markers a bit. This will be our listing marker icon.
        	
        	// The following group uses the location array to create an array of markers on initialize.
        	var markers = [];

        	for (var i = 0; i < locations.length; i++) {
          	// Get the position from the location array.
          	var position = locations[i].location;
          	var title = locations[i].title;
          	var image = locations[i].photograph;
          
          // Create a marker per location, and put into markers array.
          var marker = new window.google.maps.Marker({
            position: position,
            title: title,
            image: image,
            animation: window.google.maps.Animation.DROP,
            id: i
          });
          // Push the marker to our array of markers.

          markers.push(marker);
          marker.addListener('click', function(){
            this.populateInfoWindow(this, largeInfowindow)
          })
      }
     
     function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          // Clear the infowindow content to give the streetview time to load.
          infowindow.setContent('');
          infowindow.marker = marker;
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = close();
          });
          var streetViewService = new google.maps.StreetViewService();
          var radius = 50;
          // In case the status is OK, which means the pano was found, compute the
          // position of the streetview image, then calculate the heading, then get a
          // panorama from that and set the options
          function getStreetView(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
              var nearStreetViewLocation = data.location.latLng;
              var heading = google.maps.geometry.spherical.computeHeading(
                nearStreetViewLocation, marker.position);
                infowindow.setContent('<div>' + marker.title + '</div><div id="pano">' + marker.image + '</div>');
                var panoramaOptions = {
                  position: nearStreetViewLocation,
                  pov: {
                    heading: heading,
                    pitch: 30
                  }
                };
              var panorama = new google.maps.StreetViewPanorama(
                document.getElementById('pano'), panoramaOptions);
            } else {
              infowindow.setContent('<div>' + marker.title + '</div>' +
                '<div>No Street View Found</div>');
            }
          }
      }}
      )};
    />
}


   
   
   
    	






    

  


export default App;

