import { useState } from "react";

const Bar = () => {
    const [search, setSearch] = useState('');

    //Demo Data
    const dataArray = [
        'Apple',
        'Mango',
        'PineApple',
        'Orange',
        'Litchi',
        'Tomato',
        'Date',
        'Banana'
    ]

    //filter the data based on search;
    const filteredData = dataArray.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

    //function to handle the search data;
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="container">

            <h2>Search Here!</h2>
            <input type="text" placeholder="Search Here.." value={search} onChange={handleSearch} />

            {/* rendering the data  */}
            <ul>
                {
                    filteredData.length > 0 ? (
                        filteredData.map((items, index) => (
                            <li key={index}>{items}</li>
                        ))
                    ) : (
                        <li>No Data Found..</li>
                    )
                }
            </ul>

        </div>
    )
}

export default Bar;
