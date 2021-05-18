import React, { useState } from 'react'
import Load from '../../components/Load/Load';
import Quote from '../../components/Quote/Quote';
import { getQuote } from '../../services/simpsonsApi';

const SimpsonsQuote = () => {
        const [quote, setQuote] = useState({character:'', image:'', quote:''});

        const handleClick = async () => {
            const quote = await getQuote();
            setQuote(quote);
        };
    
        return (
            <div>
                <Load onClick={handleClick}/>
                <Quote {...quote}/>
            </div>
        );
    };
    export default SimpsonsQuote
