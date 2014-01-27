(function(){
    var deFlag; // assign any value to disable debugging
    de = function(code,flag){
        deFlag = typeof(deFlag)=='undefined' || !deFlag ? 0 :1;
        if(!flag && !deFlag){
            //console.log(code);
		}
    }
})();
    
var canvas,audio;
var popup_isVisible= false;
var load_interval; 
var flag_audioLoaded=false,flag_videoLoaded = false;
var bgPathColor = '#52280B';
var fgPathColor = '#FFFFFF';
var context;
var globalCoordinatesCount = 0;
var inter;
var lastDrwanCoord;
var pathPaused=false;
var processingBlock=0,processingCoord =-1 ;
    
var block_1 = {
    name : 'intro',
    fire  : 'popup_1',
    startTime: 0, //in seconds
    endTime: 1,// in seconds
    coordinates : [[392,115],[392,123],[400,128],[400,135],[401,137],[402,139],[403,141],[403,144],[402,147],[403,150]]
};
var block_2 = {
    name : 'verse',
    fire  : 'popup_2',
    startTime: 1, //in seconds
    endTime: 7,// in seconds
    coordinates : [[402,160],
    [401,165],[400,168],[396,171],[395,173],[390,174],[389,176],[386,178],[381,180],[376,181],[370,182],[367,182],
    [360,183],[359,184],[356,186],[355,188],[354,186],[358,187],[352,188],[345,188],[340,189],
    [330,188],[320,188],[311,187],[304,188],
    [302,195],[299,199],[295,204],[295,207],[296,210],[294,211],[292,215],[290,218],[287,220],[286,225],[285,230],[285,237],[284,246]
    ]
};
var block_3 = {
    name : 'chorus',
    fire  : 'popup_3',
    startTime: 7 , //in seconds
    endTime: 37,// in seconds
    coordinates : [[284,246],
    [283,255],[281,257],[282,260],[283,263],[286,262],[297,268],[300,268],[305,269],[310,270],[314,270],
    [318,274],[322,278],[326,280],[326,284],[323,290],[319,299],[316,307],[314,310],[315,318],[313,321],[311,326],[306,329],
    [303,335],[299,343],[298,352],[298,355]
    ]
};    
var block_4 = {
    name : 'verse',
    fire  : 'popup_2',
    startTime: 37, //in seconds
    endTime: 57,// in seconds
    coordinates : [[298,355],
    [297,365],[296,370],[296,378],[297,386],[296,394],[295,400],[296,405],[300,412],[308,414],[317,417],[322,421],[325,421],
    [330,420],[340,418],[346,416],[355,407],[360,400],[368,397],[378,394],[386,386],[390,380],[393,375],[396,374],[400,373],
    [403,370],[410,363],[414,361],[415,355],[416,350],[417,345],[416,335],[418,328],[420,320],[420,307],
    [424,301],[427,294],[431,287],[438,285],[443,282],[452,281],[460,277],[470,270],[478,267],[485,264],[488,262],[490,252],[492,245],[494,235],
    [494,224]
    ]
};   
var block_5 = {
    name : 'chorus',
    fire  : 'popup_3',
    startTime: 57, //in seconds
    endTime: 87,// 1.27 in seconds
    coordinates : [[494,224],    
    [496,218],[499,211],[506,208],[513,203],[518,202],[521,202],[527,204],[537,204],[540,202],[544,202],[550,202],
    [555,204],[562,206],[565,206],[570,215],[570,220],[571,225],[573,230],[573,239],[582,248],[590,249],
    [595,249],[599,249],[608,252],[617,254],[620,259],[630,261],[643,264],[658,266],[666,268],
    [668,278],[670,286],[672,295],[672,305],[671,318],[668,326]
    ]
};
var block_6 = {
    name : 'bridge',
    fire  : 'popup_4',
    startTime: 87, //in seconds
    endTime: 122,// in seconds
    coordinates : [[668,326],    
    [667,333],[668,342],[666,352],[665,361],[660,362],[650,363],[642,364],[633,363],[624,361],[615,361],[605,360],
    [599,358],[592,357],[583,356],[578,357],[574,368],[571,378],[569,385]
    ]
};
var block_7 = {
    name : 'chorus',
    fire  : 'popup_3',
    startTime: 122, //in seconds
    endTime: 154,// in seconds   
    coordinates : [[569,385],  
    [566,395],[564,400],[563,410],[559,418],[557,426],[551,436],[552,444],[551,450],[550,457],[549,460],[548,467],[549,475]
    ]
}
var block_8 = {
    name : 'end',
    fire  : 'popup_3',
    startTime: 154, //in seconds
    endTime: 178,// in seconds   
    coordinates : [[549,475],
    [550,480],[551,487],[551,494],[552,496],[554,498],[558,499],[566,499],[572,500],[580,500],[587,499],
    [593,500],[599,501],[606,502],[612,503],[618,504],[625,505],[628,505],[631,506],[634,507],[637,508],
    [637,511],[637,515],[637,519],[638,523],[639,528],[639,533],[639,538],[640,542],[641,547],[641,552],
    [641,557],[641,565],[640,570],[641,575],[642,580],[643,581],[645,582],[648,583],[651,583],[655,584],[660,584],
    [665,584],[670,584],[675,583],[679,582],[683,581],[686,580],[690,579],[694,578],[698,577],[702,576],[707,574],
    [710,572],[714,571],[718,570],[723,570],[728,569],[735,568],[740,567],[745,566],[749,566],[751,568],[753,570],
    [758,572],[761,573],[765,575],[767,579],[769,583],[769,588],[769,595]
    ]
}
    
