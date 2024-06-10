 

function Badge({children,background,color}) {
  return (
    <div className={`${background} ${color}  rounded p-[4px] font-bold text-base`}>{children}</div>
  )
}

export default Badge