import dataMapper from '../database/dataMapper';

const homeController = {
    homePage: (_:any, response:any) => {
        dataMapper.getAllPictures((error: any, pictures: []) => {
            if (error) {
                response.send('Sorry, an error occured!');
                return;
            }
            response.render('camera', {pictures});
        })
        // if not signin -> createAccessDeniedException
    },
}

export default homeController;
