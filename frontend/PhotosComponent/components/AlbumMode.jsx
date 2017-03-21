import React from 'react'
import ReactDOM from 'react-dom'

import styles from './AlbumMode.css'

import FileUpload from '../../FileUpload/FileUpload.jsx';

const AlbumMode = React.createClass({

    onUpload(url) {
        this.props.addPhoto(url, this.props.album.id)
    },

    deleteLink(photoId) {
        this.props.deletePhoto(photoId, this.props.album.id);
    },

    render() {
        if(!this.props.album) return <div></div>
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
              {((()=>{
                  if(this.props.photos) {
                      return <div className={styles.photos}>
                          {this.props.photos.map((photo) => {
                              return <div className={styles.item} key={photo.photoLink}>
                                  <a href={photo.photoLink}><img src={photo.photoLink} className={styles.image}/></a>
                                  {(()=>{
                                      if(this.props.deletePhoto){
                                          return <a href='#!' onClick={()=>{return this.deleteLink(photo.id)}} className={styles.deletebutton}>
                                              <span>delete_forever</span>
                                          </a>
                                      }
                                  })()}

                              </div>
                          })}
                      </div>
                  }
              }).bind(this))()}
          </div>
        )
    }
})

export default AlbumMode
