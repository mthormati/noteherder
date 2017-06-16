import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {

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
                            type="text" 
                            name="title" 
                            placeholder="Title your note" 
                            value={this.props.note.title}
                            onChange={this.handleChanges}
                        />
                    </p>
                    <p>
                        <textarea 
                            name="body" 
                            cols="30" 
                            rows="10" 
                            placeholder="Just start typing..." 
                            value={this.props.note.body} 
                            onChange={this.handleChanges}>
                        </textarea>
                    </p>
                    {/*<button type="submit">Save and New</button>*/}
                </form>
            </div>
        )
    }
}

export default NoteForm