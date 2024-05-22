const Output = ({ label, value, editable }) => {
  return (
    <div className="rounded-md bg-slate-700 w-full p-2 text-right text-2xl text-white">
      <strong> {label} : </strong> {value}
    </div>
  );
};

export default Output;
