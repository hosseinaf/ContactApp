import { string } from "prop-types";
import React, { useState } from "react";

function Form() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // alert("ok")
    // setContacts([...contact, contact]);
    // setContacts((contact) => [...contact, contact]);
    setContacts((contacts) => [...contacts, { ...contact }]);
  };

  const handleInputChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: [e.target.value],
    });
  };

  const removeHanlder = (phone) => {
    // alert(phone)
    // console.log(phone)

    setContacts(
      contacts.filter((contact) => {
        return contact.phone !== phone;
      })
    );
  };

  // console.log(contact);
  // console.log([contacts]);
  return (
    <>
      <div className="w-full mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md">
        <form onSubmit={submitHandler}>
          <div className="flex flex-wrap  -mx-2  mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <input
                type="text"
                id="name"
                name="name"
                value={contact.name}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={contact.lastName}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Last Name"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contact.phone}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Phone"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add Contact
          </button>
        </form>
      </div>
      <h1 className="mt-14 text-blue-700 text-4xl font-bold  ">Contact List</h1>

      {contacts.length > 0 && (
        <div className="flex justify-between mt-14">
          <p className="text-red-400 text-2xl">Name</p>
          <p className="text-red-400 text-2xl">LastName</p>
          <p className="text-red-400 text-2xl">Email</p>
          <p className="text-red-400 text-2xl">Phone</p>
          <p></p>
        </div>
      )}
      {!contacts.length ? (
        <div className="bg-gray-200 p-14  rounded mt-8">
          <h1>No Contact Yet!</h1>
        </div>
      ) : (
        contacts.map((item) => {
          return (
            <div className="flex justify-between mt-4" key={item.id}>
              <p>{`${item.name}`}</p>
              <p>{`${item.lastName}`}</p>
              <p>{` ${item.email}`}</p>
              <p>{` ${item.phone}`}</p>
              <button onClick={() => removeHanlder(item.phone)}>remove</button>
            </div>
          );
        })
      )}
    </>
  );
}

export default Form;
