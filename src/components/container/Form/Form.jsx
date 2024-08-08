import { useState } from "react";
import FormList from "../FormList/FormList";
import inputs from "../../../constant/inputs";
import { v4 as uuidv4, v4 } from "uuid";
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
  //  Remove button
  const deleteHandler = (id) => {
    const newContact = contacts.filter((contact) => contact.id !== id);
    setContacts(newContact);
  };

  return (
    <>
      <div className="w-full mx-auto p-4 pt-6 pb-8   rounded shadow-md">
        <form onSubmit={submitHandler}>
          <div className="flex flex-wrap -mx-2  mb-4">
            {inputs.map((input, index) => (
              <div className="w-full md:w-[48%] mb-4 md:mb-2 mr-4" key={index}>
                <input
                  key={input.id}
                  type={input.type}
                  name={input.name}
                  placeholder={input.Placeholder}
                  value={contact[input.name]}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add Contact
          </button>
        </form>
      </div>
      {message && <h1 className="text-red-300 mt-5">{message}</h1>}

      <h1 className="mt-14 text-blue-700 text-4xl font-bold">Contact List</h1>

      <FormList contacts={contacts} deleteHandler={deleteHandler} />
    </>
  );
}

export default Form;
