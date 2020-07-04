import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ""
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },
            err => this.setState({errorMessage: err.message})
        )
        console.log('My component was rendered to the screen.')
    }

    componentDidUpdate(){
        console.log('My component was updated.');
    }
    //We need to have a render method

    render(){
        
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }
        return (
            
            <div class="ui active dimmer">
                <div class="ui text loader">Loading</div>
            </div>            
            
            );
        
        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)