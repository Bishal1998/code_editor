import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/htmlmixed/htmlmixed';
import './Editor.css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

const Editor = ({ languge, value, onChange}) => {

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    return (
        <div className='code__editor_editor'>
            <ControlledEditor 
            className='code__mirror'
            onBeforeChange={handleChange}
            value = {value}
            options = {{
                lineWrapping : true,
                lint : true,
                mode : languge,
                lineNumbers : true,
                theme : 'material'
            }}
            />
        </div>
    )
}

export default Editor;