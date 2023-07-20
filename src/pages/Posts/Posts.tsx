import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid } from '@mui/material';

import { Header } from 'components/Header/Header';
import { Post } from 'components/Post/Post';
import { routes } from 'constants/routes';

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    content: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    content: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

export const Posts = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button variant="contained" onClick={() => navigate(routes.newPost)}>
            Create New Post
          </Button>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            {featuredPosts.map((post) => (
              <Post key={post.title} post={post} />
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
