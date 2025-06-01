export default function Button({ buttons, onClick, className = '' }) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 bg-white rounded-4xl text-black border border-black hover:bg-gray-800 hover:text-white transition-colors ${className}`}
        >
            {buttons}
        </button>
    );
}