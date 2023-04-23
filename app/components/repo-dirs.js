import Link from "next/link";
import {FaCodeBranch, FaEye, FaStar} from "react-icons/all";

const API_URL = `https://api.github.com/repos/bradtraversy/`;
const getRepoContents = async (name) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate a 3s delay
        const res = await fetch(`${API_URL}${name}/contents`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
};


const RepoDirs = async ({ name }) => {

    const repoContents = await getRepoContents(name);
    const dirs = repoContents.filter((item => item.type === 'dir'));

    return (
        <div className={``}>
            <h3>Directories</h3>
            <ul>
                {
                    dirs.map(dir => (
                        <li key={dir.path}>
                            <Link href={`/code/repositories/${name}/${dir.path}`} target={`_blank`}>
                                { dir.path }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );

};

export default RepoDirs;