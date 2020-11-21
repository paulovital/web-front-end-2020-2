function $(selector){
    let result = document.querySelectorAll(selector)
    if(result){
        result = Array.from(result)
        return (result.length === 1) ? result[0] : result
    }
    return result
}

let form = $('form')
$('.alert').classList.add('hide')

form.onsubmit = function(e){
    e.preventDefault()
    let senha = $('[name="senha"]').value
    let senha2 = $('[name="senha2"]').value
    if(senha !== senha2){
        $('.alert').innerText = 'A senha e a confirmação têm que ser iguais!'
        $('.alert').style.display = 'block'
        //$('.alert').style.display = 'block'
        $('.alert').classList.toggle('hide')
    }else{
        //$('.alert').style.display = 'none'
        $('.alert').classList.toggle('hide')
    }
}