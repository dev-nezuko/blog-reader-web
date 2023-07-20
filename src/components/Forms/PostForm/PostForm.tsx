import { useCallback } from 'react';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { NewPostPayload } from 'types/newPostPayload';

import { TextInput } from 'components/TextInput/TextInput';

export const PostForm = (): JSX.Element => {
  const handleSubmit = useCallback((values: NewPostPayload) => {
    console.log(values);
  }, []);

  return (
    <Formik initialValues={{ title: '', content: '' }} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <TextInput required fullWidth name="title" label="Title" type="title" autoComplete="title" />
          <TextInput name="content" label="Content" autoComplete="content" multiline required fullWidth minRows={4} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Create Post
          </Button>
        </Form>
      )}
    </Formik>
  );
};
