import { GallerieContainer, GallerieContentContent, GallerieHeading, GallerieText } from '../GallerieContent/GallerieContentElement';
import Carousel from '../GalleriePicture/index';

const GallerieContent = () => {

    return (
        <GallerieContainer>
            <GallerieContentContent>
                <GallerieHeading><h1>Hallo</h1></GallerieHeading>
                <GallerieText></GallerieText>
                <Carousel/>
            </GallerieContentContent>
        </GallerieContainer>
    );
};

export default GallerieContent;

