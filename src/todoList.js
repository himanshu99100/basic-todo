import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const TodoList = () => {
    //function to get data from local storage
    const getLocalData = () => {
      const lists = localStorage.getItem("mytodolist");
      if (lists) {
        return JSON.parse(lists);
      } else {
        return [];
      }
    };
  
  const [data, setData] = useState("");
  const [dataArray, setDataArray] = useState(getLocalData);
  const handleChange = (e) => {
    setData(e.target.value);
  }


  //function to add item in the list
  const additem = () => {
    if (!data) {

      alert('fill the data please');

    }
    else {
      const newArray=[...dataArray,data];
      setDataArray(newArray);
      setData("");
    }

  }

  //funtion to remove element from list
  const deleteItem = (index) => {
    const newArray = dataArray.filter((_, i) => i !== index);
    setDataArray(newArray);
  };


  //this use effect hook will be us to mount the component whener data array change
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(dataArray));
  }, [dataArray]);

  //funtion to delete all item

  const deleteAll=()=>{
    setDataArray([]);
  }

  return (
    <div className='box-container'>
      <div className='inside-box'>
        <div className='input-box'>
          <input onChange={handleChange} value={data}></input>
            <i className="fa fa-plus add-btn" onClick={additem}></i>
          
        </div>
       
          {
            dataArray.map((curElm, index) => {
              return (
                <div className='data-container' key={index}>
                  <div className='bg-w'>
                    <p>{curElm}</p>
                  </div>
                  <div className='bg-w'>
                    <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(index)}></i>
                  </div>
                </div>
              );
            })};
            <button onClick={deleteAll}>Delete</button>
        </div>
    </div>
  )
}

export default TodoList
