
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from "../ContactList/ContactList.module.css";

export default function ContactList() {

const contacts = useSelector(selectFilteredContacts);

return (
    <ul className={css.container}>
    {contacts.map((contact) => (
        <li key={contact.id}>
        <Contact contact={contact} />
        </li>
    ))}
    </ul>
);
}