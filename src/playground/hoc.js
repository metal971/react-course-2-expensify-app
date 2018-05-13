//higher order component (HOC) - A component (HOC) that rendes another component (Regular Component)
// Advantages of HOC : 
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state    

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is : {props.info}</p>    
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//        <div>
//             {props.isAdmin && <p>This is private info. Please don't share!</p>}
//             <WrappedComponent {...props} />
//        </div>     
//     );
// };
// requireAuthentification (HOC)
const requireAuthentification = (WrappedComponent) => {
    return (props) => (
       <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (  
                <p>Please login to see the info !</p>
            )}           
        </div>     
    );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo  isAdmin={false} info="This are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo  isAuthenticated={true} info="I am the best !"/>, document.getElementById('app'));