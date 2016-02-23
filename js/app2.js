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
  var bodyStyles = {padding:0,margin:0};
  $body.css(bodyStyles);
}

function setToolbar(){

  var styles = {backgroundColor:"black", padding:0, margin:0};
  $nav.append($listContainer).css(styles);
  $nav.appendTo($body);
}

function setListItems(){
  for (var i = 0; i < listItems.length; i++) {
    var listItem = $("<li><a>"+listItems[i]+"</a></li>");
    $listContainer.append(listItem);
  }

  var $listStyle = {'color':'white',listStyle:"none",padding:0,margin:0};
  $listContainer.css($listStyle);
}
setBody();
setToolbar();
setListItems();
