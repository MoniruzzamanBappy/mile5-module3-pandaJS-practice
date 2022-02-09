const allH1 = document.getElementsByTagName("h1");
for (const item of allH1) {
    item.style.color = 'lightblue';
}

document.getElementById('backpack').style.backgroundColor = 'tomato';

const allCard = document.getElementsByClassName("card");
for (const item of allCard) {
    item.style.borderRadius = '30px';
}

document.getElementById('input-email').addEventListener('keyup', function (event) {
    const submitID = document.getElementById('submit-id');
    if (event.target.value == 'email') {
        submitID.removeAttribute('disabled');
    }
    else {
        submitID.setAttribute('disabled', true);
    }
    submitID.addEventListener('click', function () {
        event.target.value = '';
        submitID.setAttribute('disabled', true);
    });
});

const allBTN = document.getElementsByClassName("btn");
for (const item of allBTN) {
    item.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}

function changePic() {
    const allImg = document.getElementsByClassName("card-img-top");
    for (const item of allImg) {
        item.src = "images/banner-images/tv.png";
    }
}

document.getElementById('subscribe-a').addEventListener('dblclick', function () {
    document.getElementById('subscribe-a').style.backgroundColor = 'red';
});