import React from 'react';
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'God', text: 'I will be with you as I was with Moses' },
    { id: 'q2', author: 'Kam', text: 'Standing on The promises of God my King' },
    { id: 'q3', author: 'Kamshinen', text: 'Through eternal ages let His praises ring' },
    { id: 'q4', author: 'Deewan', text: 'I am thine Oh Lord, I have heard thy voice' },
    { id: 'q5', author: 'Joel', text: 'And it told thy love to me' },
    { id: 'q6', author: 'Joe', text: 'Nearer my God to Thee, nearer to Thee' },
    { id: 'q7', author: 'KamsD', text: 'Draw me nearer whenever I go astray' },
]

const AllQuotes = () => {
    return (
        <div>
            <QuoteList quotes={DUMMY_QUOTES} />
        </div>
    )
}

export default AllQuotes