import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

function ContactList() {
    const dispath = useDispatch();

    useEffect(() => {
        const abortController = new AbortController();
        
        dispath(fetchContacts({ signal: abortController.signal }));
        
        return () => {
            abortController.abort();
        };
    }, [dispath])

    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.contactList}>
            {filteredContacts &&
                filteredContacts.map((baseContact) =>
                    <li key={baseContact.id} className={css.contactList__item}>
                        <Contact baseContact={baseContact} />
                    </li>
                )
            }
        </ul>
    )
}

export default ContactList;