var registeredBlocks =( function(){
    return [block_1,block_2,block_3,block_4,block_5,block_6,block_7,block_8];
})();
    
var popupEvents = {
    popup_1 : function(){
        return properties = {
            css : {
                div:{},
                title :{},
                details :{}
            },
            content :{
                title :'A Journey Through a Song',
                details :'Each song has a structure called a \'form\'.  The form makes up the order of the different sections in a song.  Structure can vary between songs and styles, but many follow a standard form: a combination of verses and choruses.  When arranged in the most effective way, they help to set up and release tension in the song, either in the story of the lyrics or in the music.  Let\'s explore the journey of a typical song.  Touch the music notes to start the song playing from that part, and touch the words of each section to read about it.  Press play to hear the song from beginning to end!'
            }
        }
    },
    popup_2 : function(){
        return properties = {
            css : {
                div:{},
                title :{},
                details :{}
            },
            content :{
                title :'Verse',
                details :'A verse is where the story of a song is told, and where the drama and tension of a song is set up.  They often contain a lot of lyrics.  Each verse can have its own short story, or can continue the story told throughout the song. '
            }
        }        
    },
    popup_3 : function(){
        return properties = {
            css : {
                div:{},
                title :{},
                details :{}
            },
            content :{
                title :'Chorus',
                details :'The chorus is shorter and very catchy, with fewer lyrics and a memorable melody.  It usually contains the main theme of the song, and often the title too.  It is repeated a few times through the song, which helps you remember it.  The chorus releases the tension that the verse sets up  it\'s this build-up and release that drives songs, and keeps you coming back to listen to them again and again!'
            }
        }
    },
    popup_4 : function(){
        return properties = {
            css : {
                div:{},
                title :{},
                details :{}
            },
            content :{
                title :'Bridge',
                details :'Bridges are different sections of music that are used to break up the verse and chorus and give the listener a moment to reflect on what is happening.  They might have a different melody or chord style, or might be an instrumental solo.  They are like a cool change in the weather, and help to keep you interested in the journey of the song.'
            }
        }        
    }
}
    
var points = {
    linePoint : []
};

function Point(x,y) {
    this.x = x;
    this.y = y;
}
function fireFirstPopup(){
	$('#canvasPopup').show();
}    
function firePopupEvents(){
    if(!registeredBlocks[processingBlock].fire)
        return;
    
    var event = registeredBlocks[processingBlock].fire ;
    
    de('fire ' + event,1)
    if(!popupEvents[event])
        return;
    
    var props = popupEvents[event]();
    
    if(popup_isVisible)
        hidePopup();
    
    configurePopup(props,'displayPopup'); // props,callback
}   

function configurePopup(props,callback){
    de(props);
    var pop = $('#canvasPopup');
    var title = $('#canvasPopup .title');
    var details = $('#canvasPopup .details');
    
    if(props.content){
        if(props.content.title)
            title.html(props.content.title);
        if(props.content.details)
            details.html(props.content.details);
    }
    else{
        return;
    }
        
    if(props.css){
        if(props.css.title)
            title.css(props.css.title);
        if(props.css.details)
            details.css(props.css.details);
        if(props.css.div)
            pop.css(props.css.div);        
    }
    
    if(callback)
        window[callback]();
}

function displayPopup(){
    $('#canvasPopup').fadeIn('slow');
    popup_isVisible= true;
}

function hidePopup(){
    $('#canvasPopup').fadeOut(0);
    popup_isVisible= false;
}

function calculateLineCoords(){
    for(var i =0 ; i<registeredBlocks.length ;i++){
        var temp =  registeredBlocks[i].coordinates;
        for(var c = 0; c < temp.length; c++) {
            var x = temp[c][0];
            var y = temp[c][1];
            var p  = new Point(x,y);
            points.linePoint.push(p);
        }
    }
    return  points;
}
    
function drawPathTimeCalculator(block){
    if(!block)
        block = registeredBlocks[processingBlock];
    if(inter)
        clearInterval(inter);
        
    var pPoints =  block.coordinates.length;
    var secs = block.endTime - block.startTime ,milis = secs* 1000 ,time =milis/pPoints;
        
    //        time = 20;
        
    inter = setInterval("__drawFollowUp()",time);
    de('calculating time for ' +  block.name + " secs- " +secs +' milis- '+milis +' points-' +pPoints + " time-  " + time,1);
    return time;
}

