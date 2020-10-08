import React, { useState, useEffect } from "react";
import axios from "axios";
function Search() {
    const [term, setTerm] = useState("");
    const [results, setResult] = useState([]);
    console.log(results);
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: term,
                    },
                },
            );
            setResult(data.query.search);
        };
        if (term) {
            search();
        }
    }, [term]);
    const renderedResults = results.map((result, index) => {
        return (
            <div className='item' key={index}>
                <div className='right floated content'>
                    <a
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                </div>
                <span
                    dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
        );
    });

    return (
        <div className='ui form'>
            <div className='field'>
                <label>Enter Search Term</label>
                <input
                    className='input'
                    value={term}
                    onChange={(e) => {
                        setTerm(e.target.value);
                    }}
                />
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    );
}

export default Search;
