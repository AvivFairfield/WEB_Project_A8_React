import React, { useState } from "react";
import "./mainMenu";
import "./mainMenu.css";

const Homepage = () => {
    const [sidebar, setSidebar] = useState(false); // State to track sidebar visibility

    // Function to open the sidebar
    const openSidebar = () => setSidebar(true);

    // Function to close the sidebar
    const closeSidebar = () => setSidebar(false);

    // useeffect to collect the workoutsplans

    return (
        <>
            <div
                className="absolute top-0 w-full h-full bg-black"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/Rc3rZQF/most-colors-modified-image.png)",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="bg-white">
                    <header className="absolute inset-x-0 top-0 z-50">
                        <nav
                            className="flex items-center justify-between p-6 lg:px-8"
                            aria-label="Global"
                        >
                            <div className="flex lg:flex-1">
                                {/* Center the logo */}
                                <div className="logo-container">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">
                                            SweatSquad
                                        </span>
                                        <img
                                            className="logo"
                                            src="white_logo.png"
                                            alt="Your Alt Text"
                                        />
                                    </a>
                                </div>
                            </div>
                        </nav>
                        <div
                            className="text-center py-1 text-white"
                            style={{
                                position: "absolute",
                                top: 140,
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >
                            {/* Adjust the value of top to move the text higher */}
                            <p id="welcome_msg" className="text-xl">
                                Hey there [name]! check out what's new
                            </p>
                        </div>
                    </header>
                </div>
                <div className="news-container">
                    <div className="news-content">
                        <p>
                            New classes and courses starting soon! Join us for a
                            healthier lifestyle.
                        </p>
                        <p>
                            For every new friend you bring in you are getting a
                            free lesson!.
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <div
                    className="sidebar"
                    style={{
                        display: sidebar ? "block" : "none",
                    }}
                >
                    <div>
                        <span
                            className="close-btn"
                            id="closeBtn"
                            onClick={closeSidebar}
                        >
                            ×
                        </span>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fas fa-utensils" />{" "}
                                    Recommended recipes
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-users" /> Friends list
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-medal" /> Leadbord
                                </a>
                            </li>
                            <li>
                                <a href="progression.html">
                                    <i className="fas fa-bars" /> Progression
                                </a>
                            </li>
                            <li>
                                <a href="account_settings.html">
                                    <i className="fas fa-cog" /> Account
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-question-circle" />{" "}
                                    About
                                </a>
                            </li>
                            <li style={{ marginTop: 280 }}>
                                <a
                                    href="index.html"
                                    style={{
                                        color: "#fff",
                                        textDecoration: "none",
                                        display: "block",
                                        padding: 0,
                                    }}
                                >
                                    {" "}
                                    <i className="fas fa-sign-out-alt" /> Sign
                                    out{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <button
                    className="toggle-sidebar"
                    id="openSidebarBtn"
                    style={{
                        position: "fixed",
                        zIndex: 50,
                        left: 20,
                        top: 20,
                        cursor: "pointer",
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        color: "#fff",
                        border: "none",
                        padding: "0px 5px",
                        fontSize: 20,
                        // display: "block",
                        display: sidebar ? "none" : "block",
                    }}
                    onClick={openSidebar}
                >
                    {/* <i className="fas fa-bars" /> */}
                    <p>toggle-sidebar</p>
                </button>
            </div>
            {/* Close the grid div */}
            {/* Register and History Buttons */}
            <div className="button-container center">
                <button
                    className="button"
                    onclick="window.location.href = 'training-selection.html'"
                >
                    Schedule a Class
                </button>
                <button
                    className="button"
                    onclick="window.location.href = 'history.html'"
                >
                    History
                </button>
            </div>
            {/* carosel of classes*/}
            <div className="carousel-container relative mx-auto p-5">
                <div id="carousel" className="overflow-hidden relative w-full">
                    <div
                        id="workoutPlans"
                        className="flex transition-transform duration-300 ease-in-out"
                    >
                        {/* [PLACEHOLDERWORKOUTS] */}
                        {/* Card 1 */}
                        <div
                            id="card-1"
                            className="card w-full md:w-1/3 p-6 flex-shrink-0"
                        >
                            <div className="bg-white rounded-lg shadow">
                                {/* <img src="icons\zumba.jpg" alt="Placeholder" class="rounded-t-lg w-full" /> */}
                                <img
                                    src="WORKOUTIMG"
                                    alt="Placeholder"
                                    className="rounded-t-lg w-full"
                                />
                                <div className="p-6">
                                    <h5 className="text-lg font-bold">
                                        TRAINING WORKOUT &amp; INSTRUCTOR
                                    </h5>
                                    <p className="text-sm">PLACE</p>
                                    <p className="text-sm">DATE</p>
                                    <p className="text-sm">DELETEME</p>
                                </div>
                            </div>
                        </div>

                        <div
                            id="card-1"
                            className="card w-full md:w-1/3 p-6 flex-shrink-0"
                        >
                            <div className="bg-white rounded-lg shadow">
                                {/* <img src="icons\zumba.jpg" alt="Placeholder" class="rounded-t-lg w-full" /> */}
                                <img
                                    src="WORKOUTIMG"
                                    alt="Placeholder"
                                    className="rounded-t-lg w-full"
                                />
                                <div className="p-6">
                                    <h5 className="text-lg font-bold">
                                        TRAINING WORKOUT &amp; INSTRUCTOR
                                    </h5>
                                    <p className="text-sm">PLACE</p>
                                    <p className="text-sm">DATE</p>
                                    <p className="text-sm">DELETEME</p>
                                </div>
                            </div>
                        </div>

                        <div
                            id="card-1"
                            className="card w-full md:w-1/3 p-6 flex-shrink-0"
                        >
                            <div className="bg-white rounded-lg shadow">
                                {/* <img src="icons\zumba.jpg" alt="Placeholder" class="rounded-t-lg w-full" /> */}
                                <img
                                    src="WORKOUTIMG"
                                    alt="Placeholder"
                                    className="rounded-t-lg w-full"
                                />
                                <div className="p-6">
                                    <h5 className="text-lg font-bold">
                                        TRAINING WORKOUT &amp; INSTRUCTOR
                                    </h5>
                                    <p className="text-sm">PLACE</p>
                                    <p className="text-sm">DATE</p>
                                    <p className="text-sm">DELETEME</p>
                                </div>
                            </div>
                        </div>

                        <div
                            id="card-1"
                            className="card w-full md:w-1/3 p-6 flex-shrink-0"
                        >
                            <div className="bg-white rounded-lg shadow">
                                {/* <img src="icons\zumba.jpg" alt="Placeholder" class="rounded-t-lg w-full" /> */}
                                <img
                                    src="WORKOUTIMG"
                                    alt="Placeholder"
                                    className="rounded-t-lg w-full"
                                />
                                <div className="p-6">
                                    <h5 className="text-lg font-bold">
                                        TRAINING WORKOUT &amp; INSTRUCTOR
                                    </h5>
                                    <p className="text-sm">PLACE</p>
                                    <p className="text-sm">DATE</p>
                                    <p className="text-sm">DELETEME</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Controls */}
                <button
                    id="prev"
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full"
                >
                    <i className="fas fa-chevron-left" />
                </button>
                <button
                    id="next"
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full"
                >
                    <i className="fas fa-chevron-right" />
                </button>
            </div>
        </>
    );
};

export default Homepage;
