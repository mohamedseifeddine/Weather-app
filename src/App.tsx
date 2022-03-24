import { useEffect, useState } from 'react';
import Tile from './components/Tile';
import './App.css';
import Select from './components/Select';
import {fetchAllCountries, getCountryDetails} from './services'

function App() {

  const [countries,setCountries]=useState<country[]>()
  const [latlng,setLatlng]=useState<Array<number>[]>()


  const handelChange = (e:React.FormEvent<HTMLInputElement>) : void => {
    const details =  getCountryDetails(e.currentTarget.value)
    details.then(res=> setLatlng(res[0].latlng))
  }
  
  useEffect(() => {
    fetchAllCountries().then(res=>setCountries(res))
  }, [])

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="dashboard">
              <Select onChange={handelChange}>
                <option className="selectCountry"> Choose a country</option>
                {countries?.map((el:country,id: React.Key)=>
                  <option key={id}>{el.name.common}</option>
                )}
              </Select>
            <Tile info={latlng} />
        </div>
    </div>
  );
}

type nameField = {
  common: string;
};

interface country  {
  name: nameField;
  latlng:Array<number>;
};

export default App;
