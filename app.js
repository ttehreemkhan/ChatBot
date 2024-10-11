let list = document.getElementById("list");
let typing = document.getElementById("typing");
function sendmessage() {
  if (event.keyCode === 13) {
    let elem = event.target;
    list.innerHTML += "<li class = 'left'>" + elem.value + "</li>";
    typing.style.display = 'block';
    if (['hi','hello', 'moye','oye'].indexOf(elem.value.toLowerCase()) !== -1) {
      setTimeout(function () {
        list.innerHTML += "<li class = 'right'> Hello </li>";
      }, 2000);
      setTimeout(function () {
        list.innerHTML += "<li class = 'right'> kese hun? </li>";
        typing.style.display = "none";
      }, 4000);
    }else if(['theek', 'thk', 'alhumdullah', 'shukr hai', 'ap sunao', 'kia haal hai','fit fat','kesy guzar rahi hai life','salam','w.salam','good','alhumdulllah'].indexOf(elem.value.toLowerCase()) !== -1){
        setTimeout(function () {
            list.innerHTML += "<li class = 'right'> main ap ki kiya help kar skta hun? </li>";
            typing.style.display = "none";
          }, 2000);
    }else if(['theek', 'thk', 'alhumdullah', 'shukr hai','ap ko koi kam hai','agr hoto bataen','bolo'].indexOf(elem.value.toLowerCase()) !== -1){
      setTimeout(function () {
          list.innerHTML += "<li class = 'right'> G bht say kam hain </li>";
          typing.style.display = "none";
        }, 2000);
      }else{
        setTimeout(function () {
            list.innerHTML += "<li class = 'right'> main smjh nahi saka? </li>";
            typing.style.display = "none";
          }, 2000);
    }
    elem.value = "";
  }
}