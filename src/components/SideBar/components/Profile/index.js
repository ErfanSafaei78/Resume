//Hooks
import { useContext } from "react";
//Context
import { dataContext } from "../../../../context/data.context";
//images
import DownloadImg from "./images/download.svg";
import ShareImg from "./images/share.svg"
//style
import "./style/style.Profile.css"
//utils
import { capitalizeFirstLetter } from "./utils/capitalize-first-letter";

export function Profile() {
    const data = useContext(dataContext).content.sideBar.profile;

    const socialLinksTags = (socialLinks) => {
        const socialEnteries = Object.entries(socialLinks);
        const tags = [];
        for (const node of socialEnteries) {
            const [socialName, socialLink] = node;
            tags.push(socialLink ? <a href={socialLink} className="social-link"><i className={`fab fa-${socialName}`}></i></a> : <></>);
        }
        return tags;
    }
    const personalInformationTags = (personalInformation) => {
        const informationEnteries = Object.entries(personalInformation);
        const tags = [];
        for (const node of informationEnteries) {
            const [title, value] = node;
            switch (title) {
                case "phoneNumber": {
                    tags.push(value ? <p>Phone: <a href={`tel:${value}`}>{value}</a></p> : <></>)
                    break;
                }
                case "email": {
                    tags.push(value ? <p>Mail: <a href={`mailto:${value}`}>{value}</a></p> : <></>)
                    break;
                }
                case "website": {
                    tags.push(value ? <p>Website : <a href={`https://${value}`} target="blank">{value}</a></p> : <></>)
                    break;
                }
                default: {
                    tags.push(value ? <p>{`${capitalizeFirstLetter(title)}: ${value}`}</p> : <></>)
                }
            }
        }
        return tags;
    }
    return (
        <div className="profile">
            <div className="profile-img-wrapper">
                {data.profileImage ? <img src={data.profileImage} alt="profile" /> : <> </>}
            </div>
            <h1 className="profile-name">{data.name}</h1>
            <div className="text-center">
                <span className="badge badge-white badge-pill profile-designation">{data.designation}</span>
            </div>
            <nav className="social-links">
                {socialLinksTags(data.socialLinks).map((tag) => { return tag })}
            </nav>
            <div className="widget">
                <h5 className="widget-title">personal information</h5>
                <div className="widget-content">
                    {personalInformationTags(data.personalInformation).map((tag) => { return tag })}
                </div>
                {data.cvDownloadLink ? <a href={data.cvDownloadLink}><button className="btn btn-download-cv btn-primary rounded-pill"> <img src={DownloadImg} alt="download"
                    className="btn-img" />DOWNLOAD CV</button></a> : <></>}
                {data.shareLink ? <a href={data.shareLink}>
                    <button className="btn btn-white btn-share ml-auto mr-3 ml-md-0 mr-md-auto">
                        <img src={ShareImg} alt="share" className="btn-img" />
                        SHARE
                    </button> 
                </a> : <></> }
            </div>
        </div>
    )
}