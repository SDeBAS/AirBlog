import pc from "./pc.jpeg"

import "./Sidebar.css"

const Sidebar = (props) => {
    return <div className={`sidebar ${props.className}`}>
        <div className="sidebar__titleBox">
            <h2 className="sidebar__title">About me</h2>
        </div>

        <img src={pc} alt="" className="sidebar__image" />

        <p className="sidebar__paragraph">A Computer Science student with expertise in data analysis, web development and designing, adept at leveraging data-driven insights to inform business decisions. Proficient in frontend web development and utilizing data visualization tools to present complex information clearly and visually appealingly. Highly detail-oriented and have a solid ability to conceptualise and design user-friendly interfaces for optimal user experiences. </p>
    </div>;
}

export default Sidebar;