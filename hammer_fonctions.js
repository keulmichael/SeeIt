<!DOCTYPE html>
    <html>
    <head>
     <meta charset="utf-8">
<meta http-equiv="Cache-control" content="no-cache" />

    <meta http-equiv="Content-type" content="text/html; class="gmail_default" style>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <title> Des moments à partager avec SeeIt! </title>
    <script type="text/javascript">
    function Settings() {
        
        if ((typeof Camera !== "undefined")) {
            
            this.destinationType = Camera.DestinationType.FILE_URI; // cameraOptions: destinationType
            this.sourceType = Camera.PictureSourceType.PHOTOLIBRARY; // cameraOptions: sourceType
            this.mediaType = Camera.MediaType.PICTURE; // cameraOptions: mediaType
        }
        
        this.quality = 100; // cameraOptions: quality
        this.targetWidth = 600; // cameraOptions: targetWidth
        this.targetHeight = 1000; // cameraOptions: targetHeight
        this.allowEdit = false; // cameraOptions: allowEdit
        this.correctOrientation = false;
        //this.cameraDirection = 0; 
        this.positionPaysage = true;
            
        this.encodingType = (typeof Camera !== "undefined") ? Camera.EncodingType.JPEG : 0; // cameraOptions: encodingType
        this.saveToPhotoAlbum = false; // cameraOptions: saveToPhotoAlbum
        
        this.popoverOptions = new CameraPopoverOptions(100, 100, 100, 100, Camera.PopoverArrowDirection.ARROW_DOWN); // cameraOptions: popoverOptions
    }
    

    </script>
    <script src="hammer.js"></script>   
            <script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
           <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
            <script type="text/javascript" src="js/jquery.mobile-1.1.1.min.js"></script>
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyB_oCNl3I6ov3plpNWChk-5T2QRb62DBOk&sensor=true" type="text/javascript"></script>
            
            <link rel="stylesheet" href="css/jquery.mobile-1.1.1.min.css">
            <link rel="stylesheet" href="css/camera.css" type="text/css">
    <link rel="stylesheet" type="text/css" href="dojox/mobile/themes/iphone/iphone.css"></link>
    <link href="dojox/mobile/themes/common/domButtons/DomButtonRedBadge.css" rel="stylesheet"/>
    <link href="dojox/mobile/themes/common/domButtons.css" rel="stylesheet"/>
    <script type="text/javascript" src="dojox/mobile/deviceTheme.js" data-dojo-config="mblThemeFiles: ['base','Button']"></script>
    <script type="text/javascript" src="dojox/mobile/deviceTheme.js" data-dojo-config="mblThemeFiles: ['base','IconContainer']"></script>
    <script type="text/javascript" src="dojox/mobile/deviceTheme.js" data-dojo-config="mblThemeFiles: ['base','Accordion']"></script>
    <script src="dojo/dojo.js"></script>
    
    <script type="text/javascript" src="js/camera.js"></script>
    <script src="cordova.js"></script>
	        
    <script type="text/javascript">
    require(["dojox/mobile/parser", "dojox/mobile/compat", "dojo/domReady!", "dojox/mobile/View", "dojox/mobile/Heading", "dojox/mobile/RoundRectList", "dojox/mobile/ListItem", "dojox/mobile/Switch", "dojox/mobile/RoundRect", "dojox/mobile/RoundRectCategory",  "dojox/mobile/ContentPane", "dojox/mobile/Button", "dojox/mobile/ProgressIndicator", "dojo/_base/xhr", "dojox/mobile/FilteredListMixin", "dojox/mobile/compat", "dojox/form/Uploader", "dojox/mobile/SwapView", "dojox/mobile/PageIndicator", "dojox/mobile/Badge", "dojox/mobile/IconContainer", "dojox/mobile/IconItem",   "dojox/mobile", "dojox/mobile/RoundRectDataList", "dojo/data/ItemFileReadStore", "dojox/mobile/TextBox", "dojox/mobile/ToggleButton", "dojox/mobile/TabBar", "dojox/mobile/ScrollableView","dojox/mobile/Accordion","dojo/_base/kernel", "dojo/parser", "dojox/dgauges/components/grey/HorizontalLinearGauge", "dojox/mobile/Tooltip" ], function (parser) {
    parser.parse();	
    });
    dojoConfig = {
    async: true,
    parseOnLoad: false
    };
    
