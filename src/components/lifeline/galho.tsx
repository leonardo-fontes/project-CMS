import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//para  adicionar icones basta componetizar a imagem e adicionar a tag icon
interface Props {
    title: string;
    location: string;
    description: string;
    img?: string;
    date: string;
}

function Galho({ title, location, description, date }: Props) {


    return (
        <VerticalTimelineElement
            contentStyle={{ background: 'var(--primary-color)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  var(--primary-color)' }}
            date={date}
            dateClassName="text-black"
            iconStyle={{ background: 'var(--primary-color', color: '#fff' }}
        >
            <div className="flex flex-col items-start justify-center">
                <h3 className="">{title}</h3>
                <h4 className="">{location}</h4>
                {/* <img className="place-self-center max-w-[10em]" src="/images/empresa.png" alt="" /> */}
                <p>
                    {description}
                </p>
            </div>

        </VerticalTimelineElement>
    )
}

export default Galho;