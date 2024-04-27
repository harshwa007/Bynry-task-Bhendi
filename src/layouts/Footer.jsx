
import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer()
{
    return(
        <section id="footer">
            <p className='d-flex justify-content-center  align-items-center '>
                <Link to="/" style={{textDecoration: "none", color:'blue'}}>
                    © Bhendi 2024. Developed by Harshvardhan
                </Link>
            </p>
        </section>
    )
}