require(["dojo/request"], function(request){
request.get('http://www.appliseeit.com/mobile/texteTitreAccueil.html').then(function(resptitreAccueil){document.getElementById("titreAccueil").innerHTML=resptitreAccueil;})
request.get('http://www.appliseeit.com/mobile/texttexteAjouter.html').then(function(resptexteAjouter){document.getElementById("texteAjouter").innerHTML=resptexteAjouter;})
request.get('http://www.appliseeit.com/mobile/texteIntroInfos.html').then(function(respIntroInfos){document.getElementById("IntroInfos").innerHTML=respIntroInfos;})
request.get('http://www.appliseeit.com/mobile/texteAideInfos.html').then(function(respAideInfos){document.getElementById("AideInfos").innerHTML=respAideInfos;})
request.get('http://www.appliseeit.com/mobile/texteAvenirInfos.html').then(function(respAvenirInfos){document.getElementById("AvenirInfos").innerHTML=respAvenirInfos;})
request.get('http://www.appliseeit.com/mobile/textePourquoifaireInfos.html').then(function(respPourquoifaireInfos){document.getElementById("PourquoifaireInfos").innerHTML=respPourquoifaireInfos;})
request.get('http://www.appliseeit.com/mobile/texteNouscontacterInfos.html').then(function(respNouscontacterInfos){document.getElementById("NouscontacterInfos").innerHTML=respNouscontacterInfos;})
    });
    
    require(["dojo/_base/connect","dojo/ready",
    ], function(connect, ready){
    ready(function(){
    
var backButton = dijit.registry.byId("hdgSettings").backButton;
if (backButton) {
  dojo.connect(backButton, "onClick", function() {CacherCamera();  });
} 
    AffichBadges();
    });
    })
    
    
    function AffichBadges(){
    require(["dojo/request",
    "dijit/registry",
    "dojox/mobile/IconItem",
    "dojox/mobile/IconContainer",
    "dojox/mobile/parser",
    "dojox/mobile",
    "dojox/mobile/compat",
    "dojox/mobile/ViewController"
    ], function(request, registry, IconItem, IconContainer, ViewController){
var iconContainerWidgetSuppr = document.getElementById("infoBadges");
while (iconContainerWidgetSuppr.firstChild) {
  iconContainerWidgetSuppr.removeChild(iconContainerWidgetSuppr.firstChild);
}
    request.get('http://www.appliseeit.com/mobile/badges.php').then(
    function(response){
    var iconContainerWidget = registry.byId("infoBadges");
    var res = response.split("_?_"); 
    for(var i= 0; i < res.length; i++)
    {var itemWidget ='';
    var resAff = res[i].split("_!_");  
    var itemWidget = new IconItem({
    icon: "http://www.appliseeit.com/mobile/camera.png",
    label: resAff[1],
    Badge: resAff[0], 
    moveTo:"#",
    onClick: function(e){
    affichPointsAlbum(this.label)
    }
    });
    iconContainerWidget.addChild(itemWidget);
    }
    })
    
    request.get('http://www.appliseeit.com/mobile/VerifNewPhoto.php').then(
    function(responsePseudoNewPhoto){
    var PseudoNewPhotos=responsePseudoNewPhoto.split("_|_"); 
    if(PseudoNewPhotos[2]!=''){var adresse='à '+PseudoNewPhotos[2];}
    document.getElementById("messageAlerte").innerHTML="<font color=grey size=2>"+PseudoNewPhotos[1] + ' a pris une photo ' + adresse + ' à ' + PseudoNewPhotos[3]+"<br> Album : "+PseudoNewPhotos[5]+" - Thème : "+PseudoNewPhotos[6]+"</font>";
    })

    request.get('http://www.appliseeit.com/mobile/VerifNewAlbum.php').then(
    function(responsePseudoNewAlbum){
    var PseudoNewAlbum=responsePseudoNewAlbum.split("_|_"); 
    document.getElementById("messageNouvelAlbum").innerHTML="<font color=grey size=2>"+PseudoNewAlbum[0] + " a crée l'album " + PseudoNewAlbum[1] + " dans le thème " + PseudoNewAlbum[2] + "</font>";
    })
    
    });    
    }
    
    function SupprBadges(){
    require(["dojo/request",
    "dijit/registry"
    ], function(request, registry){
var iconContainerWidgetSuppr = document.getElementById("infoBadges");
while (iconContainerWidgetSuppr.firstChild) {
  iconContainerWidgetSuppr.removeChild(iconContainerWidgetSuppr.firstChild);
}
    })
    }
    
   // var dataStoreTournees;
