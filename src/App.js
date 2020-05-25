import React ,{useState}from 'react';
import Navigation from './Component/Navigation/Navigation';
import Filter from './Component/Filter/Filter';
import Display from './Component/Display/display';
import Update from './Component/Update/update';
import {companiesList} from './Component/Const/companies';
const App = ()=>{
  const [word,setWord] = useState("");
  const [companies] = useState(companiesList);
  
  const [filterDisplay, setFilterDisplay] = useState([]);

  const handleChange = (e) =>{
    setWord(e);
    let old = companies.map(company=>{
      return{
        name:company.name.toLowerCase(), position:company.position.toLowerCase(),
        location:company.location,contact:company.contact
      };
    });

    if(word!==""){
      let newList=[];
      newList = old.filter(company=>
        company.position.includes(word.toLowerCase())
      );
      setFilterDisplay(newList);
    }else{
      setFilterDisplay(companies);
    }
  };
  

  return(
    <div>
      <Navigation/>
      <div className="container">
        <Update/>
        <Filter value={word} handleChange={e=>handleChange(e.target.value)}/>
        <Display companies={word.length<1?companies:filterDisplay} />
      </div>
    </div>
    
  )
}



export default App;
