import { useParams, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import Post from '../../features/Post/Post';

const PostSingle = () => {

  const { id } = useParams();
  const postData = useSelector(posts => getPostById(posts, id));

  if(!postData) return <Navigate to="/" />
  
  return (
    <div className='d-flex justify-content-center'>
      <Post post={postData} isSingleMode={true} />
    </div>
  );
};

export default PostSingle;