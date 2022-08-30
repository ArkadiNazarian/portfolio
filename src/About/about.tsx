export const About = () => {
    return (
        <div className="tw-pt-20">
            <div className="tw-text-center ">
                <p className="tw-text-4xl tw-text-primary">About Me</p>
                <p className="tw-text-xl tw-text-secondary">My introduction</p>
            </div>
            <div className="tw-mt-20 tw-text-xl tw-grid tw-grid-cols-6">
                <code className="tw-col-start-2 tw-col-span-4">
                    <span className="tw-text-code">const </span><span className="tw-text-name"> Arkadi </span><span className="tw-text-primary"> = </span><span className="tw-text-curlybrackets"> &#123;</span>
                    <br />
                    <span className="tw-text-code"> pronouns </span><span className="tw-text-primary"> : </span><span className="tw-text-property">"He"</span>  <span className="tw-text-code"> | </span> <span className="tw-text-property">"Him",</span>
                    <br />
                    <span className="tw-text-code"> age </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">"19 years old",</span>
                    <br />
                    <span className="tw-text-code"> city </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">"Tehran",</span>
                    <br />
                    <span className="tw-text-code"> country </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">"Iran",</span>
                    <br />
                    <span className="tw-text-code"> nationality </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">[ "Iranian","Armenian" ],</span>
                    <br />
                    <span className="tw-text-code"> langueges </span> <span className="tw-text-primary"> : </span> <span className="tw-text-property">[ "Armenian","English","Persian" ],</span>
                    <br />
                    <span className="tw-text-code"> code </span><span className="tw-text-primary"> : </span> <span className="tw-text-curlybrackets"> [ </span><span className="tw-text-property">"TypeScript",</span><span className="tw-text-property">"React.js",</span><span className="tw-text-property">"Tailwind CSS" ],</span>
                    <br />
                    <span className="tw-text-code"> askMeAbout </span> <span className="tw-text-primary"> : </span> <span className="tw-text-curlybrackets">  [ </span> <span className="tw-text-curlybrackets">"Web Development",</span><span className="tw-text-curlybrackets">"Frontend"</span><span className="tw-text-curlybrackets"> ],</span>
                    <br />
                    <span className="tw-text-code"> currentFocus </span> <span className="tw-text-primary"> : </span> <span className="tw-text-curlybrackets">"Developing My Technical Skills",</span>
                    <br />
                    <span className="tw-text-curlybrackets">&#125;;</span>
                </code>
                <div className="tw-col-start-2 tw-mt-10 tw-flex tw-justify-between tw-text-center">
                    <div>
                        <span className="tw-text-primary tw-text-2xl">01+</span><br />
                        <span className="tw-text-secondary tw-text-sm">Years <br />Experience</span>
                    </div>
                    <div>
                        <span className="tw-text-primary tw-text-2xl">01</span><br />
                        <span className="tw-text-secondary tw-text-sm">Companies</span>
                    </div>
                    <div>
                        <a href="web development.pdf" download="web development.pdf">
                            <button>click</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}