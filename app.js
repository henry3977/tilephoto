// const photo = document.getElementById('photo');
// document.getElementById('photo').addEventListener('load', function() {
//     console.log(photo.width)
//     console.log(photo.height)
//     var tiles = document.getElementById('tiles');
//     tiles.style.width = photo.width + 'px'
//     setTile(photo);
// })


function startTile(url) {
    var myImage = new Image();
    myImage.src = url;
    myImage.onload = function() {
        var tileSize = 100;
        var gridTemplateColumns = '';
        var tiles = document.getElementById('tiles');
        tiles.style.width = this.width + 'px';
        tiles.style.height = this.height + 'px';
    
        var columns = Math.round(this.width / tileSize);
        for (let index = 0; index < columns; index++) {
            gridTemplateColumns += 'auto ';
        }
        tiles.style.gridTemplateColumns = gridTemplateColumns;
    
        var tiles = Math.round(this.width / tileSize) * Math.round(this.height / tileSize)
        for (let index = 0; index < tiles; index++) {
            var number = index + 1;
            var tile = '<div class="tile" onclick="viewPhoto(this)"><div class="numbers">' + number + '</div></div>'
            document.getElementById('tiles').insertAdjacentHTML('beforeend', tile);
        }
    };
    document.getElementById('frame').appendChild(myImage);
}


function viewPhoto(div) {
    console.log(div.style.opacity)
    if (div.style.opacity == '0') {
        div.style.opacity = '';
    } else {
        div.style.opacity = 0;
    }
}

function saveImg() {
    console.log(document.getElementById('img-url').value)
    var imgUrl = document.getElementById('img-url').value;
    localStorage.setItem(localStorage.length, imgUrl);
    // startTile(imgUrl)
    var myImage = new Image(100);
    myImage.src = imgUrl;
    document.getElementById('saved').appendChild(myImage);
    return false;
}