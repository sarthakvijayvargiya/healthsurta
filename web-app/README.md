<!-- track -
features build ,
uniquconcepts learning,
problem/challenges faced ,
tech stack used ,
flow of project ,
future feature need to be build
-->

<!-- Full stack doctor appointment booking app

Features
Three level login -- paitient , doctor , admin login
Online payment gateway
choose doctor with speciality Filter
top doc list
apponntement page
booking slot
create account, login
manage appointment User, profile
razorpay integration
stripe integration
profile edit and more... present feature

in admin dashbords
cancel appoin  , doctor paitent detials
add doctor through admin
check appointment


in doctor login
check eraing , check appointment , payment type
updtare doctor profile
 -->

<!-- https://app.brandmark.io/v3/#logo_data=%7B%22id%22%3A%22logo-aac2bcd6-9c32-4f9e-a675-82eb9cf9b184%22%2C%22layout%22%3A0%2C%22title%22%3A%22Healthsutra%22%2C%22titleFamily%22%3A%22Stanley%22%2C%22titleVariant%22%3A%22regular%22%2C%22titleColor%22%3A%5B%7B%22hex%22%3A%22%23002a71%22%2C%22location%22%3A0%7D%2C%7B%22hex%22%3A%22%230631dd%22%2C%22location%22%3A1%7D%5D%2C%22titleScale%22%3A1.09%2C%22titleLetterSpace%22%3A0%2C%22titleLineSpace%22%3A1.1%2C%22titleBoldness%22%3A0%2C%22titleX%22%3A0%2C%22titleY%22%3A0%2C%22titleAlign%22%3A%22center%22%2C%22slogan%22%3A%22%22%2C%22sloganFamily%22%3A%22Roboto%20Condensed%22%2C%22sloganVariant%22%3A%22400%22%2C%22sloganColor%22%3A%5B%7B%22hex%22%3A%22%23252323%22%7D%5D%2C%22sloganScale%22%3A0.91%2C%22sloganLetterSpace%22%3A0%2C%22sloganLineSpace%22%3A1.1%2C%22sloganBoldness%22%3A0%2C%22sloganAlign%22%3A%22center%22%2C%22sloganX%22%3A0%2C%22sloganY%22%3A0%2C%22icon%22%3Anull%2C%22showIcon%22%3Afalse%2C%22iconScale%22%3A1%2C%22iconColor%22%3A%5B%7B%22hex%22%3A%22%23252323%22%7D%5D%2C%22iconContainer%22%3Anull%2C%22showIconContainer%22%3Afalse%2C%22iconContainerScale%22%3A1%2C%22iconContainerColor%22%3A%5B%7B%22hex%22%3A%22%23f2b9b7%22%7D%5D%2C%22iconSpace%22%3A1%2C%22iconX%22%3A0%2C%22iconY%22%3A0%2C%22nthChar%22%3A0%2C%22container%22%3Anull%2C%22showContainer%22%3Afalse%2C%22containerScale%22%3A1%2C%22containerColor%22%3A%5B%7B%22hex%22%3A%22%23f2b9b7%22%7D%5D%2C%22containerX%22%3A0%2C%22containerY%22%3A0%2C%22backgroundColor%22%3A%5B%7B%22hex%22%3A%22%23fcfcfc%22%7D%5D%2C%22palette%22%3A%5B%22%23fcfcfc%22%2C%22%23252323%22%2C%22%23632927%22%2C%22%23a12f2b%22%2C%22%23df352f%22%5D%2C%22keywords%22%3A%5B%22doctor%20%22%2C%22%20doctorappointment%20%22%2C%22%20bookdoctor%20%22%2C%22practo%20%22%5D%7D -->

 <!-- techstack -->
- MongoDb, 
- Exp
- react 
- tailwind 
- nodejs 
- axios 
- toastify
- react-router-dom
- contextAPI


<!-- TODO Complete All -->

<!-- flow of project -->
- started with created 
    - component folder , 
    - pages folder 
    - context folder for managing login logout and other context
    - adding routing (browserrouter) support for pages
    - created home about contact doctors pages
    - created routes in app component with speciality route of doctors 
- started with creating components
    - Navbar created & profile and dropdown is created
    - Created Header section & book appointment button in it
    - Created top doctors section
    - Created remaing section of Home Page
    - Created top doctors for doctors page and doctor filter section
    - Created Appointment page , with Date of 7 days and different times
    - Created about page , contact page
    - created login page
    - created my profile section
    - created my appointments page
    - created mobile menu in navbar 

<!-- Unique / Concept Learning -->
-   useNavigate -- to navigate() to different url
-   we can configure tailwind config file check it
-   Navlink -- to use for active unactive usage
-   use navigate(/doc/${id}) -- to reach to id specific data
-   Added Scroll-smooth in html file (dont know why added in html file)
-   To Get Parameter from url we can use useparams
-   To Find something in array we can use .find method
-   created date next 7 days data from now own days 

<!-- Error And Challenges -->
- I Copied top doctors display section to here onClick it redirected to doctors intead of appointment
- Grid-col-auto from grid-cols-auto
- Date Appointment challenges -- create upcomming 7 days display , then appointment time is max 9, first understood all date method and class , need to set time like right now is 10 then set time for 11 and if minutes is 30+ then set minu + 30 --> which is 11:30 other wise 11 and if date is not current date then set hour from 10 onwards uptill 9 , took time slots as array ,, why used to localetimestring , edge case dates should next 7 days , time should not be visible beofre like on today its 11 then before time should not be visible  ----- **https://chatgpt.com/c/675f282e-f200-8004-9d51-68d431040ca0**
- creation of login page which is convertible
- created my -profile page --- Challenge


<!-- FrontEnd Done -->

<!-- Backend Details -->