//require(["dojox/mobile/parser","dojox/mobile","dojox/mobile/compat","dojo/ready","dijit/registry","dojo/data/ItemFileReadStore","dojox/mobile/ScrollableView","dojox/mobile/EdgeToEdgeDataList",       "dojox/mobile/FilteredListMixin"], function(parser, mobile, compat, ready, registry,ItemFileReadStore, ScrollableView, EdgeToEdgeDataList, FilteredListMixin){dataStoreTournees = new ItemFileReadStore({url: 'http://www.appliseeit.com/mobile/tournees.php'});})
    
//var dataStoreAlbums;
//require(["dojox/mobile/parser","dojox/mobile","dojox/mobile/compat","dojo/ready","dijit/registry","dojo/data/ItemFileReadStore","dojox/mobile/ScrollableView","dojox/mobile/EdgeToEdgeDataList",            "dojox/mobile/FilteredListMixin"], function(parser, mobile, compat, ready, registry,ItemFileReadStore, ScrollableView, EdgeToEdgeDataList, FilteredListMixin){dataStoreAlbums = new ItemFileReadStore({url: 'http://www.appliseeit.com/mobile/album.php'});})
    
    function affichPointsAlbum(tournee){
    require([
        "dijit/registry",
        "dojox/mobile/ViewController",
        "dojox/mobile/parser",
        "dojox/mobile",
        "dojox/mobile/Button"
    ], function(registry, ViewController){
        var vca = ViewController.getInstance();
            vca.openExternalView({
                url:"http://www.appliseeit.com/mobile/affichPointsAlbums.php?tournee="+tournee,
                transition:"slide"
            }, registry.byId("affichPointsAlbums").containerNode);
        
    });
    }
    function affichPointsTournees(tournee){CacherCamera();
    require([
        "dijit/registry",
        "dojox/mobile/ViewController",
        "dojox/mobile/parser",
        "dojox/mobile",
        "dojox/mobile/Button"
    ], function(registry, ViewController){
        var vc = ViewController.getInstance();
            vc.openExternalView({
                url:"http://www.appliseeit.com/mobile/affichPointsTournees.php?tournee="+tournee,
                transition:"slide"
            }, registry.byId("affichPointsTournee").containerNode);
        
    });
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
    function geolocationSuccess(position) {	
var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {document.getElementById("affichLocalisation").innerHTML="Votre photo sera localisée à "+results[1].formatted_address; }
}})
}

