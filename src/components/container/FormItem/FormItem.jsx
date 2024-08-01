
function FormItem({data:{id,name,lastName,email,phone}}) {
  return (
    <div>
       <div className="flex justify-between mt-4" key={id}>
              <p>{`${name}`}</p>
              <p>{`${lastName}`}</p>
              <p><span>📩</span>{`${email}`}</p>
              <p><span>📞</span>{`${phone}`}</p>
             
              <button onClick={() => onRemoveHandler(phone)}>
                🗑️
              </button>
            </div>
    </div>
  )
}

export default FormItem