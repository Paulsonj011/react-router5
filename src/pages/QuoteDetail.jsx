import React from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'God', text: 'I will be with you as I was with Moses' },
    { id: 'q2', author: 'Kam', text: 'Standing on The promises of God my King' },
    { id: 'q3', author: 'Kamshinen', text: 'Through eternal ages let His praises ring' },
    { id: 'q4', author: 'Deewan', text: 'I am thine Oh Lord, I have heard thy voice' },
    { id: 'q5', author: 'Joel', text: 'And it told thy love to me' },
    { id: 'q6', author: 'Joe', text: 'Nearer my God to Thee, nearer to Thee' },
    { id: 'q7', author: 'KamsD', text: 'Draw me nearer whenever I go astray' },
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
    const routeMatch = useRouteMatch();

    console.log(routeMatch);

    if (!quote) {
        return <p>No quote found</p>
    }
    return (
        <div>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`} exact> Load Comments</Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail