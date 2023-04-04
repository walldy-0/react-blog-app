import Posts from "../../features/Posts/Posts";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>All posts</h2>
        <Button variant='outline-primary' as={NavLink} to={'/post/add'}>Add post</Button>
      </div>
      <Posts />
    </div>
  );
};

export default Home;