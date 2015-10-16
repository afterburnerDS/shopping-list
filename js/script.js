$(document).ready(function() {

//click + to enter new element
	$('#add').click(function(){
		var txtbox = document.getElementById('item');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li></li>').appendTo('.list').html('<i class="fa fa-circle-o"style="float:left"></i><span>' + txtval + '</span><i class="fa fa-times"style="float:right"></i>');

		document.getElementById('item').value = '';
		};
	});

	//check list items
	$('ul').on('click', 'li', function(event){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
 		$(this).toggleClass('strike');
 		$(this).children('.fa-circle-o').toggleClass('fa-circle');

	});

	//delete list items

	$('.list').on('click', '.fa-times', function(e){
		
	e.preventDefault(); 
	$(this).parent().remove()

	});

	//reorder list items
	//sortable list items
	$('.list').sortable({ axis: "y" });



});