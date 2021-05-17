export const formatShit = (shift: string): string => {
    switch(shift) {
        case "M": return "Manhã"
        case "V": return "Tarde"
        case "N": return "Noturno"
        default: return ''
    }
}