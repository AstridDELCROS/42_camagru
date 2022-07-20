import dataMapper from '../database'

const homeController = {
    homePage: (_:any, response:any) => {
        dataMapper.getAllPictures((error: any, images: []) => {
            if (error) {
                response.send('Sorry, an error occured!');
                return;
            }
            response.render('camera', {images});
        })
        // if not signin -> createAccessDeniedException
    },
}

export default homeController;
