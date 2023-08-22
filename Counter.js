// Javascript Counter
<!DOCTYPE html>
<html lang="en">

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
