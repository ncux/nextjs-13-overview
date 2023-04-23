import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/all";

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

    const repo = await getRepo(name);
    console.log(repo);

    return (
        <div className={``}>
            <h2>{ repo?.name }</h2>
            <p>{ repo.description }</p>
            <div className={`card-stats`}>
                  <div className={`card-stat`}>
                      <FaStar />
                      <span> { repo.stargazers_count } </span>
                  </div>
                <div className={`card-stat`}>
                    <FaCodeBranch />
                    <span>  { repo.forks_count } </span>
                </div>
                <div className={`card-stat`}>
                    <FaEye />
                    <span>  { repo.watchers_count } </span>
                </div>
            </div>
        </div>
    );

};

export default Repo;