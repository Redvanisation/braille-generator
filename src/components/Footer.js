import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <label className="help-btn" htmlFor="checkbox" title="Need Help?"><span className="help-btn__icon" title="Need Help?">?</span></label>
                <input className="footer__checkbox"  type="checkbox" id="checkbox" name="checkbox"></input>
                <div className="footer__help-text">
                    <div className="footer__help-text--text">
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
                            <li className="footer__help-text--li">
                                Please click <a href="https://en.wikipedia.org/wiki/Braille" className="footer__link2" target="_blank" rel="noopener noreferrer">here</a> for if you do not know what braille is!
                            </li>
                        </ol>
                    </div>
                </div>
                <p className="footer__text">Coded by <a className="footer__link" href="https://github.com/Redvanisation" target="_blank" rel="noopener noreferrer">Redvanisation</a> &copy; 2018</p>
            </div>
        );

    }
}

export default Footer;