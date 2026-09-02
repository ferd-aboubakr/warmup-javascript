const courses = ["pain", "lait", "riz", "cafe"];
 courses.splice(4,0,"sucre");

console.log(courses);


courses.splice(courses.indexOf("lait"),1);

console.log(courses);

console.log(`Le nombre d'articles : ${courses.length}`);

const Len = courses.length ;

for (i = 1 ; i <= Len; i++)
{
 console.log(`${i}. ${courses[i-1]}`);
}

if(courses.includes('cafe'))
{
 console.log("Le cafe est bien dans la liste");
}
