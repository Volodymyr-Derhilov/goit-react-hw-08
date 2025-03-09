import css from './Contact.module.css';
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

function Contact({ baseContact }) {
    const dispatch = useDispatch();

    const onDelete = () => {
       dispatch(deleteContact(baseContact.id));
    }

    return (
        <>
            <div className={css.info}>
                <ul className={css.list}>
                    <li className={css.item}>
                        <IoIosContact className={css.icon} />
                        <p className={css.name}>{baseContact.name}</p>
                    </li>  
                    <li className={css.item}>
                        <FaPhoneAlt className={css.icon} />
                        <p className={css.name}>{ baseContact.number}</p>
                    </li>
                </ul>
                <button type='button' className={css.buttonDelete} onClick={onDelete}>Delete</button>
            </div>
        </>
    )
    
    
}

export default Contact;