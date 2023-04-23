import { Suspense } from "react";
import Repo from "@/app/components/repo";
import RepoDirs from "@/app/components/repo-dirs";

const RepoNamePage = ({ params }) => {

    const { repoName } = params;

    return (
        <div className={`card`}>
            <Suspense fallback={<div>Loading repo...</div>}>
                <Repo name={ repoName } />
            </Suspense>
            <Suspense fallback={<div>Loading repos...</div>}>
                <RepoDirs name={ repoName } />
            </Suspense>
        </div>
    );

};

export default RepoNamePage;