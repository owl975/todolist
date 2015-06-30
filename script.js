$(function() {

	var $newItem = $('#new-item');
	var	$itemName = $('#item-name');
	var $taskitem = $('.taskitem');
	var $description = $('#description');
	var $done = $('#done');
//	$newItem.submit(function(){
//
//	}); 



	$newItem.on('submit', function(event){
		console.log("submitted form");
		event.preventDefault();
		console.log($itemName.val());

		if ( $itemName.val() ==="" || $description.val() === ""){
			alert("empty field");
			}
		
 		else{
        	$("#tasks").append("<li class='taskitem'>" +"Title:  "+ $itemName.val() + "<p>"+ "Description:  " + $description.val() + "</p><div class='editform'><div class='form-group'><input type='text' class='form-control' id='new-item-name' placeholder='edit title' autofocus></div><div class='form-group'><input type='text' class='form-control' id='newdescription' placeholder='edit description' autofocus></div></div><input type='submit' class='btn btn-success editbtn' value='Edit'><button id='done' type='button' class='btn btn-default'>Done</button></li>");
			var $taskitem = $('.taskitem');     	
     		$('#new-item').trigger("reset");
     		var $taskitem = $('.taskitem');
     		}
          });

	$("button").on('click', function(event) {
      $(this).parent().remove();
    
    });

    $('.editform').hide(); //Initially form wil be hidden.
  	$('.editbtn').click(function() {
    $('.editform').toggle();//Form toggles on button click
    });

});

