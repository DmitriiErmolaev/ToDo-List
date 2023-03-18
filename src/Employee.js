import React from "react"

export default function Employee({surname,name, patronymic, salary}){
    return <div>
        <p>{surname}-{name}-{patronymic}-{salary}</p>
    </div>
}