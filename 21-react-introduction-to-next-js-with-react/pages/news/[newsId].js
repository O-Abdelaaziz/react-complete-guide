import { useRouter } from "next/router";
import { Fragment } from "react";

function DetailsPage() {
    const router = useRouter();
    const newsId = router.query.newsId
    console.log(newsId);
    return <Fragment>
        <h1>Details Page</h1>
        <p>{`You are in ${newsId}`}</p>
    </Fragment> 
}

export default DetailsPage;