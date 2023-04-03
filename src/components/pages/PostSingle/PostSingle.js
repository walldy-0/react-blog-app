import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import Post from '../../features/Post/Post';

const PostSingle = () => {

  const { id } = useParams();
  const postData = useSelector(posts => getPostById(posts, id));

  return (
    <Post post={postData} isSingleMode={true} />
  );
};

export default PostSingle;