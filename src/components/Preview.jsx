import './Preview.css';

const Preview = ({ srcDoc }) => {
    return (
        <div className="preview">
            <iframe
                srcDoc={srcDoc}
                title='output'
                sandbox='allow-scripts'
                src=""
                frameBorder="0"
                // width='100%'
                // height='100%'
                style={{ width : '100%', height : '100%' }}

            />
        </div>
    )
}

export default Preview;