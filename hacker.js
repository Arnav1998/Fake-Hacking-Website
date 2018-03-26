(function() {

	function $(id) {
		return document.getElementById(id);
	}

	let hackStatement = "struct group_info init_groups = { .usage = ATOMIC_INIT<2> }; \n"+
						"struct group_info *groups_alloc<int gridsetsize> {\n"+
						"struct group_info *group_info;\n"+
						"int nblocks;\n"+
						"int i;\n\n"+
						"nblocks = <gridsetsize + NGROUPS_PER_BLOCK - 1> / NGROUPS_PER_BLOCK\n"+
						"/*329583 vulnerable files detected*/\n"+
						"retreive_data = nblocks ? : 1;\n"+
						"$(function(){\n\t$.database.get('Password')\n});"+
       					"exec({\n\t'Password' : 'KbJ7zpQ',\n\t'Username' : 'Administrator'\n});"+
				        ">>> Command Returned 2"+
				        ">>> Return 0;"+
				        "## Server Connected"+
				        "## Server Disconnected"+
				        "## Connection Refused"+
				        "ACCESS DENIED"+
				        "ACCESS GRANTED"+
				        "Password: ********\n>>> Incorrect Password\n## Server Disconnected"+
				        "\n\nNMAP\n\n\tIP: 198.162.0.24\n\tPlatform: Linux armv7\n\tUsers Connected: 27\n\tNetmask: 255.255.255.0\n\t0 flags up\n\n\t"+
				        "Reconnecting..."+
				        ">>> 'Data retieved'"+
				        "/bin ~ # sudo chown /system/"+
				        "$.system.on();\n\t[SYSTEM]:Antivirus Protocol Overridden\n\t[SERVER]:Firewall Disabled\n\t"+
				        "[ROOT]:Filesystem Formatted\n"+
				        "oauth: ks7bJpp8bvxz35hq";


	let a = hackStatement.split(" ");

	let counter = 0;

	let size = a.length;

	window.onload = function() {

		document.addEventListener("keydown", function(e) {

				if (e.altKey) {

					timer = setInterval(f, 20);
				
				}

			}
		);

			document.addEventListener("keyup", function(e) {

				clearInterval(timer);
				

			}
		);

	};

	function f() {

		if (counter < size) {
			$("codeParagraph").innerText += a[counter];
			counter++;
		}

		else  if (counter == size) {

			alert("HACK COMPLETED. DATA BREACHED.");
			counter++;

		} else {

			$("codeParagraph").innerText = "";
			counter = 0;
			clearInterval(timer);

		}
	}

})();