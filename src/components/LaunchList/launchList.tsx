import * as React from 'react';
import {LaunchListQuery} from '../../generated/graphql';
import './style.css';

export interface OwnProps {
    handleIdChange: (newId: number) => void;    
}
interface props extends OwnProps{
    data: LaunchListQuery
}

const LaunchList: React.FC<props> = ({data,handleIdChange}) => (
    <div className = 'LaunchList'>
        <h3>Launches</h3>
        <ol className = 'LaunchList__list'>
            {!!data.launches && data.launches.map((launch,i) => !!launch && (<li key={i} className = 'LaunchList__item' onClick = {() => handleIdChange(launch.flight_number!)}>
                {launch.mission_name} ({launch.launch_year})
            </li>))}
        </ol>
        </div>
)

export default LaunchList
