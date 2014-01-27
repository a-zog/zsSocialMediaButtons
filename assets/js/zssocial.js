/* ========================================================================
* zsSocialMediaButtons: zssocial.js v1.0
* https://github.com/a-zog
* ========================================================================
* Copyright (c) 2014 Zoghlami Ahmed
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
* ======================================================================== */

(function ($)
{

  $.fn.ZSSocial=function(options)
  {  "use strict";

  var defauts=
  {
'zstyle': "flat",   //Default style (may be: "flat", "bubble", "tech")
'zsize': "normal",   //Default size (may be: "normal", "small", "large")
'heffect': "none",   //Default Hover effect (may be: "none" (default), "wakeup", "focuson", "growup")
'profiles': {
  "facebook": "#",
  "twitter": "#",
  "linkedin": "#",
  "viadeo": "#",
  "xing": "#",
  "googleplus": "#",
  "youtube": "#",
  "vimeo": "#",
  "soundcloud": "#",
  "lastfm": "#",
  "vk": "#",
  "skype":"#",
  "pinterest": "#",
  "tumblr": "#",
  "wordpress": "#",
  "github": "#",
  "flickr": "#",
  "deviantart": "#",
  "instagram": "#"
},
'iclass': {  "facebook": "zicon-facebook-2" }
};  

console.log(options);
var parameters=$.extend(defauts, options);

//possible values in arrays
var styles= ["bubble", "tech", "flat"];
var sizes= ["small", "large"];
var effects= ["growup", "focuson", "wakeup"];
var iclass= { 
  "facebook": "zicon-facebook-2",
  "twitter": "zicon-twitter",
  "linkedin": "zicon-linkedin",
  "viadeo": "zicon-viadeo",
  "xing": "zicon-xing",
  "googleplus": "zicon-gplus",
  "youtube": "zicon-youtube",
  "vimeo": "zicon-vimeo-1",
  "soundcloud": "zicon-soundcloud",
  "lastfm": "zicon-lastfm",
  "vk": "zicon-vkontakte",
  "skype":"zicon-skype-1",
  "pinterest": "zicon-pinterest",
  "tumblr": "zicon-tumblr",
  "wordpress": "zicon-wordpress",
  "github": "zicon-github-circled-4",
  "flickr": "zicon-flickr-2",
  "deviantart": "zicon-deviantart-1",
  "instagram": "zicon-instagram"
};

this.each(function()
{
  var zs_social=$(this);
  zs_social.addClass('zsocial');

  zs_social.html('<ul></ul>');


//Check if configuration parameters was modified - unobtrusive input (no JavaScript to write)
if ( (zs_social.data("zs-style") != "undefined") && ( inArray(zs_social.data("zs-style"),styles) ) ) {  
  parameters.ztyle=zs_social.data("zs-style");
}

if ( (zs_social.data("zs-size") != "undefined") && (inArray(zs_social.data("zs-size"), sizes ))) {  
  parameters.zsize=zs_social.data("zs-size");
}

if ( (zs_social.data("zs-hovereffect") != "undefined") && (inArray(zs_social.data("zs-hovereffect"), effects) ) ) {  
  parameters.heffect=zs_social.data("zs-hovereffect");
}

if ( typeof(zs_social.data("zs-profiles")) != "undefined" ) {  
  console.log("profiles:"+zs_social.data("zs-profiles") );
  parameters.profiles=zs_social.data("zs-profiles");
}

//apply suitable style
if ( (parameters.ztyle=="bubble") || (parameters.ztyle=="tech") ){
  zs_social.addClass(parameters.ztyle);
}

console.log(parameters.ztyle);
console.log(parameters.profiles);
console.log(parameters.heffect);

$.each(parameters.profiles.networks, function(i, social, sprofile) { //social = social

  try {


    var network = parameters.profiles.networks[i].social;
    var account = parameters.profiles.networks[i].sprofile;

//apply suitable style
if ( (parameters.ztyle == "bubble") || (parameters.ztyle== "flat") ) {
  var classLi = 'bg-'+network;
}else{
 if ( (parameters.ztyle== "tech") )  {
  var classLi = 'color-'+network+' border-'+network;
}
}
if (typeof(parameters.iclass[network]) != "undefined" )
{
  var zicon=parameters.iclass[network];
}else{
  var zicon=iclass[network];
}
switch(network)
{
  case "twitter": //get the username for twitter

  var href='https://twitter.com/'+account;
  break;

 //get the url for the other social networks
 case "linkedin":
 case "facebook":
 case "viadeo":
 case "xing":
 case "googleplus":
 case "youtube":
 case "vimeo":
 case "soundcloud":
 case "lastfm":
 case "vk":
 case "skype":
 case "pinterest":
 case "tumblr":
 case "wordpress":
 case "github":
 case "flickr":
 case "deviantart":
 case "instagram":
 var href=account;
 break;

 default:
 console.error("Error:'"+network+"' Social Media NOT Found");

}
zs_social.find("ul").append('<li><a class="'+classLi+'" href="'+href+'" target="_blank" ><span class="'+zicon+'"></span></a></li>');
}catch (e){
  console.log(e);
}

});


//apply the size
if ( inArray(parameters.zsize, sizes) ){
  zs_social.addClass(parameters.zsize);
}


//apply the hover effect
if ( inArray(parameters.heffect, effects ) ){
  zs_social.addClass(parameters.heffect);
}
});

return this;
};

function inArray(needle, haystack) {
  var length = haystack.length;
  for(var i = 0; i < length; i++) {
    if(haystack[i] == needle) return true;
  }
  return false;
}


})(jQuery);



$(document).ready( function() {
  $('[data-zsocial="socialbtns"]').ZSSocial();


});

