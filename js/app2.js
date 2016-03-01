
//when the page reaches a certain size the menu options need to be hidden into a dropdownn menu.
// when the drop down menu is clicked it shows the options in a vertical list.
//




//cache the variables that I'll use

var $body = $("body");
var $nav = $("<nav></nav>");
var $dropdownMenuDiv = $("<div></div>");
var $toolbarListContainer = $("<ul></ul>");
var listItems = ["Home","Contact","About"];
var $screenWidth = $(window).width();
var $screenHeight = $(window).height();
function setBody(){
  var $bodyStyle = {padding:0,margin:0};
  $body.css($bodyStyle);
}
//need a toolbar that has menu options
function setToolbar(){

  var $toolbarstyle = {backgroundColor:"black", padding:0, margin:0};
  $nav.append($toolbarListContainer).css($toolbarstyle);
  $nav.appendTo($body);
  $toolbarListContainer.css({'color':'white',listStyle:"none",padding:0,margin:0,'overflow':'hidden'});
}


function setLinks(){
  for (var i = 0; i < listItems.length; i++) {
    $toolbarListContainer.append( $("<li><a class = 'toolBarLinks'>"+listItems[i]+"</a></li>"));
  }
  if($('a').hasClass("toolBarLinks")){
    $(".toolBarLinks").css({float:'left',padding: "8px 16px 8px 16px"});
    }
}

//fix this to make it check only if it resizes on the values to return true or false.

  //make another function to make it check constantly the current widths and heights

  //then make a function that adjusts the screen accordingly
function checkScreenSize(){
 $(window).resize(function(){
   if($screenWidth<800){
     $nav.append($dropdownMenuDiv);
     console.log("Div appended");
  }else{
    $($dropdownMenuDiv).remove();
    console.log("div removed");
  }
 });
}
checkScreenSize();
setBody();
setToolbar();
setLinks();
