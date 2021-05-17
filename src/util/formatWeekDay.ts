export const formatWeekDay = (day: number): string => {
    switch(day) {
        case 1: return 'Segunda-Feira'
        case 2: return 'Terça-Feira'
        case 3: return 'Quarta-Feira'
        case 4: return 'Quinta-Feira'
        case 5: return 'Sexta-Feira'
        default: return ''
    }
}