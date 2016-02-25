//need a toolbar that has menu options
//when the page reaches a certain size the menu options need to be hidden into a dropdownn menu.
// when the drop down menu is clicked it shows the options in a vertical list.
//




//cache the variables that I'll use

var $body = $("body");
var $nav = $("<nav></nav>");
var $dropdownMenu = $("<div></div>");
var $listContainer = $("<ul></ul>");


var listItems = ["Home","Contact","About"];

function setBody(){
  var $bodyStyle = {padding:0,margin:0};
  $body.css($bodyStyle);
}

function setToolbar(){

  var styles = {backgroundColor:"black", padding:0, margin:0};
  $nav.append($listContainer).css(styles);
  $nav.appendTo($body);
}


function setLinks(){
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    var listWithLink = $("<li><a>"+listItem+"</a></li>")
    $listContainer.append(listWithLink);
  }

  var $listStyle = {'color':'white',listStyle:"none",padding:0,margin:0,'overflow':'hidden'};
  $listContainer.css($listStyle);
  $("a").css({float:'left',padding: "8px 16px 8px 16px"});
}




setBody();
setToolbar();

setLinks();
