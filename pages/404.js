const NoMatch = () => {
    return (
        <article>
            <h2 className="error">
                Error 404!
            </h2>
            <p>An error has occurred.</p>
            <p>The page you are looking for does not exist!</p>
            <style jsx>{`
                p {
                    font-size: 120%;
                }

                .error {
                    color: #dc3545;
                }
            `}</style>
        </article>
    );
};

export default NoMatch;
