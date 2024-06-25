const SearchField = () => {
    return (
        <input
            className={`bg-white rounded-[10px] px-6 py-3 text-gray90 w-full md:w-96
                bg-[url(/icons/search-icon.svg)] bg-no-repeat bg-right-6`}
            placeholder="Title here"
        />
    );
};

export default SearchField;
