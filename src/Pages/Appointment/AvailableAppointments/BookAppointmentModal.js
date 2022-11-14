import React from 'react';

// { cardOption: { name, slots } }
const BookAppointmentModal = ({ cardOption: { name, slots }, setCardOption, dateSelected }) => {
    const handleSubmitModal = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const fullName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: dateSelected,
            treatment: name,
            slot,
            fullName,
            email,
            phone
        }

        console.log(booking);
        setCardOption(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">{name !== '' ? name : 'no name found'}</h3>
                    <form onSubmit={handleSubmitModal} className='grid gap-5'>
                        <input type="text" placeholder={dateSelected} className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            <option disabled selected>Select appointment slot</option>
                            {
                                slots.length > 0 ? slots.map((slot, index) => <option
                                    key={index}
                                >{slot}</option>)
                                    :
                                    'no slots found'
                            }
                        </select>
                        <input name="name" type="text" placeholder="Full name" className="input input-bordered w-full" />
                        <input name="email" type="text" placeholder="Email" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="Phone number" className="input input-bordered w-full" />
                        <button className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAppointmentModal;