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
    // Read and save cameraOptions from the "settings_form" element

    $("#settings_ok_button").bind("click", applySettings);
    $("#settings_cancel_button").bind("click", restoreSettings);
}

// Called when Cordova is fully loaded (and calling to Cordova functions has become safe)
function onDeviceReady() {
    
    // Overwrite the default behavior of the device back button
    document.addEventListener("backbutton", onBackPress, false);
    fillSettingsInfo("settings_info");
    
    // Bind application button elements with their functionality

    $("#open_camera_button").bind ("click", onCapture);
    $("#open_lib_button").bind ("click", onCapture);
    $("#open_alb_button").bind ("click", onCapture);
    $("#home_button").bind("click", removeTemporaryFiles);
    
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false)

}


// Overwrites the default behavior of the device back button
function onBackPress(e) {
    
    // Skip application history and exit application if the home page (menu page) is active
    if($.mobile.activePage.is("#home_page")){
        
        e.preventDefault();
        removeTemporaryFiles();
        navigator.app.exitApp();
    }
    else {
        
        // Do not save new cameraOptions and restore the previous state of the "settings_form" visual elements
        if ($.mobile.activePage.is("#settings_page")) {
            restoreSettings();
        }
        
        navigator.app.backHistory();
    }
}

// Removes all temporary files created by application. Is to be used when temporary files are not intended to be operated with further
function removeTemporaryFiles() {
    
    if (isIOS()) {
        
        // Currently camera.cleanup() seems not to remove files on iPad, iOS 5 and 6 (though onSuccess() function is called,
        // as well as in the case of other PhoneGap file-remove operations).
        // Temporary directory is removed on application exit (e.g. on device switch off).
        //
        // navigator.camera.cleanup(onSuccess, onError);
    }
    
    function onSuccess() { }
    function onError(message) { }
}

// Calls camera.getPicture() with cameraOptions customised by user
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

    navigator.camera.getPicture(onCaptureSuccess, onCaptureError, { quality : settings.qualityQuali,
                                                                    destinationType : settings.destinationType,
                                                                    sourceType : settings.sourceType,
                                                                    allowEdit : settings.allowEdit,
                                                                    encodingType : settings.encodingType,
                                                                    targetWidth : settings.targetWidthQuali,
                                                                    targetHeight : settings.targetHeightQuali,
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

// Shows photo captured by camera.getPicture()
function onCaptureSuccess(imageData,Quali) {
	
	var num = document.getElementById("num").value;
	
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
        alert('Veuillez reprendre la photo');}
        
else
{
if (Quali=="non"){var fichierupload = encodeURI("http://www.appliseeit.com/mobile/photo.php?quali=non&num="+num+"&imageData="+imageData);}
else{var fichieruploadQuali = encodeURI("http://www.appliseeit.com/mobile/photo.php?quali=oui&num="+num+"&imageData="+imageData);}
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
if (Quali=="non"){ft.upload(nomphoto, fichierupload, win, fail, options);}
else{ft.upload(nomphoto, fichieruploadQuali, win, fail, options);}
}
}







// camera.getPicture() callback function that provides an error message
function onCaptureError(message) {alert(message); }

// Reads customized camera options from the settings_form and saves them to the settings object (cameraOptions storage)
