import React, {useState} from 'react';

const Contact = () => {


    const [ formFields, setFormFields ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const {
        name,
        email,
        message
    } = formFields

    const submitHandler = (e) => {
        console.log('hello')
        e.preventDefault()

    }
    
    console.log(formFields);
        return (
                <form
                    className="text-center lg:text-right md:text-xl text-marv"
                    onSubmit={submitHandler}
                >
                    <div
                        className="flex"
                    >
                    {console.log(formFields.name)}
                        <input
                            required
                            type="text"
                            name="name"
                        placeholder="Name*"
                            value={name}
                            className="rounded-xl py-3 px-5 w-4/5 focus:outline-none"
                            onChange={(e) => {
                            setFormFields({
                                ...formFields,
                                    name: e.target.value
                                })
                            }}
                        />
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email*"
                            value={email}
                            className="rounded-xl py-3 px-5 ml-5 w-4/5 focus:outline-none"
                            onChange={(e) => {
                            setFormFields({
                                ...formFields,
                                    email: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className="pt-5 mx-auto flex flex-col md:flex-row items-center">
                        <textarea
                            required
                            type="textarea"
                            name="message"
                            placeholder="Message*"
                            value={message}
                            className="rounded-xl py-3 px-5 w-5/6 w-full md:w-4/5 focus:outline-none"
                            onChange={(e) => {
                            setFormFields({
                                ...formFields,
                                    message: e.target.value
                                })
                            }}
                        />
                        <input
                            name="submit"
                            type="submit"
                            value="Send"
                            className="mt-5 md:mt-0 md:ml-5 py-2 px-5 h-10 rounded-xl bg-marv text-beige"
                        />
                    </div>
                </form>
        )
    
}

export default Contact