
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../redux/contactsOps'
import {selectContactsError, selectContactsLoading } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import css from "./App.module.css";

export default function App() {

  const dispatch = useDispatch();
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      {error && <b>{error}</b>}
      <ContactList />
    </div>
  );
};
