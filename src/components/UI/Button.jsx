const Button = ({ children, onClick }) => {
  return (
    <button
      type="submit"
      className=" w-full btn btn-info block text-xl max-w-fit"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
