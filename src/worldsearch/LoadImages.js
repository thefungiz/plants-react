import React, {useState, useEffect} from 'react';
import axios from 'axios';

const LoadImages = ({ data }) => {
    const [images, setImages] = useState([]);
    const [clicked, setClicked] = useState(false);
    const ignoreImages = ['https://upload.wikimedia.org/wikipedia/commons/7/74/Red_Pencil_Icon.png', 'https://upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo.svg', 'https://upload.wikimedia.org/wikipedia/commons/d/df/Wikispecies-logo.svg', 'https://upload.wikimedia.org/wikipedia/en/9/99/Question_book-new.svg'];

    const getImages = () => {
        setClicked(true);
        axios.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=images&titles=${data.scientificName}`)
        .then(resp => {
            const images = Object.values(resp.data.query.pages)[0].images;
            if (images) {
                images.forEach(x => {
                    axios.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&titles=${x.title}&prop=imageinfo&iiprop=url`)
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

    useEffect(() => {
        setImages([]);
        setClicked(false);
    }, [data]);

    return (
        <div>
            {images.length > 0 && images.map((image, i) => {
                return <img alt={image} className="image-fill-parent" key={i} src={image} />
            })}
            {!clicked &&
                (<button onClick={() => getImages()} >Load Additional Images</button>)
            }
        </div>
    );
}
export default LoadImages;