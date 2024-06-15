import PropTypes, { any } from 'prop-types';
FormList.propTypes = {
  children: PropTypes.node.isRequired,
  onRemoveHandler:any
};
function FormList({  onRemoveHandler,children }) {
  // const [contacts] = React.Children.toArray(children);
  // const [contacts]=children.
 

  console.log({ children });
  return (
    <div>
      {children.length > 0 && (
        <div className="flex justify-between mt-14">
          <p className="text-red-400 text-2xl">Name</p>
          <p className="text-red-400 text-2xl">LastName</p>
          <p className="text-red-400 text-2xl">Email</p>
          <p className="text-red-400 text-2xl">Phone</p>
          <p></p>
        </div>
      )}
      {!children.length ? (
        <div className="bg-gray-200 p-14  rounded mt-8">
          <h1>No Contact Yet!</h1>
        </div>
      ) : (
        children.map((item) => {
          return (
            <div className="flex justify-between mt-4" key={item.id}>
              <p>{`${item.name}`}</p>
              <p>{`${item.lastName}`}</p>
              <p>{` ${item.email}`}</p>
              <p>{` ${item.phone}`}</p>
              <button onClick={() => onRemoveHandler(item.phone)}>remove</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default FormList;
