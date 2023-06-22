import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote, deleteNote } from "../utils/local-data";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();
    return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNote(props.id),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);
        this.setState(() => {
            return { note: getNote() };
        });
        const { navigate } = this.props;
        navigate("/");
    }

    render() {
        if (this.state.note === null) {
            return <p>Note not found!!!</p>;
        }

        return (
            <section>
                <NoteDetail
                    {...this.state.note}
                    onDelete={this.onDeleteHandler}
                />
            </section>
        );
    }
}

DetailPage.propTypes = {
    note: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
