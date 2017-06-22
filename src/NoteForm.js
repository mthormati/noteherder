import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {

    componentWillReceiveProps(nextProps) {
        const newId = nextProps.match.params.id;

        if (newId !== this.props.note.id) {
            const note = nextProps.notes[newId];
            if (note) {
                this.props.setCurrentNote(note);
            }

        }
    }

    handleChanges = (e) => {
        const text = e.target.value;
        this.props.updateNote(text, e.target.name);
    }

    render() {
        return (
            <div className="NoteForm">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input 
                            required
                            type="text" 
                            name="title" 
                            placeholder="Title your note" 
                            value={this.props.note.title}
                            onChange={this.handleChanges}
                        />
                    </p>
                    <p>
                        <textarea 
                            required
                            name="body" 
                            cols="30" 
                            rows="10" 
                            placeholder="Just start typing..." 
                            value={this.props.note.body} 
                            onChange={this.handleChanges}>
                        </textarea>
                    </p>
                </form>
            </div>
        )
    }
}

export default NoteForm