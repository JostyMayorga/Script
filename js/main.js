function myFunction() {
  document.getElementById('Cont').style.display = 'none';
  document.getElementById('B').innerHTML = "mostrar"
  alert('A')
  var image = document.createElement("img");
  image.src = "img/visto.png";
  var nuevaimg = document.createElement("p");
  nuevaimg.appendChild(image);
  document.getElementById('Cont').appendChild(nuevaimg);
}


  var palabra = "este";
  var encontrado = false;
  var texto = document.getElementById('A');
  var on = document.getElementById("myBtn");
 
  on.addEventListener('click', function(event){
    
    var text = texto.textContent;
    var regex = new RegExp('('+palabra+')', 'ig');
    if(encontrado){
    	text = text.replace(regex, '<span class="">$1</span>');
    	encontrado = false;
    }else{
    	text = text.replace(regex, '<span class="resaltar">$1</span>');
    	encontrado = true;
    }

    texto.innerHTML = text;


}, false);
function hide(obj) {

  if (document.getElementById('B').innerHTML == "esconder") {
    document.getElementById('B').innerHTML = "mostrar"
    document.getElementById('Cont').style.display = 'none';




  } else {
    document.getElementById('B').innerHTML = "esconder"
    document.getElementById('Cont').style.display = 'block';


  }


}

function printDOM(node, prefix) {
  console.log(prefix + node.nodeName);
  for (let i = 0; i < node.childNodes.length; i++) {
    printDOM(node.childNodes[i], prefix + ' ')

  }
}
printDOM(document, ' ')

