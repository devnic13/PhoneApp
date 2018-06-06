/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
        //document.addEventListener('DOMContentLoaded', function ()
           //document.querySelector('button').addEventListener('take picture ', takePicture);
        //});
    },
    onDeviceReady: function() {
		console.log('device ready');
	}

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.  
};

app.initialize();
var pictureOutput = document.getElementById('pictureOutput');
var coordsOutput = document.getElementById('coordsOutput');
var Latitude;
var Longitude;
var dateOutput = document.getElementById('currentDate');

//Take Picture
function takePicture() {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError,  {
        enableHighAccuracy: true
    })
}

//Success Callback for get geocoordinates
var onGeoSuccess = function(position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    navigator.camera.getPicture(onCamSuccess, onCamError);
}
//Geo Error Callback
function onGeoError(error) {
    console.log(error.message);
}

//Success Callback for taking picture
var onCamSuccess = function (picture) {
    pictureOutput.src = 'data:image/png;base64,' + picture;
    coordsOutput.innerHTML = 'Latitude:' + Latitude + ', Longitude:' + Longitude;
    dateOutput.innerHTML = new Date()
}


//Camera Error Callback
var onCamError = function (error) {
    console.log(error.message);
}





