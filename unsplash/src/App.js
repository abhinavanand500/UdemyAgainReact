import React from "react";
import "./App.css";
import ImageList from "./components/ImageList";
import axios from "axios";
class App extends React.Component {
    state = { term: "", images: [] };
    async onSearch(event) {
        event.preventDefault();
        const response = await axios.get(
            "https://api.unsplash.com/search/photos",
            {
                params: { query: this.state.term },
                headers: {
                    Authorization:
                        "Client-ID Q0kPJ7wlxFGSjs1zoYzIZyBmPOJBTLS6JCJzhGn3VHA",
                },
            },
        );
        console.log(response.data.results);

        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className='ui container mt-3'>
                <form
                    onSubmit={(e) => {
                        this.onSearch(e);
                    }}
                    className='ui form'>
                    <div className='field'>
                        <label>Enter the Picture Name</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
export default App;
