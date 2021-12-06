import React, { useState } from "react";
import { Form } from 'react-bootstrap';

function Cloudinary() {

    const [image, setImage] = useState('')


    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'farukh')

        const res = await fetch(
            '	https://api.cloudinary.com/v1_1/dywoy9ilo/image/upload ',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        console.log(file.secure_url)

    }

    return (
        <div>
            <Form.Group controlId="formFile" className="mb-3 input-file section-description">
                <Form.Control
                    type="file"
                    className="label-width"
                    onChange={uploadImage} />
            </Form.Group>

            <img src={image} alt="show preview" style={{ width: '300px' }} />
        </div>
    );
}
export default Cloudinary;