 var name = "CARLTON LEWIS";

 function myName(red){
     console.log(red);
 };
 myName(name);

//Carrers
var ocupation = "Career/Field:";
function myOcupation(plane){
    console.log(plane);
};
myOcupation(ocupation);

 var career = "*Aviation Detailing"
 function myCareer(air){
     console.log(air);
 };
myCareer(career);

//Description of myself
var aboutMe = "Short description about myself:";
function about(me){
    console.log(me);
};
about(aboutMe);



var description ="-My name is Carlton Lewis and I am born and raised in Adamsvile, Alabama.";
function myDescription(life){
    console.log(life);
};
myDescription(description);

//My interest
var list = "List of Interest:";
function myList(order){
    console.log(order);
};
myList(list);

var interest1 = "*I like to longboard";
var interest2 = "*Reading is fun";
var interest3 = "*I enjoy flag football";
function myInterest(like){
    console.log(like);
};
myInterest(interest1);
myInterest(interest2);
myInterest(interest3);

var positions = "Work Experience:";
function pastPositions(history){
    console.log(history);
};
pastPositions(positions);

//Work history
var past1 = "Event Operatons Group";
var company1 = "*Sales Representative";
var responsibilities1 = "Provied customers and potential cliants with money saving solutions";
var past2 = "Empire Marketing Group";
var company2 = "*Sales and Marketing Representative";
var responsibilities2 ="Provide sales and marketing solutions";
var past3 = "Covenant Ornamental Iron Works";
var company3 = "*Iron Works Associate";
var responsibilities3 = "Welding and Fabrication";

function displayPosition(company, jobTitle, description) {
    console.log(jobTitle + " at " + company + " - " + description);
}

displayPosition(past1, company1, responsibilities1);
displayPosition(past2, company2, responsibilities2);
displayPosition(past3, company3, responsibilities3);
 
//My Skills
var skills = "List of skills:";
function skills1(proven){
    console.log(proven);
};
skills1(skills);

var skill1 = "*Cut Mens Hair";
var skill2 ="*Dunk a Football";
var skill3 ="*Ride a Camel";
var skill4 ="*Sing";
var skill5 ="*JavaScript";
function listOfSkills(many){
    console.log(many);
};

function displaySkill(skill,isCool){
    if(isCool == true) {
        console.log("Check it:" + skill);
    } else {
        console.log(skill);
    }
}

displaySkill(skill1, true);
displaySkill(skill2, false);
displaySkill(skill3, true);
displaySkill(skill4, true);
displaySkill(skill5, false);




