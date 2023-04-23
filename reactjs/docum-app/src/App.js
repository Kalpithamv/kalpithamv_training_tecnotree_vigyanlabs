/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  }

  const topics = [
    {
      id: 1,
      title: 'Topic 1',
      content: 'Travel gives us our greatest stories, our most cherished memories and countless irreplaceable learnings that we can choose to pay forward to others.It teaches us about ourselves and each other, it broadens our horizons and, just like a reset button, it forces us to refocus on what really matters.',
      
    },
    {
      id: 2,
      title: 'Topic 2',
      content: 'Biographical works are usually non-fiction, but fiction can also be used to portray a persons life. One in-depth form of biographical coverage is called legacy writing. Works in diverse media, from literature to film, form the genre known as biography.',
    },
    {
      id: 3,
      title: 'Topic 3',
      content: 'Social work is a profession in which trained professionals are devoted to helping vulnerable people and communities work through challenges they face in everyday life.',
    },
  ];

  return (
    <center>
    <div className="App">
      <div className="menu">
      <h3>Documentation Menu</h3>
        {topics.map((topic) => (
          <div key={topic.id} className={`menu-item ${selectedTopic === topic.title ? 'active' : ''}`} onClick={() => handleTopicClick(topic.title)}>
            {topic.title}
          </div>
        ))}
      </div>
      <div className="documentation">
        
        {selectedTopic !== '' ? (
          <div className="documentation-content">
            {topics.find((topic) => topic.title === selectedTopic).content}
          </div>
        ) : (
          <div className="default-content">
            Select a topic to view documentation.
          </div>
        )}
      </div>
    </div>
    </center>
  );
}

export default App;
