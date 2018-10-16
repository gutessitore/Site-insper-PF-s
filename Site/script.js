document.addEventListener('DOMContentLoaded', function() {
	let db = connect('https://site-insper.firebaseio.com/')

	let params = extract()

	let url = '/' + params['category'] + '/courses/' + params['course']

	db.download(url, function(data) {
		replace('body', {
		'name': data['name'],
		'descricao': data['descricao'],
		'hab': data['hab']
		})
	})
})