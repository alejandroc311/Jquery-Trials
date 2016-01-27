//cache jquery body object

var projectPath;
var $pathContainer;
var $body = $("body");
//create function that adds divs and h1 tags to page
  //navigate to and h1 print the path to the project folder.
  function printPath(){
    $pathContainer = $("<div></div>");

    $($pathContainer).append(getProjectPath());
    $pathContainer.appendTo($body);

    //access the h1 tags inside the dive in pathContainer
      //once inside put the projectPath variable in the h1
        //make sure you have the project path
  }
function getProjectPath(){
  projectPath = "<h1>some path<h1>";
  return projectPath;
  //work up to master directory
    //get attr of directory
      //in attr get its src for the path.
}

printPath();
