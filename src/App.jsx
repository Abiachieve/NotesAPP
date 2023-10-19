import React, { useState } from 'react';
import './App.css';
import images from './images/Frame 11.svg'
import images1 from './images/edit (1).svg'
import images2 from './images/delete.svg'
import images3 from './images/Frame 6.svg'
import { Container, Row, Col } from 'react-bootstrap';
function App() {

 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [inputSubmitted, setInputSubmitted] = useState(false);
  const [inputs, setInputs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputSubmitted(true);
    setInputs([...inputs, { title: title, description: description }]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="App">
      <div className="sidebar">
        {/* Sidebar content */}
       <h1>Notes App</h1>
      <img src={images} alt="images" style={{ height: '180px', width: '180px' }}/>
      </div>
      <div className="main">
       
        <h1>Add a Title</h1>
        <form onSubmit={handleSubmit}>
        <div className="input-main">
          {/* <label htmlFor="title">Title</label><br/> */}
          <input
            type="text"
            id="title"
            value={title}
            style={{ height: '50px', width: '450px' }}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          /><br/>
          {/* <label htmlFor="description">Title</label><br/> */}
<textarea
  id="description"
  value={description}
  style={{ height: '180px', width: '450px' }}
  onChange={(e) => setDescription(e.target.value)}
  placeholder="Take a note"
/>
<br/></div>
          <button type="submit">Submit</button>
        </form><br/>
        <img src={images3} />
        <h4>Recently viewed</h4>
    
          
         
<div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", width: "300px", height: "300px" }}>

{
  inputs.map((input, index) => (
    
    <Container fluid key={index}>
     
      <Row>
        <Col md={3}>
       
           
            <div className="input-header">
             
              <div className="input-buttons">
            <img src={images1} alt="Images 1" />
              
              <img src={images2} alt="Image 2" />
            </div>
            <h2>{input.title}</h2>
            </div>
            <p>{input.description}</p>
        
        </Col>
        <Col md={3}></Col>
        <Col md={3}></Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  ))
}  


</div>


</div>
        
      
    </div>
  );
}

export default App;
