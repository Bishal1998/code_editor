import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { useState } from 'react';
import { BsToggleOn } from 'react-icons/bs';

function App() {

  const [html, setHtml] = useState('');
  // const [enable, setEnable] = useState(true);
  const [source, setSource] = useState('html');

  const srcDoc = `
  <html>
    <body>${html}</body>
  </html>
  `

  return (
    <>
      <div className="app">
        <div className="main">
          {source === 'html' ?
            <div className="code__editor">
              <h2>HTML Code</h2>
              <div className='code__editor__editor'>
                <Editor
                  language='xml'
                  value={html}
                  onChange={setHtml}
                />
              </div>
            </div>
            :
            <div className="code__preview">
              <div><h2>Preview</h2></div>
              <div className="code__preview_preview">
                <Preview srcDoc={srcDoc} />
              </div>
            </div>
          }
        </div>
        <div className="button">
          <button className='button_html' onClick={() => setSource('html')}>Html</button>
          <button className='button_preview' onClick={() => setSource('preview')}>Preview</button>
        </div>
      </div>
    </>
  );
}

export default App;