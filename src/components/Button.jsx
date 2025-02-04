/* eslint-disable react/prop-types */



export const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[50px] ${styles}`}>
      Get started
    </button>
  )
}
export default Button