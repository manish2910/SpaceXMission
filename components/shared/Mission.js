import React from 'react';
import Image from './Image'
import MissionId from './MissionIdsList';

const Mission = ({data, index}) => {
    return (
        <div key={index} className="result">
              <div className="image_div">
                <Image source={data.links.mission_patch_small} alternateName='Mission Image' />
              </div>
              <div>{data.mission_name}{" #"}{data.flight_number}</div>
              <div>Mission Ids:</div>
              <ul>
                {data.mission_id.map( ( res, i ) => <MissionId key={i} value={res} /> )}
              </ul>
              <div><span>Launch Year:</span> {data.launch_year}</div>
              <div><span>Successful Launch:</span> {data.launch_success ? "Successful":"UnSuccessful"}</div>
              <div><span>Launch Landing:</span> {data.rocket.first_stage.cores.some(resp => resp.land_success === true) ? "Successful":"UnSuccessful"}</div>
        </div>
    )
}

export default React.memo(Mission);
