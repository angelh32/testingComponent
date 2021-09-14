import * as React from "react"
import { useEffect, useState } from 'react';
import { removeHtmlTag } from "../tools/helpers";
import { Show } from "../types/types"
// .replace(new RegExp(/\<[\/bp]\>/, 'g'),"")
interface ShowDetailsPageProps {
    show: Show
}

const ShowDetailsPage: React.FC<ShowDetailsPageProps> = (props) => {
    return (
        <h1>ShowDetails</h1>
    )
}

export default ShowDetailsPage
