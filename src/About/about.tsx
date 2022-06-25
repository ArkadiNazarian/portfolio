export const About = () => {
    return (
        <div>
            <div className="tw-text-center ">
                <p className="tw-text-4xl tw-text-secondary">About Me</p>
                <p className="tw-text-sm tw-text-third">My introduction</p>
            </div>
            <div className="tw-mt-20 tw-text-xl tw-grid tw-grid-cols-6">
                <code className="tw-col-start-2 tw-col-span-4">
                    <span className="tw-text-code">const </span><span className="tw-text-name"> Arkadi </span><span className="tw-text-secondary"> = </span><span className="tw-text-curlybrackets"> &#123;</span>
                    <br />
                    <span className="tw-text-code"> pronouns </span><span className="tw-text-secondary"> : </span><span className="tw-text-property">"He"</span>  <span className="tw-text-code"> | </span> <span className="tw-text-property">"Him",</span>
                    <br />
                    <span className="tw-text-code"> age </span> <span className="tw-text-secondary"> : </span> <span className="tw-text-property">"19 years old",</span>
                    <br />
                    <span className="tw-text-code"> city </span> <span className="tw-text-secondary"> : </span> <span className="tw-text-property">"Tehran",</span>
                    <br />
                    <span className="tw-text-code"> religion </span> <span className="tw-text-secondary"> : </span> <span className="tw-text-property">"Christian",</span>
                    <br />
                    <span className="tw-text-code"> nationality </span> <span className="tw-text-secondary"> : </span> <span className="tw-text-property">[ "Iranian","Armenian" ],</span>
                    <br />
                    <span className="tw-text-code"> langueges </span> <span className="tw-text-secondary"> : </span> <span className="tw-text-property">[ "Armenian","English","Persian" ],</span>
                    <br />
                    <span className="tw-text-code"> code </span><span className="tw-text-secondary"> : </span> <span className="tw-text-curlybrackets"> [ </span><span className="tw-text-property">"Typescript",</span><span className="tw-text-property">"Javascript",</span><span className="tw-text-property">"React.js",</span><span className="tw-text-property">"Tailwind Css" ],</span>
                    <br />
                    <span className="tw-text-code"> askMeAbout </span> <span className="tw-text-secondary"> : </span> <span className="tw-text-curlybrackets">  [ </span> <span className="tw-text-curlybrackets">"web dev",</span><span className="tw-text-curlybrackets">"Frontend"</span><span className="tw-text-curlybrackets"> ],</span>
                    <br />
                    <span className="tw-text-code"> currentFocus </span> <span className="tw-text-secondary"> : </span> <span className="tw-text-curlybrackets">"Updating my knowledge",</span>
                    <br />
                    <span className="tw-text-curlybrackets">&#125;;</span>
                </code>
                <div className="tw-col-start-2 tw-mt-10 tw-flex tw-justify-between tw-text-center">
                    <div>
                        <span className="tw-text-secondary tw-text-2xl">01+</span><br />
                        <span className="tw-text-third tw-text-sm">Years <br />Experience</span>
                    </div>
                    <div>
                        <span className="tw-text-secondary tw-text-2xl">01</span><br />
                        <span className="tw-text-third tw-text-sm">Companies</span>
                    </div>
                </div>
            </div>
        </div>
    )
}