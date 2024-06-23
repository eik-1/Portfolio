import React from "react"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { CopyButton } from "./magicui/CopyButton"
import styles from "./Copy.module.css"

function Copy() {
    return (
        <CopyButton
            buttonColor="#D8AE7E"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            className={styles.copyButton}
            initialText={
                <span className="flex items-center justify-center w-full">
                    Copy Email <ChevronRightIcon className="ml-1 h-4 w-4" />
                </span>
            }
            changeText={
                <span className="flex items-center justify-center w-full">
                    <CheckIcon className="mr-1 h-4 w-4" /> Copied
                </span>
            }
        />
    )
}

export default Copy
