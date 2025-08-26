import React, { useState } from 'react'

const Practice = ({ addNewData }) => {
    const [count, setCount] = useState(0);
    const [formData, setFormData] = useState({
        username: '',
        address: '',
        mobileNumber: ''
    })

    const handleCountChange = () => {
        setCount(count + 1)
    }


    const handleFormChange = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        addNewData(formData)
        console.log('xxxxx', addNewData)
        console.log('-0-------', formData)

    }
    return (
        <div style={{ justifySelf: 'center', width: '200px', paddingBottom: '20px' }}>
            <p> This is Counts: {count} </p>
            <button onClick={handleCountChange}> Click on me</button>

            <h1> This is Form Tutorial</h1>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label> username</label>
                    <input
                        name='username'
                        type='text'
                        value={formData.username}
                        onChange={handleFormChange}
                    />

                </div>
                <div>
                    <label> Address</label>
                    <input
                        name='address'
                        type='text'
                        value={formData.address}
                        onChange={handleFormChange}
                    />
                </div>

                <div>
                    <label> Mobile Number</label>
                    <input
                        name='mobileNumber'
                        type='number'
                        value={formData.mobileNumber}
                        onChange={handleFormChange}
                    />
                </div>

                <button type='submit'> Submit</button>

            </form>


        </div>
    )
}

export default Practice


// --------------------- Parent Component ---------------------
export const Showform = () => {

    const [showData, setShowData] = useState([
        {
            username: "masumraz@gmail.com",
            address: 'basatput',
            mobileNumber: '7245927586'
        }
    ])

    const addNewData = (data) => {
        setShowData((currData) =>
            [...currData, data])
    }

    return (
        <div style={{ justifySelf: 'center' }}>
            <h2 style={{ color: 'red' }}> child to Parent data , form to show form data </h2>

            <h2 style={{ color: 'green' }}>This is Showform Component</h2>
            {
                showData.map((item, idx) => (
                    <div key={idx}>
                        <h4> Username :{item.username} </h4>
                        <p> address : {item.address} </p>
                        <p> mobileNumber: {item.mobileNumber} </p>
                        <hr />

                    </div>

                ))
            }


            <Practice addNewData={addNewData} />
        </div>
    )
}







