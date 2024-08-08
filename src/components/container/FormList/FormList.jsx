import PropTypes, { any } from "prop-types";
import FormItem from "../FormItem/FormItem";
FormList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
function FormList({ contacts, deleteHandler }) {
  return (
    <div>
      {!contacts.length ? (
        <div className="bg-gray-200 p-14  rounded mt-8">
          <h1>No Contact Yet!</h1>
        </div>
      ) : (
        contacts.map((item) => {
          return (
            <FormItem
              contactsItem={item}
              key={item.id}
              deleteHandler={deleteHandler}
            />
          );
        })
      )}
    </div>
  );
}

export default FormList;
