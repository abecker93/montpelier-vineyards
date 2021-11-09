import React from 'react';

class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        // ! submit and send email here
    }

    render() {
        
        return (
            <React.Fragment>
                <form onSubmit={this.submitHandler}>
                    <div
                        className="flex"
                    >
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Name*"
                            value={this.state.name}
                            className="rounded-xl py-3 px-5 w-4/5 focus:outline-none"
                            onChange={this.changeHandler}
                        />
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email*"
                            value={this.state.email}
                            className="rounded-xl py-3 px-5 ml-5 w-4/5 focus:outline-none"
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="pt-5 mx-auto flex flex-col md:flex-row items-center">
                        <textarea
                            required
                            type="textarea"
                            name="message"
                            placeholder="Message*"
                            value={this.state.message}
                            className="rounded-xl py-3 px-5 w-5/6 w-full md:w-4/5 focus:outline-none"
                            onChange={this.changeHandler}
                        />
                        <input
                            type="submit"
                            value="Send"
                            className="mt-5 md:mt-0 md:ml-5 py-2 px-5 h-10 rounded-xl bg-marv text-beige"
                        />
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Contact