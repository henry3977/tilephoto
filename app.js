function setImg() {
    document.getElementById('saved').innerHTML = '';
    for (let index = 0; index < localStorage.length; index++) {
        var myImage = new Image(150);
        myImage.src = localStorage.getItem(String(index));
        document.getElementById('saved').appendChild(myImage);
    }
}

function saveImg() {
    
    if (localStorage.length == 10) {
        alert('10개 까지만 가능해!');
        return false;
    }
    var imgInput = document.getElementById('img-input');
    var imgUrl = imgInput.value;
    localStorage.setItem(localStorage.length, imgUrl);
    var myImage = new Image();
    myImage.src = imgUrl;
    myImage.onload = function() {
        console.log(this);
        setImg();
        
    };
    myImage.onerror =  function() {
        localStorage.removeItem(String(localStorage.length - 1));
        alert('이미지 주소를 다시 확인해봐');
        
    };
    imgInput.value = '';
    return false;
}

function resetImg() {
    if (confirm('다 지울거야?')) {
        localStorage.clear();
        setImg();
    }
}

function startTile() {
    location.href = 'tile.html';
}

setImg();