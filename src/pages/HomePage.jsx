import React from "react";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";
import SearchBar from "../components/SearchBar";
import HomePageAction from "../components/HomePageAction";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
        };
    }

    render() {
        return (
            <section>
                <h2>Catatan Aktif</h2>
                <SearchBar />
                <NoteList notes={this.state.notes} />
                <HomePageAction />
            </section>
        );
    }
}

export default HomePage;
