import PropTypes from "prop-types";
FormItem.propTypes = {
  contactsItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
function FormItem({
  contactsItem: { id, name, lastName, email, phone },
  deleteHandler
}) {
  return (
    <div>
      <div className="flex justify-between mt-4" key={id}>
        <p>{`${name}`}</p>
        <p>{`${lastName}`}</p>
        <p>
          <span>📩</span>
          {`${email}`}
        </p>
        <p>
          <span>📞</span>
          {`${phone}`}
        </p>

        <button onClick={()=>deleteHandler(id)}>🗑️</button>
      </div>
    </div>
  );
}

export default FormItem;
