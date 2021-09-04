const Footer = () => {
    return (
        <footer className="container footer">
            &copy; 2013 davidbtrudmancpa.com

            <style jsx>{`
                .footer {
                    text-align: center;
                    border-top: 2px rgba(0, 128, 0, 0.5) solid;
                    background-color: #ffffff;
                    padding: 1rem;
                    color: #666666;
                    margin-top: 1rem;
                    margin-bottom: 0;
                    line-height: 1;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
