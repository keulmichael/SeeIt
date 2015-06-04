var settings;


function onLoadCamera() {
	
	var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Connexion inconnue';
        states[Connection.ETHERNET] = 'Connexion Ethernet';
        states[Connection.WIFI] = 'Connexion WiFi';
        states[Connection.CELL_2G] = 'Connexion 2G';
        states[Connection.CELL_3G] = 'Connexion 3G';
        states[Connection.CELL_4G] = 'Connexion 4G';
        states[Connection.NONE] = 'Pas de connexion réseau';

if (states[networkState] == 'Pas de connexion réseau') {
        document.getElementById("problemeReseau").innerHTML="<font color='red' size='2'>Absence de réseau. Veuillez fermer l'application et l'ouvrir à nouveau.</font>";}

    document.addEventListener("deviceready", onDeviceReady, false);
    
    settings = new Settings();

}

function onDeviceReady() {
    
    
    $("#open_camera_button").bind ("click", onCapture);
    $("#open_lib_button").bind ("click", onCapture);
    $("#open_alb_button").bind ("click", onCapture);
    
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false)
}



function onCapture(e) {
if (settings.positionPaysage==false)
	{
navigator.accelerometer.getCurrentAcceleration(accelerometerSuccessPortrait, accelerometerErrorPortrait);

function accelerometerSuccessPortrait(acceleration) {
if (acceleration.x>1 || acceleration.x<-1 && acceleration.y<9 && acceleration.z>1 || acceleration.z<-1 ){
    alert('Veuillez tenir l\'appareil en mode portrait');
		}

	else {
    var callerId = getTargetId(e, "a");
    
    switch (callerId) {
        case "open_camera_button":
            settings.sourceType = Camera.PictureSourceType.CAMERA;
            break;
        case "open_lib_button":
            settings.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
            break;
        case "open_alb_button":
            settings.sourceType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
            break;
        default:
            return;
    }
    
    navigator.camera.getPicture(onCaptureSuccess, onCaptureError, { quality : settings.quality,
                                                                    destinationType : settings.destinationType,
                                                                    sourceType : settings.sourceType,
                                                                    allowEdit : settings.allowEdit,
                                                                    encodingType : settings.encodingType,
                                                                    targetWidth : settings.targetWidth,
                                                                    targetHeight : settings.targetHeight,
                                                                    mediaType: settings.mediaType,
                                                                    saveToPhotoAlbum : settings.saveToPhotoAlbum,
                                                                    correctOrientation: settings.correctOrientation,
								    cameraDirection: settings.cameraDirection,
                                                                    popoverOptions : settings.popoverOptions
                                                                  });


		}
	};

function accelerometerErrorPortrait() {
    alert('Veuillez activer l\'accéléromètre');
};

								  
}	

else
{
navigator.accelerometer.getCurrentAcceleration(accelerometerSuccessPaysage, accelerometerErrorPaysage);

function accelerometerSuccessPaysage(acceleration) {
if (acceleration.x<9 || acceleration.x>-9 && acceleration.y<0 || acceleration.y>1 && acceleration.z<0 || acceleration.y>1){
    alert('Veuillez tenir l\'appareil en mode paysage');
		}

	else {
    var callerId = getTargetId(e, "a");
    
    switch (callerId) {
        case "open_camera_button":
            settings.sourceType = Camera.PictureSourceType.CAMERA;
            break;
        case "open_lib_button":
            settings.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
            break;
        case "open_alb_button":
            settings.sourceType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
            break;
        default:
            return;
    }
    
    navigator.camera.getPicture(onCaptureSuccess, onCaptureError, { quality : settings.quality,
                                                                    destinationType : settings.destinationType,
                                                                    sourceType : settings.sourceType,
                                                                    allowEdit : settings.allowEdit,
                                                                    encodingType : settings.encodingType,
                                                                    targetWidth : settings.targetWidth,
                                                                    targetHeight : settings.targetHeight,
                                                                    mediaType: settings.mediaType,
                                                                    saveToPhotoAlbum : settings.saveToPhotoAlbum,
                                                                    correctOrientation: settings.correctOrientation,
								    cameraDirection: settings.cameraDirection,
                                                                    popoverOptions : settings.popoverOptions
                                                                  });


		}
	};


function accelerometerErrorPaysage() {
    alert('Veuillez activer l\'accéléromètre');
};

								  
}	
}

 function win(r) {
        }

 function fail(error) {
            alert("Une erreur est survenue : Code = " = error.code);
        }

function onCaptureSuccess(imageData) {
	
	var num = document.getElementById("num").value;
	
    var fichierupload = encodeURI("http://www.appliseeit.com/mobile/photo.php?quali=non&num="+num+"&imageData="+imageData)
    var photo = getElement("pic");
    photo.style.display = "block";
    photo.src = imageData;
    $.mobile.changePage("#result_page", "slideup");
    var nomphoto = photo.src;	
var options = new FileUploadOptions();
            options.fileKey="photo";
            options.fileName=nomphoto.substr(nomphoto.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
            options.chunkedMode = false;
            
            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";
            options.params = params;
            var ft = new FileTransfer();
            ft.upload(nomphoto, fichierupload, win, fail, options);
var fichieruploadQuali = encodeURI("http://www.appliseeit.com/mobile/photo.php?quali=oui&num="+num+"&imageData="+imageData);
var ftQuali = new FileTransfer();
ftQuali.upload(imageData, fichieruploadQuali, win, fail, options);
if("geolocation" in navigator){navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);}
else{pasdegeolocation();}
}
function onCaptureError(message) {alert(message); }

function geolocationSuccess(position) {alert(position);
require(["dojo/request"], function(request){    
var num = document.getElementById("num").value;	
if (position){
var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      request.get('http://www.appliseeit.com/mobile/record_gps.php?num='+num+'&x='+position.coords.latitude+'&y='+position.coords.longitude+'&adress='+results[1].formatted_address).then(function(response276){ alert(response276);}) ;
      }
      else {
request.get('http://www.appliseeit.com/mobile/record_gps.php?num='+num+'&x=&y=&adress=').then(function(response277){ alert(response277);}) ;      

}})	
}
 else {
request.get('http://www.appliseeit.com/mobile/record_gps.php?num='+num+'&x=&y=&adress=').then(function(response277){ alert(response277);}) ;      

}
    })
}

function geolocationError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function pasdegeolocation() {
require(["dojo/request"], function(request){
var num = document.getElementById("num").value;
request.get('http://www.appliseeit.com/mobile/record_gps.php?num='+num+'&x=&y=&adress=').then(function(response278){alert(response278) }) ;      
})
}

function getTargetId(event, tagName) {
    var target = (event.target.tagName == tagName)
                    ? event.target
                    : $(event.target).closest(tagName)[0]
    return target.id;
}

function getElement(element) {
    
    if(typeof(element) == "string") {
    
        element = document.getElementById(element);
    }
    
    return element;
}
