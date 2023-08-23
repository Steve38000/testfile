// Javascript Counter
<!DOCTYPE html>
<html lang="en">
<head>
	<style>
		body {
			text-align: center;
			font-family: Arial, sans-serif;
		}

		h1 {
			color: #007bff;
		}

		#counter {
			font-size: 48px;
			color: #28a745;
			margin-top: 20px;
		}

		p {
			font-size: 18px;
			color: #333;
		}
	</style>
</head>
<body style="text-align:center">
	<h1>GeeksforGeeks</h1>
	<p>COUNTS</p>
	<div id="counter">
		<!-- counts -->
	</div>

	<script>
		let counts = setInterval(updated);
		let upto = 0;
		function updated() {
			let count = document.getElementById("counter");
			count.innerHTML = ++upto;
			if (upto === 1000) {
				clearInterval(counts);
			}
		}
	</script>
</body>
</html>
