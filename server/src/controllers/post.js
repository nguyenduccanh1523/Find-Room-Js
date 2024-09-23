import * as postService from '../services/post';

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: 'Getting posts is failed.' + error,
        });
    }
}