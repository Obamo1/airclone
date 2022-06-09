import React, { useState, useEffect } from "react";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// services
import medias from "../../services/mediaServices";

function Favorites({ fetchUrl, catagory }) {
  const classes = useStyles();
  const [images, setImages] = useState([{}]);
  
  const [favIcon, setFavIcon] = useState();

 

  useEffect(() => {
    async function getData() {
        const request = await medias.getMedias(fetchUrl);
        setImages(request.data.message);  
    }
    getData();
  }, [fetchUrl, enqueueSnackbar, closeSnackbar]);

 
  return (
    <div className={classes.favorites}>
      <div className={classes.favorites__items}>
          {images &&
            images.map(image => {
              return (
                  <div
                    elevation={3}
                    className={classes.favorites__posters}
                    style={
                      {
                        //   border: "2px solid black"
                      }
                    }
                  >
                    <img
                      key={image.id}
                      src={image.thumbnailUrl}
                      alt={image.title}
                    />
                    {favIcon ? (
                      <FavoriteIcon onClick={() => setFavIcon(false)} />
                    ) : (
                      <FavoriteBorderIcon onClick={() => setFavIcon(true)} />
                    )}
                  </div>      
              );
            })}
      </div>
    </div>
  );
}

export default Favorites;