function geolocationError(error) {
    alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}
    }
    
    function mobile_modif_donnees_reelle(num, tournee, page){
    require(["dojo/_base/window", "dojox/mobile/ProgressIndicator"],
    function(win, ProgressIndicator){
      var prog = new ProgressIndicator({size:40, center:true});
      win.body().appendChild(prog.domNode);
    prog.start();
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    function onSuccess(position) {
    require(["dojo/dom", "dojo/on", "dojo/request", "dojo/query", "dojo/domReady!"],
    function(dom, on, request){
    var siteNum="site"+num;var site = document.getElementById(siteNum).value;
    var TypesNum="Types"+num;var types = document.getElementById(TypesNum).value;
    if (types!='FIN'){var quantite_reelleNum="quantite_reelle"+num;var quantite_reelle = document.getElementById(quantite_reelleNum).value;}
    var quantite_retoursNum="quantite_retours"+num; var quantite_retours= document.getElementById(quantite_retoursNum).value;
    varTNum="T"+num;var T = document.getElementById(varTNum).value;
    request.get('http://www.appliseeit.com/mobile/mobile_modif_donnees_reelle.php?num='+num+'&site='+site+'&Types='+types+'&nouvelle_quantite_reelle='+quantite_reelle+'&nouvelle_quantite_retours='+quantite_retours+'&PDA_Latitude='+position.coords.latitude+'&PDA_Longitude='+position.coords.longitude).then(
    function(response41){	affichPointsTournees(tournee,page);prog.stop();})
    });
    }
    });
    }
    function Aaccelerometer(){
    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    function accelerometerSuccess(acceleration) {
    if (acceleration.x>1 || acceleration.x<-1 && acceleration.y<9 && acceleration.z>1 || acceleration.z<-1 ){
        alert('Veuillez tenir l\'appareil correctement');
    }
    };
    function accelerometerError() {
        alert('onError!');
    };
    }
    function Ccompass(){
    navigator.compass.getCurrentHeading(compassSuccess, compassError);
    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
    function onError(error) {
        alert('CompassError: ' + error.code);
    };
    navigator.compass.getCurrentHeading(onSuccess, onError);
    }
    function changeCameraDirection(value) {
    alert('Option disponible dans les prochaines versions');
    if (value=='on'){settings.CameraDirection=1;}
    else{settings.CameraDirection=0;}
    };
    function changeCorrectOrientation(value) {
    if (value=='on'){settings.correctOrientation=true;}
    else{settings.correctOrientation=false;}
    };
    function changePositionPortrait(value) {
    if (value=='on'){settings.positionPaysage=false;}
    else{settings.positionPaysage=true;}
    };
    function Voix(){
    if ('webkitSpeechRecognition' in window) {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "fr-FR";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.start();
    recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
    recognition.stop();
    var transcript = event.results[i][0].transcript;alert(transcript);
       
    var words = transcript.split(' ');
    var u = new SpeechSynthesisUtterance();
        u.text = response;
        u.lang = 'fr-FR';
     
        u.onend = function () {
            if (callback) {
                callback();
            }deom
        };
     
        u.onerror = function (e) {
            if (callback) {
                callback(e);
            }
        };
     
        speechSynthesis.speak(u);
    }}};}
    else{alert('La fonction Voix ne fonctionne pas sur ce navigateur');}
    }
    function CacherCamera(){
    document.getElementById("cadreCamera").style.display = "none";
    }
    function MontrerCamera(){
    document.getElementById('cadreCamera').style.display="inline";
   document.getElementById('cadreCamera').style.position="absolute";
    document.getElementById('cadreCamera').style.bottom="30px";
    }
    
    function creerAlbum(){
    require(["dojo/request","dojo/_base/window","dojox/mobile/ProgressIndicator"],
    function(request,win, ProgressIndicator){
    var album=document.getElementById('nouvelAlbum').value;
    var element=document.getElementById('nouvelElement').value;
    var pseudo=document.getElementById('nouveauPseudo').value;
    request.get('http://www.appliseeit.com/mobile/ajouter_point.php?album='+album+'&element='+element+'&pseudo='+pseudo).then(
    function(response){
    document.getElementById('resultatCreerAlbum').innerHTML=response; 
    document.getElementById('afficherTourneeApresCreer').style.display="block";
    })
    })
    }
    
  function testSocket(){
		require(["dojo/request", "dojo/request/notify"], function(request, notify){
  notify("start", function(){
alert('start');
  });
  notify("send", function(response, cancel){
alert('send' + response);
  });
  notify("load", function(response){
alert('load') + response;
  });
  request.get("http://www.appliseeit.com/mobile/test.php");
});
websocket = new WebSocket("http://www.appliseeit.com/mobile/test.php"); 
websocket.onopen = function(evt) { websocket.send("WebSocket rocks");  }; 
websocket.onmessage = function(evt) { alert (evt.data); websocket.close(); }; 
	}
	
function VerifNewPhoto(type){
var NbNewPhotos='';
	require(["dojo/request"], function(request){
    request.get('http://www.appliseeit.com/mobile/VerifNewPhoto.php').then(
    function(responseNewPhoto){
    var NbNewPhotos=responseNewPhoto.split("_|_"); 
    var ancienNbPhotos=document.getElementById('nombrePhotosCache').value;
    if(ancienNbPhotos!=NbNewPhotos[0]){
    
//var Notification = window.Notification || window.mozNotification || window.webkitNotification;
//Notification.requestPermission(function (permission) {
//var instance = new Notification("SeeIt!", {body: "De nouvelles photos sont disponibles !",icon:'iconeseeit.jpg'});
//instance.onclick = function () {AffichBadges();};
//instance.onclose = function () {AffichBadges();};
//});
    
    if(type=='vibrate'){navigator.vibrate([1000, 1000, 1000, 1000, 1000]);}
    if(type=='son'){navigator.notification.beep(1);}
    }
})
    })
    }
    
    function changeAlertSon(value) {
    if (value=='on'){var interval = setInterval("VerifNewPhoto('son')", 1000);}
    if (value=='off'){clearInterval(interval);}
    }
    
    function changeAlertVibration(value) {
    if (value=='on'){interval = setInterval("VerifNewPhoto('vibrate')", 1000);}
    if (value=='off'){clearInterval(interval);}
    }
    
    
 function nombrePhotos(){
 var responseNbPhotoCache='';
 	require(["dojo/request"], function(request){
    request.get('http://www.appliseeit.com/mobile/VerifNewPhoto.php').then(
    function(responseNbPhoto){
document.getElementById('gauge').value=50;
var responseNbPhotoCache=responseNbPhoto.split("_|_");
document.getElementById('nombrePhotosCache').value=responseNbPhotoCache[0];

	    }
    )
    })
 }
  
 function rotation(action,num,n,degrees){
 require(['dojo/dom' , "dojo/on", "dojo/request"],
function(dom, on, request){
  var phototest = new Image(); phototest.src = 'http://www.appliseeit.com/mobile/photos/'+num+'_'+n+'.jpg'; var photo = dom.byId('zoom_'+n+'_'+num);
 if (action=='refresh'){
photo.src = 'http://www.appliseeit.com/mobile/photos/'+num+'_'+n+'.jpg?v=123';
 }
 else {
request.get('http://www.appliseeit.com/mobile/rotation_image.php?image='+num+'_'+n+'&degrees='+degrees).then(
function(response41){
photo.src ='http://www.appliseeit.com/mobile/photos/'+num+'_'+n+'.jpg?v=123';
});
}
});
}
    require(['dojo/dom' , "dojo/on", "dojo/_base/connect","dojo/ready","dojo/request",
    ], function(dom, on, connect, ready, request){
    ready(function(){    
request.get('https://graph.facebook.com/fql?q=SELECT friend_count FROM user WHERE uid = 100009539529598').then(
    function(nbamisfacebookJSON){var nbamisfacebook = JSON.parse(nbamisfacebookJSON); 
    document.getElementById('nbamisfacebook').innerHTML='<table><tr><td><font size=2 color="grey">' +  nbamisfacebook.data[0].friend_count + ' amis nous suivent sur </font></td><td><img src="http://www.appliseeit.com/mobile/icone-facebook.gif" width="50px"></td></tr></table>';})
    
request.get('http://www.appliseeit.com/mobile/affichPhotosAccueil.php?n=1').then(
function(response441){
var resPhoto = response441.split("_|_"); 
var photoAccueil = dom.byId('photoaccueil_1');photoAccueil.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[0];
var photoAccueil2 = dom.byId('photoaccueil_2');photoAccueil2.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[1];
var photoAccueil3 = dom.byId('photoaccueil_3');photoAccueil3.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[2];
})
     })    
    })
