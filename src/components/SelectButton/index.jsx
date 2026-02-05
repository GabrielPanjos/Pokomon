export default function SelectButton({ Icon }) {
  return (
    <>
      <button className="bg-white flex justify-center items-center h-14 w-14 rounded-full">
        <Icon className="h-10 w-10" />
      </button>
    </>
  );
}
