//cache jquery body object

var projectPath;
var $pathContainer;
var $body = $("body");
//create function that adds divs and h1 tags
  //in the h1 print the path to the project folder.
  function printPath(){
    $pathContainer = $("<div><h1>"+projectPath+"<h1></div>");
    $pathContainer.appendTo($body);
    //access the h1 tags inside the dive in pathContainer
      //once inside put the projectPath variable in the h1
        //make sure you have the project path
  }
function getProjectPath(){
  projectPath = "some path";
  //work up to master directory
    //get attr of directory
      //in attr get its src for the path.
}
getProjectPath();
printPath();
