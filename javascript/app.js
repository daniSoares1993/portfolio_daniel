let html =  document.getElementById('htmlId')

html.addEventListener('mouseover',()=>{
    document.getElementsByClassName('content').style.opacity = '1'
    html.style.color = "#f3491f"
    html.style.transition  = "0.5s"
})