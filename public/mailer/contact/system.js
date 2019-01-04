let response = info => {
	return `<!doctype html>
					<html lang="en">
						<head>
							<meta charset="utf-8">
							<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
							<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
							<title>Contact Submission</title>
						</head>
						<body class="mt-5" style="background-color: #607D8B;">
							<div class="container pb-3 text-center">
								<div class="jumbotron bg-white">
									<h1 class="mb-5" style="color: #455A64;">New Submission from Portfolio Contact Page</h1>
									<table class="table table-hover">
										<tbody class="text-left">
											<tr>
												<th>Name</th>
												<td>${ info.name }</td>
											</tr>
											<tr>
												<th>Contact Info</th>
												<td>${ info.email }</td>
											</tr>
											<tr>
												<th>Subject</th>
												<td>${ info.subject }</td>
											</tr>
											<tr>
												<th style="vertical-align: middle;">Message</th>
												<td>${ info.body }</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</body>
					</html>`
}

module.exports = response
