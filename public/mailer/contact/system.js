let response = info => {
	return `<!doctype html>
					<html lang="en">
						<head>
							<meta charset="utf-8">
							<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
							<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
							<title>Contact Submission</title>
						</head>
						<body class="mt-5" style="background-color: #343A40;">
							<div class="container pb-3 text-center">
								<div class="jumbotron bg-white">
									<h1 class="mb-5">New Submission from Contact Page</h1>
									<table class="table table-hover">
										<tbody class="text-left">
											<tr>
												<th>Name</th>
												<td>${ info.name }</td>
											</tr>
											<tr>
												<th>Subject</th>
												<td>${ info.subject }</td>
											</tr>
											<tr>
												<th style="vertical-align: middle;">Contact Info</th>
												<td>${ info.email }<br />${ info.phone || 'Phone number not given' }</td>
											</tr>
											<tr>
												<th style="vertical-align: middle;">Questions/Comments</th>
												<td>${ info.body || 'No comments were provided' }</td>
											</tr>
										</tbody>
									</table>
									<div class="mt-5">
										<svg width="45px" height="45px" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
											<!-- Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch -->
											<title>Logo</title>
											<desc>Created with Sketch.</desc>
											<defs></defs>
											<g id="Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<path d="M75,0 L75,75 L99.8753882,87.4376941 C106.744537,90.8722685 115.097355,88.0879958 118.531929,81.2188471 C119.497375,79.287956 120,77.1588018 120,75 C120,61.2105135 112.20908,48.6045399 99.8753882,42.4376941 L90,37.5 L90,7.5 L150,37.5 L150,112.5 L75,150 L0,112.5 L0,37.5 L75,0 Z M90,52.5 L98.2917961,56.645898 C102.403027,58.7015133 105,62.9035045 105,67.5 C105,68.2196006 104.832458,68.9293187 104.510643,69.572949 C103.365785,71.8626653 100.581512,72.7907562 98.2917961,71.645898 L90,67.5 L90,52.5 Z" id="black" fill="#000"></path>
											</g>
										</svg>
										<h3 class="mt-3 text-center">Team Boxfort</h3>
									</div>
								</div>
							</div>
						</body>
					</html>`
}

module.exports = response
