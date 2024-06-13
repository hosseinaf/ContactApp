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
    setContacts((contact)=>[...contact,contact])
  };

  const handleInputChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]:[ e.target.value]
    });
  };

   console.log(contact)
   console.log(contacts)
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
      {!contacts.length ? (
        <div className="bg-gray-200 p-14  rounded mt-8">
          <h1>No Contact Yet!</h1>
        </div>
      ) : (
        //  {contacts.map((contact)=>{
        //   <div>
        //     <p>name:{contact.name}</p>
        //   </div>
         
        //  })}
      )}
    </>
  );
}

export default Form;
