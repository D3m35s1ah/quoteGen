import React from 'react';

function QuoteField(quote, color){

        console.log(color);

        return(
                <div style={{color : color}} className="quote-field">
                    <div id="textarea">
                        {quote.quote.text}
                    </div>
                    <div id="author">
                        {quote.quote.author}
                    </div>
                </div>
        )
}

export default QuoteField;