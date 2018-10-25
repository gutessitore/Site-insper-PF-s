/*
  Se não sabe o que é isto, volte para os vídeos de JavaScript.
*/
document.addEventListener('DOMContentLoaded', function() {
  /*
    Se não sabe o que é isto, volte ao ingrediente 2.
  */
  //let db = connect('https://codesign-classic-7b2bb.firebaseio.com')

  let db = connect('https://site-insper.firebaseio.com/')


  /*
    Uma query string é uma maneira de colocar um dicionário
    no próprio endereço da página. O início dela é marcado
    por um "?" e ela consiste em um número indeterminado de
    pares "chave=valor" separados por "&".

    A função extract lê a query string da página atual e
    transforma ela em um dicionário JavaScript usual.
  */
  let params = extract()

  /*
    Se não sabe o que é isto, volte ao ingrediente 3.
  */

  let path = '/' + params['category'] + '/courses/' + params['course']

  console.log(params)

    if(Object.keys(params).length === 0){
      path = '/'
    }
    else{
      path = '/' + params['category'] + '/Courses/' + params['course']
    }
  console.log(path)
  //let path = '/' 
  db.download(path, function(data) {
    /*
      Se não sabe o que é isto, volte ao ingrediente 3.
    */
    if(Object.keys(params).length === 0){
    replace('body', {
        'goals': data['Habilidades'],
        'cursos': data['Habilidades']['Apresentação']['Cursos']
    })}
    else{
      console.log(path)
    }
  })
})
