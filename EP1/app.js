// const heading = React.createElement("h1",{id : "heading" ,xyz : "nothing"},"Hello world from React");

// React.createELement is creating an object 

// Inside this heading there is an object which is a react element and inside that there is props which is parentid and children 

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// root.render is taking that object and create h1 tag which browser understands and put that inside the root element 


  // If u want to do make div inside div and multiple strucutes div inside thatand then child so 



  // const parent = React.createElement("div",{id : "parent"},
  //   React.createElement("div",{id : "child"},
  //     React.createElement("h1",{id : "children"},
  //       "Hii my name is aarush")));


  
  const parent = React.createElement("div",{id : "parent"},
    React.createElement("div",{id : "child"},[React.createElement("h1",{id : "children"},
      "Hii my name is aarush"),React.createElement("h1",{id : "children"},
        "Hii THis is the second name is aarush")]
      ));


  const root = ReactDOM.createRoot(document.getElementById("root"));


  root.render(parent);

  // BUt if u want to have siblings inside tag then u have to put the childs inside array 

// But this structure is very complex. SO for that we have something which is JSX 

