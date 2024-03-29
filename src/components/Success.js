import React, { Component } from 'react';
import MuiThemeProvider from
'material-ui/styles/MuiThemeProvider'; 
import AppBar from 'material-ui/AppBar';




export class Success extends Component {
   continue = e => {
       e.preventDefault();
       //PROCESS FORM
       this.props.nextStep();
   }; 

   back = e => {
    e.preventDefault();
    this.props.prevStep();
};
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                 <AppBar title="Success" />  
                <h1> COngratulations, Your data
                    has been captured
                </h1>
               <p> You will receive an email with further 
                   intsructions </p>
               
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}




export default Success
