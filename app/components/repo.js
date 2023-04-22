
const API_URL = `https://api.github.com/repos/bradtraversy/`;
const getRepo = async (name) => {
    try {
        const res = await fetch(`${API_URL}${name}`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
};

const Repo = async ({ name }) => {

    const repo = await getRepo(name)

    return (
        <div className={`header`}>
        </div>
    );

};

export default Repo;