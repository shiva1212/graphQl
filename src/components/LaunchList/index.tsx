import * as React from 'react';
import {useLaunchListQuery} from '../../generated/graphql'
import LaunchList from './launchList';


const LaunchListContainer = () => {
    const {data, error, loading} = useLaunchListQuery();
    if (loading) {
        return <div>Loading...</div>
    }
    if (error || !data) {
        return <div> Error</div>
    }
    return  <LaunchList data={data}/>
}

export default LaunchListContainer;