import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/all";

const repos_URL = `https://api.github.com/users/bradtraversy/repos`;

const fetchRepositories = async () => {
    try {
        const res = await fetch(repos_URL, { next: { revalidate: 60 } }); // { next: { revalidate: 60 } } will cache for 60s
        return await res.json();
    } catch (e) {
        console.log(e);
    }
};

const RepositoriesPage = async () => {

    const repos = await fetchRepositories();
    //console.log(repos);

    return (
        <div className={`repos-container`}>
            {
                <ul className={`repo-list`}>
                    {
                        repos.map(repo => (
                           <li key={repo.id}>
                               <Link href={`/code/repositories/${repo.name}`} target={`_blank`}>
                                   <h3>{repo.name}</h3>
                                   <p>{repo.description}</p>
                                   <div className={`repo-details`}>
                                       <span> <FaStar /> { repo.stargazers_count } </span>
                                       <span> <FaCodeBranch /> { repo.forks_count } </span>
                                       <span> <FaEye /> { repo.watchers_count } </span>
                                   </div>
                               </Link>
                           </li>
                        ))
                    }
                </ul>
            }

        </div>
    );

};

export default RepositoriesPage;