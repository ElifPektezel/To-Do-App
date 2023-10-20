let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let list = [];

// localStorage'da verileri saklama işlemi
function saveLocalStorage() {
    localStorage.setItem('list', JSON.stringify(list));
}

// localStorage'dan verileri yükleme işlemi
function loadFromLocalStorage() {
    const listData = localStorage.getItem('list');
    if (listData) {
        list = JSON.parse(listData);
        updateList();
    }
}

// Sayfa yüklendiğinde başlangıç işlemleri
document.addEventListener("DOMContentLoaded", function () {
    loadFromLocalStorage();
});

// Görev ekleme işlemi
function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newTask = inputs.value;
        list.push(newTask);
        updateList();
        saveLocalStorage();
        inputs.value = "";
    }
}

// Görev listesini güncelleme, temizleme işlemi
function updateList() {
    text.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        let newList = document.createElement("ul");
        newList.innerHTML = `${i + 1}. ${list[i]} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newList);
        // Temizleme 
        newList.querySelector("i").addEventListener("click", function () {
            remove(i);
        });
    }
}


// Görevi kaldırma işlemi
function remove(i) {
    list.splice(i, 1);
    updateList();
    saveLocalStorage();
}
