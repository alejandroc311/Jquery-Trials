//need a toolbar that has menu options
//when the page reaches a certain size the menu options need to be hidden into a dropdownn menu.
// when the drop down menu is clicked it shows the options in a vertical list.
//




//cache the variables that I'll use

var $body = $("body");
var $nav = $("<nav></nav>");
var $dropdownMenuDiv = $("<div></div>");
var $toolbarListContainer = $("<ul></ul>");


var listItems = ["Home","Contact","About"];

function setBody(){
  var $bodyStyle = {padding:0,margin:0};
  $body.css($bodyStyle);
}

function setToolbar(){

  var $toolbarstyle = {backgroundColor:"black", padding:0, margin:0};
  $nav.append($toolbarListContainer).css($toolbarstyle);
  $nav.appendTo($body);
  $toolbarListContainer.css({'color':'white',listStyle:"none",padding:0,margin:0,'overflow':'hidden'});
}


function setLinks(){
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var listItemLinks = $("<li><a class = 'toolBarLinks'>"+listItem+"</a></li>")
    $toolbarListContainer.append(listItemLinks);
  }
  if($('a').hasClass("toolBarLinks")){
    $(".toolBarLinks").css({float:'left',padding: "8px 16px 8px 16px"});
    }
}




setBody();
setToolbar();
setLinks();
