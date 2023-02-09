

const idLength = 6;
let Rid = "23345";
for (let i = 0; i < idLength; i++) {
    Rid += Math.floor(Math.random() * 10); 
   }
 document.getElementById("req_id").innerHTML = Rid;

    // return id;

//   function generateEmployeeID() {
//     let num = Math.floor(Math.random() * 100) + 5;
//     window.open().document.write(num);
//   }