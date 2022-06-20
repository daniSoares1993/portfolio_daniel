let html =  document.getElementById('htmlId');
let css = document.getElementById('cssId');
let javascript = document.getElementById('javascriptId');
let react =  document.getElementById('react');
let node =  document.getElementById('node');
let phyton =  document.getElementById('phyton');

html.addEventListener('mouseover',()=>{
    document.getElementsByClassName('content').style.opacity = '1'
    html.style.color = "#f3491f"
    html.style.transition  = "0.5s"
})

css.addEventListener('mouseover',()=>{
    document.getElementsByClassName('content').style.opacity = '1'
    css.style.color = "#1f83c5";
    css.style.transition  = "0.5s"
})

javascript.addEventListener('mouseover',()=>{
    document.getElementsByClassName('content').style.opacity = '1'
    javascript.style.color = "#e0c721"
    javascript.style.transition  = "0.5s"
})

react.addEventListener('mouseover',()=>{
    document.getElementsByClassName('content').style.opacity = '1'
    react.style.color = "#4ad5fc";
    react.style.transition  = "0.5s"
})

node.addEventListener('mouseover',()=>{
    document.getElementsByClassName('content').style.opacity = '1'
    node.style.color = "rgb(0,119,0)";
    node.style.transition  = "0.5s"
})

phyton.addEventListener('mouseover',()=>{
    document.getElementsByClassName('content').style.opacity = '1'
    phyton.style.color = "#e0c721"
    phyton.style.transition  = "0.5s"
})