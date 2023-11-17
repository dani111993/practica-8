const imagenes = document.querySelectorAll('img.imagenita');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('mouseover', function () {

        const nuevaImagen = document.createElement('img');
        nuevaImagen.setAttribute('src', this.getAttribute('src'));
        nuevaImagen.classList.add('copia');


        document.body.appendChild(nuevaImagen);


        const rect = this.getBoundingClientRect();
        nuevaImagen.style.top = rect.top + 'px';
        nuevaImagen.style.left = rect.right + '10px';
        nuevaImagen.style.width = this.offsetWidth * 1.2 + 'px';
        nuevaImagen.style.height = this.offsetHeight * 1.2 + 'px';
    });

    imagenes[i].addEventListener('mouseout', function () {
        const copia = document.querySelector('img.copia');
        if (copia) {
            copia.remove();
        }
    });
}

const filterSelect = document.querySelector('select[name="filter"]');
const filterButton = document.querySelector('input[value="Filtrar"]');


function filterTable() {
    const selectedGenre = filterSelect.value;
    console.log(selectedGenre)
    const rows = document.querySelectorAll('#art tbody tr');
    rows.forEach(row => {
        if (row.classList.contains(selectedGenre) || selectedGenre === '0') {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

filterButton.addEventListener('click', filterTable);

document.addEventListener('DOMContentLoaded', filterTable);

var editButtons = document.querySelectorAll("table button");

// Añadimos un event listener a cada botón "Editar"
editButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtenemos la fila correspondiente al botón "Editar"
    var row = this.parentNode.parentNode;
    
    // Obtenemos los valores de cada celda de la fila
    var image = row.querySelector("img").getAttribute("src");
    var title = row.querySelector("td:nth-of-type(3)").textContent;
    var artist = row.querySelector("td:nth-of-type(4)").textContent;
    var year = row.querySelector("td:nth-of-type(5)").textContent;
    var genre = row.querySelector("td:nth-of-type(6)").textContent;
    
    // Creamos la ventana modal y agregamos los datos correspondientes
    var modal = document.createElement("div");
    modal.classList.add("modal");
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    var headElements = document.createElement("div");
    headElements.classList.add("Head");

    var bodyElements = document.createElement("div");
    bodyElements.classList.add("body-element")

    var titleElement = document.createElement("h2");
    titleElement.textContent = "Editar";
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);
    var titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Título");
    titleInput.setAttribute("value", title);
    var artistInput = document.createElement("input");
    artistInput.setAttribute("type", "text");
    artistInput.setAttribute("placeholder", "Artista");
    artistInput.setAttribute("value", artist);
    var yearInput = document.createElement("input");
    yearInput.setAttribute("type", "text");
    yearInput.setAttribute("placeholder", "Año");
    yearInput.setAttribute("value", year);
    var genreInput = document.createElement("input");
    genreInput.setAttribute("type", "text");
    genreInput.setAttribute("placeholder", "Género");
    genreInput.setAttribute("value", genre);
    var closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");

    headElements.appendChild(titleElement);
    headElements.appendChild(closeButton);

    
    bodyElements.appendChild(titleInput);
    bodyElements.appendChild(artistInput);
    bodyElements.appendChild(yearInput);
    bodyElements.appendChild(genreInput);
    
    modalContent.appendChild(headElements);
    modalContent.appendChild(imageElement);
    modalContent.appendChild(bodyElements);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Mostramos la ventana modal
    modal.style.display = "block";
    
    // Añadimos un event listener al botón "X"
    closeButton.addEventListener("click", function() {
      // Actualizamos los valores de la fila correspondiente
  row.querySelector("img").setAttribute("src", imageElement.getAttribute("src"));
  row.querySelector("td:nth-of-type(3)").textContent = titleInput.value;
  row.querySelector("td:nth-of-type(4)").textContent = artistInput.value;
  row.querySelector("td:nth-of-type(5)").textContent = yearInput.value;
  row.querySelector("td:nth-of-type(6)").textContent = genreInput.value;
  
  // Cerramos la ventana modal
  modal.style.display = "none";
    });
  });
});