import PropTypes from 'prop-types';
import { Label, Span, Input } from 'components/Filter/Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" name="filter" onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
