import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <form>
            <p>
                <input type="text" name="title" placeholder="Title your note" value="" />
            </p>
            <p>
                <textarea name="body" cols="30" rows="10" placeholder="Just start typing..."></textarea>
            </p>
        </form>
    )
}

export default Form