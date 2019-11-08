import React from "react"

const BlockUi = ({ blocking, message, color }) => {

    const styles = {
        color: color,
        width: "100vw",
        minHeight: "100vh",
        height: "100%",
        fontSize: "1.5em",
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.7)",
        position: "absolute",
        top: 0,
        left: 0
    }

    const loader = (
        <div className="loader" style={{ padding: "40vh 0" }}>
            <div className="title">{message}</div>
            <input type="hidden" autoFocus={true} id="focus" />
            <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={{ background: "none" }}>
                    <g transform="translate(25 50)">
                        <circle cx="0" cy="0" r="9" fill="#dc2127" transform="scale(0.999985 0.999985)">
                            <animateTransform attributeName="transform" type="scale" begin="-0.5s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.5s" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </g>
                    <g transform="translate(50 50)">
                        <circle cx="0" cy="0" r="9" fill="#dc2127" transform="scale(0.733773 0.733773)">
                            <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.5s" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </g>
                    <g transform="translate(75 50)">
                        <circle cx="0" cy="0" r="9" fill="#dc2127" transform="scale(0.271502 0.271502)">
                            <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1.5s" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </g>
                </svg>
            </div>
        </div>
    )

    return (blocking)
        ? <div className={blocking ? "isBlocking" : "notBlocking"} style={styles}>{loader}</div>
        : null

}

export default BlockUi