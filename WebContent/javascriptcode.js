/**
 * 
 */

$(document).ready(function(){
	
//	$("[data-toggle=popover]").popover();
		
	//$("[data-toggle=popover]").popover();//{
	   // html: true, 
		//content: function() {
	    //      return $('#popover-content').html();
	    //    }
	//});
	var offset;
	//var resultStartingNo;
	
	$("#q1").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q1-popover-content').html();
	        }
	});
	
	
	$("#q2").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q2-popover-content').html();
	        }
	});
	
	$("#q3").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q3-popover-content').html();
	        }
	});
	
	$("#q4").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q4-popover-content').html();
	        }
	});
	
	$("#q5").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q5-popover-content').html();
	        }
	});
	
	$("#q6").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q6-popover-content').html();
	        }
	});
	
	$("#q7").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q7-popover-content').html();
	        }
	});
	
	$("#q8").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q8-popover-content').html();
	        }
	});
	
	$("#q9").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q9-popover-content').html();
	        }
	});
	
	$("#q10").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q10-popover-content').html();
	        }
	});
	
	$("#q11").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q11-popover-content').html();
	        }
	});
	
	$("#q12").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q12-popover-content').html();
	        }
	});
	
	$("#q13").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q13-popover-content').html();
	        }
	});
	
	$("#q14").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q14-popover-content').html();
	        }
	});
	
	$("#q15").popover({
		html: true, 
		container: 'body',
		content: function() {
	          return $('#q15-popover-content').html();
	        }
	});
		
	$( "#executebtn" ).click(function(){
		$( "#output" ).val("Query is being executed. Please wait ...");
		$( "#sparqlArea" ).val("");
		var inputData = new Object();
		inputData.offset = 0;
		inputData.query = $( '#querytextarea' ).val();
		inputData.resultStartingNo = 0;
		var dataJSON = JSON.stringify(inputData);
		//var radioValue = $("input[name='executionModeRadios']:checked").val();
		//if(radioValue == 'normal') {
			$.ajax(
				{
					type: "POST",
				//	url: "http://139.91.183.113:8090/ArgQLRestServices/argql/query/exec",
				//	url: "http://localhost:8080/ArgQLRestServices/argql/query/exec",
				    url: "	 http://139.91.183.40:8087/ArgQLRestServices/argql/query/exec",
						
					data: dataJSON,
					
					datatype:"json",
					success:function(response)
					{
						$( "#output" ).val(response.results);
						$( "#sparqlArea" ).val(response.sparql);	
						$( "#moreResultsbtn" ).prop('disabled', false);

						offset = response.offset;
						resultStartingNo = response.resultStartingNo;
					}
				});
		/*	} else{
				$.ajax(
						{
							type: "POST",
					//		url: "http://139.91.183.113:8090/ArgQLRestServices/argql/query/exec_optimized",
							url: "http://localhost:8080/ArgQLRestServices/argql/query/exec_optimized",
							data: query,
							datatype:"json",
							success:function(response)
							{
								$( "#output" ).val(response.results);
								$( "#sparqlArea" ).val(response.sparql);	
								
							}
						});
			}*/
		});
	
	$( "#moreResultsbtn" ).click(function() {
		$( "#output" ).val("Query is being executed. Please wait ...");

		$( "#sparqlArea" ).val("");

		var inputData = new Object();
		var newoffset = offset + 1000
		inputData.offset = newoffset;
		inputData.query = $( '#querytextarea' ).val();
		inputData.resultStartingNo = resultStartingNo;
		var dataJSON = JSON.stringify(inputData);
		
			$.ajax(
				{
					type: "POST",
				//	url: "http://139.91.183.113:8090/ArgQLRestServices/argql/query/exec",
					//url: "http://localhost:8080/ArgQLRestServices/argql/query/exec",
				
					 url: "	 http://139.91.183.40:8087/ArgQLRestServices/argql/query/exec",
					data: dataJSON,
					
					datatype:"json",
					success:function(response)
					{
						$( "#output" ).val(response.results);
						$( "#sparqlArea" ).val(response.sparql);	
						
						offset = response.offset;
						resultStartingNo = response.resultStartingNo;
					}
				});
		
	});
	
	
	
	$( "#exampleselectBtn" ).click(function() {
		 var radioValue = $("input[name='exampleRadios']:checked").val();
		 $( "#querytextarea" ).val(radioValue);
		 $( "#examplemodal" ).modal('hide');
		 $( "#moreResultsbtn" ).prop('disabled', true);
	});
	
	$('#examplemodal').on("hide.bs.modal", function () {
		//$("#output").val("modal closed...");
		$("#q1").popover('hide');
		$("#q2").popover('hide');
		$("#q3").popover('hide');
		$("#q4").popover('hide');
		$("#q5").popover('hide');
		$("#q6").popover('hide');
		$("#q7").popover('hide');
		$("#q8").popover('hide');
		$("#q9").popover('hide');
		$("#q10").popover('hide');
		$("#q11").popover('hide');
		$("#q12").popover('hide');
		$("#q13").popover('hide');
		$("#q14").popover('hide');
		$("#q15").popover('hide');
	})
	
	 
	//$( "#q1" ).click(function(){
	//	var query = "match ?a:<?pr, ?c> \n return ?a";
		
	//	$( "#querytextarea" ).val(query);
	//});
	
			/* function populateHandles(ArrayList<String> ) {
    	    var options = '';
    	    for (var i = 0; i < collection.length; i++) {
    	        options += '<option value="' + collection[i] + '">' + collection[i] + '</option>';
    	       
    	    }
   	        $("#collectionBtn").html(options);
   	      $( "#output" ).val(options);
		}*/
			
	}); //document.ready.function