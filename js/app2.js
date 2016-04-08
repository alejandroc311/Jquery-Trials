
//when the page reaches a certain size the menu options need to be hidden into a dropdownn menu.
// when the drop down menu is clicked it shows the options in a vertical list.

//cache the variables that I'll use

var $body = $("body");
var $nav = $("<nav></nav>");
var $dropdownMenuDiv = $("<div></div>");
var $toolbarListContainer = $("<ul class ='toolBarLinks'></ul>");
var listItems = ["Home","Contact","About"];
var $dropDownIcon = $("<img src ='../icons/mobilemenu.png'></img>");
var elementsArray;
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

}


function setToolbarLinks(){
  for (var i = 0; i < listItems.length; i++) {
    $toolbarListContainer.append( $("<li><a>"+listItems[i]+"</a></li>"));
  }
  styleToolbarLinks();
}

function styleToolbarLinks(){
  if($('a').parent().parent().hasClass("toolBarLinks")){
      //NOTE TODO CHECK THIS THIS IS IMPORTANT//

      //FIND IF THERE IS A JQUERY METHOD THAT CHECKS IF IT HAS A CERTAIN PARENT IN THE DOM TREE
    $toolbarListContainer.css({'color':'white',listStyle:"none",padding:0,margin:0,'overflow':'hidden'});
    $("a").css({float:'left',padding: "8px 16px 8px 16px"});
    }
  }




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


function hideToolbarLinks(){
    if($('a').parent().parent().hasClass("toolBarLinks")){
      $dropdownMenuDiv.addClass("dropDownLinks");
      $toolbarListContainer.removeClass("toolBarLinks");
      elementsArray = [$toolbarListContainer, $('a')];
      resetCSS(elementsArray);
      $toolbarListContainer.remove();

  }
}

function showToolbarLinks(){
  $toolbarListContainer.addClass("toolBarLinks");
  $dropdownMenuDiv.removeClass("dropDownLinks");
  $nav.append($toolbarListContainer);
      //TODO function that checks if it is already appended, to not keep appending
}

//NOTE my code isn't dry i need to make it more efficient so that i can make it dryer. im repeating the same shit over and over.


  $(window).resize(function(){
    var $screenWidth = $(window).width();
    if($screenWidth>800){
      showToolbarLinks();
      styleToolbarLinks();
    }else if($screenWidth <= 800){
      hideToolbarLinks();
      setDropDownMenu();
    }
  });

function setDropDownMenu(){
  if($dropdownMenuDiv.hasClass("dropDownLinks")){
      styleDropDownMenu();
    }
}

function styleDropDownMenu(){
  if($("div").hasClass("dropDownLinks")){
    $dropDownIcon.appendTo($dropdownMenuDiv);
  }
}
function revealDropDownMenu(){
  $dropdownMenuDiv.append($toolbarListContainer);
  styleDropDownList();
}
function styleDropDownList(){
  if($("a").parent().parent().parent().hasClass("dropDownLinks")){
    $toolbarListContainer.css({'color':'white',listStyle:"none",padding:0,margin:0,'overflow':'hidden',width:200});
    $("a").css({display:"block",padding: "8px 16px 8px 16px"});

  }

}
$dropDownIcon.hover(function(){
  revealDropDownMenu();
},function(){
  elementsArray = [$toolbarListContainer, $('a')];
  resetCSS(elementsArray);
  $toolbarListContainer.remove();
});

function resetCSS($elementArray){
  if($elementArray instanceof Array){
    console.log("The loop started");
    for(var i = 0; i < $elementArray.length; i++){
        console.log("Inside the loop");
        $elementArray[i].removeAttr("style");
        console.log("This element has been reset:" + $elementArray[i]);
    }
  }else {
    return 0;
  }
}



setBody();
setToolbar();
setToolbarLinks();
adjustScreen();
