if (localStorage.length == 0) {
    location.href = 'index.html'
}

function startTile(url) {
    var myImage = new Image();
    myImage.src = url;
    myImage.onload = function() {
        var frame = document.getElementById('frame');
        frame.innerHTML = '';

        var tileSize = 100;
        var gridTemplateColumns = '';
        frame.insertAdjacentHTML('beforeend', '<div class="tiles" id="tiles"></div>');
        var tiles = document.getElementById('tiles');

        tiles.style.width = this.width + 'px';
        tiles.style.height = this.height + 'px';
    
        var columns = Math.round(this.width / tileSize);
        for (let index = 0; index < columns; index++) {
            gridTemplateColumns += 'auto ';
        }
        tiles.style.gridTemplateColumns = gridTemplateColumns;
    
        var totalTile = Math.round(this.width / tileSize) * Math.round(this.height / tileSize)
        for (let index = 0; index < totalTile; index++) {
            var number = index + 1;
            var tile = '<div class="tile" onclick="viewPhoto(this)"><div class="numbers">' + number + '</div></div>'
            tiles.insertAdjacentHTML('beforeend', tile);
        }
        frame.appendChild(myImage);
    };

}

function viewPhoto(div) {
    if (div.style.opacity == '0') {
        div.style.opacity = '';
    } else {
        div.style.opacity = 0;
    }
}

function nextTile() {
    key++
    startTile(localStorage.getItem(String(key)));
}
var key = 0;
startTile(localStorage.getItem(String(key)));