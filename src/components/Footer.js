import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <label className="help-btn" for="checkbox" title="Need Help?"><span className="help-btn__icon" title="Need Help?">?</span></label>
                <input className="footer__checkbox"  type="checkbox" id="checkbox" name="checkbox"></input>
                <div className="footer__help-text">
                    <p className="footer__help-text--text">
                        <ol className="footer__help-text--ol">
                            <li className="footer__help-text--li">
                                First Click the Record Button and speak
                            </li>
                            <li className="footer__help-text--li">
                                Then Click the Stop button to save your transcripted text
                            </li>
                            <li className="footer__help-text--li">
                                Then Click the Convert button to convert it to Braille!
                            </li>
                        </ol>
                    </p>
                </div>
                <p className="footer__text">Coded by <a className="footer__link" href="https://github.com/Redvanisation">Redvanisation</a> &copy; 2018</p>
            </div>
        );

    }
}

export default Footer;