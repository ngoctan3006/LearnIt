import Button from 'react-bootstrap/Button';
import playIcon from '../../assets/play-btn.svg';
import editIcon from '../../assets/pencil.svg';
import deleteIcon from '../../assets/trash.svg';
import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';

const ActionButton = ({ url, _id }) => {
    const { deletePost, findPost, setShowUpdatePostModal } =
        useContext(PostContext);

    const choosePost = (postId) => {
        setShowUpdatePostModal(true);
        findPost(postId);
    };

    return (
        <>
            <Button className='post-button' href={url} target='_blank'>
                <img src={playIcon} alt='play' width='32' height='32' />
            </Button>
            <Button
                className='post-button'
                onClick={choosePost.bind(this, _id)}>
                <img src={editIcon} alt='edit' width='24' height='24' />
            </Button>
            <Button
                className='post-button'
                onClick={deletePost.bind(this, _id)}>
                <img src={deleteIcon} alt='delete' width='24' height='24' />
            </Button>
        </>
    );
};

export default ActionButton;
