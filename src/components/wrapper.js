import React from "react"

const withWrapper = Components => {

    return (
        <div class="parent">
            <div class="children">
                <Components />
            </div>
        </div>
    )

}

export default withWrapper