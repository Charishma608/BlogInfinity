import React from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css'; 
import './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
    this.saveToPC = this.saveToPC.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  saveToPC() {
    const element = document.createElement("a");
    const file = new Blob([this.state.editorHtml], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = "myDocument.html";
    document.body.appendChild(element); 
    element.click();
  }

  render() {
    return (
      <div className="editor-container">
        <ReactQuill 
          theme="snow"
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
        />
        <button className="save-button" onClick={this.saveToPC}>
          Save Blog
        </button>
      </div>
    );
  }
}


Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean'], 
    [{ 'align': [] }], 
    [{ 'color': [] }, { 'background': [] }], 
    [{ 'script': 'sub'}, { 'script': 'super' }], 
  ],
  clipboard: {
   
    matchVisual: false,
  }
}


Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'align', 'color', 'background',
  'script'
]


Editor.propTypes = {
  placeholder: PropTypes.string,
}


export default Editor;
