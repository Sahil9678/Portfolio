import React, { useEffect, useState } from 'react'
import './App.css';
import ecommerce from './ecommerce.jpeg';
import chatbot from './chatbot.jpeg';
import weather from './weather.jpeg';
import { v4 as uuidv4 } from 'uuid';
import Project_list from './Project_list';
import { uuid } from 'uuidv4';

function App() {
  // useSelector is same as mapStateToProps.They connect store to component.
  // 
  // mapStateToProps takes 2 argument : state,ownprops

  const [projects, setprojects] = useState(sampleprojects)

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = (function () {
      window.addEventListener("scroll", (event) => {
        document.querySelector('.header-bg').style.opacity = 1 - (window.scrollY) / 450;
      });
    })();;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="App">
      <div className='header-bg'>
        <h2 title='Sahil Godwal'>Sahil Godwal</h2>
        <h3>Learn more about what I do</h3>
        <br />
        <span>&#x2304;</span>
      </div>
      <div className='main_content'>
        <section>
          <h2>I create beautiful and functional websites for small business.
            I primarly use Reactjs, but picking up a new framework is not a problem.</h2>
          <p>
            I'm a small Town based developer. If I'm not developing then,
            I might be exercising or Gaming😅. Most of time learining new skills.
            <br />
            I have diverse sets of skills ranging from designing an App to develop one
            using Reactjs, Redux, Javascript, Html + CSS.
            I don’t like to define myself by the work I’ve done. I define myself by the work I want to do.
            Skills can be taught, personality is inherent.
            I prefer to keep learning, continue challenging myself, and do interesting things that matter.
          </p>
        </section>
        <Project_list projects={projects} />
        <section className='contact-container'>
        <h1 className='contact_text'>
          <span className='blast' aria-hidden='true'>C</span>
          <span className='blast' aria-hidden='true'>O</span>
          <span className='blast' aria-hidden='true'>N</span>
          <span className='blast' aria-hidden='true'>T</span>
          <span className='blast' aria-hidden='true'>A</span>
          <span className='blast' aria-hidden='true'>C</span>
          <span className='blast' aria-hidden='true'>T</span>
        </h1>
        <h2 className='contact'>Email:
          <a href='mailto:godwalsahil786@gmail.com' className='cta-button'>Email ME ✉️</a>
        </h2>
          {/* here contact me will come(window.open mailto) (location.href = "mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody;)*/}
        </section>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;

const sampleprojects = [
  {
    id: uuidv4(),
    project_name: 'Fitkart',
    project_type: 'E-commerce',
    image: ecommerce,
    url : 'https://fitkart.netlify.app/'
  },
  {
    id: uuidv4(),
    project_name: 'Baatchit',
    project_type: 'chatbot',
    image: chatbot,
    url : 'https://web.whatsapp.com/'
  },
  {
    id: uuidv4(),
    project_name: 'location Weather',
    project_type: 'Weather Forecast',
    image: weather,
    url : 'https://www.google.com/'
  }
]