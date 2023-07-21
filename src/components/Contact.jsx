import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="max-w-[1040px] md:pl-20 m-auto p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[#02284f]">
                Contact
            </h1>
            <form action="" method="POST" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2 text-slate-500 font-bold">
                            Name
                        </label>
                        <input
                            className="border-2 rounded-lg p-2 flex border-slate-200"
                            type="text"
                            name="inputName"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2 text-slate-500 font-bold">
                            Phone Number
                        </label>
                        <input
                            className="border-2 rounded-lg p-2 flex border-slate-200"
                            type="text"
                            name="inputPhone"
                        />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-slate-500 font-bold">
                        Email
                    </label>
                    <input
                        className="border-2 rounded-lg p-2 flex border-slate-200"
                        type="email"
                        name="inputEmail"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-slate-500 font-bold">
                        Subject
                    </label>
                    <input
                        className="border-2 rounded-lg p-2 flex border-slate-200"
                        type="text"
                        name="inputSubject"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-slate-500 font-bold">
                        Message
                    </label>
                    <textarea
                        className="border-2 rounded-lg p-2 flex border-slate-200"
                        rows="10"
                        name="inputMessage"
                    />
                </div>
                <button className="bg-[#02284f] text-cus-gray mt-4 w-full p-4 rounded-lg">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
