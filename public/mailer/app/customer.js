const settings = require('../../../config.js')

let response = info => {
	let address = settings.businessInfo.address
	return `<!doctype html>
					<html lang="en">
						<head>
							<meta charset="utf-8">
							<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
							<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
							<title>Contact Submission</title>
						</head>
						<body class="pt-5" style="background-color: #607D8B;">
							<div class="container pb-3 text-center">
								<div class="jumbotron bg-white">
									<h1 style="color: #455A64;">Hi ${ info.name },</h1>
									<p class="lead">Thank you for taking a moment to contact me about my portfolio website!</p>
									<p class="lead">I will be looking over submission and will be in touch shortly.<br />I look forward to talking to you soon!</p>
									<p class="lead">Best regards,<br />Jonathan Fernandes</p>
								</div>
							</div>
						</body>
					</html>`
}

module.exports = response
