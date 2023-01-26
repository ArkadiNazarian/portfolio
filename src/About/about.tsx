export const About = () => {
    return (
        <div className="tw-pt-20">
            <div className="tw-text-center ">
                <p className="laptop:tw-text-4xl tablet:tw-text-3xl tw-text-primary">About Me</p>
                <p className="laptop:tw-text-xl tablet:tw-text-lg tw-text-secondary">My introduction</p>
            </div>
            <div className="tw-flex tw-flex-row tw-justify-center tw-mt-20 laptop:tw-text-xl tablet:tw-text-lg">
                <code>
                    <span className="tw-text-code">const </span><span className="tw-text-name"> Arkadi </span><span className="tw-text-primary"> = </span><span className="tw-text-curlybrackets"> &#123;</span>
                    <br />
                    <span className="tw-text-code"> pronouns </span><span className="tw-text-primary"> : </span><span className="tw-text-property">"He"</span>  <span className="tw-text-code"> | </span> <span className="tw-text-property">"Him",</span>
                    <br />
                    <span className="tw-text-code"> age </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">"20 years old",</span>
                    <br />
                    <span className="tw-text-code"> city </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">"Tehran",</span>
                    <br />
                    <span className="tw-text-code"> country </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">"Iran",</span>
                    <br />
                    <span className="tw-text-code"> nationality </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">[ "Iranian","Armenian" ],</span>
                    <br />
                    <span className="tw-text-code"> langueges </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">[ "Armenian","English","Persian" ],</span>
                    <br />
                    <span className="tw-text-code"> code </span><span className="tw-text-primary"> : </span> <span className="tw-text-curlybrackets"> [ </span><span className="tw-text-property">"TypeScript",</span><span className="tw-text-property">"React.js",</span><span className="tw-text-property">"Redux.js",</span><span className="tw-text-property">"Tailwind CSS" ],</span>
                    <br />
                    <span className="tw-text-code"> askMeAbout </span> <span className="tw-text-primary"> : </span> <span className="tw-text-curlybrackets">  [ </span> <span className="tw-text-curlybrackets">"Web Development",</span><span className="tw-text-curlybrackets">"Frontend"</span><span className="tw-text-curlybrackets"> ],</span>
                    <br />
                    <span className="tw-text-code"> currentFocus </span> <span className="tw-text-primary"> : </span> <span className="tw-text-curlybrackets">"Developing My Technical Skills"</span>
                    <br />
                    <span className="tw-text-curlybrackets">&#125;;</span>
                </code>
            </div>
            <div className="tw-mt-10 tw-flex tw-text-center laptop:tw-ml-20">
                <div>
                    <span className="tw-text-primary laptop:tw-text-2xl tablet:tw-text-xl">02+</span><br />
                    <span className="tw-text-secondary laptop:tw-text-sm tablet:tw-text-xs">Years <br />Experience</span>
                </div>
                <div>
                    <span className="tw-text-primary laptop:tw-text-2xl tablet:tw-text-xl">01</span><br />
                    <span className="tw-text-secondary laptop:tw-text-sm tablet:tw-text-xs">Companies</span>
                </div>
            </div>
        </div>
    )
}