function __drawInitialPath() {
    de('drawInitialPath',1);
        
    context.strokeStyle = bgPathColor;
    context.lineWidth = 3;
    de(points,1)
        
    for(var count = 0; count < points.linePoint.length; count++) {
        if(count == 0) {
            context.beginPath();  
            de('first point',1)
            de(points.linePoint[count],1);
            context.moveTo(points.linePoint[count].x,points.linePoint[count].y);

        } else {
            de("move------------",1)
            de(points.linePoint[count-1],1)
            de(points.linePoint[count],1)
            context.moveTo(points.linePoint[count-1].x,points.linePoint[count-1].y);
            context.lineTo(points.linePoint[count].x,points.linePoint[count].y);
        }    
        context.stroke();
    }
}
    
function __drawFollowUp(){
         
    context.strokeStyle = fgPathColor;
    context.lineWidth = 3;
    var killProcess= false;
        
    if(registeredBlocks.length > processingBlock+1){
        de('block is '+processingBlock + ' length is ' +registeredBlocks[processingBlock].coordinates.length,1)
        if(registeredBlocks[processingBlock].coordinates.length > processingCoord+1){
            de("found coord  ",1)
            processingCoord++;
        }
        else{
            de("last coord  ");
            
            
            firePopupEvents();    
            processingBlock++;
            processingCoord = 0;
        }
    }
    else{
        if(registeredBlocks[processingBlock].coordinates.length > processingCoord+1){
            processingCoord++;
        }
        else{
            de('last entry')
            clearInterval(inter);
            killProcess= true;
        }
    }
        
    if(processingCoord == 0 && registeredBlocks[processingBlock].coordinates.length > processingCoord+1){
        // block ends here 
        // refresh time interval for drawing path
        drawPathTimeCalculator(registeredBlocks[processingBlock])
    }
        
    de('processing ' + processingBlock + ' coord '+ processingCoord +' ',1)
    var c = registeredBlocks[processingBlock].coordinates[processingCoord] ;

    var p = new Point(c[0],c[1]);
    if(processingBlock==0 && processingCoord==0){
        de('first point',1)
        de(p,1);
        context.beginPath();  
        context.moveTo(p.x,p.y);
    }
    else{
        context.moveTo(lastDrwanCoord.x,lastDrwanCoord.y);
        context.lineTo(p.x,p.y);
        de("move------------",1)

    }
    context.stroke();
    lastDrwanCoord = p;

    if(killProcess || pathPaused){
        de('clearing')
        clearInterval(inter);
    }
}

function drawFollowUp(){
    //        inter = setInterval("__drawFollowUp()",200);
    de('drawFollowUp()')
    drawPathTimeCalculator();
}

function get_bg_img(callback){
    base_image = new Image();
    base_image.src = 'css/images/9-12/Art_and_Music/How_To_Write_A_Song/What_Is_A_Song/A_Journey_Through_A_Song/A_Journey_Map_Plain.png';
    base_image.onload = function(){
        context.drawImage(base_image, 0, 0);
        flag_videoLoaded = true;
    }
}
    
function get_audio_player(){
    var source = "audio/How_To_Write_A_Song/A_Journey_Through_A_Song.mp3"
    audio = new Audio();
    audio.src=  source;        

    audio.addEventListener('canplaythrough', function(){
        flag_audioLoaded = true;
    });
}

function init(){
    canvas = document.getElementById('drawCanvas');
    context = canvas.getContext("2d");
    loadDependecies();
	fireFirstPopup();
}
    
function loadDependecies(){
    get_bg_img();
    get_audio_player();        
    //load_interval = setInterval('triggerAnimations()',200);
}
    
function triggerAnimations(){
    de(' triggerAnimations ' +flag_audioLoaded + "  " +flag_videoLoaded )
    if(flag_audioLoaded && flag_videoLoaded){
        drawInitialPath();
        //audio.play();
        clearInterval(load_interval);
    }
}
    
function drawInitialPath(){
    calculateLineCoords();
    __drawInitialPath(); 
    setTimeout('drawFollowUp()',100); // moved to video loader function
}
    
function playCanvas(){
    __playPathDrwaing();
	pauseHowToWriteASong();
    audio.play();
}
    
function pauseCanvas(){
    __pausePathDrwaing();
    audio.pause();
	bgsoundHowToWriteASong.play();
}
    
function __playPathDrwaing(){
    pathPaused = false;
    drawPathTimeCalculator();        
}
    
function __pausePathDrwaing(){
    de('pausePathDrwaing')
    pathPaused = true;
}

$(document).ready(function(){
    $('#canvasPopup .close').click(function(){
        de("close popup")
        hidePopup()
    });
	$('.song_play_btn').on('tap',function(){
		playCanvas();
		$('.song_play_btn').hide();
		$('.song_pause_btn').show();
	});
	$('.song_pause_btn').on('tap',function(){
		pauseCanvas();		
		$('.song_play_btn').show();
		$('.song_pause_btn').hide();		
	});	
});