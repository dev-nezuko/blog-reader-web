import { TextField, TextFieldProps } from '@mui/material';
import { useFormikContext } from 'formik';

type TextInputProps = TextFieldProps & {
  name: string;
};
export const TextInput = ({ name, ...props }: TextInputProps): JSX.Element => {
  const { handleChange } = useFormikContext();

  return <TextField margin="normal" fullWidth id={name} name={name} {...props} onChange={handleChange} />;
};
