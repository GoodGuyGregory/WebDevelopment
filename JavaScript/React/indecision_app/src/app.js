console.log('App.js is Running!');

//JSX - Javascript XML 

// CODE CHALLENG #3
//only render the subtitle (and p tag) if subtitle exist - logical and operator
//render new P tag - if options.length > 0 "here are your options" 
// if none "No Options"

const app = {
    title: 'Indecision App',
    //subtitle: 'Put your life in the hands of a computer',
    options: ['One', ' Two']
};

const template = (
<div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0) ? 'Here are your Options' : 'No Options'}</p>
    <ol>
        <li>One Item</li>
        <li>Two Items</li>
    </ol>  
</div>
);

//dynamic data injection
const user = {
    name: 'Greg',
    age: 24,
    location: 'Louisville'
};

//static injection
/*
var userName = 'Greg';
var userAge = 25;
var userLocation = 'Lousiville';
*/

//Code CHALLENGE #2
//create app object title/subtitle
//use title.subtitle in the template
//render template
//************************************ */

//First Function

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }else {
        return undefined;
    }
}

//terenary operator "<conditional variable> ? <true condition> : <flase condition>"
//And Operator used on age variable
const templateTwo = (
    <div>
       <h1>{user.name ? user.name :'Anonymous'}</h1> 
       {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
       {getLocation(user.location)}
    </div>
);

//Comments From Instructor
//CODE CHALLENGE 1
//Create a templateTwo Variable JSX expression
//div root
//h1 -> Your name
// p -> Age: your age
// p -> Location: your location
//Render TemplateTwo instead of templateOne


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);