import * as React from 'react';
import {LaunchListQuery} from '../../generated/graphql';
import './styles.css';

interface props{
    data: LaunchListQuery
}

const LaunchList: React.FC<props> = ({data}) => (
    <div className = 'LaunchList'>
        <h3>Launches</h3>
        <ol className = 'LaunchList__list'>
            {!!data.launches && data.launches.map((launch,i) => !!launch && (<li key={i} className = 'LaunchList__item'>
                {launch.mission_name} ({launch.launch_year})
            </li>))}
        </ol>
        </div>
)

export default LaunchList
