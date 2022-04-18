import React from "react";
import { Select, Button, Slider, Radio } from "react95";

import original from "react95/dist/themes/original";
import brick from "react95/dist/themes/brick";
import rainyDay from "react95/dist/themes/rainyDay";
import tokyoDark from "react95/dist/themes/tokyoDark";
import rose from "react95/dist/themes/rose";
import plum from "react95/dist/themes/plum";

const icons = [
    { label: "fruits", value: ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"] },
    { label: "fruits2", value: ["🍌", "🍋", "🍍", "🥭", "🍈", "🍐"] },
    { label: "vegetables", value: ["🥔", "🥕", "🌽", "🥦", "🍆", "🍅"] },
    { label: "grains", value: ["🍞", "🥐", "🥖", "🥨", "🥯", "🧇"] },
    { label: "food", value: ["🍔", "🍕", "🌭", "🌮", "🥪", "🌯"] },
];

const themes = [
    { label: "original", value: original },
    { label: "brick", value: brick },
    { label: "rainyDay", value: rainyDay },
    { label: "tokyoDark", value: tokyoDark },
    { label: "rose", value: rose },
    { label: "plum", value: plum },
];

export const Settings = ({ setCurrentIcons, setTheme }) => {
    return (
        <>
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <p>Icons</p>
                <Select
                    defaultValue={1}
                    options={icons}
                    menuMaxHeight={160}
                    width={160}
                    onChange={(e) => setCurrentIcons(e.target.value)}
                    onOpen={(e) => console.log("open", e)}
                    onClose={(e) => console.log("close", e)}
                    onBlur={(e) => console.log("blur", e)}
                    onFocus={(e) => console.log("focus", e)}
                />
            </span>
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <p>Theme</p>
                <Select
                    defaultValue={1}
                    options={themes}
                    menuMaxHeight={160}
                    width={160}
                    onChange={(e) => setTheme(e.target.value)}
                    onOpen={(e) => console.log("open", e)}
                    onClose={(e) => console.log("close", e)}
                    onBlur={(e) => console.log("blur", e)}
                    onFocus={(e) => console.log("focus", e)}
                />
            </span>
        </>
    );
};
