import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface Props {
  post: {
    content: string;
    title: string;
  };
}

export const Post = ({ post }: Props): JSX.Element => (
  <Grid item xs={12} md={6}>
    <CardActionArea>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {post.content}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  </Grid>
);
