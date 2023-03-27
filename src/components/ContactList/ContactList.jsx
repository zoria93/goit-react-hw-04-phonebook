import PropTypes from 'prop-types';
import { List } from 'components/ContactList/ContactList.styled';
import { ContactItemList } from 'components/ContactItemList/ContactItemList';

export const ContactList = ({ onFilterContacs, onDeleteContact }) => {
  return (
    <List>
      {onFilterContacs.map(({ name, id, number }) => {
        return (
          <ContactItemList
            key={id}
            onDeleteContact={onDeleteContact}
            name={name}
            id={id}
            number={number}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  onFilterContacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
