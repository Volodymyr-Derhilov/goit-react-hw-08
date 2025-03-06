import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/contactsSelectors";

export default function ContactsPage() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

    return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ContactList />
    </div>
    )
}