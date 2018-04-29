//
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
//         <title>Metro Lifes</title>
//         <link rel="stylesheet" href="../style.css">
//         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//         <script>
//           $(document).ready(function(){
//             $('.line').click(function() { //this line of code needs change so that its dynamic
//                   // alert("clicked");
//                 //var catch_id = $('.line').attr('alt');
//                 /*var catch_id = $('.line').attr
//                     console.log(catch_id);*/
//                     var catch_id = (this.alt);
//                     console.log("ID: " + catch_id);
//
//                 // var line_id = catch_id.alt;
//               event.preventDefault();
//               $.ajax({
//                 type: "GET",
//                 url: "http://localhost:3000/getStatus",
//                  data: {line: catch_id}, //this line has to change to
//                  contentType: "application/json",
//                  success: function(data) {
//
//                     //var line_name = JSON.stringify(data["name"]); // creates a var that holds line name
//                     //var line_status = JSON.stringify(data["status"]);// creates a var that holds line status
//
//
//                    //console.log("data in memory") //indicates that data was retrived from node
//                    //var json_data = JSON.stringify(data); // stringifies the object
//                    var line_viewer = document.getElementById('train_line'); // gets the p tag that prints out line
//                    var status_viewer = document.getElementById('status_msg'); //gets the p tag that prints out line status
//                    line_viewer.innerHTML = JSON.stringify(data.name); //writes the data object inside p tag of train line.
//
//                    status_viewer.innerHTML = JSON.stringify(data.text); //writes the data object inside p tag of line status
//                  },
//                  error: console.error
//                 });
//             });
//           })
//         </script>
//     </head>
//     <body>
//         <header>
//             <div class="nav-header">
//                 <div class="logo-wrapper">
//                     <div class="nav-logo">
//                         <div class="logo-layer">
//                             <img class="nav-image" src="../assets/logov1.png" alt="">
//                         </div>
//                         <!-- <div class="logo-overlay"></div> -->
//                     </div>
//                 </div>
//                 <!-- <div class="nav-half float-right">
//                     <div class="nav-user">
//                         Sign / Register
//                     </div>
//                 </div> -->
//             </div>
//         </header>
//         <!-- Dropdown Status -->
//         <!-- <div class="status-bar display-none">
//             <div class="">
//                 <h1>Train</h1>
//             </div>
//             <div class="close display-none">
//                 x
//             </div>
//         </div> -->
//         <main>
//             <div class="train-wrapper">
//                 <div class="row">
//                     <div class="set-wrapper">
//                         <div class="set-item">
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/1.png" alt="0" >
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/2.png" alt="0">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/3.png" alt="0">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/4.png" alt="1">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/5.png" alt="1">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/6.png" alt="1">
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="set-wrapper">
//                         <div class="set-item">
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/B.png" alt="4">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/D.png" alt="4">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/F.png" alt="4">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/M.png" alt="4">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/L.png" alt="7">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/S.png" alt="9">
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="set-wrapper">
//                         <div class="set-item">
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/N.png" alt="8">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/R.png" alt="8">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/Q.png" alt="8">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/W.png" alt="">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/J.png" alt="6">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/Z.png" alt="6">
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="set-wrapper">
//                         <div class="set-item">
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/A.png" alt="3">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/C.png" alt="3">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/E.png" alt="3">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/G.png" alt="5">
//                                     </div>
//                                 </a>
//                             </div>
//                             <div class="item-container">
//                                 <a class="mta-logo-link" href="#">
//                                     <div class="train-logo-image">
//                                         <img class="line" src="../assets/7.png" alt="2">
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="train-status">
//                 <h1 class="train-title" style="text-align: center;">Train Line</h1>
//                 <br>
//                 <p><strong>Selected Line: </strong></p><p id="train_line"></p>
//                 <p><strong>Line Status: </strong></p><p id="status_msg"></p>
//             </div>
//         </main>
//         <footer>
//             <div class="footer">
//                 <br />
//                 <p>&copy; CUNY Hackathon SP 2018 || By Team Metro-Life</p>
//             </div>
//         </footer>
//     </body>
// </html>
