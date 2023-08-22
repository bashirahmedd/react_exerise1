import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useLoaderData } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

const ImageGrid = () => {
    const images = useLoaderData();
    //const images = [];
    console.log(JSON.stringify(images));
    return (
        <div className="container text-center">
            
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry>
                    {
                        images.map((img) => {
                            return (
                                <img  key={img.id} alt={img.author} src={img.download_url} style={{padding:"5px", dispaly:"block"}}></img>
                            );
                        })
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
export default ImageGrid