function RafraichirAccueil(){    
    require(['dojo/dom' , "dojo/on", "dojo/_base/connect","dojo/ready","dojo/request",
    ], function(dom, on, connect, ready, request){
    ready(function(){ 
request.get('https://graph.facebook.com/fql?q=SELECT friend_count FROM user WHERE uid = 100009539529598').then(
    function(nbamisfacebookJSON){var nbamisfacebook = JSON.parse(nbamisfacebookJSON); 
    document.getElementById('nbamisfacebook').innerHTML='<table><tr><td><font size=2 color="grey">' +  nbamisfacebook.data[0].friend_count + ' amis nous suivent sur </font></td><td><img src="http://www.appliseeit.com/mobile/icone-facebook.gif" width="50px"></td></tr></table>';})
    
request.get('http://www.appliseeit.com/mobile/affichPhotosAccueil.php?n=1').then(
function(response442){
var resPhoto = response442.split("_|_"); 
var photoAccueil = dom.byId('photoaccueil_1');photoAccueil.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[0];
var photoAccueil2 = dom.byId('photoaccueil_2');photoAccueil2.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[1];
var photoAccueil3 = dom.byId('photoaccueil_3');photoAccueil3.src = 'http://www.appliseeit.com/mobile/photos/'+resPhoto[2];
})
 })    
})
}
    
function suppression_photos() {
    require(["dojo/_base/connect","dojo/ready","dojo/request",
    ], function(connect, ready, request){
request.get('http://www.appliseeit.com/suppression_photos_auto.php').then(
function(response786){
alert('Photos supprimées');
}) 
    })
}


 //INITIALIZE GOOGLE MAP
var geocoder;
function initialize() {geocoder = new google.maps.Geocoder();}
google.maps.event.addDomListener(window, 'load', initialize);

 </script>
 
    </head>
    <body onload="onLoadCamera();nombrePhotos();setInterval(nombrePhotos, 10000);" style="visibility:hidden;">
   
    <div id='tabViewAccueil' data-dojo-type='dojox/mobile/ScrollableView' selected="true">
    <h1 data-dojo-type="dojox/mobile/Heading" data-dojo-props="fixed: 'top'">SeeIt !</h1><br>
    <div align="center"><font size='2' color='grey'>Les photos les plus récentes</font></div>
<div data-dojo-type="dojox/mobile/Container" style="background-color:#EBF4FA;height:170px;">
<div data-dojo-type="dojox/mobile/PageIndicator" ></div>
<div data-dojo-type="dojox/mobile/SwapView">
<img  src="icone.png" style="width:150px;display: block" />      
</div>
<div data-dojo-type="dojox/mobile/SwapView">
    <div id='logphotoaccueil_1'></div>
<img  id='photoaccueil_1' src="" style="width:250px;" onTouchstart="hammer_excecute(this.id);"/>     
</div>
<div data-dojo-type="dojox/mobile/SwapView">
    <div id='logphotoaccueil_2'></div>
