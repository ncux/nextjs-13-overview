const RepoNamePage = ({ params }) => {

    const { repoName } = params;

    return (
        <div className={`card`}>
            <h2>{ repoName }</h2>
            <p>details</p>
        </div>
    );

};

export default RepoNamePage;