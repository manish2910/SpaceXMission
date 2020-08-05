import React, { useEffect, useState, Fragment, useCallback } from 'react';
import axios from 'axios';
import InputButton from '../components/shared/InputButton';
import Mission from '../components/shared/Mission';
import Head from 'next/head';
import Year from '../components/yearData/year';

function App({ data }) {

    const [launch, setLaunch] = useState(data);
    const [launchSuccess, setLaunchSuccess] = useState('');
    const [landSuccess, setLandSuccess] = useState('');
    const [launchYear, setLaunchYear] = useState('');

  useEffect( ()=>{
        let url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchSuccess}&land_success=${landSuccess}&launch_year=${launchYear}`;

        axios.get(url)
        .then(response => setLaunch(response.data));

  },[launchSuccess, landSuccess, launchYear]);

  const successfulLaunchHandler =  (event) => {
    let value = event.target.value === 'True'? true : false;
    setLaunchSuccess(value)
  }

  const successfullLandHandler = (event) => {
    let value = event.target.value === 'True'? true : false;
    setLandSuccess(value)
  }

  const launchYearHandler = (event) => {
    setLaunchYear(event.target.value)
  }

  return (
      <Fragment>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SpaceX Mission</title>
        </Head>
        <div className='heading'>SpaceX Launch Programs</div>
        <div className="App">
            <div className="filter">
                <div>Filters</div>
                <div>Launch Year</div>
                <div className="launch_year">
                    {Year.map(e => <InputButton key={e.id} value={e.year} selected={launchYear == e.year ? launchYear : ''}  onClickEvent={launchYearHandler}/> )}
                </div>
                <div className="launch_success">Successful Launch</div>
                <div className="launch_successfull">
                <InputButton value='True' selected={launchSuccess !== '' && launchSuccess ? "True":''} onClickEvent={successfulLaunchHandler}/>
                <InputButton value='False' selected={launchSuccess !== '' && !launchSuccess ? "False":''} onClickEvent={successfulLaunchHandler}/>
                </div>
                <div className="land_success">Successful Land</div>
                <div className="land_successfull">
                <InputButton value='True' selected={landSuccess !== '' && landSuccess ? "True":'' } onClickEvent={successfullLandHandler}/>
                <InputButton value='False' selected={landSuccess !== '' && !landSuccess ? "False":'' } onClickEvent={successfullLandHandler}/>
                </div>
            </div>

            <div className="parent_result"> 
                { launch && launch.map((e, i) => <Mission key={i} index={i} data={e} /> ) }
            </div>
        </div>
        <div className="fixed_footer">Developed By: Manish Yadav</div>
    </Fragment>
  )
}
  
App.getInitialProps = async (ctx) => {
    const response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`)
    const data = await response.json();
    return { data }
}

export default App;
