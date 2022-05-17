/*const myperson = { 
    fname: 'Neetu',
    lname: 'Kumari',
    age: 20,
    skills: ['communication', 'Teamwork', 'Leadership'],
    address: {
        City: 'Bangalore',
        pincode: 560053
    },
    dateOfBirth:"1996-05-18" ,
    Married:false,
    Profession:"software engineer"
};
const text = JSON.parse(myperson);
const obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }

*/

function person(fname,lname,age,skills,dateofbirth,address,married,profession)
   {
     this.fname = fname;
     this.lname = lname;
     this.age=age;
     this.skills = skills;
     this.dateofbirth = dateofbirth;
     this.address = address;
     this.married = married;
     this.profession = profession;
   }
let person1=new person("Nikhil","goud",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")
let person2=new person("Harish","chinna",21,"HTML","08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jr analyst")
print=function(person)
{
    console.log(person1);
    console.log(person2);
}
