import Link from "next/link";

const HomePage = () => {

    return (
        <>
            <h2>Pussy</h2>
            <ul>
                <li><Link href={`/`}>Home</Link></li>
                <li><Link href={`/about`}>About</Link></li>
                <li><Link href={`/about/team`}>Team</Link></li>
            </ul>
        </>
    )

};

export default HomePage;