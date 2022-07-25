import {NextPage} from "next";

interface Props {
    statusCode: number;
}

const Error: NextPage<Props> = ({statusCode}) => (
    <p>
        {statusCode
            ? `An error ${statusCode} occurred on server`
            : `An error occurred on client`}
    </p>
);

Error.getInitialProps = async ({res, err}) => {
    const statusCode = res ? res.statusCode : err?.statusCode ? err.statusCode : 404
    return {statusCode}
}

export default Error