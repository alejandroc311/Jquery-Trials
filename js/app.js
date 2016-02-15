//cache jquery objects

var projectPath;
var $pathContainer = $("<div></div>");
var $body = $("body");
var $button = $("<button>Show path</button>");
var $button2 = $("<button>Hide path</button>");
//create function that adds divs and h1 tags to page
  //navigate to h1 and print the path to the project folder.
  function printPath(){

    $($pathContainer).append(getProjectPath());
    $pathContainer.appendTo($body);

    //access the h1 tags inside the divein pathContainer
      //once inside put the projectPath variable in the h1
        //make sure you have the project path
  }
function getProjectPath(){

  //work up to master directory
    //get attr of directory
      //in attr get its src for the path.
      //document.traverse();
      //path = document.attr();

    var path = "text";
    projectPath = "<h1>"+ path +"</h1>";
    console.log("h1 tags created");
    return projectPath;

}
function activateButtons(button){
  button.appendTo($body);
  button.click(function(event){
  /*some function*/
});}

function setElemCoord(element,vCord,hCord){
  $(element).offset({top:vCord,left:hCord});
}

$($button).appendTo($body);
$($button2).appendTo($body);

setElemCoord($button,30,30);
setElemCoord($button2,30,120);

$($button).click(function(event){
  printPath();
});
$($button2).click(function(event){
  $($pathContainer).empty().remove();
});
