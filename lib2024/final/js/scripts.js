window.onload = init;

function init() { 

        //load webpage after running the animation for 2s
        var myVar;        
        myVar = setTimeout(showPage, 2000);  

        //create schedule table
        createTableFromJSON();

        //assign default values for contact card info
        createDefaultProfile();
        
        //Display inputted profile information on Contact Card
        $('#form').submit(function (e) {        
            e.preventDefault();
            $("#contact-card-info").removeClass('reveal');
            var form = this;
            showformValues(form);
            $("#contact-card-info").addClass('reveal');
    }); 	

        document.querySelector('.mobile-nav-shortcut').onclick = showHideMobileMenu;

        window.addEventListener("resize", hideMobileMenu);   
}

function showPage() {
        document.getElementById("animation-loader").style.display = "none";
        document.getElementById("animation-wrapper").style.display = "none";
        document.getElementById("my-site").style.display = "block";          
}

//create schedule table
function createTableFromJSON() {
        var mySchedule = [
            {
                "TIME": "9:00 - 11:00",
                "MONDAY": "Communications I",
                "TUESDAY": "Client Services",
                "WEDNESDAY": "Special Collections",
                "THURSDAY": "Directed Research Seminar",
                "FRIDAY": "Client Services"                
            },
            {
                "TIME": "11:00 - 12:30",
                "MONDAY": "Reference",
                "TUESDAY": "Internet App",
                "WEDNESDAY": "Library Software",
                "THURSDAY": "French",
                "FRIDAY": "Reference" 
            },
            {
                "TIME": "14:00 - 15:00",
                "MONDAY": "Acquisitions",
                "TUESDAY": "General Elective",
                "WEDNESDAY": "Marketing",
                "THURSDAY": "Emerging Library Tech",
                "FRIDAY": "Library Software" 
            },
            {
                "TIME": "15:30 - 17:30",
                "MONDAY": "French",
                "TUESDAY": "French",
                "WEDNESDAY": "Acquisitions",
                "THURSDAY": "Subject Analysis",
                "FRIDAY": "Internet App" 
            }
        ];

        // Extract value for HTML header('TIME', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', and 'FRIDAY')
        var col = [];
        for (var i = 0; i < mySchedule.length; i++) {
            for (var key in mySchedule[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a dynamic table
        var table = document.createElement("table");

        // Create HTML table header row
        var tr = table.insertRow(-1);                  

        for (var j = 0; j < col.length; j++) {
            var th = document.createElement("th");      
            th.innerHTML = col[j];
            tr.appendChild(th);
        }

        // Add JSON data to the schedule table        
        for (var m = 0; m < mySchedule.length; m++) {
            tr = table.insertRow(-1);
            for (var n = 0; n < col.length; n++) {			
                var tabCell = tr.insertCell(-1);                
                tabCell.innerHTML = mySchedule[m][col[n]];
            }
        }

        //Add the newly created table with JSON data to a container.
        var divContainer = document.getElementById("json_table");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }

//assign default values for contact card info
function createDefaultProfile() {
        $("#contact-card-info").find("#name_result").text("John Doe"); 
        $("#contact-card-info").find("#email_result").text("JohnDoe@algonquincollege.com");
        $("#contact-card-info").find("#addr1_result").text("1385 Woodroffe Ave, Nepean,");
        $("#contact-card-info").find("#addr2_result").text("ON, K2G 1V8");
    }

 //Display inputted profile information on Contact Card
function showformValues(form) {   
        var formValues = $(form).serializeArray();
        
        $("#contact-card-info").find("#name_result").text(formValues[0].value);
         $("#contact-card-info").find("#email_result").text(formValues[1].value);
        $("#contact-card-info").find("#addr1_result").text(formValues[2].value+", "+formValues[3].value+",");
        $("#contact-card-info").find("#addr2_result").text(formValues[4].value+", "+formValues[5].value);
    }

function showHideMobileMenu() {

        var mobileNav = document.querySelector('.mobile-nav');

        if(mobileNav.style.display=="block") {
            mobileNav.style.display="none";
        } else {
            mobileNav.style.display="block";
        }
}

function hideMobileMenu() {

        var mobileNav = document.querySelector('.mobile-nav');
        
        mobileNav.style.display="none";
}