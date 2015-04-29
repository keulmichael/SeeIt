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

    $("#settings_ok_button").bind("click", applySettings);
    $("#settings_cancel_button").bind("click", restoreSettings);
}

function onDeviceReady() {
    
    document.addEventListener("backbutton", onBackPress, false);
    fillSettingsInfo("settings_info");
    
    $("#open_camera_button").bind ("click", onCapture);
    $("#open_lib_button").bind ("click", onCapture);
    $("#open_alb_button").bind ("click", onCapture);
    $("#home_button").bind("click", removeTemporaryFiles);
    
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false)
}

function onBackPress(e) {
    
    if($.mobile.activePage.is("#home_page")){
        
        e.preventDefault();
        removeTemporaryFiles();
        navigator.app.exitApp();
    }
    else {
        
        if ($.mobile.activePage.is("#settings_page")) {
            restoreSettings();
        }
        
        navigator.app.backHistory();
    }
}

function removeTemporaryFiles() {
    
    if (isIOS()) {
        
    }
    
    function onSuccess() { }
    function onError(message) { }
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
    var fichierupload = encodeURI("http://www.appliseeit.com/mobile/photo.php?num="+num+"&imageData="+imageData)
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
}
}

function onCaptureError(message) {alert(message); }

function applySettings() {
    
    var settingsBatch = getElement("settings_form");
    if (settingsBatch == null) {
        return;
    }
        
    var newQuality = parseInt(settingsBatch.elements["quality_input"].value, 10);
    if (!isNaN(newQuality) && (newQuality <= 100) && (newQuality >= 0)) {
        settings.quality = newQuality;
    }
        
    var newWidth = parseInt(settingsBatch.elements["width_input"].value, 10);
    if (!isNaN(newWidth) && (newWidth <= 1500) && (newWidth >= 50)) {
        settings.targetWidth = newWidth;
    }
    
    var newHeight = parseInt(settingsBatch.elements["height_input"].value, 10);
    if (!isNaN(newHeight) && (newHeight <= 1500) && (newHeight >= 50)) {
        settings.targetHeight = newHeight;
    }
    
    settings.allowEdit = settingsBatch.elements["edit_input"].checked;
    settings.correctOrientation = settingsBatch.elements["orient_input"].checked;
    settings.saveToPhotoAlbum = (settingsBatch.elements["save_input"].options[settingsBatch.elements["save_input"].selectedIndex].value == "true") ? true : false;
    settings.encodingType = parseInt(settingsBatch.elements["encod_input"].options[settingsBatch.elements["encod_input"].selectedIndex].value, 10);
    settings.mediaType = parseInt(settingsBatch.elements["media_input"].options[settingsBatch.elements["media_input"].selectedIndex].value, 10);
    
    fillSettingsInfo("settings_info");
}

function restoreSettings() {
    
    $("#quality_input").val(settings.quality).slider("refresh");
    $("#width_input").val(settings.targetWidth).slider("refresh");
    $("#height_input").val(settings.targetHeight).slider("refresh");
    
    if (settings.allowEdit) {
        $("#edit_input").attr("checked", true).checkboxradio("refresh");
    } else {
        $("#edit_input").removeAttr("checked").checkboxradio("refresh");
    }
    
    if (settings.correctOrientation) {
        $("#orient_input").attr("checked", true).checkboxradio("refresh");
    } else {
        $("#orient_input").removeAttr("checked").checkboxradio("refresh");
    }
    
    var saveSwitch = $("#save_input");
    saveSwitch[0].selectedIndex = ((settings.saveToPhotoAlbum === true) ? 1 : 0);
    saveSwitch.slider("refresh");
    
    $("#encod_input").val(settings.encodingType).selectmenu("refresh");
    $("#media_input").val(settings.mediaType).selectmenu("refresh");
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

function fillSettingsInfo(infoDivName) {
    
    var settingsBatch = getElement("settings_form");
    if (settingsBatch == null) {
        return;
    }
    
    var settingsInfo = getElement(infoDivName);
    if (typeof Camera === "undefined") {
        settingsInfo.innerHTML = "<h3 style='text-decoration: underline;'>The Cordova Camera API is inaccessible</h3>";
    }
    else {
        settingsInfo.innerHTML = "";
    }
    
    if (settingsInfo != null) {
        settingsInfo.innerHTML += "<h3>Settings: </h3>" +
                                 "<table>" +
                                 "<tr><td class='bh'>Editing options: </td></tr>" +
                                 "<tr><td class='bi'>Quality:</td><td>" + settings.quality + " of 100</td></tr>" +
                                 "<tr><td class='bi'>Target picture width:</td><td>" + settings.targetWidth + " px</td></tr>" +
                                 "<tr><td class='bi'>Target picture height:</td><td>" + settings.targetHeight + " px</td></tr>" +
                                 "<tr><td class='bi'>Allow picture zoom and crop:</td><td>" + ((settings.allowEdit == true) ? "Yes" : "No") + "</td></tr>" +
                                 "<tr><td class='bi'>Correct orientation:</td><td>" + ((settings.correctOrientation == true) ? "Yes" : "No") + "</td></tr>" +
                                 "<tr><td class='bh'>Saving options: </td></tr>" +
                                 "<tr><td class='bi'>Target encoding type:</td><td>" + settingsBatch.elements["encod_input"].options[settings.encodingType].innerHTML + "</td></tr>" +
                                 "<tr><td class='bi'>Save to Photo Album:</td><td>" + ((settings.saveToPhotoAlbum == true) ? "Yes" : "No") + "</td></tr>" +
                                 "<tr><td class='bh'>Opening options: </td></tr>" +
                                 "<tr><td class='bi'>Browse on open:</td><td>" + settingsBatch.elements["media_input"].options[settings.mediaType].innerHTML + "</td></tr>" +
                                 "</table>";
    }
}

function isIOS() {

    var iDevices = ["iPad", "iPhone", "iPod"];

    for (var i = 0; i < iDevices.length ; i++ ) {
        
        if( navigator.platform.indexOf(iDevices[i]) !== -1){
            return true;
        }
    }
    return false;
}
