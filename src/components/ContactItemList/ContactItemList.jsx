import {
  ListContacts,
  Button,
} from 'components/ContactItemList/ContactItemList.styled';
import PropTypes from 'prop-types';

export const ContactItemList = ({ name, id, number, onDeleteContact }) => {
  return (
    <ListContacts>
      {name}: {number}
      <Button onClick={() => onDeleteContact(id)} type="button">
        <span>Delete</span>
      </Button>
    </ListContacts>
  );
};

ContactItemList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
