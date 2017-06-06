
function myFunction(obj) {
  document.getElementById('Cont').style.display = 'none';
  document.getElementById('B').innerHTML = "mostrar"

  alert('A')

  var image = document.createElement("img");
  image.src = "img/visto.png";
  var nuevaimg = document.createElement("p");
  nuevaimg.appendChild(image);
  document.getElementById('Cont').appendChild(nuevaimg);
  
  document.getElementById("myBtn").addEventListener("click", function(){
    hide(obj)
  });

}



function hide(obj) {

  if (document.getElementById('B').innerHTML == "esconder") {
    document.getElementById('B').innerHTML = "mostrar"
    document.getElementById('Cont').style.display = 'none';




  } else {
    document.getElementById('B').innerHTML = "esconder"
    document.getElementById('Cont').style.display = 'block';
    document.getElementById('A').style.background = '#F55';
    for (let i = 1; i <= document.getElementsByTagName('p').length; i++){
    document.getElementsByTagName('p')[i].style.background = '#F05';
    }
  }


}

function printDOM(node, prefix) {
  console.log(prefix + node.nodeName);
  for (let i = 0; i < node.childNodes.length; i++) {
    printDOM(node.childNodes[i], prefix + ' ')

  }
}
printDOM(document, ' ')
