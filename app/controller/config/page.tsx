"use client";

import { useState } from "react";

export default function Settings() {
    const [server, setServer] = useState("");
    const [token, setToken] = useState("");

    return (
        <>
            <div className={"font-[family-name:var(--font-jb-mono)]"}>
                <h1>Settings and Configuration</h1>
            </div>
            <div id={"config"}>
                <label>
                    Server URL:
                    <input
                        value={server}
                        onChange={(event) => {
                            setServer(event.target.value);
                        }}
                    />
                </label>
                <label>
                    Token:
                    <input
                        value={token}
                        className={"password"}
                        onChange={(event) => {
                            setToken(event.target.value);
                        }}
                    />
                </label>
                <button className={"btn"}>Test Connection and Save</button>
            </div>
        </>
    );
}
