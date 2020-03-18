import React from 'react';
import { Link } from 'react-router-dom';
import nationalParks from '../apis/nationalParks';
import Skeleton from '@material-ui/lab/Skeleton';
import InfoIcon from '@material-ui/icons/Info';
import DirectionsIcon from '@material-ui/icons/Directions';
import Button from "@material-ui/core/Button";
import "../styles/ParkShowStyles.css";

class ParkShow extends React.Component {
    constructor(props) {
        super(props); 
        const parkId = props.match.params.id.toLowerCase();

        this.state = {
            selectedPark: parkId,
            npsInfo: ""
        };
    };
    async componentDidMount() {
        const response = await nationalParks.get(
            `https://developer.nps.gov/api/v1/parks?parkCode=${this.state.selectedPark}&api_key=H35lG1TDbvRLi4nbvT7Wxi6284cksQwG3oZmJ9mW`
        );
        
        this.setState({
            npsInfo: response.data.data[0]
        });
    };

    
    render() {
        const npsInfo = this.state.npsInfo;
        return(
            <div className="ParkShowContainer">
                {npsInfo ? (
                <React.Fragment>
                <h2 className="ParkShowTitle">{this.state.npsInfo.fullName}</h2> 
                <div className="ParkShowImage"></div>
                <div className="ParkShowContentContainer">
                    <div>Designation: {this.state.npsInfo.designation}</div>
                        <br />
                    <div>State(s): {this.state.npsInfo.states}</div>
                        <br />
                    <div>&nbsp;{this.state.npsInfo.description}</div>
                        <br />
                    <div>&nbsp;Directions: {this.state.npsInfo.directionsInfo}</div>
                        <br />
                    <div>&nbsp;Weather Information: {this.state.npsInfo.weatherInfo}</div>
                        <br />
                    <div>
                        <DirectionsIcon />
                        &nbsp;Plan a visit: <a href={this.state.npsInfo.directionsUrl} target="_blank" rel="noopener noreferrer">Click here</a></div>
                        <br/>
                    <div>
                        <InfoIcon />
                        &nbsp;More Info: <a href={this.state.npsInfo.url} target="_blank" rel="noopener noreferrer">Click here</a></div>
                        <br />
                    <div className="ParkShowNavLink">
                        <Link to='/map' style={{ textDecoration: "none"}}>
                            <Button variant="outlined" color="primary" size="large">
                                Back
                            </Button>
                        </Link>
                    </div>
                </div>
                </React.Fragment>
                ) : (
                <div className="ParkShowSkeletonContainer">
                    <div>
                        <Skeleton variant="text" height={240} />
                        <Skeleton variant="rect" height={640} /> 
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default ParkShow;