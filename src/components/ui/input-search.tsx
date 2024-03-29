interface IInputSearchProps {
    label: string;
}

export function InputSearch({ label }: IInputSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-black"
        placeholder={label}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.997-4.997M10 16a6 6 0 100-12 6 6 0 000 12z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
