import PropTypes, { any } from "prop-types";
import FormItem from "../FormItem/FormItem";
FormList.propTypes = {
  children: PropTypes.node.isRequired,
  onRemoveHandler: any,
};
function FormList({ onRemoveHandler, children }) {
  return (
    <div>
      {!children.length ? (
        <div className="bg-gray-200 p-14  rounded mt-8">
          <h1>No Contact Yet!</h1>
        </div>
      ) : (
        children.map((item) => {
          return(
            <FormItem data={item} key={item.id} />
          ) 
        })
      )}
    </div>
  );
}

export default FormList;