<img  id='photoaccueil_2' src="" style="width:250px;" onTouchstart="hammer_excecute(this.id);"/>     
</div>
<div data-dojo-type="dojox/mobile/SwapView">
    <div id='logphotoaccueil_3'></div>
<img  id='photoaccueil_3' src="" style="width:250px;" onTouchstart="hammer_excecute(this.id);"/>     
</div>
</div>
<div id="aideZoom"></div>
    <br><div id='titreAccueil' align="center"></div><br><br>
	<input type='hidden' id='nombrePhotosCache'>
	<div align="center"><font size=3 color=grey align='center'>Nombre de  photos en ligne</font></div>
<div data-dojo-type="dojox/dgauges/components/grey/HorizontalLinearGauge"   maximum="100" style="height:30px" id="gauge"></div>
    <ul data-dojo-type="dojox/mobile/RoundRectList">
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/iconeAlbum.png', rightText:'Consulter', moveTo:'album'">Album</li>
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/iconeApparareilphoto2.png', rightText:'Prendre', moveTo:'tournees'">Photos</li>
    </ul> 
    <br>
    <div id='problemeReseau' align="center"></div>
    <div id='nbamisfacebook' align="center"></div>
     </div>
    
    
    <div id="tournees" data-dojo-type="dojox/mobile/ScrollableView">
            <h1 id="hdgTournees" data-dojo-type="dojox/mobile/Heading" data-dojo-props="fixed: 'top', back:'Accueil', moveTo:'tabViewAccueil', onClick: function(){CacherCamera();}">Prendre les photos</h1>
          <ul data-dojo-type="dojox/mobile/RoundRectList">
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,0,35,35', onClick: function(e){affichPointsTournees('Animaux')}, moveTo:'#'">Animaux</li>    
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,35,35,35', onClick: function(e){affichPointsTournees('Architecture')}, moveTo:'#'">Architecture</li>
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,70,35,35', onClick: function(e){affichPointsTournees('Célébrités')}, moveTo:'#'">Célébrités</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,105,35,35', onClick: function(e){affichPointsTournees('Décoration')}, moveTo:'#'">Décoration</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,140,35,35', onClick: function(e){affichPointsTournees('Evénements')}, moveTo:'#'">Evénements</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,0,35,35', onClick: function(e){affichPointsTournees('Faits divers')}, moveTo:'#'">Faits divers</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,35,35,35', onClick: function(e){affichPointsTournees('Gastronomie')}, moveTo:'#'">Gastronomie</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,70,35,35', onClick: function(e){affichPointsTournees('Insolite')}, moveTo:'#'">Insolite</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,105,35,35', onClick: function(e){affichPointsTournees('Jeux')}, moveTo:'#'">Jeux</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,140,35,35', onClick: function(e){affichPointsTournees('Loisirs')}, moveTo:'#'">Loisirs</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,0,35,35', onClick: function(e){affichPointsTournees('Nature')}, moveTo:'#'">Nature</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,35,35,35', onClick: function(e){affichPointsTournees('Paysage')}, moveTo:'#'">Paysage</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,70,35,35', onClick: function(e){affichPointsTournees('Restaurant')}, moveTo:'#'">Restaurant</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,105,35,35', onClick: function(e){affichPointsTournees('Selfie')}, moveTo:'#'">Selfie</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,140,35,35', onClick: function(e){affichPointsTournees('Voyages')}, moveTo:'#'">Voyages</li>  	
	</ul>
    </div>
    
    
    <div id="album" data-dojo-type="dojox/mobile/ScrollableView">
            <h1 id="hdgAlbum" data-dojo-type="dojox/mobile/Heading" data-dojo-props="fixed: 'top', back:'Accueil', moveTo:'tabViewAccueil', onClick: function(){CacherCamera();}">Voir les allbums</h1>
          <ul data-dojo-type="dojox/mobile/RoundRectList">
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,0,35,35', onClick: function(e){affichPointsAlbum('Animaux')}, moveTo:'#'">Animaux</li>    
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,35,35,35', onClick: function(e){affichPointsAlbum('Architecture')}, moveTo:'#'">Architecture</li>
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,70,35,35', onClick: function(e){affichPointsAlbum('Célébrités')}, moveTo:'#'">Célébrités</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,105,35,35', onClick: function(e){affichPointsAlbum('Décoration')}, moveTo:'#'">Décoration</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,140,35,35', onClick: function(e){affichPointsAlbum('Evénements')}, moveTo:'#'">Evénements</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,0,35,35', onClick: function(e){affichPointsAlbum('Faits divers')}, moveTo:'#'">Faits divers</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,35,35,35', onClick: function(e){affichPointsAlbum('Gastronomie')}, moveTo:'#'">Gastronomie</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,70,35,35', onClick: function(e){affichPointsAlbum('Insolite')}, moveTo:'#'">Insolite</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,105,35,35', onClick: function(e){affichPointsAlbum('Jeux')}, moveTo:'#'">Jeux</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'35,140,35,35', onClick: function(e){affichPointsAlbum('Loisirs')}, moveTo:'#'">Loisirs</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,0,35,35', onClick: function(e){affichPointsAlbum('Nature')}, moveTo:'#'">Nature</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,35,35,35', onClick: function(e){affichPointsAlbum('Paysage')}, moveTo:'#'">Paysage</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,70,35,35', onClick: function(e){affichPointsAlbum('Restaurant')}, moveTo:'#'">Restaurant</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,105,35,35', onClick: function(e){affichPointsAlbum('Selfie')}, moveTo:'#'">Selfie</li>  
	<li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="icon:'http://www.appliseeit.com/mobile/cameras.jpg', iconPos:'0,140,35,35', onClick: function(e){affichPointsAlbum('Voyages')}, moveTo:'#'">Voyages</li>  	
	</ul>
    </div>
    
    <div id="affichPointsAlbums" data-dojo-type="dojox/mobile/ScrollableView">
    </div>
    
    <div id="affichPointsTournee" data-dojo-type="dojox/mobile/ScrollableView">  
    </div>
    
    
    <div id='tabViewOptions' data-dojo-type='dojox/mobile/ScrollableView' >
    <h1 data-dojo-type="dojox/mobile/Heading">Options</h1>
    <ul data-dojo-type="dojox/mobile/RoundRectList">
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="rightText:'Camera/Image'"></li>
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="">Orientation auto
    <div data-dojo-type="dojox/mobile/Switch" data-dojo-props="onStateChanged:function(newStateOrientation){changeCorrectOrientation(newStateOrientation)}" value="off"></div>
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="">Blocage Position (Paysage)
    <div data-dojo-type="dojox/mobile/Switch" data-dojo-props="onStateChanged:function(){alert('Option à venir dans les prochaines versions');}" value="off"></div>
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="">Blocage Camera (Portrait)
    <div data-dojo-type="dojox/mobile/Switch" data-dojo-props="onStateChanged:function(newStatePosition){changePositionPortrait(newStatePosition)}" value="off"></div>
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="">Camera Frontale
    <div data-dojo-type="dojox/mobile/Switch" data-dojo-props="onStateChanged:function(newStateCameraDirection){changeCameraDirection(newStateCameraDirection)}" value="off"></div>
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="">Zoom Grand Angle
    <div data-dojo-type="dojox/mobile/Switch" data-dojo-props="onStateChanged:function(){alert('Option disponible dans les prochaines versions');}" value="off"></div>
     <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="rightText:'Alertes/Nofications'"></li>
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="">Son
    <div data-dojo-type="dojox/mobile/Switch" data-dojo-props="onStateChanged:function(newStateAlertSon){changeAlertSon(newStateAlertSon)}" value="off" id="alertSon"></div>
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="">Vibration
    <div data-dojo-type="dojox/mobile/Switch" data-dojo-props="onStateChanged:function(newStateVibration){changeAlertVibration(newStateVibration)}" value="off" id="alertVibration"></div>
    <li data-dojo-type="dojox/mobile/ListItem" data-dojo-props="">Reconnaissance Vocale
    <div data-dojo-type="dojox/mobile/Switch" data-dojo-props="onStateChanged:function(){Voix();}" value="off"></div>
    </li>
    </ul>
    </div>
    
    <div id="tabViewAlbum" data-dojo-type="dojox/mobile/ScrollableView" > 
    <h1 data-dojo-type="dojox/mobile/Heading">Albums</h1>
    <ul id="infoBadges" data-dojo-type="dojox/mobile/IconContainer"></ul>
