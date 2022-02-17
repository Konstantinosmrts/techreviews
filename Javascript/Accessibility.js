
        function myFunction14() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
 
 

        function myFunction10(selectTag) {
            var listValue = selectTag.options[selectTag.selectedIndex].text;
            document.getElementById("demo").style.fontFamily = listValue;
        }
// At start, set focus on the first div
document.getElementsByTagName('div')[0].focus();


 
        $(document).ready(function () {
            $("#flip").click(function () {
                $("#panel").slideDown();
            });
            $("#flip").click(function () {
                $("#panel").hide();
            });
        });
   
        //Get the button
        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
   


        function myFunction5() {
            document.body.style.backgroundColor = "red";
        }
   
 
        function myFunction12() {
            document.body.style.backgroundColor = "green";
        }
  

        function myFunction6() {
            document.body.style.backgroundColor = "wheat";
        }
   

   
        function myFunction7() {

            document.body.style.backgroundColor = "grey";



        }

   


   
        function myFunction4() {
            document.getElementById("demo").style.fontSize = "small";
        }
    


        function myFunction2() {
            document.getElementById("demo").style.fontSize = "100%";
        }
    


        function myFunction3() {
            document.getElementById("demo").style.fontSize = "x-large";


        }
  

        function myFunction(selectTag) {
            var listValue = selectTag.options[selectTag.selectedIndex].text;
            document.getElementById("demo").style.fontSize = listValue;
        }
    