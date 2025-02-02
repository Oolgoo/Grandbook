import React from 'react';



function CardSection(props) {
    return (
        <div>
            <div>
                <label htmlFor="card-element">Credit or debit card</label>

                <div>
                    <fieldset style={{ border: 'none' }}>
                        <div className="form-row">
                            <div id="card-element" style={{ width: '100%' }}>
                                df
                            </div>
                            <br />
                            <div className="order-button-wrapper">
                                <button onClick={props.submitOrder}>
                                    Confirm order
                                </button>
                            </div>
                            {props.stripeError ? (
                                <div>{props.stripeError.toString()}</div>
                            ) : null}
                            <div id="card-errors" role="alert" />
                        </div>
                    </fieldset>
                </div>
            </div>
            <style jsx>
                {`
					.order-button-wrapper {
						display: flex;
						width: 100%;
						align-items: flex-end;
						justify-content: flex-end;
					}
				`}
            </style>
        </div>
    );
}
export default CardSection;