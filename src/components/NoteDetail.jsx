import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { FiInbox, FiTrash2 } from "react-icons/fi";

function NoteDetail({ title, createdAt, body, onDelete, id }) {
    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">
                {showFormattedDate(createdAt)}
            </p>
            <p className="detail-page__body">{body}</p>
            <div className="detail-page__action">
                <button className="action" type="button" title="Arsipkan">
                    <FiInbox />
                </button>
                <button
                    className="action"
                    type="button"
                    title="Hapus"
                    onClick={() => onDelete(id)}
                >
                    <FiTrash2 />
                </button>
            </div>
        </section>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default NoteDetail;
