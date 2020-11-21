function $(selector){
    let result = document.querySelectorAll(selector)
    if(result){
        result = Array.from(result)
        return (result.length === 1) ? result[0] : result
    }
    return result
}
function capturaXeY(e){
    $("[name='x']").value = e.clientX
    $("[name='y']").value = e.clientY
}
window.addEventListener('mousemove', capturaXeY)