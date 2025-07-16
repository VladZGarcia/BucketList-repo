import { Dream } from "../models/Dream";

export const themes = ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"];
export let name = "NAMN";
export const dreams: Dream[] = [{
    id: 1,
    dream: "Lära mig HTML/CSS",
    theme: "teknikdrömmar",
    checked: true
},
{
    id: 2,
    dream: "Lära mig TypeScript",
    theme: "teknikdrömmar",
    checked: false
},
{
    id: 3,
    dream: "En dröm som tar flera rader lorem ipsum",
    theme: "vardagsdrömmar",
    checked: false
}
]