<div data-dojo-type="dojox/mobile/RoundRect" style="background-color:white;height:60px;vertical-align:middle;">
<div id="messageAlerte"></div>
</div>

<div data-dojo-type="dojox/mobile/RoundRect"  style="background-color:#EBF4FA;height:40px;vertical-align:middle;">
<div id="messageNouvelAlbum"></div>
</div>
    </div>
    
    <div id="tabViewAjouter" data-dojo-type="dojox/mobile/ScrollableView" > 
    <h1 data-dojo-type="dojox/mobile/Heading">Ajouter</h1>
    <div id="texteAjouter" align="center"></div><br><br>
    <font color='grey' size='3'>Quel thème choississez-vous ?</font>
    <select id="nouvelAlbum">
<option value='Animaux'>Animaux
<option value='Architecture'>Architecture
<option value='Célébrités'>Célébrités
<option value='Décoration'>Décoration
<option value='Evénements'>Evénements
<option value='Faits divers'>Faits divers
<option value='Gastronomie'>Gastronomie
<option value='Insolite'>Insolite
<option value='Jeux'>Jeux
<option value='Loisirs'>Loisirs
<option value='Nature'>Nature
<option value='Paysage'>Paysage
<option value='Restaurant'>Restaurant 
<option value='Selfie'>Selfie
<option value='Voyages'>Voyages
</select>
    <font color='grey' size='3'>Comment s'appelle votre album ?</font><input type="text" id="nouvelElement">
    <font color='grey' size='3'>Quel est votre pseudo ?</font><input type="text" id="nouveauPseudo">    
    <button onclick='creerAlbum()'>Ajouter</button>
    <br>
    <div id="resultatCreerAlbum"></div><br><br>
    <div id='afficherTourneeApresCreer' style='display:none'><button onclick='affichPointsTournees(document.getElementById("nouvelAlbum").value);'>Afficher</button></div>
    </div>
    
    <div id="tabViewUpdates" data-dojo-type="dojox/mobile/ScrollableView" > 
    <h1 data-dojo-type="dojox/mobile/Heading">Infos</h1>
    <ul id="intro" data-dojo-type="dojox/mobile/RoundRectList">
<div id='IntroInfos' align='center'></div>
    </ul>
    <div data-dojo-type="dojox/mobile/Accordion" >
        <div data-dojo-type="dojox/mobile/ContentPane" data-dojo-props='label:"Aide"'>   
	<div id='AideInfos' align='left'></div>
        </div>
        <div data-dojo-type="dojox/mobile/ContentPane" data-dojo-props='label:"A venir"'>
	<div id='AvenirInfos' align='left'></div>
   </div>
        <div data-dojo-type="dojox/mobile/ContentPane" data-dojo-props='label:"Pourquoi faire ?"'>
	<div id='PourquoifaireInfos' align='left'></div>
    </div>
        <div data-dojo-type="dojox/mobile/ContentPane" data-dojo-props='label:"Nous contacter ?"' id='NouscontacterInfos'>
	<div  align='left'></div>
    </div>
     </div>
    </div>
    
    <div id='cadreCamera' style="display:none;valign:top;">
    <div id='affichLocalisation'></div>
    <div data-role="content" align="center" width="100%">
    <a href="#" data-role="button" id="open_camera_button" align="center" width="100%">Prendre une photo</a>
    </div>
    <div data-role="content">
    <div id="log"></div>
    <img id="pic" src="" width="300" style="display: none;"/>
    </div>
    </div>
    
    
    <ul id="demoTabBar" data-dojo-type="dojox/mobile/TabBar" data-dojo-props='iconBase:"http://www.distriweb.mobi/mgp/paris/mobile/tab-icons.png",fixed:"bottom"'>	
    <li data-dojo-type="dojox/mobile/TabBarButton" data-dojo-props='iconPos1:"0,0,29,29", iconPos2:"29,0,29,29", moveTo:"tabViewAccueil", selected:true, onClick:function(){CacherCamera();RafraichirAccueil();nombrePhotos()}'>Accueil</li>
    <li data-dojo-type="dojox/mobile/TabBarButton" data-dojo-props='iconPos1:"0,87,29,29", iconPos2:"29,87,29,29", moveTo:"tabViewAlbum", onClick:function(){CacherCamera();AffichBadges()}'>Today</li>
    <li data-dojo-type="dojox/mobile/TabBarButton" data-dojo-props='iconPos1:"0,58,29,29", iconPos2:"29,58,29,29", moveTo:"tabViewAjouter", onClick:function(){CacherCamera()}'>Ajouter</li>
    <li data-dojo-type="dojox/mobile/TabBarButton" data-dojo-props='iconPos1:"0,29,29,29", iconPos2:"29,29,29,29", moveTo:"tabViewOptions", onClick:function(){CacherCamera()}'>Options</li>
    <li data-dojo-type="dojox/mobile/TabBarButton" data-dojo-props='iconPos1:"0,116,29,29", iconPos2:"29,116,29,29", moveTo:"tabViewUpdates", onClick:function(){CacherCamera()}'>Infos</li>
    </ul>
    
    <script src="hammer_fonctions.js"></script>   
    
    </body>
    </html>
