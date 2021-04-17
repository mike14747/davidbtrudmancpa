const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <p>
                    &copy; 2015 davidbtrudmancpa.com
                </p>
            </div>

            <style jsx>{`
                .footer {
                    width: 100%;
                    text-align: center;
                    border-top: 2px #70c1b3 solid;
                    background-color: #ffffff;
                    padding: 1rem;
                    color: #666666;
                    margin: 1rem auto 0 auto;
                    line-height: 1;
                }

                .footer > p {
                    margin-bottom: 1rem;
                }

                .built-text {
                    font-size: 0.80rem; 
                    color: coral;               }
            `}</style>
        </div>
    );
};

export default Footer;
