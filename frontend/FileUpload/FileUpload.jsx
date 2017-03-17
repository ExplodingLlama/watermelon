import React from 'react';
import ReactDOM from 'react-dom';

const reader  = new FileReader();

const FileUpload = React.createClass({
    onChange(ev){
        var file = ev.target.files[0];
        reader.readAsDataURL(file);
    },
    componentDidMount() {
      // when encoded, upload
          reader.addEventListener("load",  () => {
              var upload = window.feathersApp.service('uploads')
                  .create({uri: reader.result})
                  .then((response) => {
                      // success
                      this.props.onUpload(response.url);
                  });
          }, false);
    },
    render() {
        return <div>
                    <input type="file"
                           id="file"
                           onChange={this.onChange}
                           className={this.props.style}/>
        </div>
    }
})

module.exports = FileUpload;
