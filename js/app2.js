
//when the page reaches a certain size the menu options need to be hidden into a dropdownn menu.
// when the drop down menu is clicked it shows the options in a vertical list.

//cache the variables that I'll use

var $body = $("body");
var $nav = $("<nav></nav>");
var $dropdownMenuDiv = $("<div></div>");
var $toolbarListContainer = $("<ul class ='toolBarLinks'></ul>");
var listItems = ["Home","Contact","About"];

function setBody(){
  var $bodyStyle = {padding:0,margin:0};
  $body.css($bodyStyle);
}

//need a toolbar that has menu options
function setToolbar(){
  var $toolbarstyle = {backgroundColor:"black", padding:0, margin:0};
  $nav.css($toolbarstyle);
  $nav.append($toolbarListContainer);
  $nav.appendTo($body);
  $toolbarListContainer.css({'color':'white',listStyle:"none",padding:0,margin:0,'overflow':'hidden'});
}


function setToolbarLinks(){
  for (var i = 0; i < listItems.length; i++) {
    $toolbarListContainer.append( $("<li><a>"+listItems[i]+"</a></li>"));
  }
  if($('a').parent().parent().hasClass("toolBarLinks")){
    //NOTE TODO CHECK THIS THIS IS IMPORTANT//
    //FIND IF THERE IS A JQUERY METHOD THAT CHECKS IF IT HAS A CERTAIN PARENT IN THE DOM TREE
    $("a").css({float:'left',padding: "8px 16px 8px 16px"});
    }
}

//fix this to make it check only if it resizes on the values to return true or false.

  //make another function to make it check constantly the current widths and heights

  //then make a function that adjusts the screen accordingly
function adjustScreen(){
 $(window).resize(function(){
   var $screenWidth = $(window).width();
   if($screenWidth<800){
     $nav.append(($dropdownMenuDiv));
  }else{
    $dropdownMenuDiv.remove();
  }
 });
}
//TODO MAKE IT CHANGE CLASSES WHEN THE SCREEN SIZE CHANGES TO AVOID BUGS
//NOTE ITS REMOVING THE TOOLBAR LIST ITEMS INDISCRIMANTELY BEAUSE IT HAS THE TOOLBARLINKS CLASS. SEE LINE 96

function hideToolbarLinks(){
  $(window).resize(function(){
    var $screenWidth = $(window).width();
    if($screenWidth<800){
      if($('a').parent().parent().hasClass("toolBarLinks")){
        $toolbarListContainer.addClass("dropDownLinks");
        $toolbarListContainer.remove();
      }
    }
  });
}

function showToolbarLinks(){
  $(window).resize(function(){
    var $screenWidth = $(window).width();
    if($screenWidth>800){
      if($toolbarListContainer.hasClass('toolBarLinks')){
        $toolbarListContainer.removeClass("dropDownLinks");
        $nav.append($toolbarListContainer);
      }
      else{
        $toolbarListContainer.addClass("toolBarLinks");
        $toolbarListContainer.removeClass("dropDownLinks");
        $nav.append($toolbarListContainer);
      }
      //TODO function that checks if it is already appended, to not keep appending

      }
  });
}



//NOTE my code isn't dry i need to make it more efficient so that i can make it dryer. im repeating the same shit over and over.
//NOTE make it so that it return true or false and that it actually evaluates to true or false, wherever implemenred.
//NOTE TODO
function isScreenLarge(){
  $(window).resize(function(){
    var $screenWidth = $(window).width();
    if($screenWidth>800){
      return true;
    }else if($screenWidth <= 800){
      return false;
    }
  });
}

function setDropDownMenu(){
  $(window).resize(function(){
    var $screenWidth = $(window).width();
    if($screenWidth<800){
      if($toolbarListContainer.hasClass("dropDownLinks")){
        $toolbarListContainer.removeClass('toolBarLinks');
        $dropdownMenuDiv.append($toolbarListContainer);
      }
      else{
        $toolbarListContainer.addClass("dropDownLinks");
        $toolbarListContainer.removeClass('toolBarLinks');
        $dropdownMenuDiv.append($toolbarListContainer);
      }

    }
  });
}

function styleDropDownMenu(){

}


setBody();
setToolbar();
setToolbarLinks();
setDropDownMenu();
showToolbarLinks();
hideToolbarLinks();
adjustScreen();
