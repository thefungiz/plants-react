import React, {useState} from 'react';
import axios from 'axios';

const LoadImages = ({ name }) => {
    const [images, setImages] = useState([]);
    const [clicked, setClicked] = useState(false);
    const ignoreImages = ['https://upload.wikimedia.org/wikipedia/commons/7/74/Red_Pencil_Icon.png'];

    const getImages = () => {
        setClicked(true);
        axios.get(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=${name}`)
        .then(resp => {
            const images = Object.values(resp.data.query.pages)[0].images;
            if (images) {
                images.forEach(x => {
                    axios.get(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${x.title}&prop=imageinfo&iiprop=url`)
                    .then(response => {
                        const imageinfo = Object.values(response.data.query.pages)[0].imageinfo;
                        if (imageinfo) {
                            const url = imageinfo[0].url;
                            if (url && !ignoreImages.includes(url)) {
                                setImages(images => [ ...images ,imageinfo[0].url]);
                            }
                        }
                    });
                });
            }
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div>
            {images.length > 0 && images.map((image, i) => {
                return <img className="image-fill-parent" key={i} src={image} />
            })}
            {!clicked &&
                (<button onClick={() => getImages()} >Load Images</button>)
            }
        </div>
    );
}
export default LoadImages;