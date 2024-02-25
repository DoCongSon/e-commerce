import { useMatches } from "react-router-dom";

const Breadcrumbs = () => {
    const matches = useMatches();
    // @ts-ignore
    const crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle?.crumb(match.data));

    console.log(matches)

    return (
        <div className={'flex'}>
            {crumbs.map((crumb, index) => {
                if(index === crumbs.length - 1) return (
                    <p className={'text-sm text-black'} key={index}>{crumb}</p>)
                return (<p className={'text-sm text-black opacity-50'} key={index}>
                        {crumb}<span className={'mx-3'}>/</span>
                    </p>
                )
            })}
        </div>
    );
};

export default Breadcrumbs;