import { useState, useEffect } from "react";
import someMock from '../../../mock-tool/someMockFile';

    const addReview = async (body: string) => {
        const res = await fetch("http://localhost:3000/reviews", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body
        });

        return res;
    }

const AddReview = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        body: '',
        saveData: false,
    });

    useEffect(() => {
        const storedData = localStorage.getItem('formData');

        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = target;
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (target as HTMLInputElement).checked : value,
        }));
    };


    const handleSubmit = () => {
        const json = JSON.stringify({
            ...formData,
            ...someMock
        });
        if (formData.saveData) {
            localStorage.setItem('formData', json);
        } else {
            localStorage.removeItem('formData');
        }

        addReview(json);

        setFormData({
            username: '',
            email: '',
            body: '',
            saveData: formData.saveData,
        });
    };

    return (
        <form name="addReview" onSubmit={handleSubmit}>
            <textarea
                name="body"
                id="comment"
                cols={150}
                rows={5}
                style={{ width: "100%", padding: '10px' }}
                placeholder="Comment *"
                required
                onChange={handleInputChange}
            ></textarea>
            <div style={{ display: 'flex', marginBottom: '7px' }}>
                <input
                    type="text"
                    name="username"
                    style={{ flexGrow: 1, marginRight: '10px', height: '50px', padding: '10px' }}
                    placeholder="Name *"
                    required
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    style={{ flexGrow: 1, height: '50px', padding: '10px' }}
                    placeholder="Email *"
                    required
                    onChange={handleInputChange}
                />
            </div>
            <input
                type="tel"
                name="phone"
                placeholder="Phone(optional)"
                style={{ height: '50px', padding: '10px', width: '100%' }}
                onChange={handleInputChange}
            />
            <br />
            <br />

            <input
                type="checkbox"
                name="save"
                id="save"
                style={{ marginRight: '10px' }}
                onChange={handleInputChange}
            />
            <label htmlFor="save">Save myname, email and website in this browser for the next time I comment.</label>
            <br />
            <br />
            <br />

            <button
                type="submit"
                style={{
                    color: 'white',
                    padding: '15px',
                    borderRadius: '40px',
                    backgroundColor: 'blue',
                    width: '300px',
                    fontSize: '20px'
                }}
            >
                Post review
            </button>
        </form>
    )
}

export default AddReview;