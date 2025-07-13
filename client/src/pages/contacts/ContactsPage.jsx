// import React from 'react';
import './ContactsPage.css';

export function ContactsPage()  {
  return (
    <div className='contact-container'>
        <h2> Contact us</h2>
        <p>Have a question or need assistance? Feel free to contactwith us.</p>

        <div className='contact-info'>
            <h3>Contact information</h3>
            <ul>
                <li><strong>Phone:</strong>+880 12345678910, +880 18765432111</li>
                <li><strong>E-mail:</strong>tamanna11@gmail.com</li>
                <li><strong>Address:</strong>123,Main street,Dhaka</li>
            </ul>
        </div>

        <div className='map-container'>
            <h3>Location</h3>
            <iframe 
            title='Google Maps'
            src=" https://maps.google.com/?cid=5895266577667576833&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
            width="100%"
            height="400"
            allowFullScreen
            ></iframe>
        </div>
    </div>
  );
}
