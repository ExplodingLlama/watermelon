import React from 'react'
import ReactDOM from 'react-dom'

const MainMode = React.createClass({

    get4Photos(album) {
        var photos = [];
        for(var i=0;i<album.photos.length;i++) {
            if(photos.length>=4) return photos;

            var photoId = album.photos[i];
            photos.push(this.props.photos.byId[photoId]);
        }
    },

    render() {
        //Show all albums and then show an add album button
        return <div className={styles.wrapper}>
            <div className={styles.header}>Photo Albums</div>
            <div className={styles.albumlist}>
                {(()=>{
                    if(!this.props.albums || this.props.albums.length===0) {
                        return;
                    }
                    else {
                        return this.props.albums.map((album) => {
                            return <div className={styles.albumcover}>
                                <a href='#!' onClick={ () => this.props.selectAlbum(album.id) }>
                                    <div className={styles.albumname}>
                                        {album.name}
                                    </div>
                                    <div className={styles.photomatrix}>
                                        {(()=>{
                                            if(!album.photos || album.photos.length===0) {
                                                return <div className={styles.emptyalbum}>
                                                    <span>file_upload</span>
                                                    Empty
                                                </div>
                                            }
                                            var photos = this.get4Photos(album)
                                            return photos.map((photo)=>{
                                                return <img src={photo} className={styles.albumcoverphoto}/>
                                            })
                                        })()}
                                    </div>
                                </a>
                                {(()=>{
                                  if(!album.photos || album.photos.length===0) {
                                      return <a href='#!'
                                                onClick={()=>{this.props.deleteAlbum(album.id)}}
                                                className={styles.deletebutton}><span>delete_forever</span></a>
                                  }
                                })()}
                            </div>
                        })
                    }
                })()}
                <div className={styles.albumcover}>
                    <a onClick={this.props.createAlbum} className={styles.createalbum}>
                        <span>add</span>
                        Create new album</a>
                </div>
            </div>
        </div>
    },

    render() {
        return (
            <div>
                <div> list of Albums </div>
                {this.props.albums.map((album) => {
                    var photos = this.get4Photos(album)
                    return (
                        <a href='!#' onClick={() => this.props.selectAlbum(album.id)}>
                            <div>{album.name}</div>
                            {photos.map(photo => {
                                return <img src={photo.photoLink} />
                            })}
                        </a>
                    )
                })}
                <a href='!#' onClick={this.props.createAlbum}>Create a new album</a>
            </div>
        )
    }
})

export default MainMode
