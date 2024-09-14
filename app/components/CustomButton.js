import Link from 'next/link';

const colorClasses = {
  blue: 'bg-blue-500 hover:bg-blue-600',
  green: 'bg-green-500 hover:bg-green-600',
  red: 'bg-red-500 hover:bg-red-600',
};

const CustomButton = ({ text, linkTo, color, onClick }) => {
  const colorStyle = colorClasses[color] || colorClasses.blue;
  const baseStyle =
    'inline-block text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer';

  // Conditionally render a Link or button based on whether linkTo is provided
  return linkTo ? (
    <Link href={linkTo} className={`${baseStyle} ${colorStyle}`}>
      {text}
    </Link>
  ) : (
    <button className={`${baseStyle} ${colorStyle}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
