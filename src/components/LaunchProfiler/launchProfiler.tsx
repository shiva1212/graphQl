import * as React from 'react';
import {LaunchProfileQuery} from '../../generated/graphql';
import './style.css';

interface Props {
    data: LaunchProfileQuery;
}

const LaunchProfile: React.FC<Props> = ({data}) => {
    if(!data.launch) {
        return <div>No launch available </div>
    } 
    return (
        <div className= 'LaunchProfile'>
            <div>
                <span className = "LaunchProfile__status">Filght {data.launch.flight_number}:</span>
                {data.launch.launch_success ? (
                    <span className = "LaunchProfile__success">Success</span>
                ):(<span className = "LaunchProfile__failed">Failed</span>)}

            </div>
            <h1 className = "LaunchProfile__title">
                {data.launch.mission_name}
                {data.launch.rocket && `(${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
            </h1>
            <p >{data.launch.details}</p>
            {!!data.launch.links && !!data.launch.links.flickr_images && (
                <div className = "LaunchProfile__image-list">
                    {data.launch.links.flickr_images.map(image => image ? <img src={image} className = "LaunchProfile__image" key={image} />:null,
                    )}
                </div>
            ) }
            
        </div>
            )
}

export default LaunchProfile;