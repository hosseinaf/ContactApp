import { useState } from "react";
import FormList from "../FormList/FormList";
import inputs from "../../../constant/inputs";
import { v4 } from "uuid";
import styles from "./form.module.css";
function Form() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  // Add button
  const submitHandler = (e) => {
    e.preventDefault();
    if (contact.name && contact.lastName && contact.email && contact.phone) {
      setMessage("");
      const newContact = { ...contact, id: v4() };
      setContacts((contacts) => [...contacts, newContact]);
      setContact({
        name: "",
        lastName: "",
        email: "",
        phone: "",
      });
      return;
    }
    setMessage("please enter valid data");
  };

  // Change input
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((contact) => ({ ...contact, [name]: [value] }));
  };

  const deleteHandler = (id) => {
    const updateContacts = contacts.filter((contacts) => contacts.id !== id);
    setContacts(updateContacts);
  };

  return (
    <>
      <div className={`container`}>
        <div className={` ${styles.innerContainer}`}>
          <form className={styles.form} onSubmit={submitHandler}>
            {inputs.map((input) => (
              <input
                className={styles.input}
                key={input.id}
                type={input.type}
                name={input.name}
                placeholder={input.Placeholder}
                value={contact[input.name]}
                onChange={handleInputChange}
              />
            ))}
            <button
              className={styles.buttonForm}
              onClick={submitHandler}
              style={styles.button}
              type="submit"
            >
              Add Contact
            </button>
          </form>
          <div> {message && <p className={styles.alert}>{message}</p>}</div>

          <h1 className="mt-14 text-blue-700 text-4xl font-bold">
            Contact List
          </h1>

          <FormList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
         
      </div>
    </>
  );
}

export default Form;
