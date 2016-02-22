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

function setToolbar(){

  var styles = {backgroundColor:"black"};
  $nav.append($listContainer).css(styles);
  $nav.appendTo($body).css("padding",0).css("margin",0);


}

function setListItems(){
  for (var i = 0; i < listItems.length; i++) {
    var listItem = $("<li>"+listItems[i]+"</li>");
    $listContainer.append(listItem);
  }
  $listContainer.css("color","white");
}

setToolbar();
setListItems();
