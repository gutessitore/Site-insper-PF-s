
document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://site-insper.firebaseio.com/')

  let params = extract()

  let path = '/Habilidades/' + params['category'] + '/Cursos/' + params['course']

  console.log(params)

    if(Object.keys(params).length === 0){
      path = '/'
    }
    
  console.log(path)
  
  db.download(path, function(data) {

    
    console.log(data)
    if(Object.keys(params).length === 0){
       
      replace('body', {
        'goals': data['Habilidades'],
        'cursos': data['Habilidades']['Apresentação']['Cursos']
      })
    }
    else{
      
      replace('body', {
        'cursos': data
      })
    }

  })
})
