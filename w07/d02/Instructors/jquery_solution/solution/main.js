console.log("main linked")

//ready function
//we can put behavior in the ready function that we don't want to fire until the DOM is loaded
$( document ).ready(function() {
    //use jquery to make a reference to the submitbutton
    var $submitButton = $("#addStudentButton");
    //attach an event listener 
    $submitButton.on("click", function(event){
        var $inputBox = $("#nameinput");
        var $namesList = $("#studentNames");
        var $dynamicInput = $inputBox.val()
        var $newPerson = $("<li>" + $dynamicInput + "</li>" )
        //attach a mouseover event listener within the callback BEFORE appending to the DOM
        $newPerson.on("mouseover", function(event){
            //notice that we can still use event.target to reference "this"
            console.log(event.target.innerText + " clicked")
            $newPerson.toggleClass("special")
        })
        $namesList.append($newPerson);
    })
});



