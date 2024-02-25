interface SessionTitleProps {
    title: string;
    subtitle: string;
}

const SessionTitle = (props: SessionTitleProps) => {
    return (
        <div>
            <div className={'flex items-center gap-4'}>
                <div className={'w-5 h-10 rounded bg-buttons'}/>
                <p className={'text-base font-semibold leading-tight text-buttons'}>{props.subtitle}</p>
            </div>
            <p className={'font-semibold font-primary text-4xl leading-snug mt-5'}>{props.title}</p>
        </div>
    );
};

export default SessionTitle;