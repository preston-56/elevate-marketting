import React from 'react';
import { InlineWidget } from 'react-calendly';

const BookNow: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4">Book Your Consultation</h1>
            <p className="text-center mb-8">Choose a date and time that works for you.</p>
            <p>Contact us to schedule your service today!</p>

           
            {/* Calendly widget */}
            <div className="flex justify-center">
                <InlineWidget
                    url="https://calendly.com/prestonosoro56" // update your Calendly link
                    styles={{ height: '600px', width: '100%' }}
                />
            </div>
        </div>
    );
};

export default BookNow;
