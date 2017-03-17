import React from 'react'
import ReactDOM from 'react-dom'

import styles from './AlbumMode.css'

import FileUpload from '../../FileUpload/FileUpload.jsx';

const AlbumMode = React.createClass({

    onUpload(url) {
        this.props.addPhoto(url, this.props.album.id)
    },

    deleteLink(url) {
        this.props.deletePhoto(url, this.props.album.id);
    },

    render() {
        return(
          <div className={styles.photoalbum}>
              <div className={styles.header}>
                  {this.props.album.name}
                  {(()=>{
                      if(this.props.addPhoto){
                          return <FileUpload onUpload={this.onUpload} style={styles.upload}/>
                      }
                  })()}
              </div>
              <div className={styles.line} />
              {(()=>{
                  if(this.props.photos) {
                      return <div className={styles.photos}>
                          {this.props.photos.map((link) => {
                              return <div className={styles.item} key={link}>
                                  <a href={link}><img src={link} className={styles.image}/></a>
                                  {(()=>{
                                      if(this.props.deletePhoto){
                                          return <a href='#!' onClick={()=>{return this.deleteLink(link)}} className={styles.deletebutton}>
                                              <span>delete_forever</span>
                                          </a>
                                      }
                                  })()}

                              </div>
                          })}
                      </div>
                  }
              })()}
          </div>
        )
    }
})

export default